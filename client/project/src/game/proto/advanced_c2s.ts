// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_advanced_buy_request {
		public id: number; // tag 0
		public num: number; // tag 1
		public typ: number; // tag 2
	}

	function _decode_cs_advanced_buy_request(d: SprotoTypeDeserialize) {
		let o = new cs_advanced_buy_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.num = d.ri ();
				break;
			case 2:
				o.typ = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_advanced_buy_request(self: cs_advanced_buy_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.num != undefined) {
			se.wi (self.num, 1);
		}

		if (self.typ != undefined) {
			se.wi (self.typ, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_advanced_buy_request"] = {en: _encode_cs_advanced_buy_request, de: _decode_cs_advanced_buy_request}
	export class cs_advanced_charger_reward_request {
		public id: number; // tag 0
	}

	function _decode_cs_advanced_charger_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_advanced_charger_reward_request;
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

	function _encode_cs_advanced_charger_reward_request(self: cs_advanced_charger_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_advanced_charger_reward_request"] = {en: _encode_cs_advanced_charger_reward_request, de: _decode_cs_advanced_charger_reward_request}
	export class cs_advanced_lv_reward_request {
		public typ: number; // tag 0
		public id: number; // tag 1
	}

	function _decode_cs_advanced_lv_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_advanced_lv_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.typ = d.ri ();
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

	function _encode_cs_advanced_lv_reward_request(self: cs_advanced_lv_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.typ != undefined) {
			se.wi (self.typ, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_advanced_lv_reward_request"] = {en: _encode_cs_advanced_lv_reward_request, de: _decode_cs_advanced_lv_reward_request}
	export class cs_advanced_rank_request {
	}

	function _decode_cs_advanced_rank_request(d: SprotoTypeDeserialize) {
		let o = new cs_advanced_rank_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_advanced_rank_request(self: cs_advanced_rank_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_advanced_rank_request"] = {en: _encode_cs_advanced_rank_request, de: _decode_cs_advanced_rank_request}
}

