/**
 * @jest-environment node
 */

const fs = require('fs')
const os = require('os')
const path = require('path')
const io = require('@actions/io')

const toolDir = path.join(__dirname, 'runner', 'tools')
const tempDir = path.join(__dirname, 'runner', 'temp')

process.env['RUNNER_TOOL_CACHE'] = toolDir
process.env['RUNNER_TEMP'] = tempDir
const installer = require('./installer');
const { test } = require('./installer')

describe('installer tests', () => {
  // beforeAll(async () => {
  //   await io.rmRF(toolDir)
  //   await io.rmRF(tempDir)
  // }, 100000)

  // afterAll(async () => {
  //   await io.rmRF(toolDir)
  //   await io.rmRF(tempDir)
  // }, 100000)
  it('adds 1 + 2 to equal 3', async () => {
    await expect(installer.install()).resolves.toBeTruthy();
  });

  it('adds 1 + 2 to equal 3', async () => {
    await expect(installer.test()).resolves.toBeTruthy()
  });
});

