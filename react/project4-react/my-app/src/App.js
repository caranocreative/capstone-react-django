import React, { Component } from 'react';
import MainContainer from './MainContainer';
// import Posts from './MainContainer/Posts';




class App extends Component {
    constructor() {
      super();
      this.state = {
        csrf_token: ''
      };
    }
  
    // getToken = async () => {
    //   const token = await fetch('http://localhost:8000/api/get_csrf/', {
    //     credentials: 'include'
    //   })
    //   const parsedToken = await token.json()
    //   console.log(parsedToken, 'parsed token #####');
    //   return parsedToken.token
      
    // }
  
  
    // componentDidMount() {
    //   this.getToken().then((token) => {
    //     this.setState({
    //       csrf_token: token
    //     })
    //   })
    // }
  
    render() {
      return (
        <div className="App">
          <MainContainer />
        
        </div>
      );
    }
}
  
  export default App;