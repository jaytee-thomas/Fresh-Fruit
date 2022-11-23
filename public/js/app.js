"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Declare global container constant to represent <div> container
var container = document.getElementById('container');
//Define Fruit Object type with required properties
var Fruit = /** @class */ (function () {
    function Fruit(id, name, unit, price, image) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.image = image;
    }
    Fruit.prototype.getId = function () {
        return this.id;
    };
    Fruit.prototype.getName = function () {
        return this.name;
    };
    Fruit.prototype.getUnit = function () {
        return this.unit;
    };
    Fruit.prototype.getPrice = function () {
        return this.price;
    };
    Fruit.prototype.getImage = function () {
        return this.image;
    };
    Fruit.prototype.setId = function (id) {
        this.id = id;
    };
    Fruit.prototype.setName = function (name) {
        this.name = name;
    };
    Fruit.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    Fruit.prototype.setPrice = function (price) {
        this.price = price;
    };
    Fruit.prototype.setImage = function (image) {
        this.image = image;
    };
    return Fruit;
}());
//Fetch data from server using getFruits() method
function getFruits() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/fruits')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(data) {
    var transformedFruit = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var fruit = data_1[_i];
        transformedFruit.push(new Fruit(fruit.id, fruit.name, fruit.unit, fruit.price, fruit.image));
    }
    return transformedFruit;
}
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(fruit) {
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = "\n        <div class=\"card-image\">\n            <img src=\"".concat(fruit.getImage(), "\" alt=\"").concat(fruit.getName(), "\">\n        </div>\n        <div class=\"card-content\">\n            <h3 class=\"card-title\">").concat(fruit.getName(), "</h3>\n            <p class=\"card-text\">").concat(fruit.getUnit(), "</p>\n            <p class=\"card-text\">").concat(fruit.getPrice(), "</p>\n        </div>\n    ");
    container.appendChild(card);
}
//Call getFruits() method globally
getFruits().then(function (data) {
    var transformedFruit = transform(data);
    for (var _i = 0, transformedFruit_1 = transformedFruit; _i < transformedFruit_1.length; _i++) {
        var fruit = transformedFruit_1[_i];
        showFruit(fruit);
    }
});
