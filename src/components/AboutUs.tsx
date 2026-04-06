"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#949E7A] py-32 px-6 md:px-12 overflow-hidden flex items-center">

      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none opacity-5">
        <h2 className="text-[20vw] font-bold text-white tracking-tighter whitespace-nowrap">
          THE SOUL
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />

              <img
                src="/logoabu.jpg"
                alt="Profile ChillTea"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x1000/1a1a1a/ffffff?text=Profile+Image";
                }}
              />

              <div className="absolute bottom-6 left-6 z-20">
                <span className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white uppercase tracking-[0.2em] font-medium border border-white/10">
                  Est. 2024
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="w-full lg:w-7/12 flex flex-col justify-center"
          >
            <motion.div variants={textVariants} className="mb-6 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#949E7A]" />
              <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
                Kisah Kami
              </span>
            </motion.div>

            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-8"
            >
              Menyeduh jeda di tengah <br className="hidden md:block" />
              <span className="italic font-serif font-light text-white/80">hiruk-pikuk dunia.</span>
            </motion.h2>

            <motion.div variants={textVariants} className="space-y-6 text-white/60 text-lg leading-relaxed max-w-2xl font-light">
              <p>
                ChillTea lahir dari sebuah pencarian sederhana yang sering terlupakan: <strong className="text-white font-medium">kebutuhan untuk berhenti sejenak</strong>. Kami percaya bahwa secangkir teh bukanlah sekadar minuman penawar dahaga, melainkan sebuah ritual kecil untuk kembali terhubung dengan diri sendiri.
              </p>
              <p>
                Kami berkeliling menyusuri kebun-kebun teh keluarga yang menjaga tradisi secara turun-temurun, memastikan bahwa setiap daun yang Anda seduh dipetik dengan rasa hormat terhadap alam.
              </p>
              <p>
                Tidak ada perisa buatan, tidak ada jalan pintas. Hanya Anda, air hangat, dan ketenangan yang sesungguhnya.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="mt-12 pt-12 border-t border-white/10">
              <p className="text-xl md:text-2xl font-serif italic text-white/90">
                "Tiga menit yang Anda luangkan untuk menyeduh, adalah tiga menit untuk menyelamatkan jiwa Anda dari kebisingan."
              </p>
              <p className="mt-4 text-[#949E7A] text-sm tracking-widest uppercase font-bold">
                — Founder, ChillTea
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
