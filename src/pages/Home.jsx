import React from 'react'
import Navbar from '../components/Navbar'
import { Phone, ArrowRight, Contact } from "lucide-react";
import About from './About';
import Services from './Services';
import WhyChoose from './WhyChoose';
import WorkGallery from './WorkGallery';
import Contactp from './Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Home = () => {
  return (
     <>
      <Navbar />
      {/* <div className="pt-24 text-center">
        <h1 className="text-5xl font-bold">
          Noor Facilities
        </h1>
      </div> */}
         <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            Professional Facility Management Services
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            NOOR <span className="text-red-500">FACILITIES</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            We provide complete Facility Management Services for
            Residential, Commercial, Corporate Offices, Hospitals,
            Schools and Industrial Buildings with professional manpower
            and experienced staff.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+919999999999"
              className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-red-500">500+</h2>
              <p className="text-gray-300">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">100%</h2>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">24×7</h2>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=700"
            alt="Facility Management"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
    <FloatingButtons />
    <About />
    <Services />
    <WhyChoose />
    <WorkGallery />
    <Contactp />
    <Footer />

    </>
  )
}

export default Home