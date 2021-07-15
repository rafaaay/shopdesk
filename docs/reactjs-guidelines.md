# Coding Guidelines - ReactJS



## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Naming](#naming)
  1. [Declaration](#declaration)
  1. [Alignment](#alignment)
  1. [Quotes](#quotes)
  1. [Spacing](#spacing)
  1. [Props](#props)
  1. [Parentheses](#parentheses)
  1. [Tags](#tags)
  1. [Methods](#methods)
  1. [Ordering](#ordering)
  1. [Rules for crafting good components](#crafting)
  
  
  

## Basic Rules

- Only include one React component per file.
- Always use JSX syntax.
- Do not use `React.createElement` unless you're initializing the app from a file that is not JSX.



## Naming
- File- and component name need to be identical.
- Use PascalCase naming convention for component name, e.g. const GlobalHeader = (props) = > { ... }

```javascript
// Bad
// Filename: foo.js

class Foo extends React.Component {}

export default Foo;


// Good
// Filename: foo/index.js

class Foo extends React.Component {}

export default Foo;
```



## Ordering

- Ordering for class extends React.Component:

1. constructor
1. optional static methods
1. getChildContext
1. componentWillMount
1. componentDidMount
1. componentWillReceiveProps
1. shouldComponentUpdate
1. componentWillUpdate
1. componentDidUpdate
1. componentWillUnmount
1. *clickHandlers or eventHandlers* like onClickSubmit() or onChangeDescription()
1. *getter methods for render* like getSelectReason() or getFooterContent()
1. *Optional render methods* like renderNavigation() or renderProfilePicture()
1. render

- How to define propTypes, defaultProps, contextTypes, etc...  

```javascript
import React, { Component, PropTypes } from 'react';

const propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
};

const defaultProps = {
    text: 'Hello World',
};

export default class Link extends Component {
    static methodsAreOk() {
        return true;
    }

    render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
    }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
```


## Alignment
- Follow these alignment styles for JSX syntax

```javascript
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
    <Spazz />
</Foo>
```


## Quotes

- Always use double quotes (`"`) for JSX attributes, but single quotes for all other JS.

```javascript
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />




## Props
- Always use camelCase for prop names.

```javascript
// bad
<Foo
    UserName="hello"
    phone_number={12345678}
/>

// good
<Foo
    userName="hello"
    phoneNumber={12345678}
/>
```



## Tags
- Always self-close tags that have no children.

```javascript
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

- If your component has multi-line properties, close its tag on a new line.
```javascript
// bad
<Foo
    bar="bar"
    baz="baz" />

// good
<Foo
    bar="bar"
    baz="baz"
/>
```


## Stateless function components
For stateless components use the function syntax, introduced in React 0.14.

```javascript
// Using an ES2015 (ES6) arrow function:
var Aquarium = (props) => {
    var fish = getFish(props.species);
    return <Tank>{fish}</Tank>;
};

// Or with destructuring and an implicit return, simply:
var Aquarium = ({species}) => (
    <Tank>
        {getFish(species)}
    </Tank>
);

// Then use: <Aquarium species="rainbowfish" />
```

[Read More](http://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components)



## PropTypes declarations

- Setting propTypes declarations is mandatory
- Group them into required/none-required
- Alphabetically sort each group
- Separate them by a new line

```javascript
static propTypes = {
    blank: React.PropTypes.bool.isRequired,
    block: React.PropTypes.bool.isRequired,
    size: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
};
```


## Prefixing none React methods
Prefix all none React methods within a component with an underscore.

```javascript
class Foo extends React.Component {

    componentDidMount() {
        this._update();
    }
    
    _update() {
        // e.g. update position
    }
    
    render() {
        return (
            <div>foo</div>
        );
    }
}   
```

## Prefixing component wide variables
In the exception that you do not want to place a component wide variables on the state, you have to prefix it with an underscore.

```javascript
class Foo extends React.Component {

    componentDidMount() {
        this._el = React.FindDOMNode(this.refs.foo);
    }
    
    render() {
        return (
            <div>foo</div>
        );
    }
}   
```


## Using handler methods

- Name methods using `'_handle' + triggering event`, e.g. `_handleClick`
- Bind handler using the ES6 arrow syntax, so inside the callback it has always the right context

```javascript
class Foo extends React.Component {

    _handleClick = (e) => {
        this.setState(
            {
                clicked: true
            }
        );
    }
    
    render() {
        return (
            <button onClick={this._handleClick}>Submit</button>
        );
    }
}
```



## Using “container” components for loading data from Stores


```javascript
// CommentListContainer.js

class CommentListContainer extends React.Component {
    constructor() {
        super();
        this.state = { comments: [] }
    }
    componentDidMount() {
        $.ajax({
            url: "/my-comments.json",
            dataType: 'json',
            success: function(comments) {
            this.setState({comments: comments});
            }.bind(this)
        });
    }
    render() {
        return <CommentList comments={this.state.comments} />;
    }
}



// CommentList.js

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }
    _renderComment({body, author}) {
        return <li>{body}—{author}</li>;
    }
    render() { 
        return <ul> {this.props.comments.map(_renderComment)} </ul>;
    }
}
```

Source: https://medium.com/@learnreact/container-components-c0e67432e005



## Closing Components without children

```javascript
render() {
    return (
        <Foo>
            <Bar />
        </Foo>
    );
}
```


## List iterations

When rendering a list of components from an array, do it inline if it makes sense. If the map function is too long or complicated, consider extracting it out into its own method on the component class.

```javascript
render() {
    return (
        <ul>
            {this.state.fooList.map(fooItem => <FooItem>{fooItem}</FooItem>)}
        </ul>
    );
}
```


## Formatting Attributes

```javascript
<input
    type="text"
    value={this.state.foo}
    onChange={this._handleInputChange.bind(this, 'foo')}
/>
```



## Inline CSS styles
Static properties should be set in the SCSS, dynamic ones in JS.

```css
.Foo {
    background-color: #ff0;
}
```

```javascript
class Foo extends React.Component {

    render() {
        
        const styles = {
            'transform': 'translateX(' + this.state.position + ' + px)'
        };
    
        return (
            <div className="Foo" styles={classes}>Foo Header</div>
        )
    };

}
```


## Crafting

Here are some good rules for a high-quality react-redux app.

We're in the process of reworking our app to make it more maintainable. In a previous meeting we discussed the general [rules of thumb for writing maintainable code](https://gist.github.com/heygrady/5df80c50821465b30186b03037e885f7). Here we're going to be covering rules of thumb for writing good components.

1. Components should do one thing.
   - We use [BEM](http://getbem.com/naming/) as a guide.
   - A nested "block" should be a standalone component.
2. Prefer stateless functional components.
   - Avoid using `setState` unless absolutely necessary.
   - Avoid using lifecycle methods unless absolutely necessary.
   - Prefer to move state logic to redux
3. Components should fetch their own data (in a container).
   - If a component needs a value from redux it should have a dedicated container
   - **Never** pass a redux-derived value as a prop
4. Only pass shallow props.
   - `mapStateToProps` should only return the _specific_ values the component uses.
   - Avoid passing arrays or objects unless absolutely necessary
   - Avoid spreading props unless you're writing a higher-order-component
   - Prefer to pass scalar values (strings and numbers) whenever possible
5. Memoize derived data.
   - **Never** memoize a simple selector: Simple redux selectors (like `return state.key`) are _already_ memoized!
   - **Optional:** Selectors that create strings (like `return 'Name: ' + state.key`) do not necessarily need memoized. They will return values that work with shallow equality.
   - **Always:** Selectors that create objects (like `return { value: state.key }`) _must be_ memoized!
   - **Always:** Selectors that create arrays (like `return state.list.filter(a => a.active)`) _must be_ memoized!
6. Memoize bound functions.
   - Binding functions returns a new functions, which are considered new props.
   - Creating a bound function inside a render function will result in unnecessary re-renders.

## A quick note on nesting

In a react app there is no formal directory structure that you have to follow. Because we're using `import` statements, the code we reference can live just about anywhere.

Most projects create a `src/components` folder to house their apps components. One thing that isn't immediately clear is what to do when you have a dozens and dozens of components. One good option is nesting.

```
src/components/
  Detail/
    Header/ <-- a nested component
    Info/
    Detail.js
    Detail.less
    Detail.spec.js
    DetailContainer.js
    index.js
```

1. Use the same casing you use for the ComponentName for the folder and the styles
2. Keep the container in a separate file
3. Keep the test in the same folder as the component
4. Prefer terse names for nested components

It's helpful to follow a progression from component-as-single-file to component-as-directoty. Perhaps when you first start working on your app you have a `components/Detail.js` component. But soon you realize that `Detail` needs to have nested sub-components as well as helpers and other associated code. What's nice about the way `import` works is that you can simply move the `Details.js` into a new `Details/` folder with an `index.js` file. This allows any component that was previously including `<Detail />` to work as it always did. This type of refactor is easy to do as you go along.

### Nesting too deep?

One concern about nesting is that you could end up nesting "too deep". Obviously, if you end up with a `components/` folder tree that is 20+ levels deep you have done something seriously wrong. Typically you wouldn't expect nesting more than 4 or 5 levels deep.

How can you avoid nesting too deep? Consider if a nested component can "move to the top". Sometimes we start out considering a sub-component as "belonging" to its parent. But often the component itself is a standalone concept. Yes, the `<ItemList />` belongs _in_ the `<Sidebar />`... but does it belong _to_ the sidebar? Perhaps the `ItemList` folder can exist at top-level of the component tree.

```
src/components/
  Sidebar/
  ItemList/ <-- imported by sidebar, but not nested within it
```

It's not easy to know exactly when a sub-component is a standalone concept that can exist at the top level. A good approach is to nest everything as you're sketching out your app and refactor as needed.

### When to "move something up"

What are some obvious signs something needs moved up in the folder tree?

1. If your sub-component is used with two very different places. Imagine if `<ItemList />` is used in both `<Sidebar />` and in `<SimilarItems />`.
2. If your sub-component deals with a major section of the page. Imagine that your `ItemDetail` component contains a `Slideshow` and a `Comments` block. Those are standalone concepts even though they are only ever used in `ItemDetail`.
3. If your sub-component has 3 or 4 levels of nesting beneath it... it's probably safe to consider it a "high-level" component and bounce it to the top.

## Components should do one thing

In a proper react-redux application you should probably be using CSS modules. However, the old days of CSS still have some lessons to teach us about structuring our template code. We use [BEM](http://getbem.com/introduction/) as a guide to help us understand when to break code our into separate components. We don't actually use BEM itself. It's just a helpful way to think about the relationship of verias template elements.

The point of the "do one thing" rule is to prevent us from creating sprawling, complex and difficult to maintain components. The more we can move the logic "out" of a component the better. The result is that we'll have many small components that handle small pieces of the page instead of large monolithic components that do lots of things.

In any app that has been around for a while, top-level components can end up taking on too much responsibility. Once a component starts to have a few different things it becomes hard to trace back which code relates to which reature. After a year, it may not be intuitive to that the code for `<BackButton />` label lives three levels up in the `<Sidebar />`.

It's hard to know precisely _when_ to break functionality into a separate component. Using BEM guidelines is as good of a rule as you could hope for.

Consider creating a sub-component when...

1. Your component has a nested "block"
2. Your component has html nested 3 or 4 levels deep
3. Your component is over 10 to 20 lines of template code
4. Your component takes more than 7 props
5. Your component contains `getFoo` or `renderFoo` functions that return snippets of JSX

## Prefer stateless functional components

While we're making lots of small components that do as little as possible, it's good to keep things simple and use a stateless functional component. They're easier to write, easier to maintain and force you to keep things bare bones.

Functional components aren't any great performance enhancement on their own. React doesn't apply any performance enhancements to them or a class component. However, preferring functional components can speed up your application by enforcing discipline. In a class component there are too many hooks that can encourage abuse.

What kind of abuse? You may enjoy reading ["`React.PureComponent` Considered Harmful"](https://hackernoon.com/react-purecomponent-considered-harmful-8155b5c1d4bc) and ["Should I use `shouldComponentUpdate`"](http://jamesknelson.com/should-i-use-shouldcomponentupdate/).

> The React team called `shouldComponentUpdate` a performance escape hatch for a reason &mdash; and you’d better bloody well hope that an escape hatch isn’t meant for regular use.

The React team has [written plenty](https://twitter.com/dan_abramov/status/820668074223353858?lang=en) about overapplying performance tricks. In the case of `PureComponent` and `shouldComponentUpdate`, you can end up making things worse. Typically the best performance enhancement you can make is to keep your props simple, shallow and immutable.

The point here is that unless your component is doing something special it doesn't _need_ to be a class. Of course, there are great reasons to use a class to handle advanved things that require lifecycle events. However, _most_ components should work just fine as stateless functional components.

- Avoid using `setState` unless you are doing something tricky
- Avoid `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate` (see [here](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)
- Prefer to move state to redux; rely heavily on `mapStateToProps` and `mapDispatchToProps`

Consider the following stateless functional component:

- [x] Does only one thing
- [x] Uses shallow props
- [x] Doesn't care where `title` comes from as long as it's a string

```js
import React from 'react'
import PropTypes from 'prop-types'

const Simple = ({ title }) => <div>{title}</div>
Simple.propTypes = {
  title: PropTypes.string
}

export default Simple
```

### When is `setState` allowed? Almost never.

The _only_ places where `setState` is helpful are when you need to track something in the DOM that the component controls. It seems like a good rule of thumb to use `setState` for values that "don't belong in redux", but that can be a little too vague.

What doesn't belong in redux? I would define that narrowly as anything that has to do with realtime user interaction. So, mouse movement, scroll, resize and keyboard events should be managed at the component level. If those event result in new application state, they should only be dispatched periodically to redux. A general rule is that "noisy" state values (values that could change dozens of times a second) should be managed by the component.

However, click events usually _do_ belong in redux. If a user clicked something, the app needs to know. If the user hovered something, well, that might be less interesting.

When to use `setState`...
- Tracking hover state with `onMouseEnter` and `onMouseLeave`
- Buffering keyboard events, like typing in a form input
- Buffering scroll and resize events
- In a higher-order-component

### Never copy redux state to component state

One common mistake is to copy a prop value that came from `mapStateToProps` into the component's internal state. _Never do this!_

Copying redux values into internal state creates bugs that are difficult to trace. Inevitably there will be instances where a value doesn't appear to be updating. There should never be a case where a prop needs to be cached in internal state &mdash; `mapStateToProps` will update that value only when it changes. If you copy the prop into internal state you need to keep it updated using a lifecycle event... and we're trying to avoid those whenever possible. Maintaining a value in two places _creates_ work and we're trying to reduce it.

## Components should fetch their own data (in a container)

Another common mistake is to see a `connect` function as something sacred. It's not. In fact, it's extremely cheap (and possibly a performance enhancement) to use `connect` as much as possible. If you're the type of person that intuitively thinks that every component should be wrapped in a "pure" shallow compare function... you might just _love_ `connect`.

React-redux's `connect` function does some pretty amazing things. One thing that's easy to overlook is that it implements shallow compare, making any component that's wrapped in a container into a pure component!

Another good thing about `connect` is that it avoids the need to re-render parent components. If you passing passing props form grandparents to grandchildren, you can cause a lot of "middle" components to re-render. With `connect`, new value are injected directly into the components that need them.

A confusing aspect of `connect` is that it will recalculate props any time that state changes. That means that any state change will cause many doezens of container components to call `mapStateToProps`. This can seem like a performance killer, but in practice it's not. If you're following good practices in your `mapStateToProps` (using selectors) then it should be able to recalculate nearly instantaneously. Then `connect` begins to work its magic.

First, it performs a shallow compare of the props returned by `mapStateToProps` and will only re-render the child component when those props change. Second, it will cache `mapDispatchToProps` until `ownProps` changes. You can normally increase performance by omitting the `ownProps` argument in your `mapStateToProps` and `mapDispatchToProps` functions.

The crucial point here is that it does a shallow compare before triggering a re-render. Meaning, state changes won't trigger your component to re-render if you return _exactly_ the same props.

```js
import connect from 'react-redux'

import { selectItemTitle } from 'modules/item/selectors'
import Simple from './Simple'

const mapStateToProps = state => ({
  title: selectItemTitle(state) // <-- return the title, not the entire item
})

const SimpleContainer = connect(mapStateToProps)(Simple)
export SimpleContainer
```

In the example above, note that the title is just a string. If the title doesn't change, the component won't re-render.

### A quick note on `defaultProps` and `isRequired`

I usually go with the mantra of "`defaultProps` considered harmful." Why? Because setting default props on your component smells like bad interface design. Typically you should design your component to render properly even if every prop is `undefined`. The idea is to mimic the HTML spec as much as possible. With very few exceptions, HTML elements allow every attribute to be undefined. I like to think of my react components like they're HTML elements.

First, `undefined` is a good enough falsey value. Think of the HTML `<input type="checkbox" checked />`. If `checked` is undefined, then it's presumed to be unchecked. You should design your boolean props to be falsey by default. That way you won't need a `defaultProp`.

Second, `undefined` is a good enough empty string. Think of something like a `<span title="hello" />`. Title is totally optional. It it's undefined then it is presumed to not have a title. Again, no need for a default title.

There are cases where you do need default props, but it should be considered the rare case. An `<input />` with no attributes is presumed to have a `type="text"`; it needs a default type attribute to function. In your whole code base you should expect to have a low number (like, less than 5%) of components that actualkly _need_ `defaultProps`.

What about adding `isRequired` to your `propTypes`? Again, use it as sparingly as possible. Always opt for a component design that allows the component to render with `undefined` for every prop. Consider something like a `<Headline />` component. If you don't supply it with `children` it won't render anything interesting. But are children _required_? Probably not.

There are cases where the logic for creating your component would get too messy to have to guard against a vital prop being undefined. That's the true purpose of `isRequired` &mdash; to guard against faulure states.

- Avoid default props for booleans; prefer undefined as the falsey case
- Avoid default props for strings and numbers; let undefined be undefined
- Avoid default props for functions
- Avoid `isRequired` for booleans, strings and numbers
- Avoid `isRequired` for functions
- Avoid `isRequired` for arrays; return null if array is undefined or empty

## Only pass shallow props

Another common mistake is to pass the entire item into the component when we only need one specific value. It's important for performance and maintainability to be precise.

Inside the component, it's more useful to see a single ready-to-use props like `title` than an opaque object like `item`. The prop type validations for `title` are way easier to write &mdash; it's a string. The prop type for `item` should probably be a shape, but most people will just go with "object".

Passing the entire item from `mapStateToProps` into the component is like leaving a mystery for a future developer to unravel. It can make it difficult to trace exactly how that item is used in the component.

It also makes the component much hard to reason about. In the example below we're moving work from the container to the component, which is the exact opposite of what we want to do. Instead, _prefer to pass work from components to containers_. And while you're at it, pass work from `mapStateToProps` to selectors. Meaning, it's much easier to maintain an app where selectors do the heavy lifting and `connect` functions simply map the required state values to component props.

It's easier to maintain a component that receives ready-to-use props. It's easy to maintain a `mapStateToProps` that outputs ready-to-use props. And it's pretty easy to write the selectors to support your `mapStateToProps` functions. Doing work in the right place makes things _easier_.

**Don't do this:**

```js
import connect from 'react-redux'

import { selectItem } from 'modules/item/selectors'
import Simple from './Simple'

const mapStateToProps = state => ({
  item: selectItem(state) // <-- passing too much
})

const SimpleContainer = connect(mapStateToProps)(Simple)
export SimpleContainer

// ---

import React from 'react'
import PropTypes from 'prop-types'

const Simple = ({ item }) => (
  <div>
    {item.data.title /* <-- might throw if item or data is undefined */}
  </div>
)
Simple.propTypes = {
  item: PropTypes.object // <-- useless prop type
}

export default Simple
```

### Prefer scalar values whenever possible

Avoid passing arrays or objects unless absolutely necessary. Because shallow equality relies on `===`, it matters that the props we pass will evaluate as _exactly_ equal. That's pretty straightforward with a string or a number. However, it's far to easy to have an object that contains the exact same values but is _technically_ a different object.

When the props are technically different it causes react to re-render. This isn't as terrible as it sounds, react is really fast and usually renders are cheap. However, when the props change react has no choice but to re-render and see if the DOM needs to update as a result.

To avoid those cases, we should always prefer to pass the _specific_ scalar values we need from an object rather than passing the whole object.

It's difficult to avoid passing arrays altogether but it's important to recognize that arrays have the same equality issue. Anytime you pass an array you should be sure that it's absolutely required, and that you ensure the array stays _exactly_ the same to avoid unnecessary re-renders.

### Avoid spreading props unless you're writing a higher-order-component

Spreading props is a useful tool but it's easy to abuse. The bad thing about prop spreading is that it makes it impossible to know what props are bing passed into the component. All too often a future developer will be trying to figure out where a prop comes from. If you spread that prop into the component a few levels up, there is nothing to search the codebase for. Imagine trying to figure out where `title` gets set. You might be surprised to realize it's coming from an item spread somewhere.

**Don't do this:**

Where does title come from? God only knows.

```js
const ItemList = ({items}) => (
  <div>
    {items.map(item => (
      // we're spreading unknown numbers of keys as props just to get the title!
      <Simple key={item.id} {...item} />
    ))}
  </div>
)
```

**Prefer this:**

Oh, cool! Title comes from item!

```js
const ItemList = ({items}) => (
  <div>
    {items.map(({ id, title }) => (
      // we're grabbing the two values we need!
      <Simple key={id} title={title} />
    ))}
  </div>
)
```

## Memoize derived data

A common performance enhancement is memoizing your selectors. It's important enough that there is an official react library ([reselect](https://github.com/reactjs/reselect)) to handle this. ([I wrote one too](https://github.com/heygrady/redux-selectors)). The point of memoizing selectors is to ensure that we return consistent results, which will give the shallow compare that `connect` performs the best chance at avoiding unnecessary re-renders.

However, **never** memoize a simple selector. A simple redux selectors (like `return state.key`) is _already_ memoized! It would be impossible to write a cache function that is faster that simply reading keys from an object. If a selector only selects keys, you're work is done.

The main reason that reselect exists is for when your selector _does work_. Typically that means that it loops an array. Imagine a selector that pulls a specific object out of an array. If that array had a few hundred items in it a memoizer will be a big help.

For our purposes, we're concerned about returning the _same_ object each time. There are times when you need to write a selector that constructs a brand new object from state. It might be relatively cheap to create that object but the fact the object always changes can lead to unnecessary re-renders. Selectors that create objects (like `return { value: state.key }`) _must be_ memoized! Similarly, selectors that create arrays (like `return state.items.filter(item => item.active)`) _must be_ memoized!

Selectors that create strings (like `return 'Name: ' + state.key`) do not necessarily need memoized. They will return values that work with shallow equality and it's unlikely that a cache lookup would be faster than concatenating strings.

Here's a perfect example of a "derived" object. This selector will return a new object every time it's called. This should be memoized, otherwise it will appear that the value is changing even when it hasn't.

**Don't do this:**

We're returning a derived object. This selector will return a new object every time we call this function, even if state hasn't changed.

```js
export const selectSimpleItem = state => ({
  title: selectItemTitle(state),
  description: selectPageDescription(state)
})
```

**Prefer this:**

By memoizing the selector we can ensure that we'll return the same object for the same state.

```js
import { memoizeSelector } from '@comfy/redux-selectors'

export const selectSimpleItem = memoizeSelector(state => ({
  title: selectItemTitle(state),
  description: selectPageDescription(state)
}))
```

## Memoize bound functions

A less common optimization is to memoize your function bindings. Consider this example:

```js
import React from 'react'
import PropTypes from 'prop-types'

const ItemList = ({ items, onClick }) => (
  <div>
    {items.map(({ id, title }) => (
      <div
        key={id}
        onClick={() => onClick(id)}
      >
        {title}
      </div>
    ))}
  </div>
)
ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.function.isRequired
}

export default ItemList
```

It's may not be obvious but this can cause unnecessary re-renders. The issue here is that the `onClick` function is being bound to the `item` _every time_ we render the list. That means that `onClick` will _always_ be different. Any time you create a function within a render function you run the risk of creating unnecessary re-renders.

How to fix this issue? Memoize your function binding like you would your selectors. There's isn't a ready-made solution for this that I'm aware of. So, here's one that might work for you. Play with it [here](https://repl.it/@heygrady/memoizeBind).

```js
const KEY_MARKER = 'createKeyMap/KEY_MARKER'
const UNDEFINED_STATE = 'createKeyMap/UNDEFINED_STATE'

// Turn an array of args into a Map tree
// The last leaf of the tree holds the args as a Set
// This set can be used as a cache key in a Map or WeakMap
const createKeyMap = () => {
  const keyCache = new Map()
  const keyMarker = { KEY_MARKER }
  const undefinedState = { UNDEFINED_STATE }

  return args => {
    const lastIndex = args.length - 1
    if (args.length === 0) {
      return undefinedState
    }
    if (lastIndex === 0) {
      return args[0]
    }
    return args.reduce((map, arg, i) => {
      if (!map.has(arg)) {
        const nestedMap = new Map()
        map.set(arg, nestedMap)
      }
      if (i === lastIndex) {
        const nestedMap = map.get(arg)
        if (!nestedMap.has(keyMarker)) {
          nestedMap.set(keyMarker, new Set(args))
        }
        return nestedMap.get(keyMarker)
      }
      return map.get(arg)
    }, keyCache)
  }
}

// Use the args key to create a Map cache
// Return the cached boundFunc whenever possible
export const memoizeBind = func => {
  let cache = new Map()
  let getKey = createKeyMap()
  return (...args) => {
    const key = getKey(args)
    if (!cache.has(key)) {
      const boundFunc = event => func(...args, event)
      cache.set(key, boundFunc)
      return boundFunc
    }
    return cache.get(key)
  }
}
```

It's a curried function.

1. First call, pass in the function you want to bind &mdash; do this in `mapDispatchToProps`
2. Second call, pass in the args you want to bind to that function &mdash; do this in the component
3. Third call is expected to be fired by the `onClick` event

And you'd use it like this:

```js
import connect from 'react-redux'

import { memoizeBind } from 'utils'
import { selectItems } from 'modules/item/selectors'
import { toggleItem } from 'modules/item/actions'

import ItemList from './ItemList'

const mapStateToProps = state => ({
  items: selectItems(state)
})

const mapDispatchToProps = dispatch => ({
  // 1. we memoize our function in the container (or in the class constructor)
  bindOnClick: memoizeBind((id, event) => {
    // 3. notice that the last argument is the event
    event.preventDefault()
    dispatch(toggleItem(id))
  })
})

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList)
export ItemListContainer

// ---

import React from 'react'
import PropTypes from 'prop-types'

const ItemList = ({ items, onClick }) => (
  <div>
    {items.map(({ id, title }) => (
      <div
        key={id}
        onClick={bindOnClick(id) /* 2. now we can bind without worry */}
      >
        {title}
      </div>
    ))}
  </div>
)
ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  bindOnClick: PropTypes.function.isRequired
}

export default ItemList
```



## Use "classnames" to set CSS classes

Use the [classnames](https://www.npmjs.com/package/classnames) node module for setting CSS classes on an element.

```javascript
import React from 'react';
import classnames from 'classnames';

class Foo extends React.Component {

    render() {
        
        const classes = classnames('FooHeader', {
            'is-fixed': this.state.fixed,
            'is-visible': this.state.visible
        });
    
        return (
            <div className={classes}>Foo Header</div>
        )
    };

}
```



## Working with DOM listeners
http://facebook.github.io/react/tips/dom-event-listeners.html


## Using StaticContainer for more granular control over shouldUpdate
https://github.com/reactjs/react-static-container


## Use higherOrder functions to add scroll/resize listeners
https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750


## Sources

- https://github.com/kriasoft/react-starter-kit/blob/master/docs/react-style-guide.md
- https://web-design-weekly.com/2015/01/29/opinionated-guide-react-js-best-practices-conventions/
