import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import { task } from 'ember-concurrency';
import { v4 as uuidv4 } from 'uuid';
import fetchCodeLists from '../utils/fetchData';
import { INVISIBLE_SPACE } from '@lblod/ember-rdfa-editor/model/util/constants';
export default class EditorPluginsInsertCodelistCardComponent extends Component {
  @tracked variableTypes = ['text', 'number', 'date', 'location', 'codelist'];
  @tracked selectedVariableType;
  @tracked showCard = true;
  @tracked isCodelist = false;
  @tracked selectedCodelist;

  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.endpoint = config.insertVariablePlugin.endpoint;
    const { publisher } = this.args.widgetArgs.options || {};
    this.args.controller.onEvent('selectionChanged', this.selectionChanged);
    this.fetchCodeList.perform(publisher);
  }

  @action
  insert() {
    const uri = `http://data.lblod.info/mappings/${uuidv4()}`;
    let contentSpan;
    if (
      this.selectedVariableType === 'location' ||
      this.selectedVariableType === 'codelist'
    ) {
      contentSpan = `<span property="ext:content">\${${this.selectedVariableType}}</span>`;
    } else if (this.selectedVariableType === 'date') {
      contentSpan = `<span property="ext:content" ${
        this.selectedVariableType === 'date' ? 'datatype="xsd:date"' : ''
      }>\${${this.selectedVariableType}}</span>`;
    } else {
      contentSpan = `<span class="mark-highlight-manual">\${${this.selectedVariableType}}</span>`;
    }
    const htmlToInsert = `
      <span resource="${uri}" typeof="ext:Mapping">
        <span property="dct:source" resource="${this.endpoint}"></span>
        ${
          this.selectedCodelist
            ? ` <span property="ext:codelist" content="${this.selectedCodelist.uri}"></span>`
            : ''
        }
        <span property="dct:type" content="${this.selectedVariableType}"></span>
        ${contentSpan}
      </span>
    `;
    this.args.controller.executeCommand(
      'insert-html',
      htmlToInsert,
      this.args.controller.selection.lastRange
    );
    this.args.controller.executeCommand(
      'insert-text',
      INVISIBLE_SPACE,
      this.args.controller.selection.lastRange
    );
    this.selectedVariableType = undefined;
    this.selectedCodelist = undefined;
    this.isCodelist = false;
  }

  @action
  updateSelectedVariable(variableType) {
    this.selectedVariableType = variableType;
    if (variableType === 'codelist') {
      this.isCodelist = true;
    } else {
      this.isCodelist = false;
    }
  }

  @action
  updateCodelist(codelist) {
    this.selectedCodelist = codelist;
  }

  @task
  *fetchCodeList(publisher) {
    const codelists = yield fetchCodeLists(this.endpoint, publisher);
    this.codelists = codelists;
  }

  modifiesSelection(steps){
    return steps.some((step) => step.type === 'selection-step' || step.type === 'operation-step')
  }

  @action
  transactionUpdate(transaction, steps) {
    if(this.modifiesSelection(steps)){
      this.showCard = false;
      const limitedDatastore = transaction.getCurrentDataStore().limitToRange(
        transaction.currentSelection.lastRange,
        'rangeIsInside'
      );
      const mapping = limitedDatastore
        .match(null, 'a', 'ext:Mapping')
        .asQuads()
        .next().value;
      console.log(mapping);
      if (mapping) {
        this.showCard = false;
      } else {
        this.showCard = true
      }
    }
  }
}
