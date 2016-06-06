/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Server/IUserInformation.ts" />
var Warspace;
(function (Warspace) {
    var UserInformationManager = (function () {
        function UserInformationManager(userInformation) {
            this._displayName = $("#DisplayName");
            this._displayNameLB = $("#DisplayNameLB");
            this._you = $("#You");
            this._youLB = $("#YouLB");
            this._displayName.text(userInformation.Name);
            this._displayNameLB.text(userInformation.Name);
            this._you.attr("src", userInformation.Photo);
            this._youLB.attr("src", userInformation.Photo);
        }
        return UserInformationManager;
    }());
    Warspace.UserInformationManager = UserInformationManager;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=UserInformationManager.js.map