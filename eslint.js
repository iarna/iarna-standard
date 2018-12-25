'use strict'
const config = Object.assign({}, require('eslint-config-standard'))

config.parserOptions.ecmaFeatures.jsx = false
config.parserOptions.sourceType = 'script'

config.plugins = [
  'node',
  'promise',
  'security',
  'dependencies',
  'unicorn',
  'standard'
]

config.extends = [
  'plugin:security/recommended',
  'eslint:recommended'
]

Object.assign(config.rules, {
  // disable some standard things
  'indent': 0, // I'd love to have this rule, but it's wrong about
               // expressions in ways I can't seem to disable
  'no-return-assign': 0,
  'object-curly-spacing': 0,

  // enable some things standard doesn't
  'no-prototype-builtins': 'error',
  'array-callback-return': 'error',
  'no-implicit-coercion': 'error',

  // configure our additional plugins
  'security/detect-object-injection': 0,
  'dependencies/case-sensitive': 1,
  'dependencies/no-unresolved': 1,
  'dependencies/require-json-ext': 1,
  'unicorn/catch-error-name': ['error', { 'name': 'err' }],
  'unicorn/explicit-length-check': 'error',
  'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/throw-new-error': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/no-array-instanceof': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/custom-error-definition': 'error',
  'unicorn/prefer-starts-ends-with': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/regex-shorthand': 'error',

  // disable esm
  'import/export': null,
  'import/first': null,
  'import/no-duplicates': null,
  'import/no-named-default': null,
  'import/no-webpack-loader-syntax': null
})

module.exports = config
