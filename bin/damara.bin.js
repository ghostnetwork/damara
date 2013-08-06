#!/usr/bin/env node

'use strict';

var util = require('util');
var Damara = require('../index');

var damara = Damara();

damara.tweetMyIpAddress();
