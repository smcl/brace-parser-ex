import { expect } from "chai";
import "mocha";

import { myFn as naive }  from "./naive";
import { myFn as nested } from "./nested";
import { myFn as except } from "./except";
import { myFn as matej } from "./matej";

const tests = {
  "":          true,  /* empty input => true */
  "{}":        true,  /* balanced */
  "}":         false, /* no opening { */
  "{":         false, /* no closing } */
  "{{{}{}}":   false, /* couple of nested, unclosed brace */
  "{{{}{}}}":  true,  /* couple of levels, balanced */
  "{{{}{}}}}": false, /* couple of levels, close too many braces */
  "}{":        false  /* IMPORTANT: passes naive, fails nested */
};

function executeTests(version:string, fn) {
  describe(version, () => {
    for (const testInput in tests) {
      it(`"${testInput}" should return ${tests[testInput]}`, () => {
        const result = fn(testInput);
        expect(result).to.equal(tests[testInput]);
      });
    }
  })
}


executeTests("naive", naive);
executeTests("nested", nested);
executeTests("nested", nested);
executeTests("matej", matej);