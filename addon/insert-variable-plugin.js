/**
 * Entry point for InsertVariable
 *
 * @module editor-insert-variable-plugin
 * @class InsertVariablePlugin
 * @constructor
 * @extends EmberService
 */
export default class InsertVariablePlugin {
  get name() {
    return 'insert-variable-plugin';
  }

  initialize(transaction, controller, options) {
    transaction.registerWidget(
      {
        componentName: 'insert-variable-card',
        identifier: 'insert-variable-plugin/card',
        desiredLocation: 'sidebar',
        widgetArgs: {
          options: options,
        },
      },
      controller
    );
  }
}
