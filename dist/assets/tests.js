'use strict';

define("dummy/tests/helpers/ember-power-select", ["exports", "@ember/debug", "ember-power-select/test-support/helpers"], function (_exports, _debug, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.clickTrigger = void 0;
  _exports.default = deprecatedRegisterHelpers;
  _exports.typeInSearch = _exports.triggerKeydown = _exports.touchTrigger = _exports.selectChoose = _exports.nativeTouch = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-power-select/test-support/helpers",0,"ember-power-select/test-support/helpers"eaimeta@70e063a35619d71f

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && (0, _debug.deprecate)(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...arguments);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && (0, _debug.deprecate)("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("dummy/tests/integration/components/editor-plugins/template-variable-card-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | editor-plugins/insert-codelist-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <EditorPlugins::InsertCodelistCard />
      */
      {
        "id": "6tYtLF2N",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"editor-plugins/insert-codelist-card\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <EditorPlugins::InsertCodelistCard>
              template block text
            </EditorPlugins::InsertCodelistCard>
          
      */
      {
        "id": "FGv9eVci",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"editor-plugins/insert-codelist-card\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/insert-variable-card-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | insert-variable-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <InsertVariableCard />
      */
      {
        "id": "sSEfYUCB",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"insert-variable-card\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <InsertVariableCard>
              template block text
            </InsertVariableCard>
          
      */
      {
        "id": "ve3DqRkc",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"insert-variable-card\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/lint/dependencies.lint-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  QUnit.module('DependencyLint');
  QUnit.test('@lblod/ember-rdfa-editor-insert-variable-plugin', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @lblod/ember-rdfa-editor-insert-variable-plugin');
  });
  QUnit.test('@glimmer/component', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @glimmer/component');
  });
  QUnit.test('ember-cli-typescript', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of ember-cli-typescript to satisfy "*"');
  });
  QUnit.test('ember-cli-babel', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of ember-cli-babel to satisfy "*"');
  });
  QUnit.test('ember-compatibility-helpers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of ember-compatibility-helpers to satisfy "*"');
  });
  QUnit.test('@glimmer/tracking', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @glimmer/tracking');
  });
  QUnit.test('ember-auto-import', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of ember-auto-import to satisfy "*"');
  });
  QUnit.test('@embroider/macros', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of @embroider/macros to satisfy "*"');
  });
  QUnit.test('ember-cli-htmlbars', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of ember-cli-htmlbars to satisfy "*"');
  });
  QUnit.test('ember-cli-inject-live-reload', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-inject-live-reload');
  });
  QUnit.test('@appuniversum/ember-appuniversum', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @appuniversum/ember-appuniversum');
  });
  QUnit.test('@zestia/ember-auto-focus', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @zestia/ember-auto-focus');
  });
  QUnit.test('ember-modifier', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-modifier');
  });
  QUnit.test('ember-test-selectors', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-test-selectors');
  });
  QUnit.test('ember-data-table', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-data-table');
  });
  QUnit.test('ember-composable-helpers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-composable-helpers');
  });
  QUnit.test('ember-math-helpers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-math-helpers');
  });
  QUnit.test('ember-truth-helpers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-truth-helpers');
  });
  QUnit.test('ember-file-upload', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-file-upload');
  });
  QUnit.test('ember-focus-trap', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-focus-trap');
  });
  QUnit.test('ember-inputmask5', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-inputmask5');
  });
  QUnit.test('@ember/render-modifiers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember/render-modifiers');
  });
  QUnit.test('ember-modifier-manager-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-modifier-manager-polyfill');
  });
  QUnit.test('ember-named-blocks-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-named-blocks-polyfill');
  });
  QUnit.test('tracked-toolbox', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of tracked-toolbox');
  });
  QUnit.test('ember-cache-primitive-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cache-primitive-polyfill');
  });
  QUnit.test('@ember/optional-features', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember/optional-features');
  });
  QUnit.test('@ember/test-helpers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember/test-helpers');
  });
  QUnit.test('@ember/test-waiters', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of @ember/test-waiters to satisfy ">=1.2.0"');
  });
  QUnit.test('ember-destroyable-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-destroyable-polyfill');
  });
  QUnit.test('@lblod/ember-rdfa-editor', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @lblod/ember-rdfa-editor');
  });
  QUnit.test('ember-concurrency', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-concurrency');
  });
  QUnit.test('ember-concurrency-ts', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-concurrency-ts');
  });
  QUnit.test('ember-decorators', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-decorators');
  });
  QUnit.test('@ember-decorators/component', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-decorators/component');
  });
  QUnit.test('@ember-decorators/utils', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-decorators/utils');
  });
  QUnit.test('@ember-decorators/object', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-decorators/object');
  });
  QUnit.test('ember-feature-flags', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-feature-flags');
  });
  QUnit.test('ember-get-config', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-get-config');
  });
  QUnit.test('ember-intl', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-intl');
  });
  QUnit.test('ember-maybe-import-regenerator', function (assert) {
    assert.expect(1);
    assert.ok(false, 'Expected only one version of ember-maybe-import-regenerator, but found\n@lblod/ember-rdfa-editor-insert-variable-plugin\n├── ember-maybe-import-regenerator@0.1.6\n└─┬ @lblod/ember-rdfa-editor\n  └── ember-maybe-import-regenerator@1.0.0\n');
  });
  QUnit.test('tracked-built-ins', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of tracked-built-ins');
  });
  QUnit.test('ember-tracked-storage-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-tracked-storage-polyfill');
  });
  QUnit.test('tracked-maps-and-sets', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of tracked-maps-and-sets');
  });
  QUnit.test('ember-cli-dependency-checker', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-dependency-checker');
  });
  QUnit.test('ember-cli-dependency-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-dependency-lint');
  });
  QUnit.test('ember-cli-sass', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected all versions of ember-cli-sass to satisfy "*"');
  });
  QUnit.test('ember-cli-autoprefixer', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-autoprefixer');
  });
  QUnit.test('broccoli-asset-rev', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of broccoli-asset-rev');
  });
  QUnit.test('ember-cli-terser', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-terser');
  });
  QUnit.test('ember-cli-sri', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-sri');
  });
  QUnit.test('ember-cli-update', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-update');
  });
  QUnit.test('ember-concurrency-decorators', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-concurrency-decorators');
  });
  QUnit.test('ember-data', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-data');
  });
  QUnit.test('@ember-data/adapter', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/adapter');
  });
  QUnit.test('@ember/string', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember/string');
  });
  QUnit.test('@ember-data/debug', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/debug');
  });
  QUnit.test('@ember-data/model', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/model');
  });
  QUnit.test('@ember-data/canary-features', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/canary-features');
  });
  QUnit.test('ember-cached-decorator-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cached-decorator-polyfill');
  });
  QUnit.test('@ember-data/private-build-infra', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/private-build-infra');
  });
  QUnit.test('@ember-data/record-data', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/record-data');
  });
  QUnit.test('@ember-data/serializer', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/serializer');
  });
  QUnit.test('@ember-data/store', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of @ember-data/store');
  });
  QUnit.test('ember-inflector', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-inflector');
  });
  QUnit.test('ember-disable-prototype-extensions', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-disable-prototype-extensions');
  });
  QUnit.test('ember-export-application-global', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-export-application-global');
  });
  QUnit.test('ember-load-initializers', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-load-initializers');
  });
  QUnit.test('ember-page-title', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-page-title');
  });
  QUnit.test('ember-power-select', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-power-select');
  });
  QUnit.test('ember-assign-helper', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-assign-helper');
  });
  QUnit.test('ember-basic-dropdown', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-basic-dropdown');
  });
  QUnit.test('@embroider/util', function (assert) {
    assert.expect(1);
    assert.ok(false, 'Expected only one version of @embroider/util, but found\n@lblod/ember-rdfa-editor-insert-variable-plugin\n└─┬ ember-power-select\n  └─┬ ember-basic-dropdown\n    ├── @embroider/util@0.47.2\n    └─┬ ember-element-helper\n      └── @embroider/util@0.41.0\n');
  });
  QUnit.test('ember-element-helper', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-element-helper');
  });
  QUnit.test('ember-maybe-in-element', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-maybe-in-element');
  });
  QUnit.test('ember-in-element-polyfill', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-in-element-polyfill');
  });
  QUnit.test('ember-style-modifier', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-style-modifier');
  });
  QUnit.test('ember-text-measurer', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-text-measurer');
  });
  QUnit.test('ember-resolver', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-resolver');
  });
  QUnit.test('ember-source', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-source');
  });
  QUnit.test('ember-try', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-try');
  });
  QUnit.test('loader.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of loader.js');
  });
  QUnit.test('ember-qunit', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-qunit');
  });
  QUnit.test('ember-cli-test-loader', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of ember-cli-test-loader');
  });
  QUnit.test('qunit-dom', function (assert) {
    assert.expect(1);
    assert.ok(true, 'Expected only one version of qunit-dom');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"dummy/app",0,"dummy/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
