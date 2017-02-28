import React from 'react';
import API from './API/API';
import ReactImageGallery from './components/ReactImageGallery';
import $ from 'jquery';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: {
          photos: []
      }
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos() {
    const slider_container_size = $('#SliderContainer').width();
    console.log(slider_container_size);

    API(slider_container_size).then(result => {
      this.setState({
        images: {
          photos: result
        }
      });
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    return (
      <div id="SliderContainer">
        <ReactImageGallery images={this.state.images} />
      </div>
    )
  }

}
