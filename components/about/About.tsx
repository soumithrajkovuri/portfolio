"use client";

import AboutContent from "./AboutContent";



export default function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
          Building Reliable Cloud Platforms
          </h2>
          <p className="mt-5 text-1xl font-semibold text-cyan-400 max-w-4xl">
           3+ years designing, automating, and operating
           cloud-native infrastructure on AWS.
           </p>

           <p className="mt-5 text-1xl font-semibold text-cyan-400 max-w-4xl">
           Building scalable, secure, and highly available cloud-native
           platforms through DevOps, Platform Engineering, and Automation.
           </p>

        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">

          <div className="space-y-10">

            <AboutContent />



          </div>



        </div>

      </div>
    </section>
  );
}