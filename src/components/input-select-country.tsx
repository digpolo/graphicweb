'use client'
import React from 'react';
import { countries } from 'countries-list';

interface CountryOption {
  value: string;
  label: string;
}

interface InputSelectProps {
  label: string;
  name: string;
  value: string;
  options?: CountryOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const InputSelect: React.FC<InputSelectProps> = ({ label = 'Selecciona tu país', name = 'selectedFruit', value = '', options: propOptions, onChange }) => {
  const options: CountryOption[] = propOptions || Object.entries(countries).map(([countryCode, country]) => ({
    value: countryCode,
    label: country.name,
  }));

  return (
    <label>
      {label}
      <select
        onChange={onChange}
        value={value}
        className="w-full rounded-xl border-none bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2 py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default InputSelect;
