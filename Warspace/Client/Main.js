/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/signalr/signalr-1.0.d.ts" />
/// <reference path="Game.ts" />
/// <reference path="GameScreen.ts" />
/// <reference path="Server/ServerAdapter.ts" />
$(function () {
    var connection = $.connection.h, gameCanvas = $("#game"), popUpHolder = $("#popUpHolder"), gameContent = $("#gameContent"), loadContent = $("#loadContent"), game, serverAdapter = new Warspace.Server.ServerAdapter($.connection.hub, $.connection.h, "Warspace.UserProfile"), gameScreen = new Warspace.GameScreen(gameCanvas, popUpHolder, serverAdapter);
    gameScreen.OnResizeComplete.BindFor(function () {
        serverAdapter.Negotiate().done(function (initializationData) {
            loadContent.hide();
            gameContent.show();
            game = new Warspace.Game(gameCanvas[0], gameScreen, serverAdapter, initializationData);
            gameScreen.ForceResizeCheck();
        });
    }, 1);
});
//# sourceMappingURL=Main.js.map