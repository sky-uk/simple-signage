/* Returns the JSON from the configuraiton */
export default function configParser(/* filePath */) {

  // TODO: Check if the passed file exists first.
  let configJSON = null;
    try {
      // configJSON = require(filePath); Not sure why this wont work
      configJSON = require('../../config/displayConfig.json');
    } catch (err) {
        // console.error('There was an error locating your config file at ' + filePath + ': ' + err);
    }

  return configJSON;
}
