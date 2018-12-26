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
var PetBattlePanel = (function (_super) {
    __extends(PetBattlePanel, _super);
    function PetBattlePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "PetBattleSkin";
        _this._AddClick(_this.btn1, _this._OnClick);
        _this._AddClick(_this.btn2, _this._OnClick);
        _this._AddClick(_this.btn3, _this._OnClick);
        _this._AddClick(_this.btn4, _this._OnClick);
        return _this;
    }
    PetBattlePanel.prototype.OnOpen = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.m_SelPetId = param[0];
        this.commonDialog.OnAdded(this);
        this.UpdateContent();
    };
    PetBattlePanel.prototype.OnClose = function () {
    };
    PetBattlePanel.prototype._OnClick = function (e) {
        var index = 0;
        switch (e.currentTarget) {
            case this.btn1:
                index = 0;
                break;
            case this.btn2:
                index = 1;
                break;
            case this.btn3:
                index = 2;
                break;
            case this.btn4:
                index = 3;
                break;
        }
        GameGlobal.PetModel.SendBattle(this.m_SelPetId, index);
        this.CloseSelf();
    };
    PetBattlePanel.prototype.UpdateContent = function () {
        var model = GameGlobal.PetModel;
        for (var i = 0; i < 4; i++) {
            var head = this["head" + (i + 1)];
            var id = model.mBattleList[i];
            if (id) {
                head.visible = true;
                PetHeadItem.SetContentByInfo(head, model.GetPetInfo(id));
            }
            else {
                head.visible = false;
            }
        }
    };
    PetBattlePanel.LAYER_LEVEL = LayerManager.UI_Popup;
    return PetBattlePanel;
}(BaseEuiView));
__reflect(PetBattlePanel.prototype, "PetBattlePanel");
//# sourceMappingURL=PetBattlePanel.js.map