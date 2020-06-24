# todo-react

A Todo frontend application using modern React paradigms such as Hooks, Flux with `useReducer`, global state with `useContext`, functional components, prop-types...

## Demos

A Github Action is set up to build and deploy automatically the master branch:

[DEMO @ Github Pages](https://raultruco.github.io/todo-react/)  
[DEMO @ AWS S3](http://raultruco-todo-react.s3-website.eu-west-2.amazonaws.com/)

## Features

- React 16 and Hooks
- Flux state management using `useReducer` and `useContext`
- Material UI
- Babel, Webpack, Eslint and Prettier
- prop-types
- React Router Dom
- Axios API calls
- Mark a Todo done / undone using optimistic updates

## Installation

Using [yarn](https://yarnpkg.com):

```
yarn install
yarn run start
```

That will spin up a new webpack-dev-serve on [http://localhost:8080](http://localhost:8080).

### Pending

- Unit and integration tests (Jest?)
- Form validation (Formik or React Hook Form)
- Consider using `@reach/router` rather than `react-router-dom`. [See advice about the future of react-router-dom](https://reacttraining.com/blog/reach-react-router-future/)
- Use [Github actions](https://github.com/features/actions) to execute automatic integration tests and CI/CD

### Issues

- The API endpoint to update a Todo at `PUT ...url` seems not to update the todo, so the edit todo UI here doesn't work either...
