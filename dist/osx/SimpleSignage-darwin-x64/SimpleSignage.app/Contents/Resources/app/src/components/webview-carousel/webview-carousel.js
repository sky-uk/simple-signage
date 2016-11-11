import React, { PropTypes, Component } from 'react';

import './webview-carousel.scss';

export default class WebviewCarousel extends Component {
    static propTypes = {
      webviews: PropTypes.array.isRequired,
      rotationTime: PropTypes.number
    };

    static defaultProps = {
      webviews: [],
      rotationTime: 10
    };

    constructor(props) {
      super(props);

      this.state = {
        webviewLength: props.webviews.length,
        position: 0
      }
    }

    componentWillMount = () => {
      this.carouselTimeout = null;
    }

    componentDidMount = () => {
      this.startCarouselLoop();
    }

    componentWillUnmount = () => {
      clearTimeout(this.carouselTimeout);
    }

    startCarouselLoop = () => {
      this.carouselTimeout = setTimeout(() => {
        this.carouselLoopNext();
      }, this.props.rotationTime * 1000);
    }

    carouselLoopNext = () => {
      let newPosition = this.state.position + 1;
      if (newPosition >= this.state.webviewLength) {
        newPosition = 0;
      }

      this.setState({
        position: newPosition
      });
      this.startCarouselLoop();
    }

    renderWebview = (webview, index) => {
      let classNameString = 'webview-carousel-item';
      if (index === this.state.position) {
        classNameString += ' webview-carousel-item-selected';
      }

      return (
        <div className={classNameString} key={'webview-carousel-' + index}>
          { webview }
        </div>
      );
    }

    renderWebviews = () => {
      const webviewElements = this.props.webviews.map((webview, index) => {
        return this.renderWebview(webview, index);
      });

      return webviewElements;
    }

    render() {
      return (
        <div className="webview-carousel">
          { this.renderWebviews() }
        </div>
      );
    }
}
