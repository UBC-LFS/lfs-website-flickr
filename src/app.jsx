import React from 'react';
import API from './API/API';
import ReactImageGallery from './components/ReactImageGallery';
import $ from 'jquery';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos() {
    const slider_container_size = $('#SliderContainer').width();
    console.log(slider_container_size);

    API(slider_container_size).then(result => {
      this.setState({ photos: result });
    });
  }

  photoResize() {
    console.log("Photo Resize");
    // setTimeout(function(){
      console.log("Photo Resize 2");
    let imageGalleryWidth = $('#SliderContainer').width();
    
    let imageGalleryHeight = imageGalleryWidth * 684 / 1024;
    console.log(imageGalleryHeight);
    $('#SliderContainer').css('height', imageGalleryHeight + "px");
    // }, 100);
  }

  componentWillMount() {
    $(window).on('resize', this.photoResize);
  }

  componentDidMount() {
    this.getPhotos();
    this.photoResize();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    return (
      <div id="SliderContainer" style={this.style}>
        <ReactImageGallery images={this.state.photos}/>
      </div>
    )
  }
}
