# Redux-Concepts-In-One-File

Redux is not designed to work with React out of the box, you need to use the *react-redux* package. 
It provides a way to pass Redux state and dispatch to React components as props.Finally, we'll use react-redux to connect the Redux store with the component, thereby extracting the local state into the Redux store.

React Redux provides a small API with two key features: Provider and connect. 
The Provider is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux store and dispatch functions throughout the component tree. Provider takes two props, the Redux store and the child components of the app.
