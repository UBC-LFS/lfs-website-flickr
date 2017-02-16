import React from 'react';
import API from './API/API';
import Photos from './components/Photos';

//const apiResult = API();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }; 
  }

  componentDidMount() {
    API().then(result => this.setState({'photos': result}))
  }
  
  render() {
    return (
      <div>
        <Photos images={this.state.photos}/>
      </div>
    )
  }
};
