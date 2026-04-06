"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 191;

const getFramePath = (index: number) => {
  return `/sequence/ChillTea_${index.toString().padStart(3, "0")}.webp`;
};

export default function ChillCanvas() {
  const [scrollY, setScrollY] = useState(0);
  const [isProductVisible, setIsProductVisible] = useState(false);
  const productSecRef = useRef<HTMLElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const beatARef = useRef<HTMLDivElement>(null);
  const beatBRef = useRef<HTMLDivElement>(null);
  const beatCRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const beatATitleRef = useRef<HTMLHeadingElement>(null);
  const beatATextRef = useRef<HTMLParagraphElement>(null);
  const beatBTitleRef = useRef<HTMLHeadingElement>(null);
  const beatBTextRef = useRef<HTMLParagraphElement>(null);
  const beatCTitleRef = useRef<HTMLHeadingElement>(null);
  const beatCTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProductVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (productSecRef.current) {
      observer.observe(productSecRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = images;
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawFrame(0);
          }
          initAnimations();
        }
      };
      images.push(img);
    }
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const initAnimations = () => {
    const ctx = gsap.context(() => {
      gsap.to(canvasRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const frame = Math.min(
              Math.floor(self.progress * (FRAME_COUNT - 1)),
              FRAME_COUNT - 1
            );
            drawFrame(frame);
          },
        },
      });

      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=15%",
          scrub: 0.5,
        },
      });

      gsap.to(heroRef.current, {
        opacity: 0,
        y: -80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=25%",
          scrub: 0.5,
        },
      });

      const beatATimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "15% top",
          end: "45% top",
          scrub: 0.8,
          toggleActions: "play reverse play reverse",
        }
      });

      beatATimeline.fromTo(beatARef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5 }
      );

      beatATimeline.to(beatARef.current, { duration: 0.3 });

      beatATimeline.to(beatARef.current,
        { opacity: 0, x: 60, duration: 0.5 }
      );

      gsap.fromTo(beatATitleRef.current,
        { letterSpacing: "0px", opacity: 0, y: 20 },
        {
          letterSpacing: "4px",
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "18% top",
            end: "35% top",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          }
        }
      );

      gsap.fromTo(beatATextRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "20% top",
            end: "38% top",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          }
        }
      );

      const beatBTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% top",
          end: "70% top",
          scrub: 0.8,
          toggleActions: "play reverse play reverse",
        }
      });

      beatBTimeline.fromTo(beatBRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
      beatBTimeline.to(beatBRef.current, { duration: 0.3 });
      beatBTimeline.to(beatBRef.current,
        { opacity: 0, x: -60, duration: 0.5 }
      );

      gsap.fromTo(beatBTitleRef.current,
        { letterSpacing: "0px", opacity: 0, scale: 0.9 },
        {
          letterSpacing: "6px",
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "43% top",
            end: "60% top",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          }
        }
      );

      gsap.fromTo(beatBTextRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "45% top",
            end: "62% top",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          }
        }
      );

      const beatCTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "65% top",
          end: "90% top",
          scrub: 0.8,
          toggleActions: "play reverse play reverse",
        }
      });

      beatCTimeline.fromTo(beatCRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
      beatCTimeline.to(beatCRef.current, { duration: 0.3 });
      beatCTimeline.to(beatCRef.current,
        { opacity: 0, y: -40, duration: 0.5 }
      );

      gsap.fromTo(beatCTitleRef.current,
        { letterSpacing: "-2px", opacity: 0, scale: 0.8 },
        {
          letterSpacing: "8px",
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "68% top",
            end: "82% top",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          }
        }
      );

      gsap.fromTo(beatCTextRef.current,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "70% top",
            end: "85% top",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mountainParallax = scrollY * 0.4;
  const textParallax = scrollY * 0.6;
  const textOpacity = Math.max(1 - scrollY / 400, 0);
  const hillsParallax = scrollY * -0.1;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-[#8FA082] text-white font-sans overflow-x-hidden selection:bg-white selection:text-[#8FA082]">
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#b1c2a3]">
          <img
            src="/png.png"
            alt="Mountains Background"
            className="absolute top-[0%] left-0 w-full h-[150%] object-cover z-0"
            style={{ transform: `translateY(${mountainParallax}px)` }}
          />

          <img
            src="/Landscape photography.png"
            alt="Green Hills Foreground"
            className="absolute bottom-[-10%] left-0 w-full h-[100%] object-cover z-20 "
            style={{
              transform: `translateY(${hillsParallax}px)`,
            }}
          />

          <img
            src="/grass png.png"
            alt="Hanging Vines"
            className="absolute top-0 left-0 w-full h-[100%] object-cover z-30  pointer-events-none"
          />

          <div
            className="relative z-40 flex flex-col items-center text-center px-4"
            style={{
              transform: `translateY(${textParallax}px)`,
              opacity: textOpacity
            }}
          >
            <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] uppercase text-white mb-4 drop-shadow-md">
              Memperkenalkan Varian Buah
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl leading-none">
              KESEGARAN <br /> ALAMI
            </h1>
            <p className="mt-8 text-lg md:text-2xl font-serif italic text-white/90 drop-shadow-md max-w-2xl">
              Perpaduan sempurna daun teh pilihan dan ekstrak buah asli untuk menyegarkan setiap harimu.
            </p>
            <div className="absolute -bottom-20 z-40 flex flex-col items-center animate-bounce">
              <span className="text-xs uppercase tracking-widest mb-2 font-bold opacity-100">Scroll</span>
              <ArrowDown className="w-5 h-5 opacity-100" />
            </div>
          </div>


          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#0a0a0a] z-50" />
        </section>
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-b from-transparent via-[#949E7A]/50 to-[#949E7A] z-50 pointer-events-none" />
      </div>

      <div ref={containerRef} className="relative w-full bg-[#0a0a0a]" style={{ height: "400vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />

          <div className="relative z-10 w-full h-full flex flex-col justify-center pointer-events-none">
            <div
              ref={scrollIndicatorRef}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 tracking-[0.3em] text-[10px] uppercase font-bold"
            >
              <div className="w-[1px] h-50 bg-gradient-to-b from-[#EAE0CC] to-transparent" />
            </div>

            <div
              ref={heroRef}
              className="absolute inset-y-0 left-0 right-0 flex flex-col items-center justify-center text-center px-6"
            >
              <h1 ref={heroTitleRef} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-none">
                CHILLTEA.
              </h1>
              <p className="text-xl md:text-3xl text-white/80 max-w-2xl font-light">
                Ketenangan dalam{" "}
                <span className="font-serif italic text-[#EAE0CC]">setiap sesapan.</span>
              </p>
            </div>

            <div
              ref={beatARef}
              className="absolute inset-y-0 left-[5%] lg:left-[8%] w-[90%] md:w-[45%] lg:w-[35%] flex flex-col justify-center items-start text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-[#EAE0CC]" />
                <span className="text-[#EAE0CC] tracking-[0.3em] text-[10px] uppercase font-bold">
                  Langkah Pertama
                </span>
              </div>
              <h2 ref={beatATitleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 w-full uppercase leading-[1.1]">
                Hentikan{" "}
                <span className="font-serif italic font-light text-[#EAE0CC] lowercase">
                  kebisingan.
                </span>
              </h2>
              <p ref={beatATextRef} className="text-lg md:text-xl xl:text-2xl text-white/90 w-full font-light leading-relaxed">
                Tiga menit. Air hangat. Nafas dalam. Cukup itu untuk menenangkan pikiran dari dunia yang bergerak terlalu cepat.
              </p>
            </div>

            <div
              ref={beatBRef}
              className="absolute inset-y-0 right-[5%] lg:right-[8%] w-[90%] md:w-[45%] lg:w-[35%] flex flex-col justify-center items-end text-right"
            >
              <div className="flex items-center gap-4 mb-4 justify-end w-full">
                <span className="text-[#EAE0CC] tracking-[0.3em] text-[10px] uppercase font-bold">
                  Sebuah Ritual
                </span>
                <div className="w-8 h-[1px] bg-[#EAE0CC]" />
              </div>
              <h2 ref={beatBTitleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 w-full uppercase leading-[1.1]">
                Damai di{" "}
                <br />
                <span className="font-serif italic font-light text-[#EAE0CC] lowercase">
                  setiap waktu.
                </span>
              </h2>
              <p ref={beatBTextRef} className="text-lg md:text-xl xl:text-2xl text-white/90 w-full font-light leading-relaxed">
                Sore yang keemasan. Malam yang sunyi. Setiap cangkir memberikan warna kedamaian yang berbeda.
              </p>
            </div>

            <div
              ref={beatCRef}
              className="absolute inset-y-0 left-0 right-0 flex flex-col items-center justify-center text-center px-6"
            >
              <h2 ref={beatCTitleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 uppercase leading-[1.1]">
                Rasakan{" "}
                <span className="font-serif italic font-light text-[#EAE0CC] lowercase">
                  tenangnya.
                </span>
              </h2>
              <p ref={beatCTextRef} className="text-xl md:text-3xl text-white/90 font-light max-w-2xl">
                Anda sudah tahu rasanya damai.
                <br />Sekarang, nikmatilah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}