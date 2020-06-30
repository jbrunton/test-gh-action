const fs = require('fs')
const os = require('os')
const path = require('path')

const toolDir = path.join(__dirname, 'runner', 'tools')
const tempDir = path.join(__dirname, 'runner', 'temp')

process.env['RUNNER_TOOL_CACHE'] = toolDir
process.env['RUNNER_TEMP'] = tempDir
const installer = require('./installer');

test('adds 1 + 2 to equal 3', async () => {
  await installer.install()
});
