// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import DataFetching from './components/DataFetching';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <DataFetching />
        {/* <HookCounterOne /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <PostList /> */}
        {/* <PostForm /> */}
      </div>
    )
  }
}

export default App;
