import React from 'react';
import API from './API/API';
import Photos from './components/Photos';
import SlickSlider from './components/SlickSlider'

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
  
  /*render() {
    return (
      <div>
        <SlickSlider images={this.state.photos}/>
      </div>
    )
  }*/
  
  render() {
    return (
      <div>
        <Photos images={this.state.photos}/>
      </div>
    )
  }
};
