# ember-rdfa-editor-insert-variable-plugin
[RDFa editor](https://github.com/lblod/ember-rdfa-editor) plugin to insert a variable into a template.

## Configuration
The plugin needs an endpoint for the codelists, this endpoint will also be coded into the codelist insertion so make sure it's reachable by the aplication that will modify this codelists. The codelist enpoint needs to be present in the `config/environment.js` like this:

```
module.exports = function (/* environment, appConfig */) {
  return {
    insertVariablePlugin: {
      endpoint: 'https://dev.roadsigns.lblod.info/sparql',
    }
  };
};
```

If you need a specific subset of codelists of your enpoint you  can specify a publisher when initalizing the plugin like 
```
{
    name:'insert-variable',
    options: {
      publisher: 'cec59e5e872a9084e93becf3026bfcc2f25926ea76372711b7a745875f3b7949'
    }
  }
```


