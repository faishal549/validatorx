import assert from "assert";
import { validate } from "../src/core.js";

const rules = {
    username: [{ type: "required" }, { type: "min", value: 3 }],
    email: [{ type: "required" }, { type: "email" }]
};

const data = { username: "ab", email: "x@x" };
const errors = validate(rules, data);

assert.strictEqual(typeof errors, "object");
assert.strictEqual(errors.username.includes("at least"), true);
assert.strictEqual(errors.email.includes("Invalid"), true);

console.log("core validate tests passed");
