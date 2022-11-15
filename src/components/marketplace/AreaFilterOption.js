import { useRouter } from "next/router";
import { useState } from "react";

const AreaFilterOption = ({ title, color }) => {
  const router = useRouter();
  const [hovering, setHovering] = useState(false);

  const setQueryParam = (key, value) => {
    router.push({
      pathname: "/marketplace",
      query: { ...router.query, [key]: value },
    });
  };

  return (
    <button
      onClick={() => setQueryParam("area", title)}
      className={"rounded-md py-2 hover:" + color}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      style={{
        backgroundColor:
          router.query.area === title || hovering ? color : "white",
        color:
          router.query.area === title || hovering
            ? "black"
            : "rgb(156 163 175)",
      }}
    >
      {title}
    </button>
  );
};

export default AreaFilterOption;
