"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacitorJSONConfig = void 0;
const cli_framework_1 = require("@ionic/cli-framework");
const lodash = require("lodash");
class CapacitorJSONConfig extends cli_framework_1.BaseConfig {
    constructor(p) {
        super(p, { spaces: "\t" });
    }
    provideDefaults(config) {
        return config;
    }
    setServerUrl(url) {
        const serverConfig = this.get("server") || {};
        if (typeof serverConfig.url === "string") {
            serverConfig.originalUrl = serverConfig.url;
        }
        serverConfig.url = url;
        this.set("server", serverConfig);
    }
    resetServerUrl() {
        const serverConfig = this.get("server") || {};
        delete serverConfig.url;
        if (serverConfig.originalUrl) {
            serverConfig.url = serverConfig.originalUrl;
            delete serverConfig.originalUrl;
        }
        if (lodash.isEmpty(serverConfig)) {
            this.unset("server");
        }
        else {
            this.set("server", serverConfig);
        }
    }
}
exports.CapacitorJSONConfig = CapacitorJSONConfig;
