import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  // const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={uuidv4()}>
          <div className="px-3 text-center cursor-pointer group">
            <h1
              className="py-5 flex gap-5 justify-center items-center md:pr-0 pr-4  text-[14px] md:text-white/70"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span className=" md:mt-1 md:ml-2 inline md:hidden">
                {heading === link.name ? (
                  <FaChevronUp size={15} />
                ) : (
                  <FaChevronDown size={15} />
                )}
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-15 hidden group-hover:md:block hover:md:block">
                  {/* <div className="py-2.5"></div> */}
                  <div className="bg-white p-4 rounded-lg">
                    {link.sublinks.map((mysublinks) => {
                      return (
                        <div key={uuidv4()}>
                          {mysublinks.sublink.map((slink) => (
                            <li
                              key={uuidv4()}
                              className="text-sm text-gray-600 my-2.5"
                            >
                              <Link
                                to={slink.name}
                                className="hover:text-blue-600"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => {
              return (
                <div key={uuidv4()}>
                  <div className="flex text-center  justify-center bg-gray-200 items-center">
                    <div
                      className={`${
                        heading === link.name ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li
                          key={uuidv4()}
                          className="py-3 text-gray-600 hover:text-blue-600"
                        >
                          <Link to={slink.link}>{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
