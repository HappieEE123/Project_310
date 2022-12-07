export interface BaseConfigOptions {
    /**
     * The number of spaces to use when writing the JSON file.
     */
    spaces?: string | number;
    /**
     * If specified, the class will operate on a nested object within the config
     * file navigated to by this path prefix, an array of object path keys.
     *
     * For example, to operate on `c` object within `{ a: { b: { c: {} } } }`,
     * use `pathPrefix` of `['a', 'b', 'c']`.
     */
    pathPrefix?: readonly string[];
}
export declare abstract class BaseConfig<T extends object> {
    readonly p: string;
    protected readonly spaces: string | number;
    protected readonly pathPrefix: readonly string[];
    constructor(p: string, { spaces, pathPrefix }?: BaseConfigOptions);
    get file(): any;
    get c(): T;
    set c(value: T);
    get<P extends keyof T>(property: P): T[P];
    get<P extends keyof T>(property: P, defaultValue: NonNullable<T[P]>): NonNullable<T[P]>;
    set<P extends keyof T>(property: P, value: T[P]): void;
    unset<P extends keyof T>(property: P): void;
    abstract provideDefaults(c: Partial<Readonly<T>>): T;
    private _getFile;
    private _setFile;
}
