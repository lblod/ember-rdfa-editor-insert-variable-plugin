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
    'location'
  ];
  @tracked selectedVariableType;
  @tracked showCard = true;

  constructor() {
    super(...arguments);
    this.args.controller.onEvent('selectionChanged', this.selectionChanged);
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
  updateSelectedVariable(variableTyoe) {
    this.selectedVariableType = variableTyoe;
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
