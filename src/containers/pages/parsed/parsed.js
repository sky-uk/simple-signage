import React from 'react';
import configParser from '../../../utils/configParser.js';
import { JSONTransformer } from '../../../components';

export default function Parsed() {
  const json = configParser();
  return (
    <div className="signage-display">
      <JSONTransformer json={json} />
    </div>
  );
}

Parsed.displayName = 'Parsed';
