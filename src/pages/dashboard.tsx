import { useAuthSignOut } from "@react-query-firebase/auth";
import { format } from "date-fns";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import FormSholat from "@/components/FormSholat";
import { auth } from "@/config/firebase";

const Dashboard: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showDetail, setShowDetail] = useState(false);
  const { replace } = useRouter();

  const { mutate: signOut, isSuccess } = useAuthSignOut(auth, {});

  useEffect(() => {
    if (isSuccess) {
      replace("/");
    }
  }, [isSuccess, replace]);

  return (
    <div className="container prose my-3">
      <Head>
        <title>Ibadah Tracker | App</title>
      </Head>
      <div className="flex justify-between">
        <h1 className="text-2xl text-center">Ibadah Tracker</h1>
        <button
          type="button"
          className="btn btn-accent btn-sm"
          onClick={() => signOut()}
        >
          Keluar
        </button>
      </div>
      <div className="text-center">{format(date, "MMMM yyy")}</div>

      <Calendar
        showNavigation={false}
        onChange={onChange}
        value={value}
        locale="id-ID"
        minDate={new Date()}
        onClickDay={(date) => {
          setDate(date);
          setShowDetail(true);
        }}
      />

      {showDetail && (
        <div className="mt-3">
          <div className="text-center">{format(date, "dd MMMM yyyy")}</div>
          <FormSholat date={date} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
