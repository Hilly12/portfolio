import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.delayedImageLoad = this.delayedImageLoad.bind(this);
    this.state = {
      loaded: false
    }
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  delayedImageLoad() {
    setTimeout(this.handleImageLoaded, this.props.delay);
  }

  render() {
    const loaded = this.state.loaded;
    const imageStyle = !loaded ? {
      visibility: 'hidden',
      position: 'absolute',
      opacity: '0',
      transition: 'visibility 0s, opacity 0.5s ease-out'
    } : { visibility: 'visible', opacity: '1', transition: 'visibility 0s, opacity 0.5s ease-out' };
    return (
      <div className="imageHolder">
        {!loaded && this.props.placeholder}
        <img className={this.props.classes} src={this.props.src} style={imageStyle}
             onLoad={this.delayedImageLoad} alt=""/>
      </div>
    )
  }
}

export default Image;