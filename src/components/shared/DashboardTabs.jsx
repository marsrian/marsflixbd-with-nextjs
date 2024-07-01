"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardTabs = () => {
  const pathName = usePathname();
  return (
    <div className="mb-8">
      <ul className="flex justify-center gap-8">
        <Link
          href="/dashboard/bangla-movie"
          className={
            pathName === "/dashboard/bangla-movie"
              ? "text-green-600 text-lg font-semibold"
              : " text-lg font-semibold"
          }
        >
          Bangla Movie
        </Link>
        <Link
          href="/dashboard/create-blog"
          className={
            pathName === "/dashboard/create-blog"
              ? "text-green-600 text-lg font-semibold"
              : " text-lg font-semibold"
          }
        >
          Blog
        </Link>
      </ul>
    </div>
  );
};

export default DashboardTabs;
