"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCommand = void 0;
const utils_terminal_1 = require("@ionic/utils-terminal");
const constants_1 = require("../constants");
const color_1 = require("../lib/color");
const command_1 = require("../lib/command");
const errors_1 = require("../lib/errors");
class StateCommand extends command_1.Command {
    async getMetadata() {
        return {
            name: 'state',
            type: 'global',
            summary: '',
            groups: ["hidden" /* HIDDEN */],
        };
    }
    async run() {
        const data = [
            [`${utils_terminal_1.indent(4)}${color_1.input('ionic cordova platform save')}`, `save existing installed platforms to ${color_1.strong('config.xml')}`],
            [`${utils_terminal_1.indent(4)}${color_1.input('ionic cordova plugin save')}`, `save existing installed plugins to ${color_1.strong('config.xml')}`],
            [`${utils_terminal_1.indent(4)}${color_1.input('ionic cordova platform --help')}`, `view help page for managing Cordova platforms`],
            [`${utils_terminal_1.indent(4)}${color_1.input('ionic cordova plugin --help')}`, `view help page for managing Cordova plugins`],
            [`${utils_terminal_1.indent(4)}${color_1.input('ionic cordova prepare')}`, `install platforms and plugins listed in ${color_1.strong('config.xml')}`],
        ];
        throw new errors_1.FatalException(`${color_1.input('ionic state')} has been removed.\n\n` +
            `We recommend using Cordova directly to manage Cordova plugins and platforms.\n` +
            `The following commands fulfill the old ${color_1.input('ionic state')} functionality:\n\n` +
            `${utils_terminal_1.columnar(data, constants_1.COLUMNAR_OPTIONS)}\n\n` +
            `See ${color_1.strong('https://cordova.apache.org/docs/en/latest/platform_plugin_versioning_ref/')} for detailed information.\n`);
    }
}
exports.StateCommand = StateCommand;
