// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_vein_Breakthrough_request {
	}

	function _decode_cs_vein_Breakthrough_request(d: SprotoTypeDeserialize) {
		let o = new cs_vein_Breakthrough_request;
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

	function _encode_cs_vein_Breakthrough_request(self: cs_vein_Breakthrough_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_vein_Breakthrough_request"] = {en: _encode_cs_vein_Breakthrough_request, de: _decode_cs_vein_Breakthrough_request}
}

