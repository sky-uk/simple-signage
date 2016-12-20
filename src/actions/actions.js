const SET_CONFIG = 'actions/SET_CONFIG';
export function setConfig(text) {
  return {
    type: SET_CONFIG,
    config: text
  }
}
