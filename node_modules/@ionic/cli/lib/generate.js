"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRunner = void 0;
class GenerateRunner {
    createOptionsFromCommandLine(inputs, options) {
        const [type, name] = inputs;
        return { type, name };
    }
    async ensureCommandLine(inputs, options) { }
}
exports.GenerateRunner = GenerateRunner;
