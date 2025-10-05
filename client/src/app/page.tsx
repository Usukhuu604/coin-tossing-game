"use client";

import React from "react";

const Page = () => {
  const [userApproved, setUserApproved] = React.useState(false);
  const handleNext = () => {
    setUserApproved(!userApproved);
  };
  if (!userApproved) {
    return (
      <form
        action="submit"
        className="w-screen h-screen flex justify-center items-center"
      >
        <input type="text" className="border" />
        <button
          type="submit"
          onClick={handleNext}
          className="cursor-pointer bg-green-300"
        >
          Enter
        </button>
      </form>
    );
  } else {
    return <>z</>;
  }
};

export default Page;
