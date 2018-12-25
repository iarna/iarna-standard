# @iarna/standard

Standard formats as @iarna likes it.

## USAGE

```console
$ npm i -D @iarna/standard
$ npx iarna-standard
```

_In `package.json`..._

```
"scripts": {
  "pretest": "iarna-standard"
}
```

## WHATSAT?

Sooo, I mostly like Standard, except some of the rules drive me bonkers. So
for my personal projects I worked up a .eslint config that did what I
wanted.  This is all that bundled up as an extension to standard.  Many many
thanks to @feross and friends for making standard so easy to extend.

## WHUTSITDO?

It tests for a Node.js environment specifically:

* No ESM, script mode only
* No jsx

It disables some standard rules that produce results I find objectionable:

* `indent` - I mostly like this, but there are times where it does the wrong thing and it's insufficiently configurable
  to correct that w/o patching. Maybe I'll make my own version someday but for today... disabling it is fine. I don't, as rule,
  screw up my indentation. =p
* `no-return-assign` - Assigning in return values is really weird... except when using `_ => abc = _` and yes, I could use
  `_ => { abc = _ }` but I don't wanna. And assigning in return otherwise may be weird, but it isn't likely to hide a bug.
* `object-curly-spacing` - Enabled in `standard@12` it sets all my code on fire.

It enables some assertions that standard doesn't:

* `no-prototype-builtins`
* `array-callback-return`
* `no-implicit-coercion`

It adds some more plugins:

* [`security`](https://www.npmjs.com/package/eslint-plugin-security)
  We use the recommended settings for disbling...
  * `detect-object-injection` - This isn't an issue i node land
    and has too many false positives.
* [`dependencies`](https://www.npmjs.com/package/eslint-plugin-dependencies)
  * `case-sensitive` -
    Make sure we don't screw ourselves when using Linux.
  * `no-unresolved` -
    Deps must exist.
  * `require-json-ext` -
    If you require json, be explicit.
* [`unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn)
  * `catch-error-name` - 
    Exceptions should be caught as `err` so other assertions can tell if they're unused
  * `filename-case` - 
    kebab-case is the only case. camelCase in filename is definitely baad.
  * `explicit-length-check` -
    no checking truthyness of array.length
  * `no-abusive-eslint-disable` -
    stop eslint being disabled for an entire file
  * `throw-new-error` -
    when constructing and throwing built in errors, use `new`
  * `number-literal-case` -
    when constructing hex and other literals, use lowercase for the middle part, caps for the latter part, eg `0xBADC0FFEE`
  * `escape-case` -
    same as above, but for string escapes, eg `'\uD834'`
  * `no-array-instanceof` -
    use `Array.isArray` for array identity
  * `no-new-buffer` -
    modern node is pissy about `new Buffer`
  * `no-hex-escape` -
    no `'\x1b'` use `'\u001b'` instead
  * `custom-error-definition` -
    some common sense around custom Error classes
  * `prefer-starts-ends-with` -
    use `startsWith` and `endsWith` string methods where possible in pref to regexp
  * `prefer-type-error` -
    enforce use of `TypeError` over `Error` where appropriate
  * `regex-shorthand` -
    enforce use of regexp character classes when available
