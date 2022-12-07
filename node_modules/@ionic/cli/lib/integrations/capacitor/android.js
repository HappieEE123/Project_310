"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacitorAndroidManifest = exports.ANDROID_MANIFEST_FILE = void 0;
const utils_fs_1 = require("@ionic/utils-fs");
const et = require("elementtree");
exports.ANDROID_MANIFEST_FILE = 'AndroidManifest.xml';
class CapacitorAndroidManifest {
    constructor(manifestPath) {
        this.manifestPath = manifestPath;
        this.saving = false;
    }
    get origManifestPath() {
        return `${this.manifestPath}.orig`;
    }
    get doc() {
        if (!this._doc) {
            throw new Error('No doc loaded.');
        }
        return this._doc;
    }
    static async load(manifestPath) {
        if (!manifestPath) {
            throw new Error(`Must supply file path for ${exports.ANDROID_MANIFEST_FILE}.`);
        }
        const conf = new CapacitorAndroidManifest(manifestPath);
        await conf.reload();
        return conf;
    }
    async reload() {
        var _a;
        this.origManifestContent = await utils_fs_1.readFile(this.manifestPath, { encoding: 'utf8' });
        try {
            this._doc = et.parse(this.origManifestContent);
        }
        catch (e) {
            throw new Error(`Cannot parse ${exports.ANDROID_MANIFEST_FILE} file: ${(_a = e.stack) !== null && _a !== void 0 ? _a : e}`);
        }
    }
    enableCleartextTraffic() {
        const node = this.getApplicationNode();
        node.set('android:usesCleartextTraffic', 'true');
    }
    async reset() {
        const origManifestContent = await utils_fs_1.readFile(this.origManifestPath, { encoding: 'utf8' });
        if (!this.saving) {
            this.saving = true;
            await utils_fs_1.writeFile(this.manifestPath, origManifestContent, { encoding: 'utf8' });
            await utils_fs_1.unlink(this.origManifestPath);
            this.saving = false;
        }
    }
    async save() {
        if (!this.saving) {
            this.saving = true;
            if (this.origManifestContent) {
                await utils_fs_1.writeFile(this.origManifestPath, this.origManifestContent, { encoding: 'utf8' });
                this.origManifestContent = undefined;
            }
            await utils_fs_1.writeFile(this.manifestPath, this.write(), { encoding: 'utf8' });
            this.saving = false;
        }
    }
    getApplicationNode() {
        const root = this.doc.getroot();
        const applicationNode = root.find('application');
        if (!applicationNode) {
            throw new Error(`No <application> node in ${exports.ANDROID_MANIFEST_FILE}.`);
        }
        return applicationNode;
    }
    write() {
        const contents = this.doc.write({ indent: 4 });
        return contents;
    }
}
exports.CapacitorAndroidManifest = CapacitorAndroidManifest;
