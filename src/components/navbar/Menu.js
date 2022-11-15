import clsx from "clsx";
import ImageComponent from "../shared/ImageComponent";

export const NavbarMenuItems = ({
  classname = "flex-row flex justify-end",
  items,
  onClick,
}) => {
  return (
    <div className={clsx("flex items-center", classname)}>
      {items.map((e, i) => {
        return (
          <a
            key={i}
            rel="noreferrer"
            href={e.link}
            target={e.newtab === true ? "_blank" : ""}
            onClick={onClick}
            className="w-full flex flex-row justify-between py-2 items-center"
          >
            <p className=" text-textTitle uppercase">{e.name}</p>
            <ImageComponent src={e.icon_src} />
          </a>
        );
      })}
    </div>
  );
};
