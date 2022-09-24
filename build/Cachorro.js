"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cachorro = void 0;
var Animal_1 = require("./Animal");
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade, corre) {
        var _this = _super.call(this, nome, idade) || this;
        _this.corre = corre;
        return _this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("".concat(this.nome, " late"));
    };
    Cachorro.prototype.correr = function () {
        console.log("".concat(this.nome, " come\u00E7ou a correr"));
    };
    return Cachorro;
}(Animal_1.Animal));
exports.Cachorro = Cachorro;