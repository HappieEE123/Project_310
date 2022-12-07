/// <reference types="node" />
import { Response } from 'superagent';
import { ContentType, IClient, IConfig, OAuthServerConfig, OpenIdToken } from '../../definitions';
export interface AuthorizationParameters {
    [key: string]: string;
}
export interface TokenParameters {
    [key: string]: string;
}
export interface OAuth2FlowOptions {
    readonly redirectHost?: string;
    readonly redirectPort?: number;
    readonly accessTokenRequestContentType?: ContentType;
}
export interface OAuth2FlowDeps {
    readonly client: IClient;
    readonly config: IConfig;
}
export declare abstract class OAuth2Flow<T extends OpenIdToken> {
    readonly e: OAuth2FlowDeps;
    abstract readonly flowName: string;
    readonly oauthConfig: OAuthServerConfig;
    readonly redirectHost: string;
    readonly redirectPort: number;
    readonly accessTokenRequestContentType: ContentType;
    constructor({ redirectHost, redirectPort, accessTokenRequestContentType }: OAuth2FlowOptions, e: OAuth2FlowDeps);
    get redirectUrl(): string;
    run(): Promise<T>;
    exchangeRefreshToken(refreshToken: string): Promise<T>;
    protected abstract generateAuthorizationParameters(challenge: string): AuthorizationParameters;
    protected abstract generateTokenParameters(authorizationCode: string, verifier: string): TokenParameters;
    protected abstract generateRefreshTokenParameters(refreshToken: string): TokenParameters;
    protected abstract checkValidExchangeTokenRes(res: Response): boolean;
    protected abstract getAuthConfig(): OAuthServerConfig;
    protected getSuccessHtml(): Promise<string>;
    protected getAuthorizationCode(): Promise<{
        code: string;
        state?: string;
    }>;
    protected exchangeAuthForAccessToken(authorizationCode: string, verifier: string): Promise<T>;
    protected generateVerifier(): string;
    protected generateChallenge(verifier: string): string;
    protected base64URLEncode(buffer: Buffer): string;
}
