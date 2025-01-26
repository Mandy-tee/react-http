// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import DataFetching from './components/DataFetching';
import FocusInput from './components/FocusInput';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserForm />
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <DocTitleTwo /> */}
        {/* <DocTitleOne /> */}
        {/* <FocusInput /> */}
        {/* <DataFetching /> */}
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
