import React, { useState } from "react";
import logo from "../src/assets/logo.svg";
import menu from "../src/assets/menu.svg";
import hero from "../src/assets/hero.jpg";
import Promo from "../src/assets/promo.jpg";
import destinations from "./assets/data";
import Destination from "./Components/Destination";
import "./App.css";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <header className="px-3 lg:max-w-7xl mx-auto xl:px-0 py-5 bg-white flex justify-between items-center">
        <img className="h-9" src={logo} alt="logo" />
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
      <div className="mx-2 max-w-full md:max-w-7xl xl:mx-auto lg:grid grid-cols-2 bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative block lg:h-96 rounded-lg rounded-r-none overflow-hidden ">
          <img
            src={hero}
            alt=""
            className="lg:absolute w-full h-full max-h-80 lg:max-h-full object-center object-cover inset-0 rounded-md lg:rounded-none shadow-xl"
          />
        </div>
        <div className="p-10 flex items-center justify-center">
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
            <a href="" className="btn btn-primary">
              Book your scape
            </a>
            <a href="" className="btn btn-secondary ml-2">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="mx-3  lg:max-w-7xl xl:mx-auto mt-14">
        <div className="flex flex-col mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-600 mb-1">
            Popular Destinations
          </h2>
          <p>
            A selection of greate work friendly cities with lots to see and
            explore
          </p>
        </div>
        <div className="mx-3 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
          {destinations.map((destination) => (
            <Destination destination={destination} />
          ))}
        </div>
        <div className="p-3 flex w-full h-72 relative flex-col items-center justify-center rounded-md overflow-hidden mt-10">
          <img
            src={Promo}
            alt=""
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-bl  from-indigo-600 to-indigo-800 bg-indigo-900 opacity-80"></div>
          <div className="z-10 text-center text-white">
            <p className="uppercase font-medium text-sm">HAVE QUESTIONS?</p>
            <h2 className="font-bold text-3xl mb-3">Get answers from Hosts</h2>
            <p>
              Join our next live webinar as hosts share their experiences and
              answer your questions.
            </p>
            <a className="btn btn-secondary border-none" href="">
              Contact us
            </a>
          </div>
        </div>
      </div>
      <p className="p-5 my-10 mb-0 text-center border border-t text-gray-500">© 2021 Workcation, Inc.</p>
    </div>
  );
}

export default App;
