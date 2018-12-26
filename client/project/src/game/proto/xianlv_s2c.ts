// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class sc_xianlv_init_request {
		public list: xianlv_info[]; // tag 0
		public outbound: number[]; // tag 1
	}

	function _decode_sc_xianlv_init_request(d: SprotoTypeDeserialize) {
		let o = new sc_xianlv_init_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.list = d.roa("xianlv_info");
				break;
			case 1:
				o.outbound = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_xianlv_init_request(self: sc_xianlv_init_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.list != undefined) {
			se.woa ("xianlv_info", self.list, 0);
		}

		if (self.outbound != undefined) {
			se.wia (self.outbound, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_xianlv_init_request"] = {en: _encode_sc_xianlv_init_request, de: _decode_sc_xianlv_init_request}
	export class xianlv_info {
		public id: number; // tag 0
		public exp: number; // tag 1
		public level: number; // tag 2
		public star: number; // tag 3
	}

	function _decode_xianlv_info(d: SprotoTypeDeserialize) {
		let o = new xianlv_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.exp = d.ri ();
				break;
			case 2:
				o.level = d.ri ();
				break;
			case 3:
				o.star = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_xianlv_info(self: xianlv_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 1);
		}

		if (self.level != undefined) {
			se.wi (self.level, 2);
		}

		if (self.star != undefined) {
			se.wi (self.star, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["xianlv_info"] = {en: _encode_xianlv_info, de: _decode_xianlv_info}
}

