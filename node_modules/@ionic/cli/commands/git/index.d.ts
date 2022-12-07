import { MetadataGroup } from '@ionic/cli-framework';
import { CommandMap, Namespace } from '../../lib/namespace';
export declare class GitNamespace extends Namespace {
    getMetadata(): Promise<{
        name: string;
        summary: string;
        groups: MetadataGroup[];
    }>;
    getCommands(): Promise<CommandMap>;
}
