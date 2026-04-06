"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HIGHLIGHTS = [
  {
    id: "01",
    title: "Single-Origin Pilihan",
    desc: "Daun teh kami dipetik dengan tangan dari satu perkebunan spesifik di dataran tinggi. Hal ini memastikan konsistensi, karakter rasa yang kuat, dan jejak asal yang jelas dalam setiap cangkirnya."
  },
  {
    id: "02",
    title: "100% Ekstraksi Alami",
    desc: "Kami menolak segala bentuk kompromi. Tanpa perisa buatan, tanpa pewarna sintetik, dan tanpa pengawet. Warna dan aroma yang Anda nikmati murni berasal dari alam."
  },
  {
    id: "03",
    title: "Kemasan Eco-Conscious",
    desc: "Ketenangan Anda tidak harus mengorbankan bumi. Kantong teh kami ditenun dari serat tanaman yang sepenuhnya dapat terurai secara hayati (biodegradable) tanpa mikroplastik."
  }
];

export default function Highlights() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="w-full bg-[#0a0a0a] pt-24 pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">

        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6 justify-center md:justify-start"
            >
              <div className="w-12 h-[1px] bg-[#949E7A]" />
              <span className="text-[#949E7A] tracking-[0.3em] text-xs uppercase font-bold">
                Standar Kami
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl text-white font-bold tracking-tight"
            >
              KEMURNIAN <span className="font-serif italic font-light">Tanpa Kompromi.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-sm text-white/50 text-sm md:text-base font-light text-center md:text-right"
          >
            <p>Kualitas sebuah teh ditentukan dari apa yang tidak dimasukkan ke dalamnya. Kami menjaga semuanya tetap sederhana dan nyata.</p>
          </motion.div>
        </div>

        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden relative mb-24 bg-[#1a1a1a]">
          <motion.img
            style={{ y: imageY, scale: 1.1 }}
            src="/highlight.jpeg"
            alt="Macro shot of pure tea leaves"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1600x800/1a1a1a/ffffff?text=Cinematic+Tea+Leaves";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col border-t border-white/10 pt-8 relative group"
            >
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#949E7A] transition-all duration-500 group-hover:w-full" />

              <span className="text-6xl md:text-7xl font-serif font-light text-white/10 mb-6 group-hover:text-[#949E7A]/40 transition-colors duration-500">
                {item.id}
              </span>

              <h3 className="text-2xl text-white font-bold tracking-tight mb-4 group-hover:text-[#949E7A] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-white/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
