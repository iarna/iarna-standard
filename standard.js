#!/usr/bin/env node
'use strict'
const path = require('path')
const pkg = require('./package.json')

require('standard-engine').cli({
  cmd: 'iarna-standard',
  eslint: require('eslint'),
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: '@iarna/standard',
  eslintConfig: {
    configFile: path.resolve(__dirname, 'eslint.js')
  }
})
