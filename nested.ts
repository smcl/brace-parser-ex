import { braceValue } from "./common";

/* first attempt to handle the open/closing braces correctly - keep running count + bail out early if we close too many */
export function myFn(str:string) { 
    let total = 0;

    for (const token of Array.from(str)) {
        if (total < 0) // implies we're closing a brace when we don't have one open
            return false;

        total += braceValue(token);
    }

    return total === 0;
}