import React, { useEffect } from "react";
import gsap from "gsap";

function ImageComponent({
  src,
  alt,
  className = "",
  onClick,
  loading = null,
  showBubbles = false,
}) {
  useEffect(() => {
    try {
      const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
      // t1.fromTo("#main-image", { y: "100vh" }, { y: 0, duration: 1.5 });
      t1.fromTo(
        [
          "#bubble1",
          "#bubble2",
          "#bubble3",
          "#bubble4",
          "#bubble5",
          "#bubble6",
        ],
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    } catch (e) {}
  }, []);

  const hoverTreeAnimation = () => {
    const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
    t1.to("#main-image", { rotateZ: 5, duration: 0.1 });
    t1.to("#main-image", { rotateZ: -5, duration: 0.1 });
    t1.to("#main-image", { rotateZ: 5, duration: 0.1 });
    t1.to("#main-image", { rotateZ: -5, duration: 0.1 });
    t1.to("#main-image", { rotateZ: 0, duration: 0.1 });
  };

  const bubblesClickAnimation = (id) => {
    const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
    t1.to(id, { y: -20, opacity: 0 });
    t1.to(id, { y: 0, opacity: 1, delay: 1 });
  };

  return showBubbles ? (
    <div className="relative">
      <img
        className="w-7 h-7 absolute top-2.5 right-1/3 sm:right-28 sm:top-0 xs:right-24 xs:top-0 opacity-0 "
        src="/assets/hero/leaf.svg"
        id="bubble2"
        alt="right-1"
        onClick={() => bubblesClickAnimation("#bubble2")}
      />
      <img
        className="w-7 h-7 absolute top-1/4 right-3.5 sm:right-10 xs:right-11 opacity-0 "
        src="/assets/hero/o2.svg"
        id="bubble3"
        alt="right-2"
        onClick={() => bubblesClickAnimation("#bubble3")}
      />
      <img
        className="w-7 h-7 absolute left-auto top-2/4 -right-6 opacity-0 "
        src="/assets/hero/leaf.svg"
        id="bubble6"
        alt="right-3"
        onClick={() => bubblesClickAnimation("#bubble6")}
      />
      <img
        className="w-7 h-7 absolute top-3 left-1/3 sm:left-28 xs:left-24 opacity-0 "
        src="/assets/hero/o2.svg"
        id="bubble1"
        alt="left-1"
        onClick={() => bubblesClickAnimation("#bubble1")}
      />
      <img
        className="w-7 h-7 absolute left-10 top-1/3 sm:left-12 xs:left-10 opacity-0 "
        src="/assets/hero/leaf.svg"
        id="bubble5"
        alt="left-2"
        onClick={() => bubblesClickAnimation("#bubble5")}
      />
      <img
        className="w-7 h-7 absolute -left-8 top-2/4 opacity-0 "
        src="/assets/hero/o2.svg"
        id="bubble4"
        alt="left-3"
        onClick={() => bubblesClickAnimation("#bubble4")}
      />
      <img
        src={src}
        alt={alt}
        className={`${className} z-10`}
        // className={`${className} translate-y-full  z-10`}
        onClick={onClick}
        id="main-image"
        loading={loading}
      />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading={loading}
    />
  );
}

export default ImageComponent;
