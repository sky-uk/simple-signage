import React, { PropTypes, Component } from 'react';
import { ipcRenderer } from 'electron';

export default class Home extends Component {
  static contextTypes = {
   router: PropTypes.object.isRequired
  }

  componentWillMount() {
    ipcRenderer.on('asynchronous-reply-load-config', (event, arg) => {
      this.shouldRedirect(arg);
    });

    ipcRenderer.send('asynchronous-message-load-config', {});
  }

  shouldRedirect = (json) => {
    if (typeof json === 'object') {
      if (json.name) {
        this.context.router.push('/parsed');
        return true;
      }
    }
    this.context.router.push('/config');
  }

  render() {
    return (
      <div className="page-home">
        Loading...
      </div>
    );
  }
}

Home.displayName = 'Home';
