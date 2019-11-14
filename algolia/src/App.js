import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
// Redux Store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));


class App extends Component {



  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar />
          <SearchResults />
        </div>
      </Provider>
    )
  }
}

export default App;