import { BaseConfig } from '@ionic/cli-framework';
import { PromptModule } from '@ionic/cli-framework-prompts';
import { IClient, IConfig, IIntegration, ILogger, IProject, ISession, IShell, InfoItem, IntegrationAddDetails, IntegrationName, ProjectIntegration, ProjectPersonalizationDetails } from '../../definitions';
import type { Integration as CapacitorIntegration } from './capacitor';
import type { Integration as CordovaIntegration } from './cordova';
import type { Integration as EnterpriseIntegration } from './enterprise';
export { INTEGRATION_NAMES } from '../../guards';
export interface IntegrationOptions {
    quiet?: boolean;
}
export interface IntegrationDeps {
    readonly prompt: PromptModule;
    readonly client: IClient;
    readonly session: ISession;
    readonly config: IConfig;
    readonly shell: IShell;
    readonly project: IProject;
    readonly log: ILogger;
}
export declare class IntegrationConfig extends BaseConfig<ProjectIntegration> {
    provideDefaults(c: Partial<Readonly<ProjectIntegration>>): ProjectIntegration;
}
export declare abstract class BaseIntegration<T extends ProjectIntegration> implements IIntegration<T> {
    protected readonly e: IntegrationDeps;
    abstract readonly name: IntegrationName;
    abstract readonly summary: string;
    abstract readonly archiveUrl?: string;
    abstract readonly config: BaseConfig<T>;
    constructor(e: IntegrationDeps);
    static createFromName(deps: IntegrationDeps, name: 'capacitor'): Promise<CapacitorIntegration>;
    static createFromName(deps: IntegrationDeps, name: 'cordova'): Promise<CordovaIntegration>;
    static createFromName(deps: IntegrationDeps, name: 'enterprise'): Promise<EnterpriseIntegration>;
    static createFromName(deps: IntegrationDeps, name: IntegrationName): Promise<CapacitorIntegration | CordovaIntegration | EnterpriseIntegration>;
    getInfo(): Promise<InfoItem[]>;
    isAdded(): boolean;
    isEnabled(): boolean;
    enable(config?: ProjectIntegration): Promise<void>;
    disable(): Promise<void>;
    personalize(details: ProjectPersonalizationDetails): Promise<void>;
    add(details: IntegrationAddDetails): Promise<void>;
}
