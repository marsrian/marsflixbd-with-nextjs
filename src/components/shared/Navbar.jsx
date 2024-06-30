"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { usePathname, usepathName } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import demoImage from "/public/img/demo_image.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const pathName = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  async function fetchUser() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/user/${session?.user?._id}`
      );

      const resData = await res.json();

      setUserData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [session?.user?._id]);

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

  const handleShowDropdown = () => setShowDropdown((prev) => true);
  const handleHideDropdown = () => setShowDropdown((prev) => false);

  return (
    <div
      className={`sticky top-0 z-10  ${
        isScrolled ? "bg-white dark:bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center justify-between shadow-md border-b-gray-400 px-4 py-2">
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
          {session?.user ? (
            <>
              <li>
                <Link
                  href="/dashboard/bangla-movie"
                  className={
                    pathName === "/dashboard/bangla-movie" ? "text-green-600 font-bold" : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <div className="relative">
                  <Image
                    onClick={handleShowDropdown}
                    src={
                      userData?.avatar?.url ? userData?.avatar?.url : demoImage
                    }
                    alt="avatar"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />

                  {showDropdown && (
                    <div className="absolute top-0 right-0 flex flex-col space-y-2 shadow-md p-5 bg-gray-500 rounded-sm">
                      <AiOutlineClose
                        onClick={handleHideDropdown}
                        className="w-full cursor-pointer hover:text-red-600"
                      />
                      <button
                        onClick={() => {
                          signOut();
                          handleHideDropdown();
                        }}
                        className="hover:text-green-600"
                      >
                        Logout
                      </button>
                      <Link
                        onClick={handleHideDropdown}
                        href={`/user/${session?.user?._id.toString()}`}
                        className="hover:text-green-600"
                      >
                        Profile
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className={
                    pathName === "/login" ? "text-green-600 font-bold" : ""
                  }
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className={
                    pathName === "/signup" ? "text-green-600 font-bold" : ""
                  }
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* For Mobile */}
        <div className="flex gap-2 items-center md:hidden">
          <ModeToggle />
          {isOpen ? (
            <button
              onClick={handleToggle}
              className="text-xl font-semibold text-green-600 border-0"
            >
              <FaAlignRight />
            </button>
          ) : (
            <>
              <div className="absolute top-[55px] w-60 left-0 h-[600px] p-4 bg-gray-800 text-white font-semibold text-lg duration-1000 md:hidden">
                <ul className="flex flex-col gap-3 mt-12">
                  <Link
                    href="/"
                    className={pathName === "/" ? "text-green-300" : ""}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    href="/bangla-movie"
                    className={
                      pathName === "/bangla-movie" ||
                      pathName.includes("bangla-movie/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Bangla Movie</li>
                  </Link>
                  <Link
                    href="/bollywood-movie"
                    className={
                      pathName === "/bollywood-movie" ||
                      pathName.includes("bollywood-movie/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Bollywood Movie</li>
                  </Link>
                  <Link
                    href="/hollywood-movie"
                    className={
                      pathName === "/bollywood-movie" ||
                      pathName.includes("hollywood-movie/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Hollywood Movie</li>
                  </Link>
                  {session?.user ? (
                    <>
                      <li>
                        <Link
                          href="/dashboard/bangla-movie"
                          className={
                            pathName === "/dashboard/bangla-movie"
                              ? "text-green-600 font-bold"
                              : ""
                          }
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <div className="">
                          <Image
                            onClick={handleShowDropdown}
                            src={
                              userData?.avatar?.url
                                ? userData?.avatar?.url
                                : demoImage
                            }
                            alt="avatar"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-10 h-10 rounded-full cursor-pointer"
                          />

                          {showDropdown && (
                            <div className="flex flex-col items-start space-y-1 shadow-md p-2 md:p-5">
                              <AiOutlineClose
                                onClick={handleHideDropdown}
                                className="w-full cursor-pointer"
                              />
                              <button
                                onClick={() => {
                                  signOut();
                                  handleHideDropdown();
                                }}
                              >
                                Logout
                              </button>
                              <Link
                                onClick={handleHideDropdown}
                                href={`/user/${session?.user?._id.toString()}`}
                              >
                                Profile
                              </Link>
                            </div>
                          )}
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          href="/login"
                          className={
                            pathName === "/login"
                              ? "text-green-600 font-bold"
                              : ""
                          }
                        >
                          Log In
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/signup"
                          className={
                            pathName === "/signup"
                              ? "text-green-600 font-bold"
                              : ""
                          }
                        >
                          Sign Up
                        </Link>
                      </li>
                    </>
                  )}
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
