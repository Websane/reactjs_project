function pipe<U>( ...fns: Function[]) {
    return <E,>(initialValue: any) : U =>
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop];
}

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
    return !b;
}

export const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);