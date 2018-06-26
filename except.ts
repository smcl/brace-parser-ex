import { braceValue } from "./common";

/* variant of naive - but with horrendous early exit via thrown exception */
export function myFn(str:string): boolean { 
    try {
        return 0 == Array.from(str).map(braceValue).reduce((total, x) => { 
            if (total < 0 ) throw new Error("parse error");
            return total + x 
        }, 0);
      }
      catch(e) {
        return false;
      }
}