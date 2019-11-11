import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

  componentDidMount() {
  this.test()
  }

  test() {
    axios.get("http://hn.algolia.com/api/v1/search?query=stephenhawking&tags=story")
      .then(function(response) {
        console.log(response.data)
      })
  }

  render() {
    return (
      <form id="topic-form">
      <label for="button-input">Create a New Topic:</label>
      <input type="text" id="button-input" /><br/>

      <input id="add-button" type="submit" value="Submit Topic" />
  </form>
    )
  }
}

export default App;