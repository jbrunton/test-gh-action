const installer = require('./installer');

(async function() {
  try {
    console.log(`Hello, World!`);
  } catch(e) {
    console.log(e);
    core.setFailed(e.message);
  }
})()
