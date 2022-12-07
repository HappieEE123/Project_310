"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackagePath = exports.getAndroidPackageFilePath = exports.getAndroidBuildOutputJson = exports.getPlatforms = void 0;
const utils_array_1 = require("@ionic/utils-array");
const utils_fs_1 = require("@ionic/utils-fs");
const Debug = require("debug");
const path = require("path");
const guards_1 = require("../../../guards");
const color_1 = require("../../color");
const errors_1 = require("../../errors");
const debug = Debug('ionic:lib:cordova:project');
const CORDOVA_ANDROID_PACKAGE_PATH = 'platforms/android/app/build/outputs/apk/';
const CORDOVA_IOS_SIMULATOR_PACKAGE_PATH = 'platforms/ios/build/emulator';
const CORDOVA_IOS_DEVICE_PACKAGE_PATH = 'platforms/ios/build/device';
async function getPlatforms(projectDir) {
    const platformsDir = path.resolve(projectDir, 'platforms');
    const contents = await utils_fs_1.readdirSafe(platformsDir);
    const platforms = await utils_array_1.filter(contents, async (file) => {
        const stat = await utils_fs_1.statSafe(path.join(platformsDir, file));
        return !file.startsWith('.') && typeof stat !== 'undefined' && stat.isDirectory();
    });
    return platforms;
}
exports.getPlatforms = getPlatforms;
async function getAndroidBuildOutputJson(paths) {
    for (const p of paths) {
        try {
            const json = await utils_fs_1.readJson(p);
            if (guards_1.isAndroidBuildOutputFile(json)) {
                return json;
            }
            else if (guards_1.isLegacyAndroidBuildOutputFile(json)) {
                return json;
            }
            else {
                debug('Output file does not match expected format: %O', json);
            }
        }
        catch (e) {
            debug('Error parsing file %O: %O', p, e);
        }
    }
    throw new errors_1.FatalException(`Could not find or parse valid build output file.\n` +
        `Tried the following paths:\n` +
        `- ${paths.join('\n- ')}`);
}
exports.getAndroidBuildOutputJson = getAndroidBuildOutputJson;
async function getAndroidPackageFilePath(root, { release = false }) {
    const outputPath = path.resolve(root, CORDOVA_ANDROID_PACKAGE_PATH, release ? 'release' : 'debug');
    const outputJsonPaths = ['output.json', 'output-metadata.json'].map(p => path.resolve(outputPath, p));
    const outputJson = await getAndroidBuildOutputJson(outputJsonPaths);
    const p = 'elements' in outputJson
        ? outputJson.elements[0].outputFile
        : outputJson[0].path;
    // TODO: handle multiple files from output.json, prompt to select?
    return path.relative(root, path.resolve(outputPath, p));
}
exports.getAndroidPackageFilePath = getAndroidPackageFilePath;
/**
 * Get the relative path to most recently built APK or IPA file
 */
async function getPackagePath(root, appName, platform, { emulator = false, release = false } = {}) {
    if (platform === 'android') {
        return getAndroidPackageFilePath(root, { emulator, release });
    }
    else if (platform === 'ios') {
        if (emulator) {
            return path.join(CORDOVA_IOS_SIMULATOR_PACKAGE_PATH, `${appName}.app`);
        }
        return path.join(CORDOVA_IOS_DEVICE_PACKAGE_PATH, `${appName}.ipa`);
    }
    throw new errors_1.FatalException(`Unknown package path for ${color_1.input(appName)} on ${color_1.input(platform)}.`);
}
exports.getPackagePath = getPackagePath;
