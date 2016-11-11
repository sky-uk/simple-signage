import React, { PropTypes, Component } from 'react';
import { Webview, WebviewCarousel, WebviewGrid } from '../../components';

import './json-transformer.scss';

// TODO: Validate the JSON
export default class JSONTransformer extends Component {
    static propTypes = {
      json: PropTypes.object.isRequired
    }

    static defaultProps = {
      json: {}
    }

    validateJSON(json) {
      if (!json.name) {return false;}
      if (!json.screen) {return false;}

      return true;
    }

    createWebview = (module, index) => {
      if (!module.src) {return null;}

      return (
        <Webview src={module.src} key={'module-index-' + index} />
      );
    }

    createWebviewCarousel = (module, index) => {
      if (!module.modules) {return null;}
      const moduleElements = module.modules.map((item) => {
        if (item.module && item.module.type) {
            return this.createModule(item.module);
        }
      });

      /* Add any additional props */
      const wc_props = {};
      if (module.rotationTime) {
        wc_props.rotationTime = module.rotationTime;
      }

      return (
        <WebviewCarousel key={'module-index-' + index} webviews={moduleElements} {...wc_props} />
      );
    }

    createWebviewGrid = (module, index) => {
      if (!module.modules) {return null;}
      if (!module.rows) {return null;}
      if (!module.cols) {return null;}

      const moduleElements = module.modules.map((item) => {
        if (item.module && item.module.type) {
            return this.createModule(item.module);
        }
      });

      return (
        <WebviewGrid key={'module-index-' + index} rows={module.rows} cols={module.cols} webviews={moduleElements} />
      );
    }

    createModule = (module, index) => {

      if (!module.type) { return null; }

      if (module.type === 'webview') { return this.createWebview(module, index); }
      if (module.type === 'webview-carousel') { return this.createWebviewCarousel(module, index); }
      if (module.type === 'webview-grid') { return this.createWebviewGrid(module, index); }

      return null;
    }

    parseItems = (jsonObj) => {
      return Object.keys(jsonObj).map((key, index) => {
        const item = jsonObj[key];
        // TODO: if (item.container) => this.parseItems
        if (item.module) {
          return this.createModule(item.module, index);
        }
      });
    }

    parseScreenDate = (screen) => {
      return this.parseItems(screen);
    }

    transformedData = () => {
      const json = this.props.json;
      const isValid = this.validateJSON(json);

      /* Return early if we are not happy with the JSON file */
      if (!isValid) {
        return null;
      }

      return this.parseScreenDate(json.screen);
    }

    render() {
      return (
        <div className="signage-display">
          { this.transformedData() }
        </div>
      );
    }
}
