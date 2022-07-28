import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import { task } from 'ember-concurrency';
import { v4 as uuidv4 } from 'uuid';

import fetchCodeLists from '../utils/fetchData';

export default class EditorPluginsInsertCodelistCardComponent extends Component {
  @tracked codelists = [];
  @tracked selectedCodelist;
  @tracked showCard = true;

  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.endpoint = config.insertCodelistPlugin.endpoint;
    this.fetchCodeList.perform()
  }

  @action
  insert() {
    const uri = `http://data.lblod.info/mappings/${uuidv4()}`;
    const htmlToInsert = `
      <span resource="${uri}" typeof="ext:Mapping">
        <span property="dct:type" content="codelist"></span>
        <span property="ext:codelist" content="${this.selectedCodelist.uri}"></span>
        <span property="ext:content">\${${this.selectedCodelist.label}}</span>
      </span>
    `
    this.args.controller.executeCommand(
      'insert-html',
      htmlToInsert,
      this.args.controller.selection.lastRange,
    );
  }

  @action
  updateCodelist(codelist) {
    this.selectedCodelist = codelist;
  }

  @task
  *fetchCodeList(codelistUri, isLocation) {
    const codelists = yield fetchCodeLists(
      this.endpoint,
      codelistUri
    );
    console.log(codelists)
    this.codelists = codelists
  }
}
