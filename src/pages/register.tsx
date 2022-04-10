import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import FormAuth from "@/components/FormAuth";

const Register: NextPage = () => {
  return (
    <div className="container prose my-5">
      <Head>
        <title>Ibadah Tracker | Register</title>
      </Head>
      <h1 className="text-center">Ibadah Tracker</h1>
      <h4 className="text-center">Register</h4>
      <FormAuth type="register" />
    </div>
  );
};

export default Register;
