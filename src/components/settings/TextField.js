const TextField = ({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  pattern,
}) => {
  return (
    <div className="my-4 md:my-8  w-full">
      <label className="text-sm font-medium text-[#aab1ae]" htmlFor={label}>
        {label}
      </label>
      <div className="flex items-center border-b-2 border-gray-300 py-2 w-full">
        <input
          id={label}
          className="appearance-none bg-transparent border-transparent w-full text-gray-700 font-medium mr-3 leading-tight focus:outline-none"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextField;
