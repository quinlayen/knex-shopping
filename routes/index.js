const express = require('express');
const router = express.Router();

router.use(require('./products'));
router.use(require('./users'));
router.use(require('./cart'));

module.exports = router;