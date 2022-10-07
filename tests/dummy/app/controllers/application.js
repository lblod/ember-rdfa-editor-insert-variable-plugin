import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  plugins = [
    {
      name: 'insert-variable',
      options: {
        publisher:
          'http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b',
      },
    },
  ];

  @action
  rdfaEditorInit(controller) {
    const presetContent = `
      <div prefix="ext: http://mu.semte.ch/vocabularies/ext/ ">
      click here
      </div>
    `;
    controller.setHtmlContent(presetContent);
    const editorDone = new CustomEvent('editor-done');
    window.dispatchEvent(editorDone);
  }
}
