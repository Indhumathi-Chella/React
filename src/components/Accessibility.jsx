import { useId } from "react";

function passwordHint() {
  const passwordHintId = useId();
}

function PasswordFeild() {
  return (
    <>
      <label htmlFor="Password">
        Name:{" "}
        <input type="password" id="password" aria-describedby={passwordHint} />{" "}
      </label>
      <p id={passwordHint}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

function Form() {
  const id = useId();
  return (
    <>
      <label htmlFor="name" id={`${id} -name`}>
        {" "}
        Name: <input type="text" id={`${id} -name`} />
      </label>
      <label htmlFor="password" id={`${id} -password`}>
        {" "}
        Password: <input type="password" id={`${id} -password`} />
      </label>
    </>
  );
}
export { PasswordFeild, Form };
