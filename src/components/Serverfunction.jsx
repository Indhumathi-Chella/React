"use client ";

import { useActionState } from "react";
import updateName from "./action";

function UpdateName() {
  const [name, formAction, isPending] = useActionState(updateName, {
    error: null,
    success: false,
  });
  return (
    <>
      <form action={formAction}>
        <p>Enter your name</p>
        <input
          type="text"
          name="name"
          disabled={isPending}
          placeholder="Enter your name.."
        />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
        {isPending && <p>Loading...</p>}
        {name.error && (
          <p style={{ color: "red", padding: 5, margin: 5 }}>{name.error}</p>
        )}
        {name.success && (
          <p style={{ color: "green", padding: 5, margin: 5 }}>Name Updated</p>
        )}
      </form>
    </>
  );
}

export { UpdateName };
