"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactLocation() {
  return (
    <section className="relative w-full h-[100svh] bg-[#0a0a0a] overflow-hidden flex flex-col justify-between">

      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-tea-into-a-glass-cup-41851-large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-20 pt-32">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-8 mb-16">

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#949E7A]" />
              <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
                Kunjungi Kami
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter uppercase leading-[0.9]"
            >
              Temukan <br />
              <span className="font-serif italic font-light text-white/90 lowercase">ketenanganmu.</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500"
            >
              <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Tea House</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Jl. Senopati No. 88,<br />
                Kebayoran Baru, Jakarta Selatan<br />
                12190
              </p>
              <div className="pt-6 border-t border-white/10">
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">Jam Operasional</span>
                <span className="text-white font-medium">Setiap Hari | 08.00 - 22.00</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Hubungi Kami</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/70 hover:text-[#949E7A] transition-colors font-light flex items-center gap-3">
                      <span className="text-xl">✆</span> +62 811-2233-4455
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-[#949E7A] transition-colors font-light flex items-center gap-3">
                      <span className="text-xl">✉</span> hello@chilltea.id
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-[#949E7A] transition-colors font-light flex items-center gap-3">
                      <span className="text-xl">@</span> chilltea.id
                    </a>
                  </li>
                </ul>
              </div>

              <a href="#" className="mt-8 inline-flex items-center justify-center w-full py-3 rounded-full border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                Buka di Maps
              </a>
            </motion.div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-xs uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} ChillTea. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/Tuknwm/tuknwm-chilltea" className="hover:text-white transition-colors">Github</a>
            <a>|</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
