// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var sc_welfare_bonus_add_request = (function () {
        function sc_welfare_bonus_add_request() {
        }
        return sc_welfare_bonus_add_request;
    }());
    Sproto.sc_welfare_bonus_add_request = sc_welfare_bonus_add_request;
    __reflect(sc_welfare_bonus_add_request.prototype, "Sproto.sc_welfare_bonus_add_request");
    function _decode_sc_welfare_bonus_add_request(d) {
        var o = new sc_welfare_bonus_add_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                case 2:
                    o.name = d.rs();
                    break;
                case 3:
                    o.endtime = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_welfare_bonus_add_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        if (self.name != undefined) {
            se.ws(self.name, 2);
        }
        if (self.endtime != undefined) {
            se.wi(self.endtime, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_welfare_bonus_add_request"] = { en: _encode_sc_welfare_bonus_add_request, de: _decode_sc_welfare_bonus_add_request };
    var sc_welfare_info_request = (function () {
        function sc_welfare_info_request() {
        }
        return sc_welfare_info_request;
    }());
    Sproto.sc_welfare_info_request = sc_welfare_info_request;
    __reflect(sc_welfare_info_request.prototype, "Sproto.sc_welfare_info_request");
    function _decode_sc_welfare_info_request(d) {
        var o = new sc_welfare_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.month = d.ri();
                    break;
                case 1:
                    o.week = d.ri();
                    break;
                case 2:
                    o.lvReward = d.ri();
                    break;
                case 3:
                    o.welfareReward = d.ri();
                    break;
                case 4:
                    o.rankData = d.roa("entity_shows");
                    break;
                case 5:
                    o.avgLv = d.ri();
                    break;
                case 6:
                    o.forever = d.ri();
                    break;
                case 7:
                    o.firstMonth = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_welfare_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 8);
        if (self.month != undefined) {
            se.wi(self.month, 0);
        }
        if (self.week != undefined) {
            se.wi(self.week, 1);
        }
        if (self.lvReward != undefined) {
            se.wi(self.lvReward, 2);
        }
        if (self.welfareReward != undefined) {
            se.wi(self.welfareReward, 3);
        }
        if (self.rankData != undefined) {
            se.woa("entity_shows", self.rankData, 4);
        }
        if (self.avgLv != undefined) {
            se.wi(self.avgLv, 5);
        }
        if (self.forever != undefined) {
            se.wi(self.forever, 6);
        }
        if (self.firstMonth != undefined) {
            se.wi(self.firstMonth, 7);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_welfare_info_request"] = { en: _encode_sc_welfare_info_request, de: _decode_sc_welfare_info_request };
    var sc_welfare_login_gift_info_request = (function () {
        function sc_welfare_login_gift_info_request() {
        }
        return sc_welfare_login_gift_info_request;
    }());
    Sproto.sc_welfare_login_gift_info_request = sc_welfare_login_gift_info_request;
    __reflect(sc_welfare_login_gift_info_request.prototype, "Sproto.sc_welfare_login_gift_info_request");
    function _decode_sc_welfare_login_gift_info_request(d) {
        var o = new sc_welfare_login_gift_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.totalLoginday = d.ri();
                    break;
                case 1:
                    o.receivemark = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_welfare_login_gift_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.totalLoginday != undefined) {
            se.wi(self.totalLoginday, 0);
        }
        if (self.receivemark != undefined) {
            se.wi(self.receivemark, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_welfare_login_gift_info_request"] = { en: _encode_sc_welfare_login_gift_info_request, de: _decode_sc_welfare_login_gift_info_request };
    var sc_welfare_signin_info_request = (function () {
        function sc_welfare_signin_info_request() {
        }
        return sc_welfare_signin_info_request;
    }());
    Sproto.sc_welfare_signin_info_request = sc_welfare_signin_info_request;
    __reflect(sc_welfare_signin_info_request.prototype, "Sproto.sc_welfare_signin_info_request");
    function _decode_sc_welfare_signin_info_request(d) {
        var o = new sc_welfare_signin_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.rewardMark = d.ri();
                    break;
                case 1:
                    o.dailyId = d.ri();
                    break;
                case 2:
                    o.totalDay = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_welfare_signin_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.rewardMark != undefined) {
            se.wi(self.rewardMark, 0);
        }
        if (self.dailyId != undefined) {
            se.wi(self.dailyId, 1);
        }
        if (self.totalDay != undefined) {
            se.wi(self.totalDay, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_welfare_signin_info_request"] = { en: _encode_sc_welfare_signin_info_request, de: _decode_sc_welfare_signin_info_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=welfare_s2c.js.map