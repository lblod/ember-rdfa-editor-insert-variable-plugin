import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import { task } from 'ember-concurrency';
import { v4 as uuidv4 } from 'uuid';
import fetchCodeLists from '../utils/fetchData';

export default class EditorPluginsInsertCodelistCardComponent extends Component {
  @tracked variableTypes = [
    'text',
    'number',
    'date',
    'location',
    'codelist'
  ];
  @tracked selectedVariableType;
  @tracked showCard = true;
  @tracked isCodelist = false
  @tracked selectedCodelist;

  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.endpoint = config.insertCodelistPlugin.endpoint;
    const { administrativeUnitUuid } = this.args.widgetArgs.options
    this.args.controller.addTransactionStepListener(this.transactionUpdate.bind(this));
    this.fetchCodeList.perform(administrativeUnitUuid)
  }

  @action
  insert() {
    const uri = `http://data.lblod.info/mappings/${uuidv4()}`;
    const htmlToInsert = `
      <span resource="${uri}" typeof="ext:Mapping">
        <span property="dct:type" content="${this.selectedVariableType}"></span>
        <span property="ext:content">\${${this.selectedVariableType}}</span>
      </span>
    `
    this.args.controller.perform((tr) => {
      tr.commands.insertHtml({
        htmlString: htmlToInsert
      })
    })
    this.selectedVariableType = undefined;
  }

  @action
  updateSelectedVariable(variableType) {
    this.selectedVariableType = variableType;
    if(variableType === 'codelist') {
      this.isCodelist = true
    } else {
      this.isCodelist = false;
    }
  }

  @action
  updateCodelist(codelist) {
    this.selectedCodelist = codelist;
  }

  @task
  *fetchCodeList(administrativeUnitUuid) {
    const codelists = yield fetchCodeLists(
      this.endpoint,
      administrativeUnitUuid
    );
    this.codelists = codelists
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
