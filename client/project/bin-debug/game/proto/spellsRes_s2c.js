// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var sc_spellsRes_info_request = (function () {
        function sc_spellsRes_info_request() {
        }
        return sc_spellsRes_info_request;
    }());
    Sproto.sc_spellsRes_info_request = sc_spellsRes_info_request;
    __reflect(sc_spellsRes_info_request.prototype, "Sproto.sc_spellsRes_info_request");
    function _decode_sc_spellsRes_info_request(d) {
        var o = new sc_spellsRes_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.useSpells = d.roa("spellsAttr");
                    break;
                case 1:
                    o.spellsList = d.roa("spellsData");
                    break;
                case 2:
                    o.num = d.ri();
                    break;
                case 3:
                    o.perfectNum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_spellsRes_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.useSpells != undefined) {
            se.woa("spellsAttr", self.useSpells, 0);
        }
        if (self.spellsList != undefined) {
            se.woa("spellsData", self.spellsList, 1);
        }
        if (self.num != undefined) {
            se.wi(self.num, 2);
        }
        if (self.perfectNum != undefined) {
            se.wi(self.perfectNum, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_spellsRes_info_request"] = { en: _encode_sc_spellsRes_info_request, de: _decode_sc_spellsRes_info_request };
    var spellsAttr = (function () {
        function spellsAttr() {
        }
        return spellsAttr;
    }());
    Sproto.spellsAttr = spellsAttr;
    __reflect(spellsAttr.prototype, "Sproto.spellsAttr");
    function _decode_spellsAttr(d) {
        var o = new spellsAttr;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.spellsNo = d.ri();
                    break;
                case 1:
                    o.lv = d.ri();
                    break;
                case 2:
                    o.skillList = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_spellsAttr(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.spellsNo != undefined) {
            se.wi(self.spellsNo, 0);
        }
        if (self.lv != undefined) {
            se.wi(self.lv, 1);
        }
        if (self.skillList != undefined) {
            se.wia(self.skillList, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["spellsAttr"] = { en: _encode_spellsAttr, de: _decode_spellsAttr };
    var spellsData = (function () {
        function spellsData() {
        }
        return spellsData;
    }());
    Sproto.spellsData = spellsData;
    __reflect(spellsData.prototype, "Sproto.spellsData");
    function _decode_spellsData(d) {
        var o = new spellsData;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.spellsId = d.ri();
                    break;
                case 1:
                    o.spellsNo = d.ri();
                    break;
                case 2:
                    o.lock = d.ri();
                    break;
                case 3:
                    o.skillList = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_spellsData(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.spellsId != undefined) {
            se.wi(self.spellsId, 0);
        }
        if (self.spellsNo != undefined) {
            se.wi(self.spellsNo, 1);
        }
        if (self.lock != undefined) {
            se.wi(self.lock, 2);
        }
        if (self.skillList != undefined) {
            se.wia(self.skillList, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["spellsData"] = { en: _encode_spellsData, de: _decode_spellsData };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=spellsRes_s2c.js.map