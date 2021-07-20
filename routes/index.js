const express = require('express');
const fs = require('fs');
const router = express.Router();
(async function () {
  const files = await fs.readdirSync('./routes', () => {});
  for (const file of files) {
    if (file.includes('.js')) {
      const name = file.split('.js')[0];
      router.use(`/${name}`, require(`./${name}`));
    }
  }
})();

module.exports = router;
