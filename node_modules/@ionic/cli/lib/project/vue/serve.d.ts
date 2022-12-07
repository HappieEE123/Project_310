/// <reference types="node" />
import { CommandMetadata, ServeDetails, VueServeOptions } from '../../../definitions';
import { ServeCLI, ServeRunner, ServeRunnerDeps } from '../../serve';
export declare class VueServeRunner extends ServeRunner<VueServeOptions> {
    protected readonly e: ServeRunnerDeps;
    constructor(e: ServeRunnerDeps);
    getCommandMetadata(): Promise<Partial<CommandMetadata>>;
    modifyOpenUrl(url: string, _options: VueServeOptions): string;
    serveProject(options: VueServeOptions): Promise<ServeDetails>;
}
export declare class VueServeCLI extends ServeCLI<VueServeOptions> {
    readonly name = "Vue CLI Service";
    readonly pkg = "@vue/cli-service";
    readonly program = "vue-cli-service";
    readonly prefix = "vue-cli-service";
    readonly script = "ionic:serve";
    protected chunks: number;
    serve(options: VueServeOptions): Promise<void>;
    protected stdoutFilter(line: string): boolean;
    protected stderrFilter(line: string): boolean;
    protected buildArgs(_options: VueServeOptions): Promise<string[]>;
    protected buildEnvVars(options: VueServeOptions): Promise<NodeJS.ProcessEnv>;
}
