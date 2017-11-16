'use strict';
var PhaseBase = require('./base');
var Util = require('../../hakurei').util;

/*
終了ステップ
クリンナップ・ステップ
*/

var DomainPhaseEnding = function() {
};
Util.inherit(DomainPhaseEnding, PhaseBase);


module.exports = DomainPhaseEnding;
