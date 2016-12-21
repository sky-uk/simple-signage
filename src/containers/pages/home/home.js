import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import { setConfig } from 'actions/actions';

const mapDispatchToProps = (dispatch) => {return bindActionCreators({ setConfig }, dispatch)}

class Home extends Component {
  static propTypes = {
    setConfig: PropTypes.func.isRequired
  }

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
        this.props.setConfig(JSON.stringify(json));
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
export default connect(null, mapDispatchToProps)(Home);
