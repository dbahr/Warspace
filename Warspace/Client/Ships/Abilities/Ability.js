/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
var Warspace;
(function (Warspace) {
    var Ability = (function () {
        function Ability(Name) {
            this.Name = Name;
            this.Active = false;
            this.ActivatedAt = null;
        }
        Ability.prototype.Activate = function () {
            this.Active = true;
            this.ActivatedAt = new Date();
        };
        Ability.prototype.Deactivate = function () {
            this.Active = false;
            this.ActivatedAt = null;
        };
        // Meant to be overridden
        Ability.prototype.Update = function (gameTime) { };
        return Ability;
    }());
    Warspace.Ability = Ability;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=Ability.js.map