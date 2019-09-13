# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a library built upon javascript. One positive about React JS is that when using components properly, any change to the UI does not necessarily mean that the whole page has to refresh. React allows for specific components to refresh certain aspects of the dom without refreshing the page.

React allows for the reusable use of components. The nature of components allows for the rapid development of UIs for application.

1. What does it mean to think in react?
To think in components. This is very similar to many UI design principles. 

1. Describe state.
State is essentially the data "stored" within the moment in time of a react component. changing state, will change the component

1. Describe props.

props are similar to parameters in raw javascript. Props takes in data and can be sent to components

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

a side effect is what affects something outside the scope of a function being executed. It is like an API, timer, or manipulating the dom(like a button). A side effect can cause a componenet to return a new output for the same existing state and props. You sync effects by using dependency arrays as a 2nd argument