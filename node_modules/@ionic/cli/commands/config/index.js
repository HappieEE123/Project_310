"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigNamespace = void 0;
const utils_terminal_1 = require("@ionic/utils-terminal");
const constants_1 = require("../../constants");
const color_1 = require("../../lib/color");
const namespace_1 = require("../../lib/namespace");
class ConfigNamespace extends namespace_1.Namespace {
    async getMetadata() {
        const projectFile = this.project ? utils_terminal_1.prettyPath(this.project.filePath) : constants_1.PROJECT_FILE;
        return {
            name: 'config',
            summary: 'Manage CLI and project config values',
            description: `
These commands are used to programmatically read, write, and delete CLI and project config values.

By default, these commands use your project's ${color_1.strong(utils_terminal_1.prettyPath(projectFile))} file.

To use these commands for the global CLI config file (${color_1.strong('~/.ionic/config.json')}), use the ${color_1.input('--global')} flag.
      `,
        };
    }
    async getCommands() {
        return new namespace_1.CommandMap([
            ['get', async () => { const { ConfigGetCommand } = await Promise.resolve().then(() => require('./get')); return new ConfigGetCommand(this); }],
            ['set', async () => { const { ConfigSetCommand } = await Promise.resolve().then(() => require('./set')); return new ConfigSetCommand(this); }],
            ['unset', async () => { const { ConfigUnsetCommand } = await Promise.resolve().then(() => require('./unset')); return new ConfigUnsetCommand(this); }],
            ['delete', 'unset'],
            ['del', 'unset'],
        ]);
    }
}
exports.ConfigNamespace = ConfigNamespace;
