const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;
const tc = require('@actions/tool-cache');

async function main() {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello World!`);
  const kbldPath = await tc.downloadTool('https://github.com/k14s/kbld/releases/download/v0.23.0/kbld-linux-amd64');
  console.log(kbldPath);
  const cachedKbldPath = await tc.cacheFile(kbldPath, 'kbld', 'kbld', '0.23.0');
  console.log(cachedKbldPath);
  core.addPath(cachedKbldPath);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
}

(async function() {
  try {
    await main();
  } catch (error) {
    core.setFailed(error.message);
  }
})()
