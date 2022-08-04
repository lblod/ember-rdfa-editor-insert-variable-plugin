import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  plugins = [{
    name:'insert-variable',
    options: {
      administrativeUnitUuid: 'cec59e5e872a9084e93becf3026bfcc2f25926ea76372711b7a745875f3b7949'
    }
  }];

  @action
  rdfaEditorInit(controller) {
    const presetContent = ``;
    controller.setHtmlContent(presetContent);
    const editorDone = new CustomEvent('editor-done');
    window.dispatchEvent(editorDone);
  }
}
