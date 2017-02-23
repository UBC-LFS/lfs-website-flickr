import React from 'react';
import API from './API/API';
import Photos from './components/Photos';
import SlickSlider from './components/SlickSlider'
import $ from 'jquery';

//const apiResult = API();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      imageOption: '_h'
    }; 
  }

  

  onWindowResize(newSliderSize) {
    // $(window).on('resize',function() {
    //   console.log('asdf');
    // });
    let slider_container_size = $('#SliderContainer').width();
    let container_option;
    if (slider_container_size > 1600)
    {
      container_option = '_h';
    }
    else if (slider_container_size > 1024)
    {
      container_option = '_b';
    }
    else if (slider_container_size > 800)
    {
      container_option = '_c';
    }
    else
    {
      container_option = '_n';
    }
    this.setState({imageOption: '_b'});
    console.log(container_option);
  }

// n, c, b, h
  componentWillMount() {
    this.onWindowResize();
  }
  componentDidMount() {
    $(window).on('resize', this.onWindowResize);
    API('_h').then(result => this.setState({'photos': result}));
    // window.addEventListener('resize', this.onWindowResize);
  }
  
  // componentWillUnmount
  /*render() {
    return (
      <div>
        <SlickSlider images={this.state.photos}/>
      </div>
    )
  }*/
  
  render() {
    return (
      <div id="SliderContainer">
        <Photos images={this.state.photos}/>
      </div>
    )
  }
};
