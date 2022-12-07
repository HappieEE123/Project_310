import * as lodash from 'lodash';
import { BaseIntegration, IntegrationConfig } from '../';
import { InfoItem, IntegrationAddDetails, IntegrationName, ProjectIntegration, ProjectPersonalizationDetails } from '../../../definitions';
import { CapacitorConfig } from './config';
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
export declare class Integration extends BaseIntegration<ProjectIntegration> {
    readonly name: IntegrationName;
    readonly summary = "Target native iOS and Android with Capacitor, Ionic's new native layer";
    readonly archiveUrl: undefined;
    get config(): IntegrationConfig;
    get root(): string;
    add(details: IntegrationAddDetails): Promise<void>;
    protected getCapacitorConfigJsonPath(): string;
    installCapacitorCore(): Promise<void>;
    installCapacitorCLI(): Promise<void>;
    installCapacitorPlugins(): Promise<void>;
    personalize({ name, packageId }: ProjectPersonalizationDetails): Promise<void>;
    getInfo(): Promise<InfoItem[]>;
    getCapacitorCLIVersion: (() => Promise<string | undefined>) & lodash.MemoizedFunction;
    getCapacitorCLIConfig: (() => Promise<CapacitorCLIConfig | undefined>) & lodash.MemoizedFunction;
    getCapacitorConfig: (() => Promise<CapacitorConfig | undefined>) & lodash.MemoizedFunction;
}
