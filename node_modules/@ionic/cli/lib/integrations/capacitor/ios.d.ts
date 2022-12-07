import * as et from "elementtree";
export declare const IOS_INFO_FILE = "Info.plist";
export declare class CapacitorIosInfo {
    readonly plistPath: string;
    protected _doc?: et.ElementTree;
    protected origInfoPlistContent?: string;
    protected saving: boolean;
    constructor(plistPath: string);
    get origPlistPath(): string;
    get doc(): et.ElementTree;
    static load(plistPath: string): Promise<CapacitorIosInfo>;
    disableAppTransportSecurity(): void;
    private getValueForKey;
    private getDictRoot;
    reset(): Promise<void>;
    save(): Promise<void>;
    protected reload(): Promise<void>;
    protected write(): string;
}
