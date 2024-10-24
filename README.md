# eslint-plugin-fsd-checker-by-adelkkaa

plugin for course UlbiTV

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-fsd-checker-by-adelkkaa`:

```sh
npm install eslint-plugin-fsd-checker-by-adelkkaa --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-fsd-checker-by-adelkkaa` and add `fsd-checker` to the `plugins` key:

```js
import fsd-checker from "eslint-plugin-fsd-checker-by-adelkkaa";

export default [
    {
        plugins: {
            fsd-checker
        }
    }
];
```

Then configure the rules you want to use under the `rules` key.

```js
import fsd-checker from "eslint-plugin-fsd-checker-by-adelkkaa";

export default [
    {
        plugins: {
            'fsd-checker-by-adelkkaa',
        },
        rules: {
            'fsd-checker-by-adelkkaa/fsd-path-checker': 'error',

        }
    }
];
```

## Configurations

<!-- begin auto-generated configs list -->

TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
