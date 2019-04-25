# react-scripts-redux-saga

This package includes scripts and configuration that can be used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation to learn more about how to use [Create React App](https://github.com/facebook/create-react-app).<br>

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

# How to use this script

In order to use this script instead of the standard react-scripts, use the format below:

```
create-react-app <your-app-name> --scripts-version react-scripts-redux-saga
```

# When to use this script

The react scripts bundled by default in [Create React App](https://github.com/facebook/create-react-app) bootstraps a basic react project.

You can use this script instead, if you want your project to be configured with :

- Redux
- React Router
- Redux Saga

### Features

The project comes bundled with **redux, react-redux, redux-saga, react-router, react-devtools-extension**.

- Redux store initialized in `index.js`.
- The `App.js` comes with connected to a default Redux store.
- Basic Redux actions and reducer for asynchronous call with **redux-saga** provided.
- **Redux Saga** initialized and configured with a sample asynchronous function.
- **React Router** configured in `index.js`

**You can find all redux related code in folder named _Redux_**
