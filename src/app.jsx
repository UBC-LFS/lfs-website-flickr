import React from 'react';
import API from './API/API';
import SimpleSlider from './components/ReactImageGallery';
import $ from 'jquery';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loadingPhoto: [],
      imageOption: ''
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  onWindowResize() {
    let slider_container_size = $('#SliderContainer').width();
    let container_option = '';
    
    switch(true) {
      case (slider_container_size < 1024):
        container_option = '_c';
        break;
      case (slider_container_size < 1600 && slider_container_size >= 1024):
        container_option = '_b';
        break;
      default:
        container_option = '_h';
    }
    console.log("before");
    API(container_option).then(result => {
      let thumbnailResult = result.map((thumbnail) => thumbnail.replace(container_option + '.jpg', '_n.jpg'));
      this.setState({photos: result, loadingPhoto: thumbnailResult, imageOption: container_option});
    });
  }

  backgroundImageInitialize() {
    let galleryArrayLength = $('#SliderContainer .image-gallery-slide-wrapper > .image-gallery-swipe .image-gallery-slide > .image-gallery-image > img').length;
    console.log(galleryArrayLength);
  }

  componentWillMount() {
    $(window).on('resize', this.onWindowResize);
  }
  componentDidMount() {
    this.onWindowResize();
    // this.backgroundImageLoading();
    // setTimeout(this.backgroundImageInitialize, 1000);
    //this.onWindowResize().then(this.backgroundImageLoading()).then(this.backgroundImageInitialize());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }
  
  render() {
    // let galleryArrayLength = $('#SliderContainer .image-gallery-slide-wrapper > .image-gallery-swipe .image-gallery-slide > .image-gallery-image > img').length;
    // console.log(galleryArrayLength);
    //this.backgroundImageInitialize();
    return (
      <div id="SliderContainer">
        <SimpleSlider images={this.state.photos}/>
      </div>
    )
  }
  
}
