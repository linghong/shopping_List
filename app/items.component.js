"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_service_1 = require('./item.service');
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemsComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().then(function (items) { return _this.items = items; });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'item-list',
            template: "\n  <h2> My Heros</h2>\n  <ul class=\"items\">\n\t  <li *ngFor=\"let item of items\" (click)=\"onSelect(item)\" [class.selected]=\"item === selectedItem\">\n\t  \t<span class=\"badge\">{{item.id}}</span>{{item.name}}\n\t  </li>\n  </ul>\n  <item-detail [item]=\"selectedItem\"></item-detail>\n  ",
            styleUrls: ['app/style.css'],
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map