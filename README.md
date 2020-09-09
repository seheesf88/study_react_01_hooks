# React_01 Hooks

My study guide for react hooks. 

## Resources
  - General Assembly : Hooks - James
  - YouTube : Learn useState In 15 Minutes - React Hooks Explained - Web Dev Simplified 
  - React Homepage - https://reactjs.org/docs/hooks-intro.html
## Installation

```
git clone https://github.com/seheesf88/study_react_01_hooks.git
cd study_react_01_hooks
npm install 
```

## What is HOOKS?
- a new addition in React 16.8.
- It allows you to use state and other React features without writing a class.
- Hooks are functions that let you “hook into” React state and lifecycle features from function components.

## Why we need to use HOOKS?
React develop hooks because..
- React is hard to reuse stateful logic between components
- Complex components become hard to understand
- Classes confuse both people and machines

## How to use HOOKS?
```
import React, { useState } from 'react';
```
1. import what to use from react 
2. you can use hook in functional component only
3. you can't use hook inside of if-statement, loops, or outside of function


### useState
- Syntax 
```
const [state, setState] = useState()

```
- useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else

    - state : the current state value
    - setState : a function that lets you updatae it
    - useState : takes argument in (), initial state

### useEffect
- Syntax
```
useEffect(() => {
  
}
```

- useEffect adds the ability to perform side effects from a function component.
- It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
- When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. 
- Effects are declared inside the component so they have access to its props and state. 
- By default, React runs the effects after every render — including the first render.



