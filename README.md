# ValidatorX

Lightweight and simple validation engine + React hook.  
Perfect for forms, inputs, and custom validation logic.

---

## 🚀 Features

- Simple rule-based validation
- React hook included: `useValidator`
- Custom error messages
- Works with any form library
- Supports required, min length, email validation
- Lightweight (no dependencies)

---

## 📦 Installation

```bash
npm install @faishal-dev/validatorx



🔧 Usage (React Example)


import { useValidator } from "@faishal-dev/validatorx";

export default function App() {
  const { errors, validate } = useValidator({
    name: [
      { type: "required", message: "Name is required" },
      { type: "min", value: 3 }
    ],
    email: [
      { type: "required" },
      { type: "email" }
    ]
  });

  function handleSubmit(e) {
    e.preventDefault();

    const err = validate({
      name: e.target.name.value,
      email: e.target.email.value,
    });

    if (Object.keys(err).length === 0) {
      alert("Valid!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <p>{errors.name}</p>

      <input name="email" placeholder="Email" />
      <p>{errors.email}</p>

      <button>Submit</button>
    </form>
  );
}


🧠 Rules Supported


Rule	Description	Example
required	Field cannot be empty	{ type: "required" }
min	Minimum length required	{ type: "min", value: 3 }
email	Must be a valid email	{ type: "email" }

More rules coming soon…


🎯 Core API
validate(rules, data)

Pure JS validation engine.

Returns:

{
  fieldName: "Error message"
}


useValidator(rules)

React hook that returns:

{
  errors,
  validate,
  reset
}

📄 License

MIT © Faishal


---

# 🔍 **What Was Fixed?**

✔ Installation command corrected  
✔ Code blocks properly closed  
✔ Table aligned  
✔ Extra `yaml` / `Copy code` text removed  
✔ Formatting cleaned  
✔ Title sections uniform  

---
