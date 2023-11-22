'use client'
import React, { useState, useMemo } from 'react'
import { countries } from 'countries-list';

interface CountryOption {
  value: string;
  label: string;
}

interface InputSelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const InputSelect: React.FC<InputSelectProps> = ({ onChange }) => {
  
  const options: CountryOption[] = Object.entries(countries).map(([countryCode, country]) => ({
    value: countryCode,
    label: country.name,
  }));

  const [selectedValue, setSelectedValue] = useState<string>('') // Inicializar con el primer valor (o una opción predeterminada)



  return (
    <label>
      Seleciona tu pais
    <select
      onChange={onChange}
      className="w-full rounded-xl border-none bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2 py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="selectedFruit"
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
