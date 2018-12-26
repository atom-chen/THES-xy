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
var KaiFuJiJiePanel = (function (_super) {
    __extends(KaiFuJiJiePanel, _super);
    function KaiFuJiJiePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "KaiFuJiJieSkin";
        return _this;
    }
    KaiFuJiJiePanel.prototype.childrenCreated = function () {
        this.list.itemRenderer = KaiFuJiJieAwardItem;
    };
    KaiFuJiJiePanel.prototype.OnOpen = function () {
        this.observe(MessageDef.ACTIVITY_ADVANCED_INFO, this.UpdateContent);
        this.AddClick(this.getwayLabel, this._OnClick);
        this.AddTimer(1000, 0, this.updateTime);
        this.UpdateContent();
        this.updateTime();
        if (this.jijieType != 13 && this.jijieType != 14)
            this.getwayLabel.text = "前往升阶";
        else
            this.getwayLabel.text = "前往" + ActivityConst.JiJieTypeName2(this.jijieType);
    };
    KaiFuJiJiePanel.prototype.updateTime = function () {
        var time = KaiFuJiJieRankPanel.GetUpdateTime(this.jijieType);
        this.time_txt.textFlow = TextFlowMaker.generateTextFlow("\u6D3B\u52A8\u5012\u8BA1\u65F6\uFF1A|C:0x2dff42&T:" + time + "|");
    };
    KaiFuJiJiePanel.prototype.getReward = function () {
        var type = this.jijieType;
        var config = GameGlobal.Config.ProgressCrazyRewardConfig;
        var arr = [];
        var obj = config[type];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var cfgObj = obj[key];
                var o = {};
                o.type = type;
                o.cfg = cfgObj;
                o.weight = cfgObj.index;
                var canGet = KaiFuJiJieAwardItem.CheckValue(type, cfgObj.value);
                if (canGet) {
                    var getted = GameGlobal.ActivityKaiFuModel.advancedInfo.GetAdvancedReward(type, cfgObj.index);
                    if (getted)
                        o.weight += 1000;
                    else
                        o.weight -= 1000;
                }
                arr.push(o);
            }
        }
        return arr;
    };
    KaiFuJiJiePanel.prototype.OnClose = function () {
        TimerManager.ins().removeAll(this);
    };
    KaiFuJiJiePanel.prototype.UpdateContent = function () {
        if (!this.visible)
            return;
        var type = this.jijieType;
        var arrlist = this.getReward();
        SortTools.sortMap(arrlist, "weight");
        this.list.dataProvider = new eui.ArrayCollection(arrlist);
        if (type == ActivityKaiFuJiJieType.lingtong_yuling || type == ActivityKaiFuJiJieType.lingtong_fate) {
            this.lv_txt.text = "";
        }
        else {
            var stageStr = "|C:0x2dff42&T:" + GameGlobal.ActivityKaiFuModel.GetMyAdvancedLevel(type) + " \u9636|";
            this.lv_txt.textFlow = TextFlowMaker.generateTextFlow("当前" + ActivityConst.JiJieTypeName(type) + "阶数：" + stageStr);
        }
    };
    KaiFuJiJiePanel.prototype._OnClick = function (e) {
        if (e.currentTarget == this.getwayLabel) {
            GameGlobal.ActivityKaiFuModel.OpenAdvancedPanel(this.jijieType);
        }
    };
    return KaiFuJiJiePanel;
}(BaseView));
__reflect(KaiFuJiJiePanel.prototype, "KaiFuJiJiePanel");
var KaiFuJiJieAwardItem = (function (_super) {
    __extends(KaiFuJiJieAwardItem, _super);
    /////////////////////////////////////////////////////////////////////////////
    function KaiFuJiJieAwardItem() {
        return _super.call(this) || this;
    }
    KaiFuJiJieAwardItem.prototype.childrenCreated = function () {
        this.list.itemRenderer = ItemBaseNotName;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    KaiFuJiJieAwardItem.prototype.onClick = function (e) {
        GameGlobal.ActivityKaiFuModel.Send_advanced_lv_reward(this.data.cfg.type, this.data.cfg.index);
    };
    KaiFuJiJieAwardItem.prototype.dataChanged = function () {
        var type = this.data.type;
        if (type == null)
            return;
        var cfgObj = this.data.cfg;
        var weight = this.data.weight;
        this.btn.visible = weight < 100;
        this.btn.enabled = (weight > 0 && weight < 100) ? false : true;
        UIHelper.ShowRedPoint(this.btn, weight < 0);
        this.getted_img.visible = !this.btn.visible;
        this.list.dataProvider = new eui.ArrayCollection(cfgObj.reward);
        if (cfgObj.value != undefined) {
            if (type == ActivityKaiFuJiJieType.lingtong_yuling) {
                if (cfgObj.value[0] != undefined && cfgObj.value[1] != undefined)
                    this.tipsTxt.text = "拥有" + cfgObj.value[0] + "个" + ItemBase.QUALITY_NAME_STR[cfgObj.value[1]] + ActivityConst.JiJieTypeName(type);
            }
            else if (type == ActivityKaiFuJiJieType.lingtong_fate) {
                if (cfgObj.value[0] != undefined && cfgObj.value[1] != undefined)
                    this.tipsTxt.text = "佩戴" + cfgObj.value[0] + "个" + ItemBase.QUALITY_NAME_STR[cfgObj.value[1]] + ActivityConst.JiJieTypeName(type);
            }
            else {
                this.tipsTxt.text = ActivityConst.JiJieTypeName(type) + "达到" + cfgObj.value + "阶";
            }
        }
    };
    KaiFuJiJieAwardItem.CheckValue = function (type, value) {
        if (!value) {
            return false;
        }
        if (type == ActivityKaiFuJiJieType.lingtong_yuling) {
            var infos = GameGlobal.LingtongPetModel.mInfo;
            var needLevel = value[1];
            var count = 0;
            for (var key in infos) {
                var info = infos[key];
                if (info && info.mLevel) {
                    for (var _i = 0, _a = info.mLing || []; _i < _a.length; _i++) {
                        var level = _a[_i];
                        if (level >= needLevel) {
                            ++count;
                        }
                    }
                }
            }
            return count >= value[0];
        }
        else if (type == ActivityKaiFuJiJieType.lingtong_fate) {
            var datas = GameGlobal.DestinyController.getUseDestinyData() || [];
            var needLevel = value[1];
            var count = 0;
            for (var key in datas) {
                var data = datas[key];
                if (data.type >= needLevel) {
                    ++count;
                }
            }
            return count >= value[0];
        }
        else {
            return GameGlobal.ActivityKaiFuModel.GetMyAdvancedLevel(type) >= value;
        }
    };
    return KaiFuJiJieAwardItem;
}(eui.ItemRenderer));
__reflect(KaiFuJiJieAwardItem.prototype, "KaiFuJiJieAwardItem");
//# sourceMappingURL=KaiFuJiJiePanel.js.map