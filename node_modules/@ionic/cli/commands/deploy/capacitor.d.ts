import { BaseConfig } from "@ionic/cli-framework";
export interface CapacitorConfig {
    appId?: string;
    appName?: string;
    webDir?: string;
    server?: {
        url?: string;
        originalUrl?: string;
    };
}
export interface CapacitorCLIConfig {
    android: {
        platformDirAbs: string;
        srcMainDirAbs: string;
        assetsDirAbs: string;
    };
    ios: {
        platformDirAbs: string;
        nativeTargetDirAbs: string;
    };
    app: {
        extConfig: CapacitorConfig;
    };
}
export declare class CapacitorJSONConfig extends BaseConfig<CapacitorConfig> {
    constructor(p: string);
    provideDefaults(config: CapacitorConfig): CapacitorConfig;
    setServerUrl(url: string): void;
    resetServerUrl(): void;
}
