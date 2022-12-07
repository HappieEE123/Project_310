import * as et from 'elementtree';
export declare const ANDROID_MANIFEST_FILE = "AndroidManifest.xml";
export declare class CapacitorAndroidManifest {
    readonly manifestPath: string;
    protected _doc?: et.ElementTree;
    protected origManifestContent?: string;
    protected saving: boolean;
    constructor(manifestPath: string);
    get origManifestPath(): string;
    get doc(): et.ElementTree;
    static load(manifestPath: string): Promise<CapacitorAndroidManifest>;
    protected reload(): Promise<void>;
    enableCleartextTraffic(): void;
    reset(): Promise<void>;
    save(): Promise<void>;
    protected getApplicationNode(): et.Element;
    protected write(): string;
}
