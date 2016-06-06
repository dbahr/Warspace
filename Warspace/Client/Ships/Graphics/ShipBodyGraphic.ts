/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Levels/ShipLevelManager.ts" />

module Warspace {

    export class ShipBodyGraphic extends eg.Graphics.Sprite2d {
        private static _bodyGraphics: Array<eg.Graphics.ImageSource>;

        constructor(style: number) {            
            var shipGraphic = ShipBodyGraphic._bodyGraphics[Math.min(style, 5)];
            super(0, 0, shipGraphic);
        }

        // Made as a static so we don't have to construct the ship bodies every time a new ship is created.
        public static LoadShipBodies(contentManager: eg.Content.ContentManager): void {
            ShipBodyGraphic._bodyGraphics = new Array<eg.Graphics.ImageSource>();

            ShipBodyGraphic._bodyGraphics[0] = contentManager.GetImage("Drone");
            ShipBodyGraphic._bodyGraphics[1] = contentManager.GetImage("Fighter1");
            ShipBodyGraphic._bodyGraphics[2] = contentManager.GetImage("Fighter2");
            ShipBodyGraphic._bodyGraphics[3] = contentManager.GetImage("Fighter3");
            ShipBodyGraphic._bodyGraphics[4] = contentManager.GetImage("Fighter4");
            ShipBodyGraphic._bodyGraphics[5] = contentManager.GetImage("Fighter5");
        }
    }

}