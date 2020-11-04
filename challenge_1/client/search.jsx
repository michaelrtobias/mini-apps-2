import React from 'react'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      keyword: ""
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      <input type="text" name="keyword" placeholder="enter search" onChange={this.handleChange.bind(this)}></input>
      <button>Search</button>
      </div>
    )
  }
}

export default Search;