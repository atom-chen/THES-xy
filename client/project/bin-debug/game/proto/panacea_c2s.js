// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_panacea_use_request = (function () {
        function cs_panacea_use_request() {
        }
        return cs_panacea_use_request;
    }());
    Sproto.cs_panacea_use_request = cs_panacea_use_request;
    __reflect(cs_panacea_use_request.prototype, "Sproto.cs_panacea_use_request");
    function _decode_cs_panacea_use_request(d) {
        var o = new cs_panacea_use_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.posid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_panacea_use_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.posid != undefined) {
            se.wi(self.posid, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_panacea_use_request"] = { en: _encode_cs_panacea_use_request, de: _decode_cs_panacea_use_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=panacea_c2s.js.map