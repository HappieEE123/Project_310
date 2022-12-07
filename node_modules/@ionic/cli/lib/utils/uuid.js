"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortid = exports.generateUUID = void 0;
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.generateUUID = generateUUID;
function shortid() {
    return generateUUID().substring(0, 8);
}
exports.shortid = shortid;
