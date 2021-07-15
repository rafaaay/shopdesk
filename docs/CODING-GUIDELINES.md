# SHOPDEV's JavaScript Coding Guidelines

This is a summary of the Shopdev's JavaScript
rules.

## Rules

* **Use 2 spaces** for indentation.

  [`indent`](/docs/rules/indent.md)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **Use single quotes for strings** except to avoid escaping.

  [`quotes`](/docs/rules/quotes.md)

  ```js
  console.log('hello there')    // ✓ ok
  console.log("hello there")    // ✗ avoid
  console.log(`hello there`)    // ✗ avoid

  $("<div class='box'>")        // ✓ ok
  console.log(`hello ${name}`)  // ✓ ok
  ```

* **No unused variables.**

  [`no-unused-vars`](/docs/rules/no-unused-vars.md)

  ```js
  function myFunction () {
    var result = something()   // ✗ avoid
  }
  ```

* **Add a space after keywords.**

  [`keyword-spacing`](/docs/rules/keyword-spacing.md)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ avoid
  ```

* **Add a space before a function declaration's parentheses.**

  [`space-before-function-paren`](/docs/rules/space-before-function-paren.md)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ avoid

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ avoid
  ```

* **Always use** `===` instead of `==`.<br>
  Exception: `obj == null` is allowed to check for `null || undefined`.

  [`eqeqeq`](/docs/rules/eqeqeq.md)

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ avoid
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ avoid
  ```

* **Infix operators** must be spaced.

  [`space-infix-ops`](/docs/rules/space-infix-ops.md)

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ avoid
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **Commas should have a space** after them.

  [`comma-spacing`](/docs/rules/comma-spacing.md)

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ avoid
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **Keep else statements** on the same line as their curly braces.

  [`brace-style`](/docs/rules/brace-style.md)

  ```js
  // ✓ ok
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ avoid
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **For multi-line if statements,** use curly braces.

  [`curly`](/docs/rules/curly.md)

  ```js
  // ✓ ok
  if (options.quiet !== true) console.log('done')
  ```

  ```js
  // ✓ ok
  if (options.quiet !== true) {
    console.log('done')
  }
  ```

  ```js
  // ✗ avoid
  if (options.quiet !== true)
    console.log('done')
  ```

* **Always handle the** `err` function parameter.

  [`handle-callback-err`](/docs/rules/handle-callback-err.md)
  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ avoid
  run(function (err) {
    window.alert('done')
  })
  ```

* **Declare browser globals** with a `/* global */` comment.<br>
  Exceptions are: `window`, `document`, and `navigator`.<br>
  Prevents accidental use of poorly-named browser globals like `open`, `length`,
  `event`, and `name`.

  ```js
  /* global alert, prompt */

  alert('hi')
  prompt('ok?')
  ```

  Explicitly referencing the function or property on `window` is okay too, though
  such code will not run in a Worker which uses `self` instead of `window`.

  [`no-undef`](/docs/rules/no-undef.md)

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Multiple blank lines not allowed.**

  [`no-multiple-empty-lines`](/docs/rules/no-multiple-empty-lines.md)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ avoid
  var value = 'hello world'


  console.log(value)
  ```

* **For the ternary operator** in a multi-line setting, place `?` and `:` on their own lines.

  [`operator-linebreak`](/docs/rules/operator-linebreak.md)

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ avoid
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **For var declarations,** write each declaration in its own statement.

  [`one-var`](/docs/rules/one-var.md)

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ avoid
  var silent = true, verbose = true

  // ✗ avoid
  var silent = true,
      verbose = true
  ```

* **Wrap conditional assignments** with additional parentheses. This makes it clear that the expression is intentionally an assignment (`=`) rather than a typo for equality (`===`).

  [`no-cond-assign`](/docs/rules/no-cond-assign.md)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ avoid
  while (m = text.match(expr)) {
    // ...
  }
  ```

* **Add spaces inside single line blocks.**

  [`block-spacing`](/docs/rules/block-spacing.md)

  ```js
    function foo () {return true}    // ✗ avoid
    function foo () { return true }  // ✓ ok
  ```

* **Use camelcase when naming variables and functions.**

  [`camelcase`](/docs/rules/camelcase.md)

  ```js
    function my_function () { }    // ✗ avoid
    function myFunction () { }     // ✓ ok

    var my_var = 'hello'           // ✗ avoid
    var myVar = 'hello'            // ✓ ok
  ```

* **Trailing commas not allowed.**

  [`comma-dangle`](/docs/rules/comma-dangle.md)

  ```js
    var obj = {
      message: 'hello',   // ✗ avoid
    }
  ```

* **Commas must be placed at the end of the current line.**

  [`comma-style`](/docs/rules/comma-style.md)

  ```js
    var obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ avoid
    }

    var obj = {
      foo: 'foo',
      bar: 'bar'   // ✓ ok
    }
  ```

* **Dot should be on the same line as property.**

  [`dot-location`](/docs/rules/dot-location.md)

  ```js
    console.
      log('hello')  // ✗ avoid

    console
      .log('hello') // ✓ ok
  ```

* **Files must end with a newline.**

  [`eol-last`](/docs/rules/eol-last.md)

* **No space between function identifiers and their invocations.**

  [`func-call-spacing`](/docs/rules/func-call-spacing.md)

  ```js
  console.log ('hello') // ✗ avoid
  console.log('hello')  // ✓ ok
  ```

* **Add space between colon and value in key value pairs.**

  [`key-spacing`](/docs/rules/key-spacing.md)

  ```js
  var obj = { 'key' : 'value' }    // ✗ avoid
  var obj = { 'key' :'value' }     // ✗ avoid
  var obj = { 'key':'value' }      // ✗ avoid
  var obj = { 'key': 'value' }     // ✓ ok
  ```

* **Constructor names must begin with a capital letter.**

  [`new-cap`](/docs/rules/new-cap.md)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ avoid

  function Animal () {}
  var dog = new Animal()    // ✓ ok
  ```

* **Constructor with no arguments must be invoked with parentheses.**

  [`new-parens`](/docs/rules/new-parens.md)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ avoid
  var dog = new Animal()  // ✓ ok
  ```

* **Objects must contain a getter when a setter is defined.**

  [`accessor-pairs`](/docs/rules/accessor-pairs.md)

  ```js
  var person = {
    set name (value) {    // ✗ avoid
      this._name = value
    }
  }

  var person = {
    set name (value) {
      this._name = value
    },
    get name () {         // ✓ ok
      return this._name
    }
  }
  ```

* **Constructors of derived classes must call `super`.**

  [`constructor-super`](/docs/rules/constructor-super.md)

  ```js
  class Dog {
    constructor () {
      super()             // ✗ avoid
      this.legs = 4
    }
  }
  
  class Dog extends Animal {
    constructor () {      // ✗ avoid
      this.legs = 4
    }
  }

  class Dog extends Animal {
    constructor () {
      super()             // ✓ ok
      this.legs = 4
    }
  }
  ```

* **Use array literals instead of array constructors.**

  [`no-array-constructor`](/docs/rules/no-array-constructor.md)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ avoid
  var nums = [1, 2, 3]            // ✓ ok
  ```

* **Avoid using `arguments.callee` and `arguments.caller`.**

  [`no-caller`](/docs/rules/no-caller.md)

  ```js
  function foo (n) {
    if (n <= 0) return

    arguments.callee(n - 1)   // ✗ avoid
  }

  function foo (n) {
    if (n <= 0) return

    foo(n - 1)                // ✓ ok
  }
  ```

* **Avoid modifying variables of class declarations.**

  [`no-class-assign`](/docs/rules/no-class-assign.md)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ avoid
  ```

* **Avoid modifying variables declared using `const`.**

  [`no-const-assign`](/docs/rules/no-const-assign.md)

  ```js
  const score = 100
  score = 125       // ✗ avoid
  ```

* **Avoid using constant expressions in conditions (except loops).**

  [`no-constant-condition`](/docs/rules/no-constant-condition.md)

  ```js
  if (false) {    // ✗ avoid
    // ...
  }

  if (x === 0) {  // ✓ ok
    // ...
  }

  while (true) {  // ✓ ok
    // ...
  }
  ```

* **No control characters in regular expressions.**

  [`no-control-regex`](/docs/rules/no-control-regex.md)

  ```js
  var pattern = /\x1f/    // ✗ avoid
  var pattern = /\x20/    // ✓ ok
  ```

* **No `debugger` statements.**

  [`no-debugger`](/docs/rules/no-debugger.md)

  ```js
  function sum (a, b) {
    debugger      // ✗ avoid
    return a + b
  }
  ```

* **No `delete` operator on variables.**

  [`no-delete-var`](/docs/rules/no-delete-var.md)

  ```js
  var name
  delete name     // ✗ avoid
  ```

* **No duplicate arguments in function definitions.**

  [`no-dupe-args`](/docs/rules/no-dupe-args.md)

  ```js
  function sum (a, b, a) {  // ✗ avoid
    // ...
  }

  function sum (a, b, c) {  // ✓ ok
    // ...
  }
  ```

* **No duplicate name in class members.**

  [`no-dupe-class-members`](/docs/rules/no-dupe-class-members.md)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ avoid
  }
  ```

* **No duplicate keys in object literals.**

  [`no-dupe-keys`](/docs/rules/no-dupe-keys.md)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ avoid
  }
  ```

* **No duplicate `case` labels in `switch` statements.**

  [`no-duplicate-case`](/docs/rules/no-duplicate-case.md)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ avoid
  }
  ```

* **Use a single import statement per module.**

  [`no-duplicate-imports`](/docs/rules/no-duplicate-imports.md)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ avoid

  import { myFunc1, myFunc2 } from 'module' // ✓ ok
  ```

* **No empty character classes in regular expressions.**

  [`no-empty-character-class`](/docs/rules/no-empty-character-class.md)

  ```js
  const myRegex = /^abc[]/      // ✗ avoid
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

* **No empty destructuring patterns.**

  [`no-empty-pattern`](/docs/rules/no-empty-pattern.md)

  ```js
  const { a: {} } = foo         // ✗ avoid
  const { a: { b } } = foo      // ✓ ok
  ```

* **No using `eval()`.**

  [`no-eval`](/docs/rules/no-eval.md)

  ```js
  eval( "var result = user." + propName ) // ✗ avoid
  var result = user[propName]             // ✓ ok
  ```

* **No reassigning exceptions in `catch` clauses.**

  [`no-ex-assign`](/docs/rules/no-ex-assign.md)

  ```js
  try {
    // ...
  } catch (e) {
    e = 'new value'             // ✗ avoid
  }

  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // ✓ ok
  }
  ```

* **No extending native objects.**

  [`no-extend-native`](/docs/rules/no-extend-native.md)

  ```js
  Object.prototype.age = 21     // ✗ avoid
  ```

* **Avoid unnecessary function binding.**

  [`no-extra-bind`](/docs/rules/no-extra-bind.md)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ avoid

  const name = function () {
    this.getName()
  }.bind(user)    // ✓ ok
  ```

* **Avoid unnecessary boolean casts.**

  [`no-extra-boolean-cast`](/docs/rules/no-extra-boolean-cast.md)

  ```js
  const result = true
  if (!!result) {   // ✗ avoid
    // ...
  }

  const result = true
  if (result) {     // ✓ ok
    // ...
  }
  ```

* **No unnecessary parentheses around function expressions.**

  [`no-extra-parens`](/docs/rules/no-extra-parens.md)

  ```js
  const myFunc = (function () { })   // ✗ avoid
  const myFunc = function () { }     // ✓ ok
  ```

* **Use `break` to prevent fallthrough in `switch` cases.**

  [`no-fallthrough`](/docs/rules/no-fallthrough.md)

  ```js
  switch (filter) {
    case 1:
      doSomething()    // ✗ avoid
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      break           // ✓ ok
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      // fallthrough  // ✓ ok
    case 2:
      doSomethingElse()
  }
  ```

* **No floating decimals.**

  [`no-floating-decimal`](/docs/rules/no-floating-decimal.md)

  ```js
  const discount = .5      // ✗ avoid
  const discount = 0.5     // ✓ ok
  ```

* **Avoid reassigning function declarations.**

  [`no-func-assign`](/docs/rules/no-func-assign.md)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ avoid
  ```

* **No reassigning read-only global variables.**

  [`no-global-assign`](/docs/rules/no-global-assign.md)

  ```js
  window = {}     // ✗ avoid
  ```

* **No implied `eval()`.**

  [`no-implied-eval`](/docs/rules/no-implied-eval.md)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ avoid
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

* **No function declarations in nested blocks.**

  [`no-inner-declarations`](/docs/rules/no-inner-declarations.md)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ avoid
  }
  ```

* **No invalid regular expression strings in  `RegExp` constructors.**

  [`no-invalid-regexp`](/docs/rules/no-invalid-regexp.md)

  ```js
  RegExp('[a-z')    // ✗ avoid
  RegExp('[a-z]')   // ✓ ok
  ```

* **No irregular whitespace.**

  [`no-irregular-whitespace`](/docs/rules/no-irregular-whitespace.md)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ avoid
  ```

* **No using `__iterator__`.**

  [`no-iterator`](/docs/rules/no-iterator.md)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ avoid
  ```

* **No labels that share a name with an in scope variable.**

  [`no-label-var`](/docs/rules/no-label-var.md)

  ```js
  var score = 100
  function game () {
    score: while (true) {      // ✗ avoid
      score -= 10
      if (score > 0) continue score
      break
    }
  }
  ```

* **No label statements.**

  [`no-labels`](/docs/rules/no-labels.md)

  ```js
  label:
    while (true) {
      break label     // ✗ avoid
    }
  ```

* **No unnecessary nested blocks.**

  [`no-lone-blocks`](/docs/rules/no-lone-blocks.md)

  ```js
  function myFunc () {
    {                   // ✗ avoid
      myOtherFunc()
    }
  }

  function myFunc () {
    myOtherFunc()       // ✓ ok
  }
  ```

* **Avoid mixing spaces and tabs for indentation.**

  [`no-mixed-spaces-and-tabs`](/docs/rules/no-mixed-spaces-and-tabs.md)

* **Do not use multiple spaces except for indentation.**

  [`no-multi-spaces`](/docs/rules/no-multi-spaces.md)

  ```js
  const id =    1234    // ✗ avoid
  const id = 1234       // ✓ ok
  ```

* **No multiline strings.**

  [`no-multi-str`](/docs/rules/no-multi-str.md)

  ```js
  const message = 'Hello \
                   world'     // ✗ avoid
  ```

* **No `new` without assigning object to a variable.**

  [`no-new`](/docs/rules/no-new.md)

  ```js
  new Character()                     // ✗ avoid
  const character = new Character()   // ✓ ok
  ```

* **No using the `Function` constructor.**

  [`no-new-func`](/docs/rules/no-new-func.md)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid
  ```

* **No using the `Object` constructor.**

  [`no-new-object`](/docs/rules/no-new-object.md)

  ```js
  let config = new Object()   // ✗ avoid
  ```

* **No using `new require`.**

  [`no-new-require`](/docs/rules/no-new-require.md)

  ```js
  const myModule = new require('my-module')    // ✗ avoid
  ```

* **No using the `Symbol` constructor.**

  [`no-new-symbol`](/docs/rules/no-new-symbol.md)

  ```js
  const foo = new Symbol('foo')   // ✗ avoid
  ```

* **No using primitive wrapper instances.**

  [`no-new-wrappers`](/docs/rules/no-new-wrappers.md)

  ```js
  const message = new String('hello')   // ✗ avoid
  ```

* **No calling global object properties as functions.**

  [`no-obj-calls`](/docs/rules/no-obj-calls.md)

  ```js
  const math = Math()   // ✗ avoid
  ```

* **No octal literals.**

  [`no-octal`](/docs/rules/no-octal.md)

  ```js
  const octal = 042         // ✗ avoid
  const decimal = 34        // ✓ ok
  const octalString = '042' // ✓ ok
  ```

* **No octal escape sequences in string literals.**

  [`no-octal-escape`](/docs/rules/no-octal-escape.md)

  ```js
  const copyright = 'Copyright \251'  // ✗ avoid
  ```

* **Avoid string concatenation when using `__dirname` and `__filename`.**

  [`no-path-concat`](/docs/rules/no-path-concat.md)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ avoid
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```

* **Avoid using `__proto__`.** Use `getPrototypeOf` instead.

  [`no-proto`](/docs/rules/no-proto.md)

  ```js
  const foo = obj.__proto__               // ✗ avoid
  const foo = Object.getPrototypeOf(obj)  // ✓ ok
  ```

* **No redeclaring variables.**

  [`no-redeclare`](/docs/rules/no-redeclare.md)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ avoid

  let name = 'John'
  name = 'Jane'         // ✓ ok
  ```

* **Avoid multiple spaces in regular expression literals.**

  [`no-regex-spaces`](/docs/rules/no-regex-spaces.md)

  ```js
  const regexp = /test   value/   // ✗ avoid

  const regexp = /test {3}value/  // ✓ ok
  const regexp = /test value/     // ✓ ok
  ```

* **Assignments in return statements must be surrounded by parentheses.**

  [`no-return-assign`](/docs/rules/no-return-assign.md)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ avoid
  }

  function sum (a, b) {
    return (result = a + b)   // ✓ ok
  }
  ```

* **Avoid assigning a variable to itself**

  [`no-self-assign`](/docs/rules/no-self-assign.md)

  ```js
  name = name   // ✗ avoid
  ```

* **Avoid comparing a variable to itself.**

  [`no-self-compare`](/docs/rules/no-self-compare.md)

  ```js
  if (score === score) {}   // ✗ avoid
  ```

* **Avoid using the comma operator.**

  [`no-sequences`](/docs/rules/no-sequences.md)

  ```js
  if (doSomething(), !!test) {}   // ✗ avoid
  ```

* **Restricted names should not be shadowed.**

  [`no-shadow-restricted-names`](/docs/rules/no-shadow-restricted-names.md)

  ```js
  let undefined = 'value'     // ✗ avoid
  ```

* **Sparse arrays are not allowed.**

  [`no-sparse-arrays`](/docs/rules/no-sparse-arrays.md)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ avoid
  ```

* **Tabs should not be used**

  [`no-tabs`](/docs/rules/no-tabs.md)

* **Regular strings must not contain template literal placeholders.**

  [`no-template-curly-in-string`](/docs/rules/no-template-curly-in-string.md)

  ```js
  const message = 'Hello ${name}'   // ✗ avoid
  const message = `Hello ${name}`   // ✓ ok
  ```

* **`super()` must be called before using `this`.**

  [`no-this-before-super`](/docs/rules/no-this-before-super.md)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ avoid
      super()
    }
  }
  ```

* **Only `throw` an `Error` object.**

  [`no-throw-literal`](/docs/rules/no-throw-literal.md)

  ```js
  throw 'error'               // ✗ avoid
  throw new Error('error')    // ✓ ok
  ```

* **Whitespace not allowed at end of line.**

  [`no-trailing-spaces`](/docs/rules/no-trailing-spaces.md)

* **Initializing to `undefined` is not allowed.**

  [`no-undef-init`](/docs/rules/no-undef-init.md)

  ```js
  let name = undefined    // ✗ avoid

  let name
  name = 'value'          // ✓ ok
  ```

* **No unmodified conditions of loops.**

  [`no-unmodified-loop-condition`](/docs/rules/no-unmodified-loop-condition.md)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **No ternary operators when simpler alternatives exist.**

  [`no-unneeded-ternary`](/docs/rules/no-unneeded-ternary.md)

  ```js
  let score = val ? val : 0     // ✗ avoid
  let score = val || 0          // ✓ ok
  ```

* **No unreachable code after `return`, `throw`, `continue`, and `break` statements.**

  [`no-unreachable`](/docs/rules/no-unreachable.md)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ avoid
  }
  ```

* **No flow control statements in `finally` blocks.**

  [`no-unsafe-finally`](/docs/rules/no-unsafe-finally.md)

  ```js
  try {
    // ...
  } catch (e) {
    // ...
  } finally {
    return 42     // ✗ avoid
  }
  ```

* **The left operand of relational operators must not be negated.**

  [`no-unsafe-negation`](/docs/rules/no-unsafe-negation.md)

  ```js
  if (!key in obj) {}       // ✗ avoid
  if (!(key in obj)) {}     // ✓ ok
  ```

* **Avoid unnecessary use of `.call()` and `.apply()`.**

  [`no-useless-call`](/docs/rules/no-useless-call.md)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ avoid
  ```

* **Avoid using unnecessary computed property keys on objects.**

  [`no-useless-computed-key`](/docs/rules/no-useless-computed-key.md)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ avoid
  const user = { name: 'John Doe' }       // ✓ ok
  ```

* **No unnecessary constructor.**

  [`no-useless-constructor`](/docs/rules/no-useless-constructor.md)

  ```js
  class Car {
    constructor () {      // ✗ avoid
    }
  }
  ```

* **No unnecessary use of escape.**

  [`no-useless-escape`](/docs/rules/no-useless-escape.md)

  ```js
  let message = 'Hell\o'  // ✗ avoid
  ```

* **Renaming import, export, and destructured assignments to the same name is not allowed.**

  [`no-useless-rename`](/docs/rules/no-useless-rename.md)

  ```js
  import { config as config } from './config'     // ✗ avoid
  import { config } from './config'               // ✓ ok
  ```

* **No whitespace before properties.**

  [`no-whitespace-before-property`](/docs/rules/no-whitespace-before-property.md)

  ```js
  user .name      // ✗ avoid
  user.name       // ✓ ok
  ```

* **No using `with` statements.**

  [`no-with`](/docs/rules/no-with.md)

  ```js
  with (val) {...}    // ✗ avoid
  ```

* **Maintain consistency of newlines between object properties.**

  [`object-property-newline`](/docs/rules/object-property-newline.md)

  ```js
  const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'            // ✗ avoid
  }

  const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

  const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86'
  }                                                                 // ✓ ok
  ```

* **No padding within blocks.**

  [`padded-blocks`](/docs/rules/padded-blocks.md)

  ```js
  if (user) {
                              // ✗ avoid
    const name = getName()

  }

  if (user) {
    const name = getName()    // ✓ ok
  }
  ```

* **No whitespace between spread operators and their expressions.**

  [`rest-spread-spacing`](/docs/rules/rest-spread-spacing.md)

  ```js
  fn(... args)    // ✗ avoid
  fn(...args)     // ✓ ok
  ```

* **Semicolons must have a space after and no space before.**

  [`semi-spacing`](/docs/rules/semi-spacing.md)

  ```js
  for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **Must have a space before blocks.**

  [`space-before-blocks`](/docs/rules/space-before-blocks.md)

  ```js
  if (admin){...}     // ✗ avoid
  if (admin) {...}    // ✓ ok
  ```

* **No spaces inside parentheses.**

  [`space-in-parens`](/docs/rules/space-in-parens.md)

  ```js
  getName( name )     // ✗ avoid
  getName(name)       // ✓ ok
  ```

* **Unary operators must have a space after.**

  [`space-unary-ops`](/docs/rules/space-unary-ops.md)

  ```js
  typeof!admin        // ✗ avoid
  typeof !admin        // ✓ ok
  ```

* **Use spaces inside comments.**

  [`spaced-comment`](/docs/rules/spaced-comment.md)

  ```js
  //comment           // ✗ avoid
  // comment          // ✓ ok

  /*comment*/         // ✗ avoid
  /* comment */       // ✓ ok
  ```

* **No spacing in template strings.**

  [`template-curly-spacing`](/docs/rules/template-curly-spacing.md)

  ```js
  const message = `Hello, ${ name }`    // ✗ avoid
  const message = `Hello, ${name}`      // ✓ ok
  ```

* **Use `isNaN()` when checking for `NaN`.**

  [`use-isnan`](/docs/rules/use-isnan.md)

  ```js
  if (price === NaN) { }      // ✗ avoid
  if (isNaN(price)) { }       // ✓ ok
  ```

* **`typeof` must be compared to a valid string.**

  [`valid-typeof`](/docs/rules/valid-typeof.md)

  ```js
  typeof name === 'undefimed'     // ✗ avoid
  typeof name === 'undefined'     // ✓ ok
  ```

* **Immediately Invoked Function Expressions (IIFEs) must be wrapped.**

  [`wrap-iife`](/docs/rules/wrap-iife.md)

  ```js
  const getName = function () { }()     // ✗ avoid

  const getName = (function () { }())   // ✓ ok
  const getName = (function () { })()   // ✓ ok
  ```

* **The `*` in `yield*`expressions must have a space before and after.**

  [`yield-star-spacing`](/docs/rules/yield-star-spacing.md)

  ```js
  yield* increment()    // ✗ avoid
  yield * increment()   // ✓ ok
  ```

* **Avoid Yoda conditions.**

  [`yoda`](/docs/rules/yoda.md)

  ```js
  if (42 === age) { }    // ✗ avoid
  if (age === 42) { }    // ✓ ok
  ```

## Semicolons

* No semicolons. (see: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  [`semi`](/docs/rules/semi.md)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ avoid
  ```

* Never start a line with `(`, `[`, `` ` ``, or a handful of other unlikely possibilities.

  This is the only gotcha with omitting semicolons, and `standard` protects you from this potential issue.

  (The full list is: `[`, `(`, `` ` ``, `+`, `*`, `/`, `-`, `,`, `.`, but most of these will never appear at the start of a line in real code.)

  [`no-unexpected-multiline`](/docs/rules/no-unexpected-multiline.md)

  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ avoid
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ avoid
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ avoid
  `hello`.indexOf('o')
  ```

  Note: If you're often writing code like this, you may be trying to be too clever.

  Clever short-hands are discouraged, in favor of clear and readable expressions, whenever
  possible.

  Instead of this:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  This is strongly preferred:

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## Helpful reading

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### And a helpful video:

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

All popular code minifiers in use today use AST-based minification, so they can
handle semicolon-less JavaScript with no issues (since semicolons are not required
in JavaScript).

##### Excerpt from *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:

> [Relying on automatic semicolon insertion] is quite safe, and perfectly valid JS that every browser understands. Closure compiler, yuicompressor, packer, and jsmin all can properly minify it. There is no performance impact anywhere.
>
> I am sorry that, instead of educating you, the leaders in this language community have given you lies and fear.  That was shameful. I recommend learning how statements in JS are actually terminated (and in which cases they are not terminated), so that you can write code that you find beautiful.
>
> In general, `\n` ends a statement unless:
>   1. The statement has an unclosed paren, array literal, or object literal or ends in some
>      other way that is not a valid way to end a statement. (For instance, ending with `.`
>      or `,`.)
>   2. The line is `--` or `++` (in which case it will decrement/increment the next token.)
>   3. It is a `for()`, `while()`, `do`, `if()`, or `else`, and there is no `{`
>   4. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other
>      binary operator that can only be found between two tokens in a single expression.
>
> The first is pretty obvious. Even JSLint is ok with `\n` chars in JSON and parenthesized constructs, and with `var` statements that span multiple lines ending in `,`.
>
> The second is super weird. I’ve never seen a case (outside of these sorts of conversations) where you’d want to do write `i\n++\nj`, but, point of fact, that’s parsed as `i; ++j`, not `i++; j`.
>
> The third is well understood, if generally despised. `if (x)\ny()` is equivalent to `if (x) { y() }`. The construct doesn’t end until it reaches either a block, or a statement.
>
> `;` is a valid JavaScript statement, so `if(x);` is equivalent to `if(x){}` or, “If x, do nothing.” This is more commonly applied to loops where the loop check also is the update function. Unusual, but not unheard of.
>
> The fourth is generally the fud-inducing “oh noes, you need semicolons!” case. But, as it turns out, it’s quite easy to *prefix* those lines with semicolons if you don’t mean them to be continuations of the previous line. For example, instead of this:
>
> ```js
> foo();
> [1,2,3].forEach(bar);
> ```
>
> you could do this:
>
> ```js
> foo()
> ;[1,2,3].forEach(bar)
> ```
>
> The advantage is that the prefixes are easier to notice, once you are accustomed to never seeing lines starting with `(` or `[` without semis.

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
