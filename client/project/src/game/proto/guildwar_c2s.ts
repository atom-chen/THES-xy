// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_guildwar_all_guild_rank_info_request {
	}

	function _decode_cs_guildwar_all_guild_rank_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_all_guild_rank_info_request;
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

	function _encode_cs_guildwar_all_guild_rank_info_request(self: cs_guildwar_all_guild_rank_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_all_guild_rank_info_request"] = {en: _encode_cs_guildwar_all_guild_rank_info_request, de: _decode_cs_guildwar_all_guild_rank_info_request}
	export class cs_guildwar_all_player_rank_info_request {
	}

	function _decode_cs_guildwar_all_player_rank_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_all_player_rank_info_request;
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

	function _encode_cs_guildwar_all_player_rank_info_request(self: cs_guildwar_all_player_rank_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_all_player_rank_info_request"] = {en: _encode_cs_guildwar_all_player_rank_info_request, de: _decode_cs_guildwar_all_player_rank_info_request}
	export class cs_guildwar_attack_boss_request {
		public bossid: number; // tag 0
	}

	function _decode_cs_guildwar_attack_boss_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_attack_boss_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.bossid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guildwar_attack_boss_request(self: cs_guildwar_attack_boss_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.bossid != undefined) {
			se.wi (self.bossid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_attack_boss_request"] = {en: _encode_cs_guildwar_attack_boss_request, de: _decode_cs_guildwar_attack_boss_request}
	export class cs_guildwar_attack_player_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_guildwar_attack_player_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_attack_player_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guildwar_attack_player_request(self: cs_guildwar_attack_player_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_attack_player_request"] = {en: _encode_cs_guildwar_attack_player_request, de: _decode_cs_guildwar_attack_player_request}
	export class cs_guildwar_attack_player_response {
		public ret: number; // tag 0
	}

	function _decode_cs_guildwar_attack_player_response(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_attack_player_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guildwar_attack_player_response(self: cs_guildwar_attack_player_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wi (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_attack_player_response"] = {en: _encode_cs_guildwar_attack_player_response, de: _decode_cs_guildwar_attack_player_response}
	export class cs_guildwar_clear_attackcd_request {
	}

	function _decode_cs_guildwar_clear_attackcd_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_clear_attackcd_request;
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

	function _encode_cs_guildwar_clear_attackcd_request(self: cs_guildwar_clear_attackcd_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_clear_attackcd_request"] = {en: _encode_cs_guildwar_clear_attackcd_request, de: _decode_cs_guildwar_clear_attackcd_request}
	export class cs_guildwar_clear_attackcd_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_guildwar_clear_attackcd_response(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_clear_attackcd_response;
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

	function _encode_cs_guildwar_clear_attackcd_response(self: cs_guildwar_clear_attackcd_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_clear_attackcd_response"] = {en: _encode_cs_guildwar_clear_attackcd_response, de: _decode_cs_guildwar_clear_attackcd_response}
	export class cs_guildwar_clear_reborncd_request {
	}

	function _decode_cs_guildwar_clear_reborncd_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_clear_reborncd_request;
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

	function _encode_cs_guildwar_clear_reborncd_request(self: cs_guildwar_clear_reborncd_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_clear_reborncd_request"] = {en: _encode_cs_guildwar_clear_reborncd_request, de: _decode_cs_guildwar_clear_reborncd_request}
	export class cs_guildwar_clear_reborncd_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_guildwar_clear_reborncd_response(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_clear_reborncd_response;
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

	function _encode_cs_guildwar_clear_reborncd_response(self: cs_guildwar_clear_reborncd_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_clear_reborncd_response"] = {en: _encode_cs_guildwar_clear_reborncd_response, de: _decode_cs_guildwar_clear_reborncd_response}
	export class cs_guildwar_enter_request {
	}

	function _decode_cs_guildwar_enter_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_enter_request;
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

	function _encode_cs_guildwar_enter_request(self: cs_guildwar_enter_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_enter_request"] = {en: _encode_cs_guildwar_enter_request, de: _decode_cs_guildwar_enter_request}
	export class cs_guildwar_enter_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_guildwar_enter_response(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_enter_response;
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

	function _encode_cs_guildwar_enter_response(self: cs_guildwar_enter_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_enter_response"] = {en: _encode_cs_guildwar_enter_response, de: _decode_cs_guildwar_enter_response}
	export class cs_guildwar_exit_barrier_request {
	}

	function _decode_cs_guildwar_exit_barrier_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_exit_barrier_request;
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

	function _encode_cs_guildwar_exit_barrier_request(self: cs_guildwar_exit_barrier_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_exit_barrier_request"] = {en: _encode_cs_guildwar_exit_barrier_request, de: _decode_cs_guildwar_exit_barrier_request}
	export class cs_guildwar_get_score_reward_request {
		public rewardid: number; // tag 0
	}

	function _decode_cs_guildwar_get_score_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_get_score_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.rewardid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guildwar_get_score_reward_request(self: cs_guildwar_get_score_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.rewardid != undefined) {
			se.wi (self.rewardid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_get_score_reward_request"] = {en: _encode_cs_guildwar_get_score_reward_request, de: _decode_cs_guildwar_get_score_reward_request}
	export class cs_guildwar_last_barrier_request {
	}

	function _decode_cs_guildwar_last_barrier_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_last_barrier_request;
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

	function _encode_cs_guildwar_last_barrier_request(self: cs_guildwar_last_barrier_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_last_barrier_request"] = {en: _encode_cs_guildwar_last_barrier_request, de: _decode_cs_guildwar_last_barrier_request}
	export class cs_guildwar_last_barrier_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_guildwar_last_barrier_response(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_last_barrier_response;
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

	function _encode_cs_guildwar_last_barrier_response(self: cs_guildwar_last_barrier_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_last_barrier_response"] = {en: _encode_cs_guildwar_last_barrier_response, de: _decode_cs_guildwar_last_barrier_response}
	export class cs_guildwar_next_barrier_request {
	}

	function _decode_cs_guildwar_next_barrier_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_next_barrier_request;
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

	function _encode_cs_guildwar_next_barrier_request(self: cs_guildwar_next_barrier_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_next_barrier_request"] = {en: _encode_cs_guildwar_next_barrier_request, de: _decode_cs_guildwar_next_barrier_request}
	export class cs_guildwar_next_barrier_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_guildwar_next_barrier_response(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_next_barrier_response;
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

	function _encode_cs_guildwar_next_barrier_response(self: cs_guildwar_next_barrier_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_next_barrier_response"] = {en: _encode_cs_guildwar_next_barrier_response, de: _decode_cs_guildwar_next_barrier_response}
	export class cs_guildwar_team_recruit_request {
	}

	function _decode_cs_guildwar_team_recruit_request(d: SprotoTypeDeserialize) {
		let o = new cs_guildwar_team_recruit_request;
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

	function _encode_cs_guildwar_team_recruit_request(self: cs_guildwar_team_recruit_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guildwar_team_recruit_request"] = {en: _encode_cs_guildwar_team_recruit_request, de: _decode_cs_guildwar_team_recruit_request}
}

