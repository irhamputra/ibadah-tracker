import type { NextPage } from "next";
import { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import FormSholat from "../components/Form";

const Home: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="container prose my-3">
      <h1 className="text-2xl text-center">Ibadah Tracker</h1>
      <div className="text-center">{format(date, "MMMM yyy")}</div>

      <Calendar
        showNavigation={false}
        onChange={onChange}
        value={value}
        locale="id-ID"
        minDate={new Date()}
        onClickDay={(value) => {
          setDate(value);
          setShowDetail(true);
        }}
      />

      {showDetail && (
        <div className="mt-3">
          <div className="text-center">{format(date, "dd MMMM yyyy")}</div>
          <div>Detail Ibadah</div>
          <FormSholat />
        </div>
      )}
    </div>
  );
};

export default Home;
