import {
  useAuthCreateUserWithEmailAndPassword,
  useAuthSignInWithEmailAndPassword,
} from "@react-query-firebase/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";

import { auth } from "@/config/firebase";

const FormAuth: React.FC<{ type: "login" | "register" }> = ({ type }) => {
  const { replace } = useRouter();
  const { mutateAsync: loginWithEmailAndPassword } =
    useAuthSignInWithEmailAndPassword(auth, {
      onError(error) {
        console.error({ error });
      },
    });

  const { mutateAsync: registerWithEmailAndPassword } =
    useAuthCreateUserWithEmailAndPassword(auth);

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      if (type === "register") {
        await registerWithEmailAndPassword({ password, email });
      }

      if (type === "login") {
        await loginWithEmailAndPassword({ email, password });
      }

      await replace("/dashboard");
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          value={values.email}
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full max-w-xs mb-5">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          required
          autoComplete="current-password"
          name="password"
          className="input input-bordered input-primary w-full max-w-xs"
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full max-w-xs btn-wide"
      >
        {type === "login" && "Masuk"}
        {type === "register" && "Daftar"}
      </button>
    </form>
  );
};

export default FormAuth;
