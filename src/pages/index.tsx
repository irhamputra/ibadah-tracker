import { useAuthUser } from "@react-query-firebase/auth";
import { useFormik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { auth } from "../config/firebase";

const Home: NextPage = () => {
  const { replace } = useRouter();
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log({ values }),
  });
  const user = useAuthUser(["user"], auth);

  React.useEffect(() => {
    if (user.data) {
      replace("/dashboard");
    }
  }, [replace, user.data]);

  if (user.isLoading) {
    return <div />;
  }

  return (
    <div className="container prose my-5">
      <Head>
        <title>Ibadah Tracker | Login</title>
      </Head>

      <h1 className="text-center">Ibadah Tracker</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            required
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
