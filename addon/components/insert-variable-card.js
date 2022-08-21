import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import { task } from 'ember-concurrency';
import { v4 as uuidv4 } from 'uuid';

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

  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.endpoint = config.insertCodelistPlugin.endpoint;
    const { administrativeUnitUuid } = this.args.widgetArgs.options
    this.args.controller.onEvent('selectionChanged', this.selectionChanged);
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
    this.args.controller.executeCommand(
      'insert-html',
      htmlToInsert,
      this.args.controller.selection.lastRange,
    );
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

  @action
  selectionChanged() {
    this.showCard = false;
    const limitedDatastore = this.args.controller.datastore.limitToRange(
      this.args.controller.selection.lastRange,
      'rangeIsInside'
    );
    const mapping = limitedDatastore
      .match(null, 'a', 'ext:Mapping')
      .asQuads()
      .next().value;
    if (mapping) {
      this.showCard = false;
    } else {
      this.showCard = true
    }
  }
}
