import { useId } from "react";

function passwordHint() {
  const passwordHintId = useId();
}

function PasswordFeild() {
  return (
    <>
      <label htmlFor="Password">
        Name:{" "}
        <input type="password" id="password" aria-describedby={passwordHint} style={{width:200}} />{" "}
      </label>
      <p >
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
        Name: <input type="text" id={`${id} -name`} style={{width:200}} />
      </label>
      <label htmlFor="password" id={`${id} -password`} style={{width:200}}>
        {" "}
        Password: <input type="password" id={`${id} -password`} />
      </label>
    </>
  );
}
export { PasswordFeild, Form };
