import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// axios to initialise internal component state
import axios from 'axios';

// get exported loading component (below) or const
// import Loading from './Loading'
import { Loading } from './Loading';

class App extends Component {
  constructor(props){
    super(props)
    //state
    this.state = {
      users: [],
      loading:false
    }
    // binds this to App component for handle submit event handler
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers(){
    this.setState({
      loading:true
    })

    // random public API call
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      // to keep track of already loaded users
      users: [...this.state.users, ...response.data.results],
      loading: false
    })) //setState to update the state

  }


  // lifecycle method make the API calls after component mounts (DOM)
  componentDidMount(){
    // separate function makes it slower but more maintainable
    this.getUsers();
  }


  handleSubmit(e){
    // prevent the event's default behavior
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded')
  }


  render() {
    const {loading, users} = this.state
    return (
      // we use className and not class here
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users"/>
        </form>
        <hr/>
        {/* conditional loading */
        !loading ?
          (users.map(user => (
            // react each component needs a unique key
            <div key = {user.id.value}>
              <h3 style = {{color:'darkblue'}}>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr/>
            </div>
          ))
        ) : (
          <Loading message="Loading more and more..."/>
        )}
      </div>
    );
  }
}

export default App;
