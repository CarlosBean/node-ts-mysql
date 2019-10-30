"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    res.json({
        ok: true,
        message: 'its all ok'
    });
});
exports.default = router;
