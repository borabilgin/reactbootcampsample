declare namespace NodeJS {
    export interface Global {
        shallow: Function,
        render: Function,
        mount: Function
    }
}