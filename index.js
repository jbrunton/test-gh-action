const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function main() {
  const kbldPath = await tc.downloadTool('https://github.com/k14s/kbld/releases/download/v0.23.0/kbld-linux-amd64');  
  const cachedPath = await tc.cacheFile(kbldPath, 'kbld', '0.23.0');
  core.addPath(cachedPath);
}

(async function() {
  try {
    await main();
  } catch(e) {
    ore.setFailed(e.message);
  }
})()
