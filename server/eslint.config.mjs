import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

const compat = new FlatCompat({});

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  {
    languageOptions: {
      globals: {
        React: true,
        ReactDOM: true,
      },
    },
  },
  ...compat.extends('eslint:recommended'),
  ...pluginJs.configs['eslint:recommended']
];
