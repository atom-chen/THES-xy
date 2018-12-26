// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var sc_tiannv_equip_request = (function () {
        function sc_tiannv_equip_request() {
        }
        return sc_tiannv_equip_request;
    }());
    Sproto.sc_tiannv_equip_request = sc_tiannv_equip_request;
    __reflect(sc_tiannv_equip_request.prototype, "Sproto.sc_tiannv_equip_request");
    function _decode_sc_tiannv_equip_request(d) {
        var o = new sc_tiannv_equip_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.data = d.roa("tiannv_equip_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_tiannv_equip_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.data != undefined) {
            se.woa("tiannv_equip_data", self.data, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_tiannv_equip_request"] = { en: _encode_sc_tiannv_equip_request, de: _decode_sc_tiannv_equip_request };
    var sc_tiannv_wash_replace_res_request = (function () {
        function sc_tiannv_wash_replace_res_request() {
        }
        return sc_tiannv_wash_replace_res_request;
    }());
    Sproto.sc_tiannv_wash_replace_res_request = sc_tiannv_wash_replace_res_request;
    __reflect(sc_tiannv_wash_replace_res_request.prototype, "Sproto.sc_tiannv_wash_replace_res_request");
    function _decode_sc_tiannv_wash_replace_res_request(d) {
        var o = new sc_tiannv_wash_replace_res_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.pos = d.ri();
                    break;
                case 1:
                    o.attrData = d.roa("tiannv_attrs_data");
                    break;
                case 2:
                    o.washData = d.roa("tiannv_attrs_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_tiannv_wash_replace_res_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.pos != undefined) {
            se.wi(self.pos, 0);
        }
        if (self.attrData != undefined) {
            se.woa("tiannv_attrs_data", self.attrData, 1);
        }
        if (self.washData != undefined) {
            se.woa("tiannv_attrs_data", self.washData, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_tiannv_wash_replace_res_request"] = { en: _encode_sc_tiannv_wash_replace_res_request, de: _decode_sc_tiannv_wash_replace_res_request };
    var sc_tiannv_wash_res_request = (function () {
        function sc_tiannv_wash_res_request() {
        }
        return sc_tiannv_wash_res_request;
    }());
    Sproto.sc_tiannv_wash_res_request = sc_tiannv_wash_res_request;
    __reflect(sc_tiannv_wash_res_request.prototype, "Sproto.sc_tiannv_wash_res_request");
    function _decode_sc_tiannv_wash_res_request(d) {
        var o = new sc_tiannv_wash_res_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.pos = d.ri();
                    break;
                case 1:
                    o.washNum = d.ri();
                    break;
                case 2:
                    o.attrData = d.roa("tiannv_attrs_data");
                    break;
                case 3:
                    o.washData = d.roa("tiannv_attrs_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_tiannv_wash_res_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.pos != undefined) {
            se.wi(self.pos, 0);
        }
        if (self.washNum != undefined) {
            se.wi(self.washNum, 1);
        }
        if (self.attrData != undefined) {
            se.woa("tiannv_attrs_data", self.attrData, 2);
        }
        if (self.washData != undefined) {
            se.woa("tiannv_attrs_data", self.washData, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_tiannv_wash_res_request"] = { en: _encode_sc_tiannv_wash_res_request, de: _decode_sc_tiannv_wash_res_request };
    var tiannv_attrs_data = (function () {
        function tiannv_attrs_data() {
        }
        return tiannv_attrs_data;
    }());
    Sproto.tiannv_attrs_data = tiannv_attrs_data;
    __reflect(tiannv_attrs_data.prototype, "Sproto.tiannv_attrs_data");
    function _decode_tiannv_attrs_data(d) {
        var o = new tiannv_attrs_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.attrs = d.ri();
                    break;
                case 2:
                    o.skillNo = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_tiannv_attrs_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.attrs != undefined) {
            se.wi(self.attrs, 1);
        }
        if (self.skillNo != undefined) {
            se.wi(self.skillNo, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["tiannv_attrs_data"] = { en: _encode_tiannv_attrs_data, de: _decode_tiannv_attrs_data };
    var tiannv_equip_data = (function () {
        function tiannv_equip_data() {
        }
        return tiannv_equip_data;
    }());
    Sproto.tiannv_equip_data = tiannv_equip_data;
    __reflect(tiannv_equip_data.prototype, "Sproto.tiannv_equip_data");
    function _decode_tiannv_equip_data(d) {
        var o = new tiannv_equip_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.washNum = d.ri();
                    break;
                case 1:
                    o.attrData = d.roa("tiannv_attrs_data");
                    break;
                case 2:
                    o.washData = d.roa("tiannv_attrs_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_tiannv_equip_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.washNum != undefined) {
            se.wi(self.washNum, 0);
        }
        if (self.attrData != undefined) {
            se.woa("tiannv_attrs_data", self.attrData, 1);
        }
        if (self.washData != undefined) {
            se.woa("tiannv_attrs_data", self.washData, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["tiannv_equip_data"] = { en: _encode_tiannv_equip_data, de: _decode_tiannv_equip_data };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=tiannv_s2c.js.map