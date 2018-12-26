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
var EntityTianshen = (function (_super) {
    __extends(EntityTianshen, _super);
    function EntityTianshen() {
        return _super.call(this) || this;
    }
    EntityTianshen.prototype.parserBase = function (baseData) {
        _super.prototype.parserBase.call(this, baseData);
        this.configID = baseData.shows.id;
    };
    // public getSkillIDs() {
    // 	return this.skillsData
    // }
    EntityTianshen.prototype.GetBodyId = function () {
        return this.configID;
    };
    EntityTianshen.prototype.GetName = function () {
        var config = GameGlobal.Config.AirMarshalListConfig[this.configID];
        if (config) {
            return config.name || "";
        }
        return "";
    };
    return EntityTianshen;
}(EntityData));
__reflect(EntityTianshen.prototype, "EntityTianshen");
//# sourceMappingURL=EntityTianshen.js.map