// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_shop_buy_request = (function () {
        function cs_shop_buy_request() {
        }
        return cs_shop_buy_request;
    }());
    Sproto.cs_shop_buy_request = cs_shop_buy_request;
    __reflect(cs_shop_buy_request.prototype, "Sproto.cs_shop_buy_request");
    function _decode_cs_shop_buy_request(d) {
        var o = new cs_shop_buy_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.shopType = d.ri();
                    break;
                case 1:
                    o.index = d.ri();
                    break;
                case 2:
                    o.buynum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_shop_buy_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.shopType != undefined) {
            se.wi(self.shopType, 0);
        }
        if (self.index != undefined) {
            se.wi(self.index, 1);
        }
        if (self.buynum != undefined) {
            se.wi(self.buynum, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_shop_buy_request"] = { en: _encode_cs_shop_buy_request, de: _decode_cs_shop_buy_request };
    var cs_shop_mystical_buy_request = (function () {
        function cs_shop_mystical_buy_request() {
        }
        return cs_shop_mystical_buy_request;
    }());
    Sproto.cs_shop_mystical_buy_request = cs_shop_mystical_buy_request;
    __reflect(cs_shop_mystical_buy_request.prototype, "Sproto.cs_shop_mystical_buy_request");
    function _decode_cs_shop_mystical_buy_request(d) {
        var o = new cs_shop_mystical_buy_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.index = d.ri();
                    break;
                case 1:
                    o.buynum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_shop_mystical_buy_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.index != undefined) {
            se.wi(self.index, 0);
        }
        if (self.buynum != undefined) {
            se.wi(self.buynum, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_shop_mystical_buy_request"] = { en: _encode_cs_shop_mystical_buy_request, de: _decode_cs_shop_mystical_buy_request };
    var cs_shop_mystical_buy_response = (function () {
        function cs_shop_mystical_buy_response() {
        }
        return cs_shop_mystical_buy_response;
    }());
    Sproto.cs_shop_mystical_buy_response = cs_shop_mystical_buy_response;
    __reflect(cs_shop_mystical_buy_response.prototype, "Sproto.cs_shop_mystical_buy_response");
    function _decode_cs_shop_mystical_buy_response(d) {
        var o = new cs_shop_mystical_buy_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_shop_mystical_buy_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_shop_mystical_buy_response"] = { en: _encode_cs_shop_mystical_buy_response, de: _decode_cs_shop_mystical_buy_response };
    var cs_shop_mystical_refresh_request = (function () {
        function cs_shop_mystical_refresh_request() {
        }
        return cs_shop_mystical_refresh_request;
    }());
    Sproto.cs_shop_mystical_refresh_request = cs_shop_mystical_refresh_request;
    __reflect(cs_shop_mystical_refresh_request.prototype, "Sproto.cs_shop_mystical_refresh_request");
    function _decode_cs_shop_mystical_refresh_request(d) {
        var o = new cs_shop_mystical_refresh_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_shop_mystical_refresh_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_shop_mystical_refresh_request"] = { en: _encode_cs_shop_mystical_refresh_request, de: _decode_cs_shop_mystical_refresh_request };
    var cs_shop_mystical_refresh_response = (function () {
        function cs_shop_mystical_refresh_response() {
        }
        return cs_shop_mystical_refresh_response;
    }());
    Sproto.cs_shop_mystical_refresh_response = cs_shop_mystical_refresh_response;
    __reflect(cs_shop_mystical_refresh_response.prototype, "Sproto.cs_shop_mystical_refresh_response");
    function _decode_cs_shop_mystical_refresh_response(d) {
        var o = new cs_shop_mystical_refresh_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_shop_mystical_refresh_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_shop_mystical_refresh_response"] = { en: _encode_cs_shop_mystical_refresh_response, de: _decode_cs_shop_mystical_refresh_response };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=shop_c2s.js.map