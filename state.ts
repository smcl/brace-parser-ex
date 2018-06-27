import { braceValue } from "./common";

interface Result {
    total: number;
    error: boolean;
}

/* state - maintain an "error" state variable in the accumulator */
export function myFn(str:string): boolean {
    let result = Array.from(str).map(braceValue).reduce((acc:Result, x:number) => {
        return {
            error: acc.error || acc.total < 0,
            total: acc.total + x
        } as Result;
    }, { total:0, error:false } as Result );

    return result.total === 0 && !result.error;
}