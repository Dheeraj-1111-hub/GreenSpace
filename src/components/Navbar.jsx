"use client"
import React from "react"
import { useState } from "react"
import { ChevronDown, Home, Building2, Building } from "lucide-react"
import leaf from '../assets/leaf.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900 backdrop-blur-sm border-b border-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src={leaf} alt="leaf"></img>
          <h1 className="text-3xl font-bold text-green-500">GreenSpace</h1>
        </a>
        {/*for desktop bruh.. */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-white hover:text-green-500"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              Solutions <ChevronDown className="h-4 w-4 active:rotate-180 hover:rotate-180" />
            </button>
            {isSolutionsOpen && (
              <div className="absolute top-full left- mt-2 w-56 rounded-lg bg-white py-1 shadow-lg ring-1 ring-green-500 ring-opacity-5">
                <a href="#" className="flex items-center gap-2 px-4 py-4 text-base text-black hover:bg-gray-100">
                  <Home className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 hover:text-green-500 font-medium">Home Gardens</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-4 text-base text-black hover:bg-gray-100">
                  <Building2 className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 hover:text-green-500 font-medium">Office Spaces</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-4 text-base text-black hover:bg-gray-100">
                  <Building className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 hover:text-green-500 font-medium">Commercial</span>
                </a>
              </div>
            )}
          </div>

          <a href="/about" className="text-white hover:text-green-500 font-base">
            About
          </a>
          <a href="/contact" className="text-white hover:text-green-500 font-base">
            Contact
          </a>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-md font-semibold text-white hover:bg-green-900 active:scale-90 hover:cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <div className="rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between">
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="mt-2 space-y-2">
                  <a href="#" className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-50">
                    <Home className="h-4 w-4 text-green-600" />
                    <span>Home Gardens</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-50">
                    <Building2 className="h-4 w-4 text-green-600" />
                    <span>Office Spaces</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-50">
                    <Building className="h-4 w-4 text-green-600" />
                    <span>Commercial</span>
                  </a>
                </div>
              </details>
            </div>
            <a
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <button className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-900">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

