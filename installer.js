const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const axios = require('axios').default;

async function install() {
  try {
    core.debug(`installing..`);
    const kbldPath = await tc.downloadTool('https://github.com/k14s/kbld/releases/download/v0.23.0/kbld-linux-amd64');
    core.debug(`kbldPath: ${kbldPath}`);
    const cachedPath = await tc.cacheFile(kbldPath, 'kbld', 'kbld', '0.23.0');
    core.debug(cachedPath);
  } catch (e) {
    core.debug(e);
    throw e;
  }
}

async function test() {
  const response = await axios.get('http://example.com/');
  return response
}

module.exports = {
  install: install,
  test: test
}
