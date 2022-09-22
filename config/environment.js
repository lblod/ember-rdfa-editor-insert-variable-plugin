'use strict';

module.exports = function (/* environment, appConfig */) {
  return {
    insertVariablePlugin: {
      endpoint: 'https://dev.roadsigns.lblod.info/sparql',
    },
  };
};
