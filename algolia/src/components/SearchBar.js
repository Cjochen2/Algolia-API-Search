import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { searchResults, userHistory } from "../actions";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    //Updates component state as the user types into the search field
    handleInputChange = event => {
        let value = event.target.value;

        this.setState({
            searchTerm: value
        })
    }

    //API call to return 20 stories related to the users search
    handleSubmit = event => {
        event.preventDefault();
        let topic = this.state.searchTerm;

        axios.get("http://hn.algolia.com/api/v1/search?query=" + topic + "&tags=story")
            .then((response) => {
                this.props.searchResults(response.data)
                this.props.userHistory(topic)
            }).catch((error) => console.log(error));

        this.setState({
            searchTerm: ""
        })
    }

    render() {
        return (
            <div className="searchBar col-12 text-center mt-5 mb-5">
                <form id="topic-form">

                    <label for="button-input">Search:</label>

                    <input
                        type="text"
                        value={this.state.searchTerm}
                        name="searchBar"
                        onChange={this.handleInputChange}
                        placeholder="Search Algolia Articles"
                    /><br />

                    <input onClick={this.handleSubmit} type="submit" value="Submit Topic" />
                </form>
            </div>
        )
    }
}

export default connect(null, { searchResults, userHistory })(SearchBar);