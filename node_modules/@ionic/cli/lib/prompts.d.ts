import { PromptQuestion, PromptValue } from '@ionic/cli-framework-prompts';
import { ILogger, IonicEnvironmentFlags } from '../definitions';
export interface CreateOnFallbackOptions {
    readonly flags: IonicEnvironmentFlags;
    readonly log: ILogger;
}
export declare function createOnFallback({ flags: { confirm }, log }: CreateOnFallbackOptions): (question: PromptQuestion) => PromptValue | void;
