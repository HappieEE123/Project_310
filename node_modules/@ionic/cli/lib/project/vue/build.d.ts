/// <reference types="node" />
import { CommandLineInputs, CommandLineOptions, CommandMetadata, VueBuildOptions } from '../../../definitions';
import { BuildCLI, BuildRunner, BuildRunnerDeps } from '../../build';
import { VueProject } from './';
export interface VueBuildRunnerDeps extends BuildRunnerDeps {
    readonly project: VueProject;
}
export declare class VueBuildRunner extends BuildRunner<VueBuildOptions> {
    protected readonly e: VueBuildRunnerDeps;
    constructor(e: VueBuildRunnerDeps);
    getCommandMetadata(): Promise<Partial<CommandMetadata>>;
    createOptionsFromCommandLine(inputs: CommandLineInputs, options: CommandLineOptions): VueBuildOptions;
    buildProject(options: VueBuildOptions): Promise<void>;
}
export declare class VueBuildCLI extends BuildCLI<VueBuildOptions> {
    readonly name = "Vue CLI Service";
    readonly pkg = "@vue/cli-service";
    readonly program = "vue-cli-service";
    readonly prefix = "vue-cli-service";
    readonly script = "ionic:build";
    protected buildArgs(options: VueBuildOptions): Promise<string[]>;
    protected buildEnvVars(options: VueBuildOptions): Promise<NodeJS.ProcessEnv>;
}
