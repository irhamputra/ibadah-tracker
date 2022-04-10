import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import FormAuth from "@/components/FormAuth";

const Home: NextPage = () => {
  const { push } = useRouter();

  const handleRegister = React.useCallback(async () => {
    await push("/register");
  }, [push]);

  return (
    <div className="container prose my-5">
      <Head>
        <title>Ibadah Tracker | Login</title>
      </Head>

      <h1 className="text-center">Ibadah Tracker</h1>
      <h4 className="text-center">Login</h4>
      <FormAuth type="login" />

      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
        <div
          onClick={handleRegister}
          className="grid  h-10 card bg-base-300 rounded-box place-items-center"
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default Home;
