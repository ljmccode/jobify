const User = require('../models/User');
const jwt = require('jwtwebtoken');
const { UnauthenticatedError } = require('../errors');


const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Invalid');
  } 
}