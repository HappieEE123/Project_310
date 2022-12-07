import { AndroidBuildOutput, LegacyAndroidBuildOutputEntry } from '../../../definitions';
export declare function getPlatforms(projectDir: string): Promise<string[]>;
export declare function getAndroidBuildOutputJson(paths: string[]): Promise<LegacyAndroidBuildOutputEntry[] | AndroidBuildOutput>;
export declare function getAndroidPackageFilePath(root: string, { release }: GetPackagePathOptions): Promise<string>;
export interface GetPackagePathOptions {
    emulator?: boolean;
    release?: boolean;
}
/**
 * Get the relative path to most recently built APK or IPA file
 */
export declare function getPackagePath(root: string, appName: string, platform: string, { emulator, release }?: GetPackagePathOptions): Promise<string>;
