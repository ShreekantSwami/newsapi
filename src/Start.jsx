import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

function Start() {
  return (
    <div>
      <p className="text-6xl text-slate-500">Welcome to the news Portal!</p>
      <p className="text-2xl text-zinc-400">
        Lets go through some todays recent news!
        <Link
          to="/getNews"
          className="mx-3 p-2 bg-yellow-400 rounded-md text-slate-500 text-lg shadow-md shadow-yellow-700 hover:bg-yellow-700 hover:shadow-yellow-400 hover:text-white hover:scale-[0.9]"
        >
          Lets Go <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </p>
    </div>
  );
}

export default Start;
