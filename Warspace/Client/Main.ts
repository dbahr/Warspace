/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/signalr/signalr-1.0.d.ts" />
/// <reference path="Game.ts" />
/// <reference path="GameScreen.ts" />
/// <reference path="Server/ServerAdapter.ts" />

$(function () {

    var connection = (<any>$.connection).h,
        gameCanvas: JQuery = $("#game"),
        popUpHolder: JQuery = $("#popUpHolder"),
        gameContent: JQuery = $("#gameContent"),
        loadContent: JQuery = $("#loadContent"),
        game: Warspace.Game,
        serverAdapter: Warspace.Server.ServerAdapter = new Warspace.Server.ServerAdapter($.connection.hub, (<any>$.connection).h, "Warspace.UserProfile"),
        gameScreen: Warspace.GameScreen = new Warspace.GameScreen(gameCanvas, popUpHolder, serverAdapter);

    gameScreen.OnResizeComplete.BindFor(() => {
        serverAdapter.Negotiate().done((initializationData: Warspace.Server.IClientInitialization) => {
            loadContent.hide();
            gameContent.show();

            game = new Warspace.Game(<HTMLCanvasElement>gameCanvas[0], gameScreen, serverAdapter, initializationData);
            gameScreen.ForceResizeCheck();
        });
    }, 1);

});