declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const __IS_DEV__: boolean

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPartial<U>>
            : T[P] extends object
                ? DeepPartial<T[P]>
                : T[P]
}

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};