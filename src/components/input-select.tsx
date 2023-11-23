import React, { ChangeEvent } from 'react';

interface SelectProps {
  options: string[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const CustomSelect: React.FC<SelectProps> = ({ options, value, onChange }) => {
  

  return (
    <select value={value} onChange={onChange}  className="w-full rounded-xl border-none bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2 py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
