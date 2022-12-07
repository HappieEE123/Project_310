"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployManifestCommand = void 0;
const cli_framework_output_1 = require("@ionic/cli-framework-output");
const utils_array_1 = require("@ionic/utils-array");
const utils_fs_1 = require("@ionic/utils-fs");
const utils_terminal_1 = require("@ionic/utils-terminal");
const crypto = require("crypto");
const fs = require("fs");
const lodash = require("lodash");
const path = require("path");
const Debug = require("debug");
const color_1 = require("../../lib/color");
const errors_1 = require("../../lib/errors");
const shell_1 = require("../../lib/shell");
const logger_1 = require("../../lib/utils/logger");
const capacitor_1 = require("./capacitor");
const core_1 = require("./core");
const debug = Debug('ionic:commands:deploy:manifest');
const CAPACITOR_CONFIG_JSON_FILE = 'capacitor.config.json';
class DeployManifestCommand extends core_1.DeployCoreCommand {
    constructor() {
        super(...arguments);
        this.getCapacitorCLIConfig = lodash.memoize(async () => {
            // I had to create a new shell to force prependNodeModulesBinToPath.
            // If ionic.config.json is not present, then this.env.shell will not implement this, and the Capacitor command will fail.
            const args = ['config', '--json'];
            const log = new logger_1.Logger({
                level: cli_framework_output_1.LOGGER_LEVELS.INFO,
                handlers: logger_1.createDefaultLoggerHandlers(),
            });
            const shell = new shell_1.Shell({ log }, { alterPath: p => { return shell_1.prependNodeModulesBinToPath(this.env.ctx.execPath, p); } });
            debug('Getting config with Capacitor CLI: %O', args);
            const output = await shell.cmdinfo('capacitor', args);
            if (!output) {
                debug('Could not get config from Capacitor CLI (probably old version)');
                return;
            }
            try {
                return JSON.parse(output);
            }
            catch (e) {
                debug('Could not get config from Capacitor CLI (probably old version)', e);
                return;
            }
        });
        this.getCapacitorConfig = lodash.memoize(async () => {
            const cli = await this.getCapacitorCLIConfig();
            if (cli) {
                debug('Loaded Capacitor config!');
                return cli.app.extConfig;
            }
            // fallback to reading capacitor.config.json if it exists
            const confPath = this.getCapacitorConfigJsonPath();
            if (!(await utils_fs_1.pathExists(confPath))) {
                debug('Capacitor config file does not exist at %O', confPath);
                debug('Failed to load Capacitor config');
                return;
            }
            const conf = new capacitor_1.CapacitorJSONConfig(confPath);
            const extConfig = conf.c;
            debug('Loaded Capacitor config!');
            return extConfig;
        });
    }
    async getMetadata() {
        // This command is set as type 'global' in order to support Capacitor apps without an ionic.config.json
        return {
            name: 'manifest',
            type: 'global',
            summary: 'Generates a manifest file for the deploy service from a built app directory',
            groups: ["paid" /* PAID */],
        };
    }
    async run() {
        const capacitorConfig = await this.getCapacitorConfig();
        if (!this.project && !capacitorConfig) {
            throw new errors_1.FatalException(`Cannot run ${color_1.input('ionic deploy manifest')} outside a project directory.`);
        }
        let buildDir;
        if (this.project) {
            await this.requireNativeIntegration();
            buildDir = await this.project.getDistDir();
        }
        else {
            buildDir = capacitorConfig.webDir ? capacitorConfig.webDir : 'www';
        }
        const manifest = await this.getFilesAndSizesAndHashesForGlobPattern(buildDir);
        const manifestPath = path.resolve(buildDir, 'pro-manifest.json');
        await utils_fs_1.writeFile(manifestPath, JSON.stringify(manifest, undefined, 2), { encoding: 'utf8' });
        this.env.log.ok(`Appflow Deploy manifest written to ${color_1.input(utils_terminal_1.prettyPath(manifestPath))}!`);
    }
    async getFilesAndSizesAndHashesForGlobPattern(buildDir) {
        const contents = await utils_fs_1.readdirp(buildDir, { filter: item => !/(css|js)\.map$/.test(item.path) });
        const stats = await utils_array_1.map(contents, async (f) => [f, await utils_fs_1.stat(f)]);
        const files = stats.filter(([, s]) => !s.isDirectory());
        const items = await Promise.all(files.map(([f, s]) => this.getFileAndSizeAndHashForFile(buildDir, f, s)));
        return items.filter(item => item.href !== 'pro-manifest.json');
    }
    async getFileAndSizeAndHashForFile(buildDir, file, s) {
        const buffer = await this.readFile(file);
        return {
            href: path.relative(buildDir, file),
            size: s.size,
            integrity: this.getIntegrity(buffer),
        };
    }
    async readFile(file) {
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, buffer) => {
                if (err) {
                    return reject(err);
                }
                resolve(buffer);
            });
        });
    }
    getIntegrity(data) {
        return ['sha256', 'sha384', 'sha512']
            .map(algorithm => {
            const hash = crypto.createHash(algorithm);
            hash.update(data);
            return algorithm + '-' + hash.digest('base64');
        })
            .join(' ');
    }
    getCapacitorConfigJsonPath() {
        return path.resolve(this.env.ctx.execPath, CAPACITOR_CONFIG_JSON_FILE);
    }
}
exports.DeployManifestCommand = DeployManifestCommand;
