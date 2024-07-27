"use client"

import React from "react"
import { IoMdTrendingUp } from "react-icons/io"
import { TiStarFullOutline } from "react-icons/ti"
export default function Navbar() {
  return (
    <div className="flex justify-center mt-3">
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-1/2 justify-center gap-48">
        <li>
          <a className="text-xl font-bold">
            <IoMdTrendingUp className="text-red-500 text-2xl" />
            Trending
          </a>
        </li>
        <li>
          <a className="text-xl font-bold">
            <TiStarFullOutline className="text-yellow-500" />
            Top Rated
          </a>
        </li>
      </ul>
    </div>
  )
}
