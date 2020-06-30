const installer = require('./installer');

(async function() {
  try {
    await installer.install();
  } catch(e) {
    console.log(e);
    core.setFailed(e.message);
  }
})()
