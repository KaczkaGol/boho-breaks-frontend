import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Čeština
import { cs } from "date-fns/locale";
registerLocale("cs", cs);

const DateInput = ({value, onChange}) => {
  

  return (
    <div className="mb-3">
      <label htmlFor="datum" className="form-label">Termín</label>
      <DatePicker
        id="datum"
        selected={value}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        placeholderText="Vyber datum"
        locale="cs"
        minDate={new Date()} // zakáže výběr v minulosti
        className="form-control"
      />
    </div>
  );
};

export default DateInput;
