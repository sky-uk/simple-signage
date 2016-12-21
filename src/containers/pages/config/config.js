import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import { setConfig } from 'actions/actions';
import './config.scss';

const mapStateToProps = state => ({
  config: state.get('config')
});

const mapDispatchToProps = (dispatch) => {return bindActionCreators({ setConfig }, dispatch)}

class Config extends Component {
  static propTypes = {
    config: PropTypes.string.isRequired,
    setConfig: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
   super(props);
   this.state = {config: props.config || ''};
  }

  componentWillMount = () => {
    ipcRenderer.on('asynchronous-reply-save-config', (event, arg) => {
      if (arg === true) {
        this.props.setConfig(this.state.config);
      }
    });

    const json = this.parseConfig();
    // This happens if the user restarts the app whilst on this page and the app
    // hasn't loaded any config yet.
    if (json.restart) {
      this.context.router.push('/');
    }
  }

  parseConfig = () => {
    let json = {};
    try {
      json = JSON.parse(this.props.config)
    } catch (e) {
      console.error('Error parsing JSON.');
    }

    return json;
  }

  textareaKeyDown = (event) => {
    this.setState({'config': event.target.value});
  }

  saveConfig = () => {
    var validJSON = this.validateJSON(this.state.config);
    if (validJSON) {
      ipcRenderer.send('asynchronous-message-save-config', JSON.parse(this.state.config));
    } else {
      alert('JSON is not valid')
    }
  }

  validateJSON = (json) => {
    try {
       JSON.parse(json);
     } catch (e) {
         return false;
     }
     return true;
  }

  render() {
    return (
      <div className="config-page">
        <textarea onChange={this.textareaKeyDown} value={this.state.config}></textarea>
        <button onClick={this.saveConfig}>Save Config</button>
      </div>
    );
  }
}

Config.displayName = 'Config';
export default connect(mapStateToProps, mapDispatchToProps)(Config);
