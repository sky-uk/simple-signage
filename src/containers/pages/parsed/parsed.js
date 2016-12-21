import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// import configParser from '../../../utils/configParser.js'; // TODO: remove this now redundent utility.
import { JSONTransformer } from '../../../components';

const mapStateToProps = state => ({
  config: state.get('config')
});

class Parsed extends Component {
  static propTypes = {
    config: PropTypes.string.isRequired
  }

  static contextTypes = {
   router: PropTypes.object.isRequired
  }

  componentWillMount() {
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

  render() {
    const json = this.parseConfig();

    return (
      <div className="signage-display">
        <JSONTransformer json={json} />
      </div>
    );
  }
}

Parsed.displayName = 'Parsed';
export default connect(mapStateToProps)(Parsed);
