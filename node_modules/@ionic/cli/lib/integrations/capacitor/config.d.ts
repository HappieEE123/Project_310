import { BaseConfig } from '@ionic/cli-framework';
export declare const CAPACITOR_CONFIG_JSON_FILE = "capacitor.config.json";
export interface CapacitorConfig {
    appId?: string;
    appName?: string;
    webDir?: string;
    server?: {
        url?: string;
        originalUrl?: string;
    };
}
export declare class CapacitorJSONConfig extends BaseConfig<CapacitorConfig> {
    constructor(p: string);
    provideDefaults(config: CapacitorConfig): CapacitorConfig;
    setServerUrl(url: string): void;
    resetServerUrl(): void;
}
