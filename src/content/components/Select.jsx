// src/components/Select.js
import React from "react";

const Select = ({
  title,
  label,
  options,
  value,
  onChange,
  multiple = false,
}) => {
  return (
    <div className="select-panel">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) =>
          multiple
            ? onChange(
                [...e.target.selectedOptions].map((option) => option.value)
              )
            : onChange(e.target.value)
        }
        multiple={multiple}
      >
        {(title && <option value={0}>{title}</option>) || (
          <option value={0}>Please, select any options</option>
        )}

        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
