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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var sql = require('mssql');
var fs = require('fs');
var config = {
    user: "j2",
    password: "123456",
    server: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    database: "JiBe_Main_Training",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
var poolPromise = new sql.ConnectionPool(config).connect().then(function (pool) {
    console.log("Connected to SQL Server");
    return pool;
}).catch(function (err) { return console.error("Database connection failed", err); });
var products = [
    { id: 1, PName: "Laptop", PCategory: "Electronics", PPrice: 1200, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/laptop.jpg" },
    { id: 2, PName: "Smartphone", PCategory: "Electronics", PPrice: 800, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/smartphone.jpg" },
    { id: 3, PName: "Coffee Maker", PCategory: "Home Appliances", PPrice: 150, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/coffeemaker.jpg" },
    { id: 4, PName: "Headphones", PCategory: "Electronics", PPrice: 200, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/headphones.jpg" },
    { id: 5, PName: "Blender", PCategory: "Home Appliances", PPrice: 100, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/blender.jpg" },
    { id: 6, PName: "Smartwatch", PCategory: "Electronics", PPrice: 250, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/smartwatch.jpg" },
    { id: 7, PName: "Microwave", PCategory: "Home Appliances", PPrice: 300, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/microwave.jpg" },
    { id: 8, PName: "Camera", PCategory: "Electronics", PPrice: 900, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/camera.jpg" },
    { id: 9, PName: "Vacuum Cleaner", PCategory: "Home Appliances", PPrice: 400, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/vacuum.jpg" },
    { id: 10, PName: "Air Purifier", PCategory: "Home Appliances", PPrice: 350, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/airpurifier.jpg" }
];
// poolPromise.request().input()
products.forEach(function (product) { return __awaiter(void 0, void 0, void 0, function () {
    var imageData, bufImageData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.readFileSync(product.PImage)];
            case 1:
                imageData = _a.sent();
                return [4 /*yield*/, Buffer.from(imageData)
                    // const sql = ' (?, ?, ?, ?, ?)';
                ];
            case 2:
                bufImageData = _a.sent();
                // const sql = ' (?, ?, ?, ?, ?)';
                return [4 /*yield*/, poolPromise.request()
                        .input('id', product.id)
                        .input('PName', product.PName)
                        .input('PCategory', product.PCategory)
                        .input('PPrice', product.PPrice)
                        .input('PImage', bufImageData)
                        .query('INSERT INTO product2008 (Product_id, PName, PCategory, PPrice, PImage) VALUES (@id, @PName, @PCategory, @PPrice, @PImage)')];
            case 3:
                // const sql = ' (?, ?, ?, ?, ?)';
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
module.exports = { poolPromise: poolPromise };
