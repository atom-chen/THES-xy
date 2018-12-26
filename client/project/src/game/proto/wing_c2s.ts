// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_wing_dress_request {
		public dressId: number; // tag 0
	}

	function _decode_cs_wing_dress_request(d: SprotoTypeDeserialize) {
		let o = new cs_wing_dress_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dressId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_wing_dress_request(self: cs_wing_dress_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.dressId != undefined) {
			se.wi (self.dressId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_dress_request"] = {en: _encode_cs_wing_dress_request, de: _decode_cs_wing_dress_request}
	export class cs_wing_dress_response {
		public result: number; // tag 0
		public dressId: number; // tag 1
	}

	function _decode_cs_wing_dress_response(d: SprotoTypeDeserialize) {
		let o = new cs_wing_dress_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.result = d.ri ();
				break;
			case 1:
				o.dressId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_wing_dress_response(self: cs_wing_dress_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.result != undefined) {
			se.wi (self.result, 0);
		}

		if (self.dressId != undefined) {
			se.wi (self.dressId, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_dress_response"] = {en: _encode_cs_wing_dress_response, de: _decode_cs_wing_dress_response}
	export class cs_wing_drug_request {
		public drugNum: number; // tag 0
	}

	function _decode_cs_wing_drug_request(d: SprotoTypeDeserialize) {
		let o = new cs_wing_drug_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.drugNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_wing_drug_request(self: cs_wing_drug_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.drugNum != undefined) {
			se.wi (self.drugNum, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_drug_request"] = {en: _encode_cs_wing_drug_request, de: _decode_cs_wing_drug_request}
	export class cs_wing_drug_response {
		public result: number; // tag 0
		public drugTotal: number; // tag 1
	}

	function _decode_cs_wing_drug_response(d: SprotoTypeDeserialize) {
		let o = new cs_wing_drug_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.result = d.ri ();
				break;
			case 1:
				o.drugTotal = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_wing_drug_response(self: cs_wing_drug_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.result != undefined) {
			se.wi (self.result, 0);
		}

		if (self.drugTotal != undefined) {
			se.wi (self.drugTotal, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_drug_response"] = {en: _encode_cs_wing_drug_response, de: _decode_cs_wing_drug_response}
	export class cs_wing_equip_request {
		public itemHandle: number; // tag 0
		public pos: number; // tag 1
	}

	function _decode_cs_wing_equip_request(d: SprotoTypeDeserialize) {
		let o = new cs_wing_equip_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.itemHandle = d.ri ();
				break;
			case 1:
				o.pos = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_wing_equip_request(self: cs_wing_equip_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.itemHandle != undefined) {
			se.wi (self.itemHandle, 0);
		}

		if (self.pos != undefined) {
			se.wi (self.pos, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_equip_request"] = {en: _encode_cs_wing_equip_request, de: _decode_cs_wing_equip_request}
	export class cs_wing_upgrade_level_request {
	}

	function _decode_cs_wing_upgrade_level_request(d: SprotoTypeDeserialize) {
		let o = new cs_wing_upgrade_level_request;
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

	function _encode_cs_wing_upgrade_level_request(self: cs_wing_upgrade_level_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_upgrade_level_request"] = {en: _encode_cs_wing_upgrade_level_request, de: _decode_cs_wing_upgrade_level_request}
	export class cs_wing_upgrade_skill_request {
		public skillId: number; // tag 0
	}

	function _decode_cs_wing_upgrade_skill_request(d: SprotoTypeDeserialize) {
		let o = new cs_wing_upgrade_skill_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.skillId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_wing_upgrade_skill_request(self: cs_wing_upgrade_skill_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.skillId != undefined) {
			se.wi (self.skillId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_wing_upgrade_skill_request"] = {en: _encode_cs_wing_upgrade_skill_request, de: _decode_cs_wing_upgrade_skill_request}
}

