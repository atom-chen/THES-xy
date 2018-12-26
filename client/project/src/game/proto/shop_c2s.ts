// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_shop_buy_request {
		public shopType: number; // tag 0
		public index: number; // tag 1
		public buynum: number; // tag 2
	}

	function _decode_cs_shop_buy_request(d: SprotoTypeDeserialize) {
		let o = new cs_shop_buy_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.shopType = d.ri ();
				break;
			case 1:
				o.index = d.ri ();
				break;
			case 2:
				o.buynum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_shop_buy_request(self: cs_shop_buy_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.shopType != undefined) {
			se.wi (self.shopType, 0);
		}

		if (self.index != undefined) {
			se.wi (self.index, 1);
		}

		if (self.buynum != undefined) {
			se.wi (self.buynum, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_shop_buy_request"] = {en: _encode_cs_shop_buy_request, de: _decode_cs_shop_buy_request}
	export class cs_shop_mystical_buy_request {
		public index: number; // tag 0
		public buynum: number; // tag 1
	}

	function _decode_cs_shop_mystical_buy_request(d: SprotoTypeDeserialize) {
		let o = new cs_shop_mystical_buy_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.index = d.ri ();
				break;
			case 1:
				o.buynum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_shop_mystical_buy_request(self: cs_shop_mystical_buy_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.index != undefined) {
			se.wi (self.index, 0);
		}

		if (self.buynum != undefined) {
			se.wi (self.buynum, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_shop_mystical_buy_request"] = {en: _encode_cs_shop_mystical_buy_request, de: _decode_cs_shop_mystical_buy_request}
	export class cs_shop_mystical_buy_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_shop_mystical_buy_response(d: SprotoTypeDeserialize) {
		let o = new cs_shop_mystical_buy_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_shop_mystical_buy_response(self: cs_shop_mystical_buy_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_shop_mystical_buy_response"] = {en: _encode_cs_shop_mystical_buy_response, de: _decode_cs_shop_mystical_buy_response}
	export class cs_shop_mystical_refresh_request {
	}

	function _decode_cs_shop_mystical_refresh_request(d: SprotoTypeDeserialize) {
		let o = new cs_shop_mystical_refresh_request;
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

	function _encode_cs_shop_mystical_refresh_request(self: cs_shop_mystical_refresh_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_shop_mystical_refresh_request"] = {en: _encode_cs_shop_mystical_refresh_request, de: _decode_cs_shop_mystical_refresh_request}
	export class cs_shop_mystical_refresh_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_shop_mystical_refresh_response(d: SprotoTypeDeserialize) {
		let o = new cs_shop_mystical_refresh_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_shop_mystical_refresh_response(self: cs_shop_mystical_refresh_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_shop_mystical_refresh_response"] = {en: _encode_cs_shop_mystical_refresh_response, de: _decode_cs_shop_mystical_refresh_response}
}

