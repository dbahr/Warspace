/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />

module Warspace {

    export class Ability {
        public Active: boolean;
        public ActivatedAt: Date;

        constructor(public Name: string) {
            this.Active = false;
            this.ActivatedAt = null;
        }

        public Activate(): void {
            this.Active = true;
            this.ActivatedAt = new Date();
        }

        public Deactivate(): void {
            this.Active = false;
            this.ActivatedAt = null;
        }

        // Meant to be overridden
        public Update(gameTime: eg.GameTime): void { }
    }

}