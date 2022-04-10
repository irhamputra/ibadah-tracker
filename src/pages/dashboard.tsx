import { format } from "date-fns";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Calendar from "react-calendar";

import FormSholat from "@/components/FormSholat";

const Dashboard: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="container prose my-3">
      <Head>
        <title>Ibadah Tracker | App</title>
      </Head>
      <h1 className="text-2xl text-center">Ibadah Tracker</h1>
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
