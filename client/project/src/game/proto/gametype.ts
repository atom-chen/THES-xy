// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class actor_base_data {
		public id: number; // tag 0
		public name: string; // tag 1
		public level: number; // tag 2
		public vip: number; // tag 3
		public power: number; // tag 4
	}

	function _decode_actor_base_data(d: SprotoTypeDeserialize) {
		let o = new actor_base_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.level = d.ri ();
				break;
			case 3:
				o.vip = d.ri ();
				break;
			case 4:
				o.power = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_actor_base_data(self: actor_base_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.level != undefined) {
			se.wi (self.level, 2);
		}

		if (self.vip != undefined) {
			se.wi (self.vip, 3);
		}

		if (self.power != undefined) {
			se.wi (self.power, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["actor_base_data"] = {en: _encode_actor_base_data, de: _decode_actor_base_data}
	export class actor_simple_data {
		public name: string; // tag 0
		public job: number; // tag 1
		public sex: number; // tag 2
		public zsLv: number; // tag 3
		public lv: number; // tag 4
	}

	function _decode_actor_simple_data(d: SprotoTypeDeserialize) {
		let o = new actor_simple_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.job = d.ri ();
				break;
			case 2:
				o.sex = d.ri ();
				break;
			case 3:
				o.zsLv = d.ri ();
				break;
			case 4:
				o.lv = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_actor_simple_data(self: actor_simple_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.job != undefined) {
			se.wi (self.job, 1);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 2);
		}

		if (self.zsLv != undefined) {
			se.wi (self.zsLv, 3);
		}

		if (self.lv != undefined) {
			se.wi (self.lv, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["actor_simple_data"] = {en: _encode_actor_simple_data, de: _decode_actor_simple_data}
	export class arena_target_data {
		public id: number; // tag 0
		public iskill: boolean; // tag 1
		public rank: number; // tag 2
		public power: number; // tag 3
		public name: string; // tag 4
		public job: number; // tag 5
		public sex: number; // tag 6
		public shows: number[]; // tag 7
		public monId: number; // tag 8
	}

	function _decode_arena_target_data(d: SprotoTypeDeserialize) {
		let o = new arena_target_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.iskill = d.rb ();
				break;
			case 2:
				o.rank = d.ri ();
				break;
			case 3:
				o.power = d.ri ();
				break;
			case 4:
				o.name = d.rs ();
				break;
			case 5:
				o.job = d.ri ();
				break;
			case 6:
				o.sex = d.ri ();
				break;
			case 7:
				o.shows = d.ria ();
				break;
			case 8:
				o.monId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_arena_target_data(self: arena_target_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 9);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.iskill != undefined) {
			se.wb (self.iskill, 1);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 2);
		}

		if (self.power != undefined) {
			se.wi (self.power, 3);
		}

		if (self.name != undefined) {
			se.ws (self.name, 4);
		}

		if (self.job != undefined) {
			se.wi (self.job, 5);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 6);
		}

		if (self.shows != undefined) {
			se.wia (self.shows, 7);
		}

		if (self.monId != undefined) {
			se.wi (self.monId, 8);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["arena_target_data"] = {en: _encode_arena_target_data, de: _decode_arena_target_data}
	export class attribute_data {
		public type: number; // tag 0
		public value: number; // tag 1
	}

	function _decode_attribute_data(d: SprotoTypeDeserialize) {
		let o = new attribute_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.value = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_attribute_data(self: attribute_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.value != undefined) {
			se.wi (self.value, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["attribute_data"] = {en: _encode_attribute_data, de: _decode_attribute_data}
	export class baby_star_msg {
		public name: string; // tag 0
		public id: number; // tag 1
	}

	function _decode_baby_star_msg(d: SprotoTypeDeserialize) {
		let o = new baby_star_msg;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_baby_star_msg(self: baby_star_msg, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["baby_star_msg"] = {en: _encode_baby_star_msg, de: _decode_baby_star_msg}
	export class client_chat_param {
		public type: number; // tag 0
		public value: number; // tag 1
		public strvalue: string; // tag 2
		public valueEx: number; // tag 3
	}

	function _decode_client_chat_param(d: SprotoTypeDeserialize) {
		let o = new client_chat_param;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.value = d.ri ();
				break;
			case 2:
				o.strvalue = d.rs ();
				break;
			case 3:
				o.valueEx = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_client_chat_param(self: client_chat_param, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.value != undefined) {
			se.wi (self.value, 1);
		}

		if (self.strvalue != undefined) {
			se.ws (self.strvalue, 2);
		}

		if (self.valueEx != undefined) {
			se.wi (self.valueEx, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["client_chat_param"] = {en: _encode_client_chat_param, de: _decode_client_chat_param}
	export class dress_time_info {
		public dressId: number; // tag 0
		public invalidtime: number; // tag 2
		public dressLevel: number; // tag 3
		public dressExp: number; // tag 4
	}

	function _decode_dress_time_info(d: SprotoTypeDeserialize) {
		let o = new dress_time_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dressId = d.ri ();
				break;
			case 2:
				o.invalidtime = d.ri ();
				break;
			case 3:
				o.dressLevel = d.ri ();
				break;
			case 4:
				o.dressExp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_dress_time_info(self: dress_time_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.dressId != undefined) {
			se.wi (self.dressId, 0);
		}

		if (self.invalidtime != undefined) {
			se.wi (self.invalidtime, 2);
		}

		if (self.dressLevel != undefined) {
			se.wi (self.dressLevel, 3);
		}

		if (self.dressExp != undefined) {
			se.wi (self.dressExp, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["dress_time_info"] = {en: _encode_dress_time_info, de: _decode_dress_time_info}
	export class equip_data {
		public strengthen: number; // tag 0
		public refine: number; // tag 1
		public anneal: number; // tag 2
		public gem: number; // tag 3
		public item: equip_item_data; // tag 4
		public reddata: equip_red_data; // tag 5
	}

	function _decode_equip_data(d: SprotoTypeDeserialize) {
		let o = new equip_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.strengthen = d.ri ();
				break;
			case 1:
				o.refine = d.ri ();
				break;
			case 2:
				o.anneal = d.ri ();
				break;
			case 3:
				o.gem = d.ri ();
				break;
			case 4:
				o.item = d.ro("equip_item_data");
				break;
			case 5:
				o.reddata = d.ro("equip_red_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_equip_data(self: equip_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.strengthen != undefined) {
			se.wi (self.strengthen, 0);
		}

		if (self.refine != undefined) {
			se.wi (self.refine, 1);
		}

		if (self.anneal != undefined) {
			se.wi (self.anneal, 2);
		}

		if (self.gem != undefined) {
			se.wi (self.gem, 3);
		}

		if (self.item != undefined) {
			se.wo ("equip_item_data", self.item, 4);
		}

		if (self.reddata != undefined) {
			se.wo ("equip_red_data", self.reddata, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["equip_data"] = {en: _encode_equip_data, de: _decode_equip_data}
	export class equip_item_data {
		public id: number; // tag 0
		public attrs: attribute_data[]; // tag 1
	}

	function _decode_equip_item_data(d: SprotoTypeDeserialize) {
		let o = new equip_item_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.attrs = d.roa("attribute_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_equip_item_data(self: equip_item_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.attrs != undefined) {
			se.woa ("attribute_data", self.attrs, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["equip_item_data"] = {en: _encode_equip_item_data, de: _decode_equip_item_data}
	export class equip_red_data {
		public injectstage: number; // tag 0
		public injectcount: number; // tag 1
	}

	function _decode_equip_red_data(d: SprotoTypeDeserialize) {
		let o = new equip_red_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.injectstage = d.ri ();
				break;
			case 1:
				o.injectcount = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_equip_red_data(self: equip_red_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.injectstage != undefined) {
			se.wi (self.injectstage, 0);
		}

		if (self.injectcount != undefined) {
			se.wi (self.injectcount, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["equip_red_data"] = {en: _encode_equip_red_data, de: _decode_equip_red_data}
	export class fuwen_data {
		public openStatus: boolean; // tag 0
		public level: number; // tag 1
		public equipDatas: item_data[]; // tag 2
	}

	function _decode_fuwen_data(d: SprotoTypeDeserialize) {
		let o = new fuwen_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.openStatus = d.rb ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			case 2:
				o.equipDatas = d.roa("item_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_fuwen_data(self: fuwen_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.openStatus != undefined) {
			se.wb (self.openStatus, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		if (self.equipDatas != undefined) {
			se.woa ("item_data", self.equipDatas, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["fuwen_data"] = {en: _encode_fuwen_data, de: _decode_fuwen_data}
	export class godswords_data {
		public lv: number; // tag 0
		public star: number; // tag 1
		public exp: number; // tag 2
		public openStatus: boolean; // tag 3
		public dressId: number; // tag 4
	}

	function _decode_godswords_data(d: SprotoTypeDeserialize) {
		let o = new godswords_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			case 1:
				o.star = d.ri ();
				break;
			case 2:
				o.exp = d.ri ();
				break;
			case 3:
				o.openStatus = d.rb ();
				break;
			case 4:
				o.dressId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_godswords_data(self: godswords_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		if (self.star != undefined) {
			se.wi (self.star, 1);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 2);
		}

		if (self.openStatus != undefined) {
			se.wb (self.openStatus, 3);
		}

		if (self.dressId != undefined) {
			se.wi (self.dressId, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["godswords_data"] = {en: _encode_godswords_data, de: _decode_godswords_data}
	export class item_data {
		public handle: number; // tag 0
		public id: number; // tag 1
		public count: number; // tag 2
		public attrs: attribute_data[]; // tag 3
		public invalidtime: number; // tag 4
	}

	function _decode_item_data(d: SprotoTypeDeserialize) {
		let o = new item_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.handle = d.ri ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			case 2:
				o.count = d.ri ();
				break;
			case 3:
				o.attrs = d.roa("attribute_data");
				break;
			case 4:
				o.invalidtime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_item_data(self: item_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.handle != undefined) {
			se.wi (self.handle, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		if (self.count != undefined) {
			se.wi (self.count, 2);
		}

		if (self.attrs != undefined) {
			se.woa ("attribute_data", self.attrs, 3);
		}

		if (self.invalidtime != undefined) {
			se.wi (self.invalidtime, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["item_data"] = {en: _encode_item_data, de: _decode_item_data}
	export class jingmai_data {
		public level: number; // tag 0
		public stage: number; // tag 1
	}

	function _decode_jingmai_data(d: SprotoTypeDeserialize) {
		let o = new jingmai_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.level = d.ri ();
				break;
			case 1:
				o.stage = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_jingmai_data(self: jingmai_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.level != undefined) {
			se.wi (self.level, 0);
		}

		if (self.stage != undefined) {
			se.wi (self.stage, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["jingmai_data"] = {en: _encode_jingmai_data, de: _decode_jingmai_data}
	export class legend_data {
		public isActivate: number; // tag 0
	}

	function _decode_legend_data(d: SprotoTypeDeserialize) {
		let o = new legend_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.isActivate = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_legend_data(self: legend_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.isActivate != undefined) {
			se.wi (self.isActivate, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["legend_data"] = {en: _encode_legend_data, de: _decode_legend_data}
	export class long_hun_data {
		public stage: number; // tag 0
		public level: number; // tag 1
		public exp: number; // tag 2
	}

	function _decode_long_hun_data(d: SprotoTypeDeserialize) {
		let o = new long_hun_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.stage = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			case 2:
				o.exp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_long_hun_data(self: long_hun_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.stage != undefined) {
			se.wi (self.stage, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["long_hun_data"] = {en: _encode_long_hun_data, de: _decode_long_hun_data}
	export class longzhuang_data {
		public id: number; // tag 0
		public lv: number; // tag 1
		public star: number; // tag 2
		public exp: number; // tag 3
	}

	function _decode_longzhuang_data(d: SprotoTypeDeserialize) {
		let o = new longzhuang_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.lv = d.ri ();
				break;
			case 2:
				o.star = d.ri ();
				break;
			case 3:
				o.exp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_longzhuang_data(self: longzhuang_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.lv != undefined) {
			se.wi (self.lv, 1);
		}

		if (self.star != undefined) {
			se.wi (self.star, 2);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["longzhuang_data"] = {en: _encode_longzhuang_data, de: _decode_longzhuang_data}
	export class player_data {
		public name: string; // tag 0
		public id: number; // tag 1
		public vip: number; // tag 2
		public guildid: number; // tag 3
		public guildName: string; // tag 4
	}

	function _decode_player_data(d: SprotoTypeDeserialize) {
		let o = new player_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			case 2:
				o.vip = d.ri ();
				break;
			case 3:
				o.guildid = d.ri ();
				break;
			case 4:
				o.guildName = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_player_data(self: player_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		if (self.vip != undefined) {
			se.wi (self.vip, 2);
		}

		if (self.guildid != undefined) {
			se.wi (self.guildid, 3);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["player_data"] = {en: _encode_player_data, de: _decode_player_data}
	export class player_whole_data {
		public name: string; // tag 0
		public job: number; // tag 1
		public sex: number; // tag 2
		public vip: number; // tag 3
		public level: number; // tag 4
		public power: number; // tag 5
		public offlineTime: number; // tag 6
		public guildId: number; // tag 7
		public guildName: string; // tag 8
		public dbid: number; // tag 9
		public headframe: number; // tag 10
	}

	function _decode_player_whole_data(d: SprotoTypeDeserialize) {
		let o = new player_whole_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.job = d.ri ();
				break;
			case 2:
				o.sex = d.ri ();
				break;
			case 3:
				o.vip = d.ri ();
				break;
			case 4:
				o.level = d.ri ();
				break;
			case 5:
				o.power = d.ri ();
				break;
			case 6:
				o.offlineTime = d.ri ();
				break;
			case 7:
				o.guildId = d.ri ();
				break;
			case 8:
				o.guildName = d.rs ();
				break;
			case 9:
				o.dbid = d.ri ();
				break;
			case 10:
				o.headframe = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_player_whole_data(self: player_whole_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 11);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.job != undefined) {
			se.wi (self.job, 1);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 2);
		}

		if (self.vip != undefined) {
			se.wi (self.vip, 3);
		}

		if (self.level != undefined) {
			se.wi (self.level, 4);
		}

		if (self.power != undefined) {
			se.wi (self.power, 5);
		}

		if (self.offlineTime != undefined) {
			se.wi (self.offlineTime, 6);
		}

		if (self.guildId != undefined) {
			se.wi (self.guildId, 7);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 8);
		}

		if (self.dbid != undefined) {
			se.wi (self.dbid, 9);
		}

		if (self.headframe != undefined) {
			se.wi (self.headframe, 10);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["player_whole_data"] = {en: _encode_player_whole_data, de: _decode_player_whole_data}
	export class position {
		public x: number; // tag 0
		public y: number; // tag 1
	}

	function _decode_position(d: SprotoTypeDeserialize) {
		let o = new position;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.x = d.ri ();
				break;
			case 1:
				o.y = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_position(self: position, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.x != undefined) {
			se.wi (self.x, 0);
		}

		if (self.y != undefined) {
			se.wi (self.y, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["position"] = {en: _encode_position, de: _decode_position}
	export class qualifyingMgr_rank_data {
		public name: string; // tag 0
		public server: number; // tag 1
		public point: number; // tag 2
	}

	function _decode_qualifyingMgr_rank_data(d: SprotoTypeDeserialize) {
		let o = new qualifyingMgr_rank_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.server = d.ri ();
				break;
			case 2:
				o.point = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_qualifyingMgr_rank_data(self: qualifyingMgr_rank_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.server != undefined) {
			se.wi (self.server, 1);
		}

		if (self.point != undefined) {
			se.wi (self.point, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["qualifyingMgr_rank_data"] = {en: _encode_qualifyingMgr_rank_data, de: _decode_qualifyingMgr_rank_data}
	export class rank_data {
		public id: number; // tag 0
		public name: string; // tag 1
		public rank: number; // tag 2
		public value: number; // tag 3
	}

	function _decode_rank_data(d: SprotoTypeDeserialize) {
		let o = new rank_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.rank = d.ri ();
				break;
			case 3:
				o.value = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_rank_data(self: rank_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 2);
		}

		if (self.value != undefined) {
			se.wi (self.value, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["rank_data"] = {en: _encode_rank_data, de: _decode_rank_data}
	export class rank_subrole {
		public job: number; // tag 0
		public sex: number; // tag 1
		public clothID: number; // tag 2
		public swordID: number; // tag 3
		public wingOpenStatus: boolean; // tag 4
		public wingLevel: number; // tag 5
		public zhuangbei: number[]; // tag 6
		public legendDress: number; // tag 7
		public exring: number; // tag 8
		public wingDress: number; // tag 9
		public godswordDress: number; // tag 10
	}

	function _decode_rank_subrole(d: SprotoTypeDeserialize) {
		let o = new rank_subrole;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.job = d.ri ();
				break;
			case 1:
				o.sex = d.ri ();
				break;
			case 2:
				o.clothID = d.ri ();
				break;
			case 3:
				o.swordID = d.ri ();
				break;
			case 4:
				o.wingOpenStatus = d.rb ();
				break;
			case 5:
				o.wingLevel = d.ri ();
				break;
			case 6:
				o.zhuangbei = d.ria ();
				break;
			case 7:
				o.legendDress = d.ri ();
				break;
			case 8:
				o.exring = d.ri ();
				break;
			case 9:
				o.wingDress = d.ri ();
				break;
			case 10:
				o.godswordDress = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_rank_subrole(self: rank_subrole, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 11);

		if (self.job != undefined) {
			se.wi (self.job, 0);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 1);
		}

		if (self.clothID != undefined) {
			se.wi (self.clothID, 2);
		}

		if (self.swordID != undefined) {
			se.wi (self.swordID, 3);
		}

		if (self.wingOpenStatus != undefined) {
			se.wb (self.wingOpenStatus, 4);
		}

		if (self.wingLevel != undefined) {
			se.wi (self.wingLevel, 5);
		}

		if (self.zhuangbei != undefined) {
			se.wia (self.zhuangbei, 6);
		}

		if (self.legendDress != undefined) {
			se.wi (self.legendDress, 7);
		}

		if (self.exring != undefined) {
			se.wi (self.exring, 8);
		}

		if (self.wingDress != undefined) {
			se.wi (self.wingDress, 9);
		}

		if (self.godswordDress != undefined) {
			se.wi (self.godswordDress, 10);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["rank_subrole"] = {en: _encode_rank_subrole, de: _decode_rank_subrole}
	export class reward_data {
		public type: number; // tag 0
		public id: number; // tag 1
		public count: number; // tag 2
	}

	function _decode_reward_data(d: SprotoTypeDeserialize) {
		let o = new reward_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			case 2:
				o.count = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_reward_data(self: reward_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		if (self.count != undefined) {
			se.wi (self.count, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["reward_data"] = {en: _encode_reward_data, de: _decode_reward_data}
	export class ring_data {
		public id: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_ring_data(d: SprotoTypeDeserialize) {
		let o = new ring_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_ring_data(self: ring_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["ring_data"] = {en: _encode_ring_data, de: _decode_ring_data}
	export class role_data {
		public power: number; // tag 0
		public skillDatas: number[]; // tag 1
		public skillSortDatas: number[]; // tag 2
		public equipsData: equip_data[]; // tag 3
		public attributeData: number[]; // tag 4
		public attributeExData: number[]; // tag 5
	}

	function _decode_role_data(d: SprotoTypeDeserialize) {
		let o = new role_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.power = d.ri ();
				break;
			case 1:
				o.skillDatas = d.ria ();
				break;
			case 2:
				o.skillSortDatas = d.ria ();
				break;
			case 3:
				o.equipsData = d.roa("equip_data");
				break;
			case 4:
				o.attributeData = d.ria ();
				break;
			case 5:
				o.attributeExData = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_role_data(self: role_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.power != undefined) {
			se.wi (self.power, 0);
		}

		if (self.skillDatas != undefined) {
			se.wia (self.skillDatas, 1);
		}

		if (self.skillSortDatas != undefined) {
			se.wia (self.skillSortDatas, 2);
		}

		if (self.equipsData != undefined) {
			se.woa ("equip_data", self.equipsData, 3);
		}

		if (self.attributeData != undefined) {
			se.wia (self.attributeData, 4);
		}

		if (self.attributeExData != undefined) {
			se.wia (self.attributeExData, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["role_data"] = {en: _encode_role_data, de: _decode_role_data}
	export class rune_data {
		public id: number; // tag 0
	}

	function _decode_rune_data(d: SprotoTypeDeserialize) {
		let o = new rune_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_rune_data(self: rune_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["rune_data"] = {en: _encode_rune_data, de: _decode_rune_data}
	export class share_date {
		public shareId: number; // tag 0
		public showInfo: client_chat_param[]; // tag 1
		public player: player_data[]; // tag 2
	}

	function _decode_share_date(d: SprotoTypeDeserialize) {
		let o = new share_date;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.shareId = d.ri ();
				break;
			case 1:
				o.showInfo = d.roa("client_chat_param");
				break;
			case 2:
				o.player = d.roa("player_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_share_date(self: share_date, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.shareId != undefined) {
			se.wi (self.shareId, 0);
		}

		if (self.showInfo != undefined) {
			se.woa ("client_chat_param", self.showInfo, 1);
		}

		if (self.player != undefined) {
			se.woa ("player_data", self.player, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["share_date"] = {en: _encode_share_date, de: _decode_share_date}
	export class shop_data {
		public type: number; // tag 0
		public datas: number[]; // tag 1
		public limittime: number[]; // tag 2
	}

	function _decode_shop_data(d: SprotoTypeDeserialize) {
		let o = new shop_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.datas = d.ria ();
				break;
			case 2:
				o.limittime = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_shop_data(self: shop_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.datas != undefined) {
			se.wia (self.datas, 1);
		}

		if (self.limittime != undefined) {
			se.wia (self.limittime, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["shop_data"] = {en: _encode_shop_data, de: _decode_shop_data}
	export class showInfo_data {
		public itemId: number; // tag 0
		public petId: number; // tag 1
		public treasureId: number; // tag 2
		public rideId: number; // tag 3
		public fubenId: number; // tag 4
	}

	function _decode_showInfo_data(d: SprotoTypeDeserialize) {
		let o = new showInfo_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.itemId = d.ri ();
				break;
			case 1:
				o.petId = d.ri ();
				break;
			case 2:
				o.treasureId = d.ri ();
				break;
			case 3:
				o.rideId = d.ri ();
				break;
			case 4:
				o.fubenId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_showInfo_data(self: showInfo_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.itemId != undefined) {
			se.wi (self.itemId, 0);
		}

		if (self.petId != undefined) {
			se.wi (self.petId, 1);
		}

		if (self.treasureId != undefined) {
			se.wi (self.treasureId, 2);
		}

		if (self.rideId != undefined) {
			se.wi (self.rideId, 3);
		}

		if (self.fubenId != undefined) {
			se.wi (self.fubenId, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["showInfo_data"] = {en: _encode_showInfo_data, de: _decode_showInfo_data}
	export class star_data {
		public id: number; // tag 0
		public isOpen: boolean; // tag 1
	}

	function _decode_star_data(d: SprotoTypeDeserialize) {
		let o = new star_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.isOpen = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_star_data(self: star_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.isOpen != undefined) {
			se.wb (self.isOpen, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["star_data"] = {en: _encode_star_data, de: _decode_star_data}
	export class title_data {
		public titleid: number; // tag 0
		public titleEndTime: number; // tag 1
	}

	function _decode_title_data(d: SprotoTypeDeserialize) {
		let o = new title_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.titleid = d.ri ();
				break;
			case 1:
				o.titleEndTime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_title_data(self: title_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.titleid != undefined) {
			se.wi (self.titleid, 0);
		}

		if (self.titleEndTime != undefined) {
			se.wi (self.titleEndTime, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["title_data"] = {en: _encode_title_data, de: _decode_title_data}
	export class wings_data {
		public lv: number; // tag 0
		public star: number; // tag 1
		public exp: number; // tag 2
		public openStatus: boolean; // tag 3
		public equipDatas: item_data[]; // tag 4
		public dressId: number; // tag 5
	}

	function _decode_wings_data(d: SprotoTypeDeserialize) {
		let o = new wings_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			case 1:
				o.star = d.ri ();
				break;
			case 2:
				o.exp = d.ri ();
				break;
			case 3:
				o.openStatus = d.rb ();
				break;
			case 4:
				o.equipDatas = d.roa("item_data");
				break;
			case 5:
				o.dressId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_wings_data(self: wings_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		if (self.star != undefined) {
			se.wi (self.star, 1);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 2);
		}

		if (self.openStatus != undefined) {
			se.wb (self.openStatus, 3);
		}

		if (self.equipDatas != undefined) {
			se.woa ("item_data", self.equipDatas, 4);
		}

		if (self.dressId != undefined) {
			se.wi (self.dressId, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["wings_data"] = {en: _encode_wings_data, de: _decode_wings_data}
	export class zhuzai_data {
		public id: number; // tag 0
		public rank: number; // tag 1
		public growupID: number; // tag 2
	}

	function _decode_zhuzai_data(d: SprotoTypeDeserialize) {
		let o = new zhuzai_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.rank = d.ri ();
				break;
			case 2:
				o.growupID = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_zhuzai_data(self: zhuzai_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.rank != undefined) {
			se.wi (self.rank, 1);
		}

		if (self.growupID != undefined) {
			se.wi (self.growupID, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["zhuzai_data"] = {en: _encode_zhuzai_data, de: _decode_zhuzai_data}
}

