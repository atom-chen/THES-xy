// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var formation_data = (function () {
        function formation_data() {
        }
        return formation_data;
    }());
    Sproto.formation_data = formation_data;
    __reflect(formation_data.prototype, "Sproto.formation_data");
    function _decode_formation_data(d) {
        var o = new formation_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.no = d.ri();
                    break;
                case 1:
                    o.skillNo = d.ri();
                    break;
                case 2:
                    o.lv = d.ri();
                    break;
                case 3:
                    o.upNum = d.ri();
                    break;
                case 4:
                    o.soulLv = d.ri();
                    break;
                case 5:
                    o.soulUpNum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_formation_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 6);
        if (self.no != undefined) {
            se.wi(self.no, 0);
        }
        if (self.skillNo != undefined) {
            se.wi(self.skillNo, 1);
        }
        if (self.lv != undefined) {
            se.wi(self.lv, 2);
        }
        if (self.upNum != undefined) {
            se.wi(self.upNum, 3);
        }
        if (self.soulLv != undefined) {
            se.wi(self.soulLv, 4);
        }
        if (self.soulUpNum != undefined) {
            se.wi(self.soulUpNum, 5);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["formation_data"] = { en: _encode_formation_data, de: _decode_formation_data };
    var sc_formation_info_request = (function () {
        function sc_formation_info_request() {
        }
        return sc_formation_info_request;
    }());
    Sproto.sc_formation_info_request = sc_formation_info_request;
    __reflect(sc_formation_info_request.prototype, "Sproto.sc_formation_info_request");
    function _decode_sc_formation_info_request(d) {
        var o = new sc_formation_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.use = d.ri();
                    break;
                case 1:
                    o.infoList = d.roa("formation_data");
                    break;
                case 2:
                    o.drugNum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_formation_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.use != undefined) {
            se.wi(self.use, 0);
        }
        if (self.infoList != undefined) {
            se.woa("formation_data", self.infoList, 1);
        }
        if (self.drugNum != undefined) {
            se.wi(self.drugNum, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_formation_info_request"] = { en: _encode_sc_formation_info_request, de: _decode_sc_formation_info_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=formation_s2c.js.map