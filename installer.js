const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function install() {
  core.debug(`installing..`);
  const kbldPath = await tc.downloadTool('https://github.com/k14s/kbld/releases/download/v0.23.0/kbld-linux-amd64');
  core.debug(`kbldPath: ${kbldPath}`);
  const cachedPath = await tc.cacheFile(kbldPath, 'kbld', '0.23.0');
  console.log(`cachedPath: ${cachedPath}`);
  core.debug(cachedPath);
}

module.exports = {
  install: install
}
