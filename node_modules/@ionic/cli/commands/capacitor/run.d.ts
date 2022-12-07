import * as lodash from 'lodash';
import { CapacitorRunHookName, CommandInstanceInfo, CommandLineInputs, CommandLineOptions, CommandMetadata, CommandPreRun } from '../../definitions';
import { HookDeps } from '../../lib/hooks';
import { CapacitorCommand } from './base';
interface NativeTarget {
    id: string;
    name: string;
    api: string;
}
export declare class RunCommand extends CapacitorCommand implements CommandPreRun {
    getMetadata(): Promise<CommandMetadata>;
    isOldCapacitor: (() => Promise<boolean>) & lodash.MemoizedFunction;
    preRun(inputs: CommandLineInputs, options: CommandLineOptions, runinfo: CommandInstanceInfo): Promise<void>;
    run(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void>;
    protected getNativeTargets: ((platform: string) => Promise<NativeTarget[]>) & lodash.MemoizedFunction;
    protected runCapacitorOpenFlow(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void>;
    protected getContinueMessage(platform: string): string;
    protected runCapacitorRunFlow(inputs: CommandLineInputs, options: CommandLineOptions, { shouldSync }?: {
        shouldSync?: boolean;
    }): Promise<void>;
    protected runCapacitorRunHook(name: CapacitorRunHookName, inputs: CommandLineInputs, options: CommandLineOptions, e: HookDeps): Promise<void>;
}
export {};
