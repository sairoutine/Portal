'use strict';
var PhaseBase = require('./base');
var Util = require('../../hakurei').util;

/*
戦闘開始ステップ
攻撃クリーチャー指定ステップ
ブロック・クリーチャー指定ステップ
戦闘ダメージ・ステップ
戦闘終了ステップ
 */

var DomainPhaseCombat = function() {
};
Util.inherit(DomainPhaseCombat, PhaseBase);


module.exports = DomainPhaseCombat;
