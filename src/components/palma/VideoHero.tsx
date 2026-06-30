"use client";

import { Play, ArrowDown, Leaf } from "lucide-react";

export function VideoHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/showcase.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video HTML5.
        </video>
        {/* Dark subtle overlay for premium readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-palma-cream/90 via-transparent to-black/30 z-15" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-20 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] border border-white/20">
          <Leaf className="w-4 h-4 text-white animate-pulse" />
          100% Nguyên liệu thiên nhiên
        </div>

        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.15]">
          Dầu Gội Dừa <br />
          <span className="italic text-palma-teal-light">Thiên Nhiên</span>
        </h1>

        <p className="text-white/95 text-base md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Chăm sóc tóc chuyên sâu từ dầu dừa ép lạnh Việt Nam. Nuôi dưỡng mái tóc mềm mượt, chắc khỏe tự nhiên từ gốc đến ngọn mà không lo hóa chất gây hại.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#products"
            className="px-8 py-4 bg-white text-palma-teal font-bold uppercase text-xs tracking-widest rounded-full hover:bg-palma-teal hover:text-white hover:scale-105 shadow-xl transition-all duration-300"
          >
            Khám phá sản phẩm
          </a>
          <a
            href="#story"
            className="px-8 py-4 bg-transparent text-white border border-white/30 hover:border-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Tìm hiểu câu chuyện
          </a>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-bold text-palma-teal uppercase tracking-widest">
          Cuộn xuống
        </span>
        <ArrowDown className="text-palma-teal w-4 h-4" />
      </div>
    </section>
  );
}
