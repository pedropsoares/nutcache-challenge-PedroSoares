import { PropsWithChildren, SelectHTMLAttributes } from "react";

import "./styles.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = ({
  name,
  label,
  options,
  ...rest
}: PropsWithChildren<SelectProps>) => {
  return (
    <div className="select-block">
      <select value="" name={name} {...rest}>
        <option value="" disabled hidden>
          {name}
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
