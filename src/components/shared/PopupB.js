import { useEffect, useMemo } from "react";


const PopupB = ({ children, open, onClose }) => {
  const active = useMemo(() => open, [open]);
  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [active]);
  return (
    active && (
      <div className="w-screen h-screen flex justify-center items-center flex-col fixed top-0 left-0 px-3">
        <div
          onClick={onClose}
          className="bg-[#000000] h-full w-full bg-opacity-70 fixed top-0 left-0 z-100"
        />
        <div className="flex min-h-1/6 max-w-2xl bg-transparent z-[101]">
          {/* <div className="w-3 h-full bg-[#59B1B2] rounded-l-md" /> */}
          <div className="h-full w-full bg-gradient-to-b from-[#D9F0EC] to-[#EEF1D1] text-textTitle leading-5 px-6 py-6 rounded-xl text-left">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default PopupB;
