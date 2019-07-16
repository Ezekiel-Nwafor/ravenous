import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    /*
    **@object property definitions
    ***"term"-refers to the search term located in the text input field
    ***"location"-refers to the location to search near based on location
    ***"sort_by"-refers to the selected sorting option that was used
    */
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
  }

  //there might be a potential error with I use this.state.sortBy
  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    }
    else{
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  handleLocationChange(event){
    this.setState({location: event.target.value});
  }


  //potential error with the onCLick functionality
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  //random text added and some more
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;