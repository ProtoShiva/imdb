"use client"

import Image from "next/image"
import React from "react"
import { RiSunFill } from "react-icons/ri"
import { BsMoonStarsFill } from "react-icons/bs"
import { FaComputer } from "react-icons/fa6"

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-teal-500">Home</a>
        <a className="btn btn-ghost text-xl text-teal-500">About</a>
      </div>
      <div className="flex-none">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <RiSunFill className="text-xl text-orange-500" />
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-info flex gap-2 items-center">
                <RiSunFill />
                Light
              </span>
              <span className="text-info flex gap-2 items-center">
                {" "}
                <BsMoonStarsFill />
                Dark
              </span>
              <span className="text-info flex gap-2 items-center">
                <FaComputer />
                System
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                width={50}
                height={50}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
