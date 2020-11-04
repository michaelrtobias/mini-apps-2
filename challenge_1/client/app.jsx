import React from 'react';
import Search from './search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <div>Search for events throughout history</div>

        <Search />
      </div>
    )
  }
}

export default App;