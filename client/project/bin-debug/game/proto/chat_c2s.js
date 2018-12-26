// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_chat_check_online_request = (function () {
        function cs_chat_check_online_request() {
        }
        return cs_chat_check_online_request;
    }());
    Sproto.cs_chat_check_online_request = cs_chat_check_online_request;
    __reflect(cs_chat_check_online_request.prototype, "Sproto.cs_chat_check_online_request");
    function _decode_cs_chat_check_online_request(d) {
        var o = new cs_chat_check_online_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.playerIdArray = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_chat_check_online_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.playerIdArray != undefined) {
            se.wia(self.playerIdArray, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_chat_check_online_request"] = { en: _encode_cs_chat_check_online_request, de: _decode_cs_chat_check_online_request };
    var cs_chat_check_online_response = (function () {
        function cs_chat_check_online_response() {
        }
        return cs_chat_check_online_response;
    }());
    Sproto.cs_chat_check_online_response = cs_chat_check_online_response;
    __reflect(cs_chat_check_online_response.prototype, "Sproto.cs_chat_check_online_response");
    function _decode_cs_chat_check_online_response(d) {
        var o = new cs_chat_check_online_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.onlineStatus = d.rba();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_chat_check_online_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.onlineStatus != undefined) {
            se.wba(self.onlineStatus, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_chat_check_online_response"] = { en: _encode_cs_chat_check_online_response, de: _decode_cs_chat_check_online_response };
    var cs_chat_init_request = (function () {
        function cs_chat_init_request() {
        }
        return cs_chat_init_request;
    }());
    Sproto.cs_chat_init_request = cs_chat_init_request;
    __reflect(cs_chat_init_request.prototype, "Sproto.cs_chat_init_request");
    function _decode_cs_chat_init_request(d) {
        var o = new cs_chat_init_request;
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
    function _encode_cs_chat_init_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_chat_init_request"] = { en: _encode_cs_chat_init_request, de: _decode_cs_chat_init_request };
    var cs_chat_private_send_init_request = (function () {
        function cs_chat_private_send_init_request() {
        }
        return cs_chat_private_send_init_request;
    }());
    Sproto.cs_chat_private_send_init_request = cs_chat_private_send_init_request;
    __reflect(cs_chat_private_send_init_request.prototype, "Sproto.cs_chat_private_send_init_request");
    function _decode_cs_chat_private_send_init_request(d) {
        var o = new cs_chat_private_send_init_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.targetId = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_chat_private_send_init_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.targetId != undefined) {
            se.wi(self.targetId, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_chat_private_send_init_request"] = { en: _encode_cs_chat_private_send_init_request, de: _decode_cs_chat_private_send_init_request };
    var cs_chat_send_info_request = (function () {
        function cs_chat_send_info_request() {
        }
        return cs_chat_send_info_request;
    }());
    Sproto.cs_chat_send_info_request = cs_chat_send_info_request;
    __reflect(cs_chat_send_info_request.prototype, "Sproto.cs_chat_send_info_request");
    function _decode_cs_chat_send_info_request(d) {
        var o = new cs_chat_send_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.str = d.rs();
                    break;
                case 2:
                    o.recId = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_chat_send_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.str != undefined) {
            se.ws(self.str, 1);
        }
        if (self.recId != undefined) {
            se.wi(self.recId, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_chat_send_info_request"] = { en: _encode_cs_chat_send_info_request, de: _decode_cs_chat_send_info_request };
    var cs_chat_share_info_request = (function () {
        function cs_chat_share_info_request() {
        }
        return cs_chat_share_info_request;
    }());
    Sproto.cs_chat_share_info_request = cs_chat_share_info_request;
    __reflect(cs_chat_share_info_request.prototype, "Sproto.cs_chat_share_info_request");
    function _decode_cs_chat_share_info_request(d) {
        var o = new cs_chat_share_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.shareId = d.ri();
                    break;
                case 1:
                    o.params = d.roa("client_chat_param");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_chat_share_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.shareId != undefined) {
            se.wi(self.shareId, 0);
        }
        if (self.params != undefined) {
            se.woa("client_chat_param", self.params, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_chat_share_info_request"] = { en: _encode_cs_chat_share_info_request, de: _decode_cs_chat_share_info_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=chat_c2s.js.map