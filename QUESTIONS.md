### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
### 3. Describe 3 ways to pass information from a component to its PARENT.
### 4. Give 2 ways to prevent components from re-rendering.
### 5. What is a fragment and why do we need it? Give an example where it might break my app.
### 6. Give 3 examples of the HOC pattern.
### 7. What's the difference in handling exceptions in promises, callbacks and async...await.
### 8. How many arguments does setState take and why is it async.
1) Two, where the second argument is optional and is a function that is called immediately after the setState is done.
2) Because is going to cause the process of re-rendering the components tree.
### 9. List the steps needed to migrate a Class to Function Component.
1) Remove the render
2) Remove the extends React.Component
3) Start using Hooks

### 10. List a few ways styles can be used with components.
1) Creating the file and importing, just like we're uing on this project.\
2) Inline inside the html component:
```HTML
<span style={{"color": "red"}}>hello</span>
```
3) Using style objects and calling directly on components.
```HTML
<div style={stylingObject.div}></div>
```

### 11. How to render an HTML string coming from the server.
1) Using dangerouslySetInnerHTML
2) Using some external library