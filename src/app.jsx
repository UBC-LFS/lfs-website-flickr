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
    this.onWindowResize = this.onWindowResize.bind(this);
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
    else
    {
      container_option = '_c';
    }
    this.setState({imageOption: container_option});
    console.log(container_option);
  }

// n, c, b, h
  componentWillMount() {
    //this.onWindowResize();
    $(window).on('resize', this.onWindowResize);
  }
  componentDidMount() {
    this.onWindowResize();
    // window.addEventListener('resize', this.onWindowResize);
    API(this.state.imageOption).then(result => this.setState({'photos': result}));
    
  }

  componentDidUpdate() {
    API(this.state.imageOption).then(result => this.setState({'photos': result}));
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
