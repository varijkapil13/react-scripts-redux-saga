import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { sampleAppAction } from './redux/actions/app-actions';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h3>{props.data}</h3>

        <button onClick={() => props.sampleAppAction()}>
          Fire Saga action
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.app.data,
  };
};
const mapDispatchToProps = {
  sampleAppAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
