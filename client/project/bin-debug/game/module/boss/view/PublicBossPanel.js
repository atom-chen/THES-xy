var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PublicBossPanel = (function (_super) {
    __extends(PublicBossPanel, _super);
    /////////////////////////////////////////////////////////////////////////////
    function PublicBossPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "PublicBossSkin";
        _this.list.itemRenderer = PublicBossItem;
        _this.list.dataProvider = new eui.ArrayCollection([]);
        return _this;
    }
    PublicBossPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        UIHelper.SetLinkStyleLabel(this.tips_txt, "BOSS提醒设置");
    };
    PublicBossPanel.prototype.OnOpen = function () {
        GameGlobal.MessageCenter.dispatch(MessageDef.PUBLIC_BOSS_REBORN, null, false);
        this.observe(MessageDef.PUBLIC_BOSS_UPDATE, this.UpdateContent);
        this.AddClick(this.tips_txt, this.onTap);
        this.AddClick(this.buyBtn, this.onTap);
        this.AddTimer(1000, 0, this.timeReplyHandler);
        this.UpdateContent();
    };
    PublicBossPanel.prototype.OnClose = function () {
        this.removeObserve();
        TimerManager.ins().remove(this.timeReplyHandler, this);
    };
    PublicBossPanel.prototype.UpdateContent = function () {
        var list = GameGlobal.BossModel.GetBossInfos(Enum_BOSSTYPE.public_boss);
        var arr = [];
        var i;
        var len = list.length;
        for (i = 0; i < len; i++) {
            arr.push(list[i]);
            if (GameGlobal.actorModel.level < list[i].level) {
                break;
            }
        }
        SortTools.sortMap(arr, 'Weight', true);
        this.list.dataProvider.replaceAll(arr);
        var bossModel = GameGlobal.BossModel;
        var baseConfg = GameGlobal.Config.PublicBossBaseConfig;
        this.num_txt.text = bossModel.pBossChallengenum + "/" + baseConfg.maxCount;
        this.buyBtn.visible = bossModel.pBossChallengenum <= 0;
    };
    PublicBossPanel.prototype.timeReplyHandler = function () {
        var bossModel = GameGlobal.BossModel;
        if (bossModel.pBossChallengenum >= GameGlobal.Config.PublicBossBaseConfig.maxCount) {
            this.replyTime_txt.text = "--";
        }
        else {
            this.replyTime_txt.text = DateUtils.format_3((bossModel.pBossRecovertiem - GameServer.serverTime) * 1000);
        }
        var i;
        var len = this.list.numChildren;
        for (i = 0; i < len; i++) {
            this.list.getChildAt(i).updaterebirthTime();
        }
    };
    PublicBossPanel.prototype.onTap = function (e) {
        switch (e.currentTarget) {
            case this.buyBtn:
                GameGlobal.BossModel.buyFunc();
                break;
            case this.tips_txt:
                ViewManager.ins().open(BossTipsPanel);
                break;
        }
    };
    PublicBossPanel.NAME = "全民BOSS";
    return PublicBossPanel;
}(BaseView));
__reflect(PublicBossPanel.prototype, "PublicBossPanel", ["ICommonWindowTitle"]);
var PublicBossItem = (function (_super) {
    __extends(PublicBossItem, _super);
    function PublicBossItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    PublicBossItem.prototype.childrenCreated = function () {
        this.bar.snapInterval = 0;
        this.bar.labelFunction = function (cur, max) {
            return Math.floor(cur * 100 / max) + "%";
        };
        this.goBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClick, this);
        this.list.itemRenderer = ItemBaseNotName;
        this.record_txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClick, this);
        this.people_txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClick, this);
        UIHelper.SetLinkStyleLabel(this.record_txt, "查看击杀");
    };
    PublicBossItem.prototype._OnClick = function (e) {
        var data = this.data;
        var config = data.GetConfig();
        switch (e.currentTarget) {
            case this.goBtn:
                if (!UserFb.CheckFighting()) {
                    return;
                }
                if (GameGlobal.actorModel.level < config.level) {
                    UserTips.ErrorTip("主角等级不足");
                    return;
                }
                if (GameGlobal.BossModel.pBossChallengenum == 0) {
                    GameGlobal.BossModel.buyFunc();
                    return;
                }
                if (data.isKill) {
                    if (GameGlobal.Config.VipChallengeTimesConfig[GameGlobal.actorModel.vipLv].purchasingtimes - GameGlobal.BossModel.reborncount <= 0) {
                        UserTips.InfoTip("复活次数已达上限");
                        return;
                    }
                    if (this.goodsGroup.visible) {
                        if (UserFb.FinishAndCheckFighting()) {
                            GameGlobal.BossModel.sendPublicReBornChallenge(data.id);
                        }
                    }
                    else {
                        if (Checker.Money(config.needmoney.id, config.needmoney.count, true) == true) {
                            if (UserFb.FinishAndCheckFighting()) {
                                GameGlobal.BossModel.sendPublicReBornChallenge(data.id);
                            }
                        }
                    }
                    return;
                }
                if (UserFb.FinishAndCheckFighting()) {
                    GameGlobal.BossModel.sendPublicChallenge(data.id);
                }
                break;
            case this.record_txt:
                ViewManager.ins().open(BossKillRecordPanel, data.id);
                break;
            case this.people_txt:
                ViewManager.ins().open(BossHurtRecordPanel, data.id);
                break;
        }
    };
    PublicBossItem.prototype.dataChanged = function () {
        var data = this.data;
        var config = data.GetConfig();
        if (GameGlobal.actorModel.level >= config.level) {
            this.goBtn.visible = true;
            this.enterInfoLabel.visible = false;
        }
        else {
            this.goBtn.visible = false;
            this.enterInfoLabel.visible = true;
            this.enterInfoLabel.text = "主角" + config.level + "级可进入";
        }
        this.list.dataProvider = new eui.ArrayCollection(config.showitem);
        var monsterCfg = GameGlobal.Config.MonstersConfig[config.bossid];
        this.bossName.text = monsterCfg[GameGlobal.Config.MonstersConfig_keys.name] + "(" + monsterCfg[GameGlobal.Config.MonstersConfig_keys.level] + "级)";
        this.petShowPanel.SetBody(AppearanceConfig.GetUIPath(MonstersConfig.GetAppId(config.bossid)));
        this.record_txt.visible = data.isDie;
        this.people_txt.visible = !data.isDie;
        UIHelper.SetLinkStyleLabel(this.people_txt, "争夺人数：" + data.fightnum);
        this.rebirthTime_txt.visible = data.isDie;
        this.rebirthTimes_txt.visible = data.isDie;
        this.priceIcon.visible = false;
        this.goodsGroup.visible = false;
        this.goBtn.label = data.isKill ? "复活并挑战" : "挑战";
        UIHelper.ShowRedPoint(this.goBtn, GameGlobal.BossModel.pBossChallengenum > 0 && !data.isKill);
        if (data.isDie) {
            var myCount = GameGlobal.UserBag.getBagGoodsCountById(0, config.needprops.id);
            if (myCount > 0) {
                this.goodsGroup.visible = true;
                this.goodsNum_txt.text = "x" + config.needprops.count;
                if (config.needprops.count > myCount) {
                    this.goodsNum_txt.textColor = 0xff0000;
                }
                else {
                    this.goodsNum_txt.textColor = 0x019704;
                }
            }
            else {
                this.priceIcon.setType(config.needmoney.id);
                this.priceIcon.price = config.needmoney.count;
                this.priceIcon.setEnoughCount(GameGlobal.actorModel.yb);
                this.priceIcon.visible = true;
            }
            this.rebirthTimes_txt.text = "剩余复活次数：" + (GameGlobal.Config.VipChallengeTimesConfig[GameGlobal.actorModel.vipLv].purchasingtimes - GameGlobal.BossModel.reborncount);
            this.updaterebirthTime();
        }
        this.bar.value = data.hp;
    };
    PublicBossItem.prototype.updaterebirthTime = function () {
        if (this.data.isDie) {
            this.rebirthTime_txt.text = DateUtils.format_3((this.data.reborntime - GameServer.serverTime) * 1000) + "后复活";
        }
    };
    return PublicBossItem;
}(eui.ItemRenderer));
__reflect(PublicBossItem.prototype, "PublicBossItem");
//# sourceMappingURL=PublicBossPanel.js.map