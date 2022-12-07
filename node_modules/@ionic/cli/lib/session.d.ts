import { IClient, IConfig, ISession, IonicEnvironment } from '../definitions';
export interface SessionDeps {
    readonly config: IConfig;
    readonly client: IClient;
}
export declare class BaseSession {
    readonly e: SessionDeps;
    constructor(e: SessionDeps);
    logout(): Promise<void>;
    isLoggedIn(): boolean;
    getUser(): {
        id: number;
    };
}
export declare class ProSession extends BaseSession implements ISession {
    getUserToken(): Promise<string>;
    private isTokenValid;
    login(email: string, password: string): Promise<void>;
    ssoLogin(email?: string): Promise<void>;
    tokenLogin(token: string): Promise<void>;
    wizardLogin(): Promise<string | undefined>;
    webLogin(): Promise<void>;
    refreshLogin(refreshToken: string, flowName: string): Promise<string>;
}
export declare function promptToLogin(env: IonicEnvironment): Promise<void>;
export declare function promptToSignup(env: IonicEnvironment): Promise<void>;
