import React from "react";

const Select = ({ options, value, onChange, label }) => {
    return (
      <div className='inline-block relative w-full my-8'>
        <label className='text-sm font-medium text-[#aab1ae]' htmlFor={label}>
          {label}
        </label>
        <select
          id={label}
          className='block appearance-none w-full bg-transparent border-b-2 border-gray-300 border-transparent py-2 pr-8 leading-tight focus:outline-none text-gray-700 font-medium'
          value={value}
          onChange={onChange}
        >
          {options.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center px-2 text-[#aab1ae]'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>
    );
  };
  
  export default Select;