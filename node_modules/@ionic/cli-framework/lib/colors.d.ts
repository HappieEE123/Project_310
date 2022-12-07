import { ColorFunction, Colors as BaseColors } from '@ionic/cli-framework-output';
import { MetadataGroup } from '../definitions';
export { ColorFunction, LoggerColors } from '@ionic/cli-framework-output';
export declare type HelpGroupColors = {
    [G in Exclude<MetadataGroup, MetadataGroup.HIDDEN | MetadataGroup.ADVANCED>]: ColorFunction;
};
export interface HelpColors {
    /**
     * Used to color the section titles in help output.
     */
    title: ColorFunction;
    group: HelpGroupColors;
}
export interface Colors extends BaseColors {
    help: HelpColors;
}
export declare const DEFAULT_COLORS: Colors;
export declare const NO_COLORS: Colors;
