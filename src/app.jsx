import React from 'react';
import API from './API/API';
import SimpleSlider from './components/ReactImageGallery';
import $ from 'jquery';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
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
    API(container_option).then(result => {
      let pictures = result.map((thumbnail) => {
        let thumbnailPictures = thumbnail.replace(container_option + '.jpg', '_n.jpg');
        let originalPictures = thumbnail;
        return {originalPictures, thumbnailPictures};
      });      
      this.setState({photos: pictures, imageOption: container_option});
    });
  }

  componentWillMount() {
    $(window).on('resize', this.onWindowResize);
  }
  componentDidMount() {
    this.onWindowResize();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }
  
  render() {
    return (
      <div id="SliderContainer">
        <SimpleSlider images={this.state.photos}/>
      </div>
    )
  }
  
}
