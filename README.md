# vue-automatic-import-loader
Using a match function to automatic import your own project's components

This repo copy from vuetify-loader and remove the vuetify part.

```js
// webpack.config.js

const VueAutomaticImportPlugin = require('vue-automatic-import-loader/lib/plugin')

exports.plugins.push(
  new VueAutomaticImportPlugin({
    /**
     * This function will be called for every tag used in each vue component
     * It should return an array, the first element will be inserted into the
     * components array, the second should be a corresponding import
     *
     * originalTag - the tag as it was originally used in the template
     * kebabTag    - the tag normalised to kebab-case
     * camelTag    - the tag normalised to PascalCase
     * path        - a relative path to the current .vue file
     * component   - a parsed representation of the current component
     */
    match (originalTag, { kebabTag, camelTag, path, component }) {
      if (kebabTag.startsWith('core-')) {
        return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
      }
    }
  })
)
```