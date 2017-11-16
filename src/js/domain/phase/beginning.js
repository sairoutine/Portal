'use strict';
var PhaseBase = require('./base');
var Util = require('../../hakurei').util;

/*
アンタップ・ステップ
アップキープ・ステップ
ドロー・ステップ
*/

var DomainPhaseBeginning = function() {
};
Util.inherit(DomainPhaseBeginning, PhaseBase);


module.exports = DomainPhaseBeginning;
