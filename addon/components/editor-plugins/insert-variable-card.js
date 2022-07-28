import Component from '@glimmer/component';
import { action } from '@ember/object';
import { v4 as uuidv4 } from 'uuid';


export default class InsertVariableCard extends Component {

  @action
  insertVariable() {
    const uri = `http://data.lblod.info/mappings/${uuidv4()}`;
    const htmlToInsert = `
      <span resource="${uri}" typeof="ext:Mapping">
        <span property="ext:content">\${variable}</span>
      </span>
    `
    this.args.controller.executeCommand(
      'insert-html',
      htmlToInsert,
      this.args.controller.selection.lastRange,
    );
  }
}
