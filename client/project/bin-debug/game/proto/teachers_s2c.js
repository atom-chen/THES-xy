// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var sc_teachers_graduation_request = (function () {
        function sc_teachers_graduation_request() {
        }
        return sc_teachers_graduation_request;
    }());
    Sproto.sc_teachers_graduation_request = sc_teachers_graduation_request;
    __reflect(sc_teachers_graduation_request.prototype, "Sproto.sc_teachers_graduation_request");
    function _decode_sc_teachers_graduation_request(d) {
        var o = new sc_teachers_graduation_request;
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
    function _encode_sc_teachers_graduation_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.no != undefined) {
            se.wi(self.no, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_teachers_graduation_request"] = { en: _encode_sc_teachers_graduation_request, de: _decode_sc_teachers_graduation_request };
    var sc_teachers_info_request = (function () {
        function sc_teachers_info_request() {
        }
        return sc_teachers_info_request;
    }());
    Sproto.sc_teachers_info_request = sc_teachers_info_request;
    __reflect(sc_teachers_info_request.prototype, "Sproto.sc_teachers_info_request");
    function _decode_sc_teachers_info_request(d) {
        var o = new sc_teachers_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.teacherData = d.ro("teachers_data");
                    break;
                case 1:
                    o.studentData = d.roa("teachers_data");
                    break;
                case 2:
                    o.messageData = d.roa("teachers_info");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_teachers_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.teacherData != undefined) {
            se.wo("teachers_data", self.teacherData, 0);
        }
        if (self.studentData != undefined) {
            se.woa("teachers_data", self.studentData, 1);
        }
        if (self.messageData != undefined) {
            se.woa("teachers_info", self.messageData, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_teachers_info_request"] = { en: _encode_sc_teachers_info_request, de: _decode_sc_teachers_info_request };
    var sc_teachers_message_add_request = (function () {
        function sc_teachers_message_add_request() {
        }
        return sc_teachers_message_add_request;
    }());
    Sproto.sc_teachers_message_add_request = sc_teachers_message_add_request;
    __reflect(sc_teachers_message_add_request.prototype, "Sproto.sc_teachers_message_add_request");
    function _decode_sc_teachers_message_add_request(d) {
        var o = new sc_teachers_message_add_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                case 1:
                    o.name = d.rs();
                    break;
                case 2:
                    o.lv = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_teachers_message_add_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        if (self.name != undefined) {
            se.ws(self.name, 1);
        }
        if (self.lv != undefined) {
            se.wi(self.lv, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_teachers_message_add_request"] = { en: _encode_sc_teachers_message_add_request, de: _decode_sc_teachers_message_add_request };
    var sc_teachers_update_request = (function () {
        function sc_teachers_update_request() {
        }
        return sc_teachers_update_request;
    }());
    Sproto.sc_teachers_update_request = sc_teachers_update_request;
    __reflect(sc_teachers_update_request.prototype, "Sproto.sc_teachers_update_request");
    function _decode_sc_teachers_update_request(d) {
        var o = new sc_teachers_update_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.teacherData = d.ro("teachers_data");
                    break;
                case 1:
                    o.studentData = d.ro("teachers_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_teachers_update_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.teacherData != undefined) {
            se.wo("teachers_data", self.teacherData, 0);
        }
        if (self.studentData != undefined) {
            se.wo("teachers_data", self.studentData, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_teachers_update_request"] = { en: _encode_sc_teachers_update_request, de: _decode_sc_teachers_update_request };
    var teachers_act_data = (function () {
        function teachers_act_data() {
        }
        return teachers_act_data;
    }());
    Sproto.teachers_act_data = teachers_act_data;
    __reflect(teachers_act_data.prototype, "Sproto.teachers_act_data");
    function _decode_teachers_act_data(d) {
        var o = new teachers_act_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.actNo = d.ri();
                    break;
                case 1:
                    o.num = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_teachers_act_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.actNo != undefined) {
            se.wi(self.actNo, 0);
        }
        if (self.num != undefined) {
            se.wi(self.num, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["teachers_act_data"] = { en: _encode_teachers_act_data, de: _decode_teachers_act_data };
    var teachers_data = (function () {
        function teachers_data() {
        }
        return teachers_data;
    }());
    Sproto.teachers_data = teachers_data;
    __reflect(teachers_data.prototype, "Sproto.teachers_data");
    function _decode_teachers_data(d) {
        var o = new teachers_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.no = d.ri();
                    break;
                case 1:
                    o.teacher = d.ri();
                    break;
                case 2:
                    o.tName = d.rs();
                    break;
                case 3:
                    o.tLv = d.ri();
                    break;
                case 4:
                    o.tShows = d.ro("entity_shows");
                    break;
                case 5:
                    o.student = d.ri();
                    break;
                case 6:
                    o.sName = d.rs();
                    break;
                case 7:
                    o.sLv = d.ri();
                    break;
                case 8:
                    o.sShows = d.ro("entity_shows");
                    break;
                case 9:
                    o.exp = d.ri();
                    break;
                case 10:
                    o.data = d.roa("teachers_act_data");
                    break;
                case 11:
                    o.rewards = d.ri();
                    break;
                case 12:
                    o.tLogin = d.rb();
                    break;
                case 13:
                    o.sLogin = d.rb();
                    break;
                case 14:
                    o.day = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_teachers_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 15);
        if (self.no != undefined) {
            se.wi(self.no, 0);
        }
        if (self.teacher != undefined) {
            se.wi(self.teacher, 1);
        }
        if (self.tName != undefined) {
            se.ws(self.tName, 2);
        }
        if (self.tLv != undefined) {
            se.wi(self.tLv, 3);
        }
        if (self.tShows != undefined) {
            se.wo("entity_shows", self.tShows, 4);
        }
        if (self.student != undefined) {
            se.wi(self.student, 5);
        }
        if (self.sName != undefined) {
            se.ws(self.sName, 6);
        }
        if (self.sLv != undefined) {
            se.wi(self.sLv, 7);
        }
        if (self.sShows != undefined) {
            se.wo("entity_shows", self.sShows, 8);
        }
        if (self.exp != undefined) {
            se.wi(self.exp, 9);
        }
        if (self.data != undefined) {
            se.woa("teachers_act_data", self.data, 10);
        }
        if (self.rewards != undefined) {
            se.wi(self.rewards, 11);
        }
        if (self.tLogin != undefined) {
            se.wb(self.tLogin, 12);
        }
        if (self.sLogin != undefined) {
            se.wb(self.sLogin, 13);
        }
        if (self.day != undefined) {
            se.wi(self.day, 14);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["teachers_data"] = { en: _encode_teachers_data, de: _decode_teachers_data };
    var teachers_info = (function () {
        function teachers_info() {
        }
        return teachers_info;
    }());
    Sproto.teachers_info = teachers_info;
    __reflect(teachers_info.prototype, "Sproto.teachers_info");
    function _decode_teachers_info(d) {
        var o = new teachers_info;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                case 1:
                    o.name = d.rs();
                    break;
                case 2:
                    o.lv = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_teachers_info(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        if (self.name != undefined) {
            se.ws(self.name, 1);
        }
        if (self.lv != undefined) {
            se.wi(self.lv, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["teachers_info"] = { en: _encode_teachers_info, de: _decode_teachers_info };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=teachers_s2c.js.map