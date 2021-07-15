# List of rules

Grouped first by the following categories and then by the [_thing_](http://apps.workflower.fi/vocabs/css/en) they apply to.

- [Possible errors](#possible-errors)
- [Limit language features](#limit-language-features)
- [Stylistic issues](#stylistic-issues)

## Possible errors

### Color

- [`color-no-invalid-hex`](./rules/color-no-invalid-hex/README.md): Disallow invalid hex colors.

### Font family

- [`font-family-no-duplicate-names`](./rules/font-family-no-duplicate-names/README.md): Disallow duplicate font family names.
- [`font-family-no-missing-generic-family-keyword`](./rules/font-family-no-missing-generic-family-keyword/README.md): Disallow missing generic families in lists of font family names.

### Function

- [`function-calc-no-invalid`](./rules/function-calc-no-invalid/README.md): Disallow an invalid expression within `calc` functions.
- [`function-calc-no-unspaced-operator`](./rules/function-calc-no-unspaced-operator/README.md): Disallow an unspaced operator within `calc` functions.
- [`function-linear-gradient-no-nonstandard-direction`](./rules/function-linear-gradient-no-nonstandard-direction/README.md): Disallow direction values in `linear-gradient()` calls that are not valid according to the [standard syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).

### String

- [`string-no-newline`](./rules/string-no-newline/README.md): Disallow (unescaped) newlines in strings.

### Unit

- [`unit-no-unknown`](./rules/unit-no-unknown/README.md): Disallow unknown units.

### Property

- [`property-no-unknown`](./rules/property-no-unknown/README.md): Disallow unknown properties.

### Keyframe declaration

- [`keyframe-declaration-no-important`](./rules/keyframe-declaration-no-important/README.md): Disallow `!important` within keyframe declarations.

### Declaration block

- [`declaration-block-no-duplicate-properties`](./rules/declaration-block-no-duplicate-properties/README.md): Disallow duplicate properties within declaration blocks.
- [`declaration-block-no-shorthand-property-overrides`](./rules/declaration-block-no-shorthand-property-overrides/README.md): Disallow shorthand properties that override related longhand properties.

### Block

- [`block-no-empty`](./rules/block-no-empty/README.md): Disallow empty blocks.

### Selector

- [`selector-pseudo-class-no-unknown`](./rules/selector-pseudo-class-no-unknown/README.md): Disallow unknown pseudo-class selectors.
- [`selector-pseudo-element-no-unknown`](./rules/selector-pseudo-element-no-unknown/README.md): Disallow unknown pseudo-element selectors.
- [`selector-type-no-unknown`](./rules/selector-type-no-unknown/README.md): Disallow unknown type selectors.

### Media feature

- [`media-feature-name-no-unknown`](./rules/media-feature-name-no-unknown/README.md): Disallow unknown media feature names.

### At-rule

- [`at-rule-no-unknown`](./rules/at-rule-no-unknown/README.md): Disallow unknown at-rules.

### Comment

- [`comment-no-empty`](./rules/comment-no-empty/README.md): Disallow empty comments.

### General / Sheet

- [`no-descending-specificity`](./rules/no-descending-specificity/README.md): Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
- [`no-duplicate-at-import-rules`](./rules/no-duplicate-at-import-rules/README.md): Disallow duplicate `@import` rules within a stylesheet.
- [`no-duplicate-selectors`](./rules/no-duplicate-selectors/README.md): Disallow duplicate selectors within a stylesheet.
- [`no-empty-source`](./rules/no-empty-source/README.md): Disallow empty sources.
- [`no-extra-semicolons`](./rules/no-extra-semicolons/README.md): Disallow extra semicolons (Autofixable).
- [`no-invalid-double-slash-comments`](./rules/no-invalid-double-slash-comments/README.md): Disallow double-slash comments (`//...`) which are not supported by CSS.

## Limit language features

### Alpha-value

- [`alpha-value-notation`](./rules/alpha-value-notation/README.md): Specify percentage or number notation for alpha-values (Autofixable).

### Hue

- [`hue-degree-notation`](./rules/hue-degree-notation/README.md): Specify number or angle notation for degree hues (Autofixable).

### Color

- [`color-function-notation`](./rules/color-function-notation/README.md): Specify modern or legacy notation for applicable color-functions (Autofixable).
- [`color-named`](./rules/color-named/README.md): Require (where possible) or disallow named colors.
- [`color-no-hex`](./rules/color-no-hex/README.md): Disallow hex colors.

### Length

- [`length-zero-no-unit`](./rules/length-zero-no-unit/README.md): Disallow units for zero lengths (Autofixable).

### Font weight

- [`font-weight-notation`](./rules/font-weight-notation/README.md): Require numeric or named (where possible) `font-weight` values. Also, when named values are expected, require only valid names.

### Function

- [`function-allowed-list`](./rules/function-allowed-list/README.md): Specify a list of allowed functions.
- [`function-blacklist`](./rules/function-blacklist/README.md): Specify a list of disallowed functions. **(deprecated)**
- [`function-disallowed-list`](./rules/function-disallowed-list/README.md): Specify a list of disallowed functions.
- [`function-url-no-scheme-relative`](./rules/function-url-no-scheme-relative/README.md): Disallow scheme-relative urls.
- [`function-url-scheme-allowed-list`](./rules/function-url-scheme-allowed-list/README.md): Specify a list of allowed URL schemes.
- [`function-url-scheme-blacklist`](./rules/function-url-scheme-blacklist/README.md): Specify a list of disallowed URL schemes. **(deprecated)**
- [`function-url-scheme-disallowed-list`](./rules/function-url-scheme-disallowed-list/README.md): Specify a list of disallowed URL schemes.
- [`function-url-scheme-whitelist`](./rules/function-url-scheme-whitelist/README.md): Specify a list of allowed URL schemes. **(deprecated)**
- [`function-whitelist`](./rules/function-whitelist/README.md): Specify a list of allowed functions. **(deprecated)**

### Keyframes

- [`keyframes-name-pattern`](./rules/keyframes-name-pattern/README.md): Specify a pattern for keyframe names.

### Number

- [`number-max-precision`](./rules/number-max-precision/README.md): Limit the number of decimal places allowed in numbers.

### Time

- [`time-min-milliseconds`](./rules/time-min-milliseconds/README.md): Specify the minimum number of milliseconds for time values.

### Unit

- [`unit-allowed-list`](./rules/unit-allowed-list/README.md): Specify a list of allowed units.
- [`unit-blacklist`](./rules/unit-blacklist/README.md): Specify a list of disallowed units. **(deprecated)**
- [`unit-disallowed-list`](./rules/unit-disallowed-list/README.md): Specify a list of disallowed units.
- [`unit-whitelist`](./rules/unit-whitelist/README.md): Specify a list of allowed units. **(deprecated)**

### Shorthand property

- [`shorthand-property-no-redundant-values`](./rules/shorthand-property-no-redundant-values/README.md): Disallow redundant values in shorthand properties (Autofixable).

### Value

- [`value-no-vendor-prefix`](./rules/value-no-vendor-prefix/README.md): Disallow vendor prefixes for values (Autofixable).

### Custom property

- [`custom-property-pattern`](./rules/custom-property-pattern/README.md): Specify a pattern for custom properties.

### Property

- [`property-allowed-list`](./rules/property-allowed-list/README.md): Specify a list of allowed properties.
- [`property-blacklist`](./rules/property-blacklist/README.md): Specify a list of disallowed properties. **(deprecated)**
- [`property-disallowed-list`](./rules/property-disallowed-list/README.md): Specify a list of disallowed properties.
- [`property-no-vendor-prefix`](./rules/property-no-vendor-prefix/README.md): Disallow vendor prefixes for properties (Autofixable).
- [`property-whitelist`](./rules/property-whitelist/README.md): Specify a list of allowed properties. **(deprecated)**

### Declaration

- [`declaration-block-no-redundant-longhand-properties`](./rules/declaration-block-no-redundant-longhand-properties/README.md): Disallow longhand properties that can be combined into one shorthand property.
- [`declaration-no-important`](./rules/declaration-no-important/README.md): Disallow `!important` within declarations.
- [`declaration-property-unit-allowed-list`](./rules/declaration-property-unit-allowed-list/README.md): Specify a list of allowed property and unit pairs within declarations.
- [`declaration-property-unit-blacklist`](./rules/declaration-property-unit-blacklist/README.md): Specify a list of disallowed property and unit pairs within declarations. **(deprecated)**
- [`declaration-property-unit-disallowed-list`](./rules/declaration-property-unit-disallowed-list/README.md): Specify a list of disallowed property and unit pairs within declarations.
- [`declaration-property-unit-whitelist`](./rules/declaration-property-unit-whitelist/README.md): Specify a list of allowed property and unit pairs within declarations. **(deprecated)**
- [`declaration-property-value-allowed-list`](./rules/declaration-property-value-allowed-list/README.md): Specify a list of allowed property and value pairs within declarations.
- [`declaration-property-value-blacklist`](./rules/declaration-property-value-blacklist/README.md): Specify a list of disallowed property and value pairs within declarations. **(deprecated)**
- [`declaration-property-value-disallowed-list`](./rules/declaration-property-value-disallowed-list/README.md): Specify a list of disallowed property and value pairs within declarations.
- [`declaration-property-value-whitelist`](./rules/declaration-property-value-whitelist/README.md): Specify a list of allowed property and value pairs within declarations. **(deprecated)**

### Declaration block

- [`declaration-block-single-line-max-declarations`](./rules/declaration-block-single-line-max-declarations/README.md): Limit the number of declarations within a single-line declaration block.

### Selector

- [`selector-attribute-operator-allowed-list`](./rules/selector-attribute-operator-allowed-list/README.md): Specify a list of allowed attribute operators.
- [`selector-attribute-operator-blacklist`](./rules/selector-attribute-operator-blacklist/README.md): Specify a list of disallowed attribute operators. **(deprecated)**
- [`selector-attribute-operator-disallowed-list`](./rules/selector-attribute-operator-disallowed-list/README.md): Specify a list of disallowed attribute operators.
- [`selector-attribute-operator-whitelist`](./rules/selector-attribute-operator-whitelist/README.md): Specify a list of allowed attribute operators. **(deprecated)**
- [`selector-class-pattern`](./rules/selector-class-pattern/README.md): Specify a pattern for class selectors.
- [`selector-combinator-allowed-list`](./rules/selector-combinator-allowed-list/README.md): Specify a list of allowed combinators.
- [`selector-combinator-blacklist`](./rules/selector-combinator-blacklist/README.md): Specify a list of disallowed combinators. **(deprecated)**
- [`selector-combinator-disallowed-list`](./rules/selector-combinator-disallowed-list/README.md): Specify a list of disallowed combinators.
- [`selector-combinator-whitelist`](./rules/selector-combinator-whitelist/README.md): Specify a list of allowed combinators. **(deprecated)**
- [`selector-id-pattern`](./rules/selector-id-pattern/README.md): Specify a pattern for ID selectors.
- [`selector-max-attribute`](./rules/selector-max-attribute/README.md): Limit the number of attribute selectors in a selector.
- [`selector-max-class`](./rules/selector-max-class/README.md): Limit the number of classes in a selector.
- [`selector-max-combinators`](./rules/selector-max-combinators/README.md): Limit the number of combinators in a selector.
- [`selector-max-compound-selectors`](./rules/selector-max-compound-selectors/README.md): Limit the number of compound selectors in a selector.
- [`selector-max-empty-lines`](./rules/selector-max-empty-lines/README.md): Limit the number of adjacent empty lines within selectors (Autofixable).
- [`selector-max-id`](./rules/selector-max-id/README.md): Limit the number of ID selectors in a selector.
- [`selector-max-pseudo-class`](./rules/selector-max-pseudo-class/README.md): Limit the number of pseudo-classes in a selector.
- [`selector-max-specificity`](./rules/selector-max-specificity/README.md): Limit the specificity of selectors.
- [`selector-max-type`](./rules/selector-max-type/README.md): Limit the number of type in a selector.
- [`selector-max-universal`](./rules/selector-max-universal/README.md): Limit the number of universal selectors in a selector.
- [`selector-nested-pattern`](./rules/selector-nested-pattern/README.md): Specify a pattern for the selectors of rules nested within rules.
- [`selector-no-qualifying-type`](./rules/selector-no-qualifying-type/README.md): Disallow qualifying a selector by type.
- [`selector-no-vendor-prefix`](./rules/selector-no-vendor-prefix/README.md): Disallow vendor prefixes for selectors (Autofixable).
- [`selector-pseudo-class-allowed-list`](./rules/selector-pseudo-class-allowed-list/README.md): Specify a list of allowed pseudo-class selectors.
- [`selector-pseudo-class-blacklist`](./rules/selector-pseudo-class-blacklist/README.md): Specify a list of disallowed pseudo-class selectors. **(deprecated)**
- [`selector-pseudo-class-disallowed-list`](./rules/selector-pseudo-class-disallowed-list/README.md): Specify a list of disallowed pseudo-class selectors.
- [`selector-pseudo-class-whitelist`](./rules/selector-pseudo-class-whitelist/README.md): Specify a list of allowed pseudo-class selectors. **(deprecated)**
- [`selector-pseudo-element-allowed-list`](./rules/selector-pseudo-element-allowed-list/README.md): Specify a list of allowed pseudo-element selectors.
- [`selector-pseudo-element-blacklist`](./rules/selector-pseudo-element-blacklist/README.md): Specify a list of disallowed pseudo-element selectors. **(deprecated)**
- [`selector-pseudo-element-colon-notation`](./rules/selector-pseudo-element-colon-notation/README.md): Specify single or double colon notation for applicable pseudo-elements (Autofixable).
- [`selector-pseudo-element-disallowed-list`](./rules/selector-pseudo-element-disallowed-list/README.md): Specify a list of disallowed pseudo-element selectors.
- [`selector-pseudo-element-whitelist`](./rules/selector-pseudo-element-whitelist/README.md): Specify a list of allowed pseudo-element selectors. **(deprecated)**

### Media feature

- [`media-feature-name-allowed-list`](./rules/media-feature-name-allowed-list/README.md): Specify a list of allowed media feature names.
- [`media-feature-name-blacklist`](./rules/media-feature-name-blacklist/README.md): Specify a list of disallowed media feature names. **(deprecated)**
- [`media-feature-name-disallowed-list`](./rules/media-feature-name-disallowed-list/README.md): Specify a list of disallowed media feature names.
- [`media-feature-name-no-vendor-prefix`](./rules/media-feature-name-no-vendor-prefix/README.md): Disallow vendor prefixes for media feature names (Autofixable).
- [`media-feature-name-value-allowed-list`](./rules/media-feature-name-value-allowed-list/README.md): Specify a list of allowed media feature name and value pairs.
- [`media-feature-name-value-whitelist`](./rules/media-feature-name-value-whitelist/README.md): Specify a list of allowed media feature name and value pairs. **(deprecated)**
- [`media-feature-name-whitelist`](./rules/media-feature-name-whitelist/README.md): Specify a list of allowed media feature names. **(deprecated)**

### Custom media

- [`custom-media-pattern`](./rules/custom-media-pattern/README.md): Specify a pattern for custom media query names.

### At-rule

- [`at-rule-allowed-list`](./rules/at-rule-allowed-list/README.md): Specify a list of allowed at-rules.
- [`at-rule-blacklist`](./rules/at-rule-blacklist/README.md): Specify a list of disallowed at-rules. **(deprecated)**
- [`at-rule-disallowed-list`](./rules/at-rule-disallowed-list/README.md): Specify a list of disallowed at-rules.
- [`at-rule-no-vendor-prefix`](./rules/at-rule-no-vendor-prefix/README.md): Disallow vendor prefixes for at-rules (Autofixable).
- [`at-rule-property-required-list`](./rules/at-rule-property-required-list/README.md): Specify a list of required properties for an at-rule.
- [`at-rule-property-requirelist`](./rules/at-rule-property-requirelist/README.md): Specify a list of required properties for an at-rule. **(deprecated)**
- [`at-rule-whitelist`](./rules/at-rule-whitelist/README.md): Specify a list of allowed at-rules. **(deprecated)**

### Comment

- [`comment-pattern`](./rules/comment-pattern/README.md): Specify a pattern for comments.
- [`comment-word-blacklist`](./rules/comment-word-blacklist/README.md): Specify a list of disallowed words within comments. **(deprecated)**
- [`comment-word-disallowed-list`](./rules/comment-word-disallowed-list/README.md): Specify a list of disallowed words within comments.

### General / Sheet

- [`max-nesting-depth`](./rules/max-nesting-depth/README.md): Limit the depth of nesting.
- [`no-unknown-animations`](./rules/no-unknown-animations/README.md): Disallow unknown animations.

## Stylistic issues

### Color

- [`color-hex-case`](./rules/color-hex-case/README.md): Specify lowercase or uppercase for hex colors (Autofixable).
- [`color-hex-length`](./rules/color-hex-length/README.md): Specify short or long notation for hex colors (Autofixable).

### Font family

- [`font-family-name-quotes`](./rules/font-family-name-quotes/README.md): Specify whether or not quotation marks should be used around font family names.

### Function

- [`function-comma-newline-after`](./rules/function-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of functions (Autofixable).
- [`function-comma-newline-before`](./rules/function-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of functions (Autofixable).
- [`function-comma-space-after`](./rules/function-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of functions (Autofixable).
- [`function-comma-space-before`](./rules/function-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of functions (Autofixable).
- [`function-max-empty-lines`](./rules/function-max-empty-lines/README.md): Limit the number of adjacent empty lines within functions (Autofixable).
- [`function-name-case`](./rules/function-name-case/README.md): Specify lowercase or uppercase for function names (Autofixable).
- [`function-parentheses-newline-inside`](./rules/function-parentheses-newline-inside/README.md): Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).
- [`function-parentheses-space-inside`](./rules/function-parentheses-space-inside/README.md): Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).
- [`function-url-quotes`](./rules/function-url-quotes/README.md): Require or disallow quotes for urls.
- [`function-whitespace-after`](./rules/function-whitespace-after/README.md): Require or disallow whitespace after functions (Autofixable).

### Number

- [`number-leading-zero`](./rules/number-leading-zero/README.md): Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
- [`number-no-trailing-zeros`](./rules/number-no-trailing-zeros/README.md): Disallow trailing zeros in numbers (Autofixable).

### String

- [`string-quotes`](./rules/string-quotes/README.md): Specify single or double quotes around strings (Autofixable).

### Unit

- [`unit-case`](./rules/unit-case/README.md): Specify lowercase or uppercase for units (Autofixable).

### Value

- [`value-keyword-case`](./rules/value-keyword-case/README.md): Specify lowercase or uppercase for keywords values (Autofixable).

### Value list

- [`value-list-comma-newline-after`](./rules/value-list-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of value lists (Autofixable).
- [`value-list-comma-newline-before`](./rules/value-list-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of value lists.
- [`value-list-comma-space-after`](./rules/value-list-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of value lists (Autofixable).
- [`value-list-comma-space-before`](./rules/value-list-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of value lists (Autofixable).
- [`value-list-max-empty-lines`](./rules/value-list-max-empty-lines/README.md): Limit the number of adjacent empty lines within value lists (Autofixable).

### Custom property

- [`custom-property-empty-line-before`](./rules/custom-property-empty-line-before/README.md): Require or disallow an empty line before custom properties (Autofixable).

### Property

- [`property-case`](./rules/property-case/README.md): Specify lowercase or uppercase for properties (Autofixable).

### Declaration

- [`declaration-bang-space-after`](./rules/declaration-bang-space-after/README.md): Require a single space or disallow whitespace after the bang of declarations (Autofixable).
- [`declaration-bang-space-before`](./rules/declaration-bang-space-before/README.md): Require a single space or disallow whitespace before the bang of declarations (Autofixable).
- [`declaration-colon-newline-after`](./rules/declaration-colon-newline-after/README.md): Require a newline or disallow whitespace after the colon of declarations (Autofixable).
- [`declaration-colon-space-after`](./rules/declaration-colon-space-after/README.md): Require a single space or disallow whitespace after the colon of declarations (Autofixable).
- [`declaration-colon-space-before`](./rules/declaration-colon-space-before/README.md): Require a single space or disallow whitespace before the colon of declarations (Autofixable).
- [`declaration-empty-line-before`](./rules/declaration-empty-line-before/README.md): Require or disallow an empty line before declarations (Autofixable).

### Declaration block

- [`declaration-block-semicolon-newline-after`](./rules/declaration-block-semicolon-newline-after/README.md): Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).
- [`declaration-block-semicolon-newline-before`](./rules/declaration-block-semicolon-newline-before/README.md): Require a newline or disallow whitespace before the semicolons of declaration blocks.
- [`declaration-block-semicolon-space-after`](./rules/declaration-block-semicolon-space-after/README.md): Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).
- [`declaration-block-semicolon-space-before`](./rules/declaration-block-semicolon-space-before/README.md): Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).
- [`declaration-block-trailing-semicolon`](./rules/declaration-block-trailing-semicolon/README.md): Require or disallow a trailing semicolon within declaration blocks (Autofixable).

### Block

- [`block-closing-brace-empty-line-before`](./rules/block-closing-brace-empty-line-before/README.md): Require or disallow an empty line before the closing brace of blocks (Autofixable).
- [`block-closing-brace-newline-after`](./rules/block-closing-brace-newline-after/README.md): Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).
- [`block-closing-brace-newline-before`](./rules/block-closing-brace-newline-before/README.md): Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).
- [`block-closing-brace-space-after`](./rules/block-closing-brace-space-after/README.md): Require a single space or disallow whitespace after the closing brace of blocks.
- [`block-closing-brace-space-before`](./rules/block-closing-brace-space-before/README.md): Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).
- [`block-opening-brace-newline-after`](./rules/block-opening-brace-newline-after/README.md): Require a newline after the opening brace of blocks (Autofixable).
- [`block-opening-brace-newline-before`](./rules/block-opening-brace-newline-before/README.md): Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).
- [`block-opening-brace-space-after`](./rules/block-opening-brace-space-after/README.md): Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).
- [`block-opening-brace-space-before`](./rules/block-opening-brace-space-before/README.md): Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).

### Selector

- [`selector-attribute-brackets-space-inside`](./rules/selector-attribute-brackets-space-inside/README.md): Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).
- [`selector-attribute-operator-space-after`](./rules/selector-attribute-operator-space-after/README.md): Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).
- [`selector-attribute-operator-space-before`](./rules/selector-attribute-operator-space-before/README.md): Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).
- [`selector-attribute-quotes`](./rules/selector-attribute-quotes/README.md): Require or disallow quotes for attribute values.
- [`selector-combinator-space-after`](./rules/selector-combinator-space-after/README.md): Require a single space or disallow whitespace after the combinators of selectors (Autofixable).
- [`selector-combinator-space-before`](./rules/selector-combinator-space-before/README.md): Require a single space or disallow whitespace before the combinators of selectors (Autofixable).
- [`selector-descendant-combinator-no-non-space`](./rules/selector-descendant-combinator-no-non-space/README.md): Disallow non-space characters for descendant combinators of selectors (Autofixable).
- [`selector-pseudo-class-case`](./rules/selector-pseudo-class-case/README.md): Specify lowercase or uppercase for pseudo-class selectors (Autofixable).
- [`selector-pseudo-class-parentheses-space-inside`](./rules/selector-pseudo-class-parentheses-space-inside/README.md): Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).
- [`selector-pseudo-element-case`](./rules/selector-pseudo-element-case/README.md): Specify lowercase or uppercase for pseudo-element selectors (Autofixable).
- [`selector-type-case`](./rules/selector-type-case/README.md): Specify lowercase or uppercase for type selectors (Autofixable).

### Selector list

- [`selector-list-comma-newline-after`](./rules/selector-list-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
- [`selector-list-comma-newline-before`](./rules/selector-list-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of selector lists (Autofixable).
- [`selector-list-comma-space-after`](./rules/selector-list-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of selector lists (Autofixable).
- [`selector-list-comma-space-before`](./rules/selector-list-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of selector lists (Autofixable).

### Rule

- [`rule-empty-line-before`](./rules/rule-empty-line-before/README.md): Require or disallow an empty line before rules (Autofixable).

### Media feature

- [`media-feature-colon-space-after`](./rules/media-feature-colon-space-after/README.md): Require a single space or disallow whitespace after the colon in media features (Autofixable).
- [`media-feature-colon-space-before`](./rules/media-feature-colon-space-before/README.md): Require a single space or disallow whitespace before the colon in media features (Autofixable).
- [`media-feature-name-case`](./rules/media-feature-name-case/README.md): Specify lowercase or uppercase for media feature names (Autofixable).
- [`media-feature-parentheses-space-inside`](./rules/media-feature-parentheses-space-inside/README.md): Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).
- [`media-feature-range-operator-space-after`](./rules/media-feature-range-operator-space-after/README.md): Require a single space or disallow whitespace after the range operator in media features (Autofixable).
- [`media-feature-range-operator-space-before`](./rules/media-feature-range-operator-space-before/README.md): Require a single space or disallow whitespace before the range operator in media features (Autofixable).

### Media query list

- [`media-query-list-comma-newline-after`](./rules/media-query-list-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of media query lists (Autofixable).
- [`media-query-list-comma-newline-before`](./rules/media-query-list-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of media query lists.
- [`media-query-list-comma-space-after`](./rules/media-query-list-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of media query lists (Autofixable).
- [`media-query-list-comma-space-before`](./rules/media-query-list-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of media query lists (Autofixable).

### At-rule

- [`at-rule-empty-line-before`](./rules/at-rule-empty-line-before/README.md): Require or disallow an empty line before at-rules (Autofixable).
- [`at-rule-name-case`](./rules/at-rule-name-case/README.md): Specify lowercase or uppercase for at-rules names (Autofixable).
- [`at-rule-name-newline-after`](./rules/at-rule-name-newline-after/README.md): Require a newline after at-rule names.
- [`at-rule-name-space-after`](./rules/at-rule-name-space-after/README.md): Require a single space after at-rule names (Autofixable).
- [`at-rule-semicolon-newline-after`](./rules/at-rule-semicolon-newline-after/README.md): Require a newline after the semicolon of at-rules (Autofixable).
- [`at-rule-semicolon-space-before`](./rules/at-rule-semicolon-space-before/README.md): Require a single space or disallow whitespace before the semicolons of at-rules.

### Comment

- [`comment-empty-line-before`](./rules/comment-empty-line-before/README.md): Require or disallow an empty line before comments (Autofixable).
- [`comment-whitespace-inside`](./rules/comment-whitespace-inside/README.md): Require or disallow whitespace on the inside of comment markers (Autofixable).

### General / Sheet

- [`indentation`](./rules/indentation/README.md): Specify indentation (Autofixable).
- [`linebreaks`](./rules/linebreaks/README.md): Specify unix or windows linebreaks (Autofixable).
- [`max-empty-lines`](./rules/max-empty-lines/README.md): Limit the number of adjacent empty lines (Autofixable).
- [`max-line-length`](./rules/max-line-length/README.md): Limit the length of a line.
- [`no-eol-whitespace`](./rules/no-eol-whitespace/README.md): Disallow end-of-line whitespace (Autofixable).
- [`no-missing-end-of-source-newline`](./rules/no-missing-end-of-source-newline/README.md): Disallow missing end-of-source newlines (Autofixable).
- [`no-empty-first-line`](./rules/no-empty-first-line/README.md): Disallow empty first lines (Autofixable).
- [`unicode-bom`](./rules/unicode-bom/README.md): Require or disallow Unicode BOM.
