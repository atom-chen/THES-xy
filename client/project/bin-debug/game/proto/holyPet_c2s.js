// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_holy_pet_get_info_request = (function () {
        function cs_holy_pet_get_info_request() {
        }
        return cs_holy_pet_get_info_request;
    }());
    Sproto.cs_holy_pet_get_info_request = cs_holy_pet_get_info_request;
    __reflect(cs_holy_pet_get_info_request.prototype, "Sproto.cs_holy_pet_get_info_request");
    function _decode_cs_holy_pet_get_info_request(d) {
        var o = new cs_holy_pet_get_info_request;
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
    function _encode_cs_holy_pet_get_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_holy_pet_get_info_request"] = { en: _encode_cs_holy_pet_get_info_request, de: _decode_cs_holy_pet_get_info_request };
    var cs_holy_pet_get_info_response = (function () {
        function cs_holy_pet_get_info_response() {
        }
        return cs_holy_pet_get_info_response;
    }());
    Sproto.cs_holy_pet_get_info_response = cs_holy_pet_get_info_response;
    __reflect(cs_holy_pet_get_info_response.prototype, "Sproto.cs_holy_pet_get_info_response");
    function _decode_cs_holy_pet_get_info_response(d) {
        var o = new cs_holy_pet_get_info_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.data = d.roa("holy_pet_msg");
                    break;
                case 1:
                    o.luckLog = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_holy_pet_get_info_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.data != undefined) {
            se.woa("holy_pet_msg", self.data, 0);
        }
        if (self.luckLog != undefined) {
            se.wia(self.luckLog, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_holy_pet_get_info_response"] = { en: _encode_cs_holy_pet_get_info_response, de: _decode_cs_holy_pet_get_info_response };
    var cs_holy_pet_get_reward_request = (function () {
        function cs_holy_pet_get_reward_request() {
        }
        return cs_holy_pet_get_reward_request;
    }());
    Sproto.cs_holy_pet_get_reward_request = cs_holy_pet_get_reward_request;
    __reflect(cs_holy_pet_get_reward_request.prototype, "Sproto.cs_holy_pet_get_reward_request");
    function _decode_cs_holy_pet_get_reward_request(d) {
        var o = new cs_holy_pet_get_reward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.no = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_holy_pet_get_reward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.no != undefined) {
            se.wi(self.no, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_holy_pet_get_reward_request"] = { en: _encode_cs_holy_pet_get_reward_request, de: _decode_cs_holy_pet_get_reward_request };
    var cs_holy_pet_luck_draw_request = (function () {
        function cs_holy_pet_luck_draw_request() {
        }
        return cs_holy_pet_luck_draw_request;
    }());
    Sproto.cs_holy_pet_luck_draw_request = cs_holy_pet_luck_draw_request;
    __reflect(cs_holy_pet_luck_draw_request.prototype, "Sproto.cs_holy_pet_luck_draw_request");
    function _decode_cs_holy_pet_luck_draw_request(d) {
        var o = new cs_holy_pet_luck_draw_request;
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
    function _encode_cs_holy_pet_luck_draw_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_holy_pet_luck_draw_request"] = { en: _encode_cs_holy_pet_luck_draw_request, de: _decode_cs_holy_pet_luck_draw_request };
    var cs_holy_pet_luck_draw_response = (function () {
        function cs_holy_pet_luck_draw_response() {
        }
        return cs_holy_pet_luck_draw_response;
    }());
    Sproto.cs_holy_pet_luck_draw_response = cs_holy_pet_luck_draw_response;
    __reflect(cs_holy_pet_luck_draw_response.prototype, "Sproto.cs_holy_pet_luck_draw_response");
    function _decode_cs_holy_pet_luck_draw_response(d) {
        var o = new cs_holy_pet_luck_draw_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.no = d.ri();
                    break;
                case 2:
                    o.data = d.roa("holy_pet_msg");
                    break;
                case 3:
                    o.luckLog = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_holy_pet_luck_draw_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.no != undefined) {
            se.wi(self.no, 1);
        }
        if (self.data != undefined) {
            se.woa("holy_pet_msg", self.data, 2);
        }
        if (self.luckLog != undefined) {
            se.wia(self.luckLog, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_holy_pet_luck_draw_response"] = { en: _encode_cs_holy_pet_luck_draw_response, de: _decode_cs_holy_pet_luck_draw_response };
    var holy_pet_msg = (function () {
        function holy_pet_msg() {
        }
        return holy_pet_msg;
    }());
    Sproto.holy_pet_msg = holy_pet_msg;
    __reflect(holy_pet_msg.prototype, "Sproto.holy_pet_msg");
    function _decode_holy_pet_msg(d) {
        var o = new holy_pet_msg;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.name = d.rs();
                    break;
                case 1:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_holy_pet_msg(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.name != undefined) {
            se.ws(self.name, 0);
        }
        if (self.id != undefined) {
            se.wi(self.id, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["holy_pet_msg"] = { en: _encode_holy_pet_msg, de: _decode_holy_pet_msg };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=holyPet_c2s.js.map