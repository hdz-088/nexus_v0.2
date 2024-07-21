import React from "react";
import AppNavLink from "../../components/app_nav_link/AppNavLink";
import { headerLinksData } from "../../constants/linksData";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

export default function DesktopLinks() {
  const { isLogin } = useSelector((state) => state.app);

  return (
    <>
      {headerLinksData?.map((link, index) => (
        <div className=" relative group cursor-pointer " key={link?.title + index}>
          <h2 className=" uppercase font-semibold">{link?.title}</h2>
          <div className=" absolute group-hover:flex top-full left-0 w-72 divide-y divide-dotted z-50 hidden flex-col bg-white shadow-xl p-0.5  border  rounded-xl">
            {link?.children?.map((child, index) => (
              <AppNavLink link={child} className="p-1.5" key={index} />
            ))}
          </div>
        </div>
      ))}
      <AppNavLink className=" font-semibold py-1.5 text-sm bg-primary hover:scale-95 transition-all duration-200 ease-linear rounded-full px-4 text-white hover:text-white" link={{ title: "Question Paper Generator", path: "/question-paper-generator" }} />
      {isLogin ? (
        <button>
          <FaUserCircle className=" text-3xl text-slate-600" />
        </button>
      ) : (
        <AppNavLink className=" font-semibold p-3" link={{ title: "LOGIN", path: "/login" }} />
      )}
    </>
  );
}