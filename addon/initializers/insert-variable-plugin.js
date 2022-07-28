import InsertVariablePlugin from '../insert-variable-plugin';

function pluginFactory(plugin) {
  return {
    create: (initializers) => {
      const pluginInstance = new plugin();
      Object.assign(pluginInstance, initializers);
      return pluginInstance;
    },
  };
}

export function initialize(application) {
  application.register(
    'plugin:insert-variable',
    pluginFactory(InsertVariablePlugin),
    { singleton: false }
  );
}

export default {
  initialize,
};
