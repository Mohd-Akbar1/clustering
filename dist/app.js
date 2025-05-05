"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const numsOfCpu = os_1.default.cpus().length;
const app = (0, express_1.default)();
const PORT = 8000;
if (cluster_1.default.isPrimary) {
    for (let i = 0; i < numsOfCpu; i++) {
        cluster_1.default.fork();
    }
}
else {
    app.listen(8000, () => {
        console.log(`server is running on port ${PORT} in process ${process.pid}`);
    });
}
