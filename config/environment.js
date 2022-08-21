'use strict';

module.exports = function (/* environment, appConfig */) {
  return {
    insertCodelistPlugin: {
      endpoint: 'https://dev.roadsigns.lblod.info/sparql',
    }
  };
};
