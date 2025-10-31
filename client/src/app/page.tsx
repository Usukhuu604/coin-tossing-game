"use client";

import React from "react";
import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import { createUser } from "@/hooks/useCreateUser";

const Page = () => {
  const [userApproved, setUserApproved] = React.useState(false);
  const [input, setInput] = React.useState("");
  const { data, mutate } = useGetAllUsers();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await createUser({ userName: input });
      console.log({ newUser });
      mutate();
      setUserApproved(!userApproved);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.value;
    setInput(name);
  };

  if (!userApproved) {
    return (
      <form
        onSubmit={handleNext}
        className="w-screen h-screen flex justify-center items-center"
      >
        <label htmlFor="username">enter your username</label>
        <input
          id="username"
          type="text"
          className="border"
          onChange={handleChange}
          value={input}
        />
        <button type="submit" className="cursor-pointer bg-green-300">
          Enter
        </button>
      </form>
    );
  } else {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">All Users</h1>
        <div className="space-y-2">
          {data?.map((user: { userName: string; _id: string }) => (
            <div
              key={user._id}
              className="border p-3 rounded-md hover:bg-gray-50 transition"
            >
              <p className="font-semibold">{user.userName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Page;
