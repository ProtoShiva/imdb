"use client"

import Image from "next/image"
import React from "react"
import { RiSunFill } from "react-icons/ri"
import { BsMoonStarsFill } from "react-icons/bs"
import { FaComputer } from "react-icons/fa6"
import Link from "next/link"

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="w-fit mx-2">
        <Image
          alt="Tailwind CSS Navbar component"
          src="/assets/movie-logo.jpeg"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-teal-500">
          Home
        </Link>
        <Link href="/about" className="btn btn-ghost text-xl text-teal-500">
          About
        </Link>
      </div>
      <div className="flex-none mx-2 gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <RiSunFill className="text-xl text-orange-500" />
            </div>
          </div>
        </div>
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  )
}
