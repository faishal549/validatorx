export function validate(rules, data) {
    const errors = {}
    for (const field in rules) {
        const value = data[field]
        const fieldRules = rules[field]

        for (const rule of fieldRules) {
            const { type, message } = rule;
            if (type === "required") {
                if (!value || value.toString().trim() === "") {
                    errors[field] = message || `${field} is required`;
                    break
                }
            }

            if (type === "min") {
                if (value && value.length < rule.value) {
                    errors[field] =
                        message || `${field} must be at least ${rule.value} characters`;
                    break;
                }
            }

            if (type === "email") {
                const emailRegex =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                if (value && !emailRegex.test(value)) {
                    errors[field] = message || `Invalid email address`;
                    break;
                }
            }



        }
    }
    return errors
}