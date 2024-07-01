import BanglaMovieForm from "@/components/form/BanglaMovieForm";
import DashboardTabs from "@/components/shared/DashboardTabs";
import React from "react";

const BanglaMovies = () => {
  return (
    <div className="px-10 mt-4 md:mt-8">
      <DashboardTabs />
      <h1 className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Add Bangla Movie:
      </h1>
      <BanglaMovieForm />
    </div>
  );
};

export default BanglaMovies;
