// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const app = express();
const port = 3000;
// Comments store
const comments = [];
// Middleware