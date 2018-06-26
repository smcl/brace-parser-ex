import { braceValue } from "./common";

/* naive - don't look at the order braces are opened + closed, just ensure an equal number of both */
export function myFn(str:string): boolean {
    return 0 == Array.from(str).map(braceValue).reduce((total, x) => total + x, 0);
}