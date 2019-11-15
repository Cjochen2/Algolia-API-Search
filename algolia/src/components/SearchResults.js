import React, { Component } from 'react';
import { connect } from 'react-redux';




class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.results.hits) {
            return (
                <div className='results'>
                    {
                        (this.props.results.hits.map((info, i) => {
                            return (
                                <div className='article mb-3' key={i}>
                                    <div className='title'>Title: {info.title}</div>
                                    <div className='author'>Author: {info.author}</div>
                                    <div className='url'>Link: <a href={info.url} target='_blank'>{info.url}</a></div>
                                </div>
                            )

                        }))
                    }
                </div>
            )
        }
        else {
            return (
                <div className='noResults'>
                    No Results to display
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        results: state.results
    };
}

export default connect(mapStateToProps, null)(SearchResults)