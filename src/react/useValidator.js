import { useState } from "react";
import { validate } from "../core.js";

export function useValidator(rules) {
    const [errors, setErrors] = useState({});

    function validateSync(data) {
        const err = validate(rules, data);
        setErrors(err);
        return err;
    }

    function reset() {
        setErrors({});
    }

    return { errors, validate: validateSync, reset };
}
