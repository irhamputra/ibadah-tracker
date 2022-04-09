import * as React from "react";
import { useFormik } from "formik";
import listSholat from "../utils/listSholat";
import { SholatTime } from "../typings";

interface FormProps {
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = () => {
  const { values, handleChange, submitForm } = useFormik({
    initialValues: listSholat.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.name]: curr.value,
      };
    }, {}) as SholatTime,
    onSubmit: (values) => console.log({ values }),
  });

  const key = React.useId();

  return (
    <div className="form-control">
      {listSholat.map((value) => {
        return (
          <label key={key} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name={value.name}
              checked={values[value.name]}
              onChange={async (e) => {
                handleChange(e);
                await submitForm();
              }}
              className="checkbox"
            />
            <span className="ml-4">{value.name}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Form;
