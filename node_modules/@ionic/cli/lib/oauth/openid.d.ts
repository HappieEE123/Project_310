import { Response } from 'superagent';
import { ContentType, OAuthServerConfig, OpenIdToken } from '../../definitions';
import { AuthorizationParameters, OAuth2Flow, OAuth2FlowDeps, OAuth2FlowOptions, TokenParameters } from './oauth';
export interface OpenIDFlowOptions extends Partial<OAuth2FlowOptions> {
    readonly accessTokenRequestContentType?: ContentType;
}
export declare class OpenIDFlow extends OAuth2Flow<OpenIdToken> {
    readonly e: OAuth2FlowDeps;
    readonly flowName = "open_id";
    constructor({ accessTokenRequestContentType, ...options }: OpenIDFlowOptions, e: OAuth2FlowDeps, authorizationUrlOverride?: string);
    protected generateAuthorizationParameters(challenge: string): AuthorizationParameters;
    protected generateTokenParameters(code: string, verifier: string): TokenParameters;
    protected generateRefreshTokenParameters(refreshToken: string): TokenParameters;
    protected checkValidExchangeTokenRes(res: Response): boolean;
    protected getAuthConfig(): OAuthServerConfig;
}
