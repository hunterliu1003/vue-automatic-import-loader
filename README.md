# vue-automatic-import-loader

Using a match function to automatic import your own project's components

This repo copy from [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) and remove the vuetify part.

## Introduction

**vue-automatic-import-loader** is a webpack plugin that automatically import SFC.

Here is the example:

```html
<template>
  <base-button>This is a button component</base-button>
</template>
```

will be automatically compiled to:

```html
<template>
  <base-button>This is a button component</base-button>
</template>

<script>
  import BaseButton from '@/components/base/Button.vue'

  export default {
    components: {
      BaseButton
    }
  }
</script>
```

## Install

```bash
$ yarn add vue-automatic-import-loader
```

## Usage

### Vue CLI 3

in vue.config.js:

```js
const VueAutomaticImportPlugin = require('vue-automatic-import-loader/lib/plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new VueAutomaticImportPlugin({
        match(originalTag, { kebabTag, camelTag }) {
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
          if (kebabTag.startsWith('base-')) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/base/${camelTag}.vue'`
            ]
          }
        }
      })
    ]
  }
}
```

### Nuxt.js

in nuxt.config.js:

```js
import VueAutomaticImportPlugin from 'vue-automatic-import-loader/lib/plugin'
export default {
  build: {
    plugins: [
      new VueAutomaticImportPlugin({
        match(originalTag, { kebabTag, camelTag, path, component }) {
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
          if (kebabTag.startsWith('base-')) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/base/${camelTag}.vue'`
            ]
          }
        }
      })
    ]
  }
}
```