// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_vipboss_challenge_request {
		public id: number; // tag 0
	}

	function _decode_cs_vipboss_challenge_request(d: SprotoTypeDeserialize) {
		let o = new cs_vipboss_challenge_request;
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

	function _encode_cs_vipboss_challenge_request(self: cs_vipboss_challenge_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_vipboss_challenge_request"] = {en: _encode_cs_vipboss_challenge_request, de: _decode_cs_vipboss_challenge_request}
}

