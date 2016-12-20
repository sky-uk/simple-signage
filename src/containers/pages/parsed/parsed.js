import React, { Component } from 'react';
import configParser from '../../../utils/configParser.js';
import { JSONTransformer } from '../../../components';

export default class Parsed extends Component {

  render() {
    const json = configParser();
    return (
      <div className="signage-display">
        <JSONTransformer json={json} />
      </div>
    );
  }
}

Parsed.displayName = 'Parsed';
