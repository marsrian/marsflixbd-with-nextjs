"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sticky top-0 z-10  ${
        isScrolled ? "bg-white dark:bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center justify-between border-b border-b-gray-400 px-4 py-2">
        <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
          MarsFlixBD
        </h3>
        <ul className="hidden md:flex flex-col md:flex-row items-center gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/bangla-movie">Bangla Movie</Link>
          </li>
          <li>
            <Link href="/bollywood-movie">Bollywood Movie</Link>
          </li>
          <li>
            <Link href="/hollywood-movie">Hollywood Movie</Link>
          </li>
          <li>
            <Link href="/dashboard/bangla-movie">Dashboard</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* For Mobile */}
        <div className="flex md:hidden">
          {isOpen ? (
            <button
              onClick={handleToggle}
              className="text-xl font-semibold text-green-600 border-0"
            >
              <FaAlignRight />
            </button>
          ) : (
            <>
              <div className="absolute top-[44px] w-60 left-0 h-[600px] p-4 bg-gray-800 text-white font-semibold text-lg duration-1000 md:hidden">
                <ul className="flex flex-col gap-3 mt-12">
                  <Link
                    href="/"
                    className={pathName === "/" ? "text-green-300" : ""}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    href="/games"
                    className={
                      pathName === "/games" || pathName.includes("games/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Games</li>
                  </Link>
                  <Link
                    href="/blog"
                    className={
                      pathName === "/blog" || pathName.includes("blog/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Blog</li>
                  </Link>
                  {/* {data.admin === true && (
                    <Link
                      href="/dashboard/category"
                      className={
                        pathName.includes("dashboard") ? "text-green-300" : ""
                      }
                    >
                      <li>Dashboard</li>
                    </Link>
                  )} */}
                </ul>
                {/* <div className="block md:hidden mt-6">
                {status === "authenticated" && (
                  <div className="flex flex-col gap-3">
                    <Link href="/profile" className="whitespace-nowrap">
                      {userName}
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="bg-green-600 rounded-full text-white px-8 py-2"
                    >
                      Logout
                    </button>
                  </div>
                )}
                {status === "unauthenticated" && (
                  <>
                    <Link
                      href="/login"
                      className={pathName === "/login" ? "text-green-300" : ""}
                    >
                      Login
                    </Link>
                  </>
                )}
              </div> */}
              </div>
              <button
                onClick={handleToggle}
                className="text-xl font-semibold text-green-600 border-0"
              >
                <FaTimes />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
