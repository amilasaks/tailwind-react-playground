import React, { useState } from "react";
import logo from "../src/assets/logo.svg";
import menu from "../src/assets/menu.svg";
import hero from "../src/assets/hero.jpg";
import "./App.css";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <header className="max-w-lg lg:max-w-7xl mx-auto lg:px-6 py-5 bg-white flex justify-between items-center">
        <img className="h-8" src={logo} alt="logo" />
        <nav className="hidden lg:flex">
          <ul className="inline-flex space-x-8 font-medium text-gray-600">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
        <img className="flex lg:hidden" src={menu} alt="" />
      </header>
      <div className="max-w-lg lg:max-w-7xl mx-auto lg:grid grid-cols-2 bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative block h-96 rounded-lg rounded-r-none overflow-hidden ">
          <img
            src={hero}
            alt=""
            className="lg:absolute w-full h-full object-cover inset-0 rounded-md lg:rounded-none shadow-xl"
          />
        </div>
        <div className="p-12 flex items-center justify-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
              You can work from anywhere.
              <span className="text-indigo-600 inline-block">
                Take advantage of it
              </span>
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cupiditate, harum voluptatibus ipsum, nisi placeat quo
              perspiciatis cumque alias veritatis vel voluptates amet. Facilis
              itaque fugit possimus quo perspiciatis quia.
            </p>
            <a
              href=""
              className="bg-indigo-700 px-6 py-3 inline-block mt-5 text-white uppercase tracking-wide font-semibold hover:bg-indigo-600 hover:-translate-y-1 transform transition  text-sm rounded-md shadow-xl"
            >
              Book your scape
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
