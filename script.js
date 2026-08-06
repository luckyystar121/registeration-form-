const form = document.getElementById("registerForm");
const formError = document.getElementById("form-error");

const fields = {
  username: {
    input: document.getElementById("username"),
    error: document.getElementById("username-error"),
    validate: (value) => {
      if (!value.trim()) return "Username is required.";
      if (value.trim().length < 3)
        return "Username must be at least 3 characters.";
      if (!/^[A-Za-z0-9_]+$/.test(value))
        return "Username can only contain letters, numbers, and underscores.";
      return "";
    },
  },
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("email-error"),
    validate: (value) => {
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address.";
      return "";
    },
  },
  password: {
    input: document.getElementById("password"),
    error: document.getElementById("password-error"),
    validate: (value) => {
      if (!value) return "Password is required.";
      if (value.length < 8) return "Password must be at least 8 characters.";
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/.test(value)) {
        return "Password must include uppercase, lowercase, number, and special character.";
      }
      return "";
    },
  },
  Phone_Number: {
    input: document.getElementById("Phone_Number"),
    error: document.getElementById("Phone_Number-error"),
    validate: (value) => {
      if (!value.trim()) return "Mobile number is required.";
      if (!/^\d{10}$/.test(value))
        return "Mobile number must be exactly 10 digits.";
      return "";
    },
  },
  Branch: {
    input: document.getElementById("Branch"),
    error: document.getElementById("Branch-error"),
    validate: (value) => {
      if (!value) return "Please select a branch.";
      return "";
    },
  },
};

function setFieldState(name, message) {
  const field = fields[name];
  const hasError = Boolean(message);

  field.input.classList.toggle("error", hasError);
  field.input.classList.toggle(
    "success",
    !hasError && field.input.value.trim() !== "",
  );
  field.error.textContent = message;
}

function validateField(name) {
  const field = fields[name];
  const message = field.validate(field.input.value);
  setFieldState(name, message);
  return message === "";
}

Object.keys(fields).forEach((name) => {
  fields[name].input.addEventListener("input", () => validateField(name));
  fields[name].input.addEventListener("blur", () => validateField(name));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;
  Object.keys(fields).forEach((name) => {
    if (!validateField(name)) {
      isValid = false;
    }
  });

  if (isValid) {
    formError.textContent = "Registration successful!";
    formError.style.color = "#2e7d32";
    form.reset();
    Object.keys(fields).forEach((name) => setFieldState(name, ""));
  } else {
    formError.textContent = "Please correct the highlighted fields.";
    formError.style.color = "#d32f2f";
  }
});