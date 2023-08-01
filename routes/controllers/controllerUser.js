const express = require('express');
const router = express.Router();
const Joi = require('joi');
const globalFunction = require('../../utils/globalFunction');
const jwt = require('jsonwebtoken');
// const serviceUser = require('../services/serviceUser');
const settings = require('../../config/settings');
const CONSTANTS = require('../../utils/constants');
const CONSTANTS_MSG = require('../../utils/constantsMessage');
const apiSuccessRes = globalFunction.apiSuccessRes;
const apiErrorRes = globalFunction.apiErrorRes;


async function getDeviceData(req, res) {
  console.log('llllllllllllllllllllllll');
  return apiSuccessRes(req, res, CONSTANTS_MSG.REGISTRATION_SUCCESS_MESSAGE);
}

router.get('/getDeviceData', getDeviceData);


module.exports = router;