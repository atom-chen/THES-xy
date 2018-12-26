// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var rank_data_list = (function () {
        function rank_data_list() {
        }
        return rank_data_list;
    }());
    Sproto.rank_data_list = rank_data_list;
    __reflect(rank_data_list.prototype, "Sproto.rank_data_list");
    function _decode_rank_data_list(d) {
        var o = new rank_data_list;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.pos = d.ri();
                    break;
                case 1:
                    o.id = d.ri();
                    break;
                case 2:
                    o.name = d.rs();
                    break;
                case 3:
                    o.level = d.ri();
                    break;
                case 4:
                    o.serverid = d.ri();
                    break;
                case 5:
                    o.job = d.ri();
                    break;
                case 6:
                    o.sex = d.ri();
                    break;
                case 7:
                    o.vip = d.ri();
                    break;
                case 8:
                    o.skin = d.ri();
                    break;
                case 9:
                    o.power = d.ri();
                    break;
                case 10:
                    o.outpet = d.ri();
                    break;
                case 11:
                    o.outxianlv = d.ri();
                    break;
                case 12:
                    o.outride = d.ri();
                    break;
                case 13:
                    o.outwing = d.ri();
                    break;
                case 14:
                    o.outfairy = d.ri();
                    break;
                case 15:
                    o.outweapon = d.ri();
                    break;
                case 16:
                    o.outtiannv = d.ri();
                    break;
                case 17:
                    o.outtianshen = d.ri();
                    break;
                case 18:
                    o.outcircle = d.ri();
                    break;
                case 19:
                    o.outposition = d.ri();
                    break;
                case 20:
                    o.outpsychic = d.ri();
                    break;
                case 21:
                    o.outsoul = d.ri();
                    break;
                case 22:
                    o.outflower = d.ri();
                    break;
                case 23:
                    o.outnimbus = d.ri();
                    break;
                case 24:
                    o.chapterlevel = d.ri();
                    break;
                case 25:
                    o.lv = d.ri();
                    break;
                case 26:
                    o.outbaby = d.ri();
                    break;
                case 27:
                    o.outbabysex = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_rank_data_list(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 28);
        if (self.pos != undefined) {
            se.wi(self.pos, 0);
        }
        if (self.id != undefined) {
            se.wi(self.id, 1);
        }
        if (self.name != undefined) {
            se.ws(self.name, 2);
        }
        if (self.level != undefined) {
            se.wi(self.level, 3);
        }
        if (self.serverid != undefined) {
            se.wi(self.serverid, 4);
        }
        if (self.job != undefined) {
            se.wi(self.job, 5);
        }
        if (self.sex != undefined) {
            se.wi(self.sex, 6);
        }
        if (self.vip != undefined) {
            se.wi(self.vip, 7);
        }
        if (self.skin != undefined) {
            se.wi(self.skin, 8);
        }
        if (self.power != undefined) {
            se.wi(self.power, 9);
        }
        if (self.outpet != undefined) {
            se.wi(self.outpet, 10);
        }
        if (self.outxianlv != undefined) {
            se.wi(self.outxianlv, 11);
        }
        if (self.outride != undefined) {
            se.wi(self.outride, 12);
        }
        if (self.outwing != undefined) {
            se.wi(self.outwing, 13);
        }
        if (self.outfairy != undefined) {
            se.wi(self.outfairy, 14);
        }
        if (self.outweapon != undefined) {
            se.wi(self.outweapon, 15);
        }
        if (self.outtiannv != undefined) {
            se.wi(self.outtiannv, 16);
        }
        if (self.outtianshen != undefined) {
            se.wi(self.outtianshen, 17);
        }
        if (self.outcircle != undefined) {
            se.wi(self.outcircle, 18);
        }
        if (self.outposition != undefined) {
            se.wi(self.outposition, 19);
        }
        if (self.outpsychic != undefined) {
            se.wi(self.outpsychic, 20);
        }
        if (self.outsoul != undefined) {
            se.wi(self.outsoul, 21);
        }
        if (self.outflower != undefined) {
            se.wi(self.outflower, 22);
        }
        if (self.outnimbus != undefined) {
            se.wi(self.outnimbus, 23);
        }
        if (self.chapterlevel != undefined) {
            se.wi(self.chapterlevel, 24);
        }
        if (self.lv != undefined) {
            se.wi(self.lv, 25);
        }
        if (self.outbaby != undefined) {
            se.wi(self.outbaby, 26);
        }
        if (self.outbabysex != undefined) {
            se.wi(self.outbabysex, 27);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["rank_data_list"] = { en: _encode_rank_data_list, de: _decode_rank_data_list };
    var sc_rank_data_request = (function () {
        function sc_rank_data_request() {
        }
        return sc_rank_data_request;
    }());
    Sproto.sc_rank_data_request = sc_rank_data_request;
    __reflect(sc_rank_data_request.prototype, "Sproto.sc_rank_data_request");
    function _decode_sc_rank_data_request(d) {
        var o = new sc_rank_data_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.datas = d.roa("rank_data_list");
                    break;
                case 2:
                    o.selfRank = d.ri();
                    break;
                case 3:
                    o.value = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_rank_data_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.datas != undefined) {
            se.woa("rank_data_list", self.datas, 1);
        }
        if (self.selfRank != undefined) {
            se.wi(self.selfRank, 2);
        }
        if (self.value != undefined) {
            se.wi(self.value, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_rank_data_request"] = { en: _encode_sc_rank_data_request, de: _decode_sc_rank_data_request };
    var sc_rank_worship_all_count_ret_request = (function () {
        function sc_rank_worship_all_count_ret_request() {
        }
        return sc_rank_worship_all_count_ret_request;
    }());
    Sproto.sc_rank_worship_all_count_ret_request = sc_rank_worship_all_count_ret_request;
    __reflect(sc_rank_worship_all_count_ret_request.prototype, "Sproto.sc_rank_worship_all_count_ret_request");
    function _decode_sc_rank_worship_all_count_ret_request(d) {
        var o = new sc_rank_worship_all_count_ret_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.worshipCount = d.roa("worship_count");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_rank_worship_all_count_ret_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.worshipCount != undefined) {
            se.woa("worship_count", self.worshipCount, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_rank_worship_all_count_ret_request"] = { en: _encode_sc_rank_worship_all_count_ret_request, de: _decode_sc_rank_worship_all_count_ret_request };
    var sc_rank_worship_data_request = (function () {
        function sc_rank_worship_data_request() {
        }
        return sc_rank_worship_data_request;
    }());
    Sproto.sc_rank_worship_data_request = sc_rank_worship_data_request;
    __reflect(sc_rank_worship_data_request.prototype, "Sproto.sc_rank_worship_data_request");
    function _decode_sc_rank_worship_data_request(d) {
        var o = new sc_rank_worship_data_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.count = d.ri();
                    break;
                case 2:
                    o.actorData = d.ro("actor_base_data");
                    break;
                case 3:
                    o.subRole = d.roa("rank_subrole");
                    break;
                case 4:
                    o.hero = d.ri();
                    break;
                case 5:
                    o.pet = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_rank_worship_data_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 6);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.count != undefined) {
            se.wi(self.count, 1);
        }
        if (self.actorData != undefined) {
            se.wo("actor_base_data", self.actorData, 2);
        }
        if (self.subRole != undefined) {
            se.woa("rank_subrole", self.subRole, 3);
        }
        if (self.hero != undefined) {
            se.wi(self.hero, 4);
        }
        if (self.pet != undefined) {
            se.wi(self.pet, 5);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_rank_worship_data_request"] = { en: _encode_sc_rank_worship_data_request, de: _decode_sc_rank_worship_data_request };
    var sc_rank_worship_success_request = (function () {
        function sc_rank_worship_success_request() {
        }
        return sc_rank_worship_success_request;
    }());
    Sproto.sc_rank_worship_success_request = sc_rank_worship_success_request;
    __reflect(sc_rank_worship_success_request.prototype, "Sproto.sc_rank_worship_success_request");
    function _decode_sc_rank_worship_success_request(d) {
        var o = new sc_rank_worship_success_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.count = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_rank_worship_success_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.count != undefined) {
            se.wi(self.count, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_rank_worship_success_request"] = { en: _encode_sc_rank_worship_success_request, de: _decode_sc_rank_worship_success_request };
    var worship_count = (function () {
        function worship_count() {
        }
        return worship_count;
    }());
    Sproto.worship_count = worship_count;
    __reflect(worship_count.prototype, "Sproto.worship_count");
    function _decode_worship_count(d) {
        var o = new worship_count;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.count = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_worship_count(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.count != undefined) {
            se.wi(self.count, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["worship_count"] = { en: _encode_worship_count, de: _decode_worship_count };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=rank_s2c.js.map