// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_template_buy_clothes_request = (function () {
        function cs_template_buy_clothes_request() {
        }
        return cs_template_buy_clothes_request;
    }());
    Sproto.cs_template_buy_clothes_request = cs_template_buy_clothes_request;
    __reflect(cs_template_buy_clothes_request.prototype, "Sproto.cs_template_buy_clothes_request");
    function _decode_cs_template_buy_clothes_request(d) {
        var o = new cs_template_buy_clothes_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.clothesNo = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_buy_clothes_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.clothesNo != undefined) {
            se.wi(self.clothesNo, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_buy_clothes_request"] = { en: _encode_cs_template_buy_clothes_request, de: _decode_cs_template_buy_clothes_request };
    var cs_template_clothes_request = (function () {
        function cs_template_clothes_request() {
        }
        return cs_template_clothes_request;
    }());
    Sproto.cs_template_clothes_request = cs_template_clothes_request;
    __reflect(cs_template_clothes_request.prototype, "Sproto.cs_template_clothes_request");
    function _decode_cs_template_clothes_request(d) {
        var o = new cs_template_clothes_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.clothesNo = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_clothes_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.clothesNo != undefined) {
            se.wi(self.clothesNo, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_clothes_request"] = { en: _encode_cs_template_clothes_request, de: _decode_cs_template_clothes_request };
    var cs_template_drug_request = (function () {
        function cs_template_drug_request() {
        }
        return cs_template_drug_request;
    }());
    Sproto.cs_template_drug_request = cs_template_drug_request;
    __reflect(cs_template_drug_request.prototype, "Sproto.cs_template_drug_request");
    function _decode_cs_template_drug_request(d) {
        var o = new cs_template_drug_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.drugNum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_drug_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.drugNum != undefined) {
            se.wi(self.drugNum, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_drug_request"] = { en: _encode_cs_template_drug_request, de: _decode_cs_template_drug_request };
    var cs_template_equip_request = (function () {
        function cs_template_equip_request() {
        }
        return cs_template_equip_request;
    }());
    Sproto.cs_template_equip_request = cs_template_equip_request;
    __reflect(cs_template_equip_request.prototype, "Sproto.cs_template_equip_request");
    function _decode_cs_template_equip_request(d) {
        var o = new cs_template_equip_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.itemNo = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_equip_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.itemNo != undefined) {
            se.wi(self.itemNo, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_equip_request"] = { en: _encode_cs_template_equip_request, de: _decode_cs_template_equip_request };
    var cs_template_reward_request = (function () {
        function cs_template_reward_request() {
        }
        return cs_template_reward_request;
    }());
    Sproto.cs_template_reward_request = cs_template_reward_request;
    __reflect(cs_template_reward_request.prototype, "Sproto.cs_template_reward_request");
    function _decode_cs_template_reward_request(d) {
        var o = new cs_template_reward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.no = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_reward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.no != undefined) {
            se.wi(self.no, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_reward_request"] = { en: _encode_cs_template_reward_request, de: _decode_cs_template_reward_request };
    var cs_template_up_level_request = (function () {
        function cs_template_up_level_request() {
        }
        return cs_template_up_level_request;
    }());
    Sproto.cs_template_up_level_request = cs_template_up_level_request;
    __reflect(cs_template_up_level_request.prototype, "Sproto.cs_template_up_level_request");
    function _decode_cs_template_up_level_request(d) {
        var o = new cs_template_up_level_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.autoBuy = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_up_level_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.autoBuy != undefined) {
            se.wi(self.autoBuy, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_up_level_request"] = { en: _encode_cs_template_up_level_request, de: _decode_cs_template_up_level_request };
    var cs_template_up_skill_request = (function () {
        function cs_template_up_skill_request() {
        }
        return cs_template_up_skill_request;
    }());
    Sproto.cs_template_up_skill_request = cs_template_up_skill_request;
    __reflect(cs_template_up_skill_request.prototype, "Sproto.cs_template_up_skill_request");
    function _decode_cs_template_up_skill_request(d) {
        var o = new cs_template_up_skill_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.templateType = d.ri();
                    break;
                case 1:
                    o.skillNo = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_up_skill_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.templateType != undefined) {
            se.wi(self.templateType, 0);
        }
        if (self.skillNo != undefined) {
            se.wi(self.skillNo, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_up_skill_request"] = { en: _encode_cs_template_up_skill_request, de: _decode_cs_template_up_skill_request };
    var cs_template_up_stage_request = (function () {
        function cs_template_up_stage_request() {
        }
        return cs_template_up_stage_request;
    }());
    Sproto.cs_template_up_stage_request = cs_template_up_stage_request;
    __reflect(cs_template_up_stage_request.prototype, "Sproto.cs_template_up_stage_request");
    function _decode_cs_template_up_stage_request(d) {
        var o = new cs_template_up_stage_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.drugId = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_template_up_stage_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.drugId != undefined) {
            se.wi(self.drugId, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_template_up_stage_request"] = { en: _encode_cs_template_up_stage_request, de: _decode_cs_template_up_stage_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=template_c2s.js.map