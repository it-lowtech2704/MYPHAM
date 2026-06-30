import React from "react";
import { Leaf } from "lucide-react";

// Premium custom SVG icons
const IconCoconut = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 text-palma-teal">
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M42 35 C32 45 32 60 42 70 C52 80 67 80 77 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="60" cy="45" rx="16" ry="16" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="60" cy="45" r="10" fill="currentColor" opacity="0.15" />
    <path d="M26 62 C26 66 23 69 20 69 C17 69 14 66 14 62 C14 58 20 50 20 50 C20 50 26 58 26 62 Z" fill="currentColor" />
  </svg>
);

const IconAloe = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 text-palma-teal">
    <path d="M50 85 C50 85 30 65 35 40 C37 32 44 25 50 15 C56 25 63 32 65 40 C70 65 50 85 50 85 Z" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M50 85 V30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M35 48 C32 46 25 48 22 45 M33 58 C30 56 23 58 20 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M65 48 C68 46 75 48 78 45 M67 58 C70 56 77 58 80 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconTea = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 text-palma-teal">
    <path d="M25 75 Q45 70 70 45" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M45 60 C30 50 35 30 55 35 C65 37 60 55 45 60 Z" fill="none" stroke="currentColor" strokeWidth="3" fillRule="evenodd" />
    <path d="M47 50 Q38 42 42 38" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M60 48 C55 33 65 20 78 28 C85 32 75 50 60 48 Z" fill="none" stroke="currentColor" strokeWidth="3" fillRule="evenodd" />
    <path d="M67 39 Q65 30 71 27" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconBeaker = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 text-palma-teal">
    <path d="M35 25 H65 M40 25 V45 L25 80 H75 L60 45 V25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M30 70 H70" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="45" cy="58" r="3" fill="currentColor" />
    <circle cx="55" cy="62" r="2" fill="currentColor" />
    <circle cx="40" cy="65" r="2" fill="currentColor" />
  </svg>
);

const IconCitrus = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 text-palma-teal">
    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <path d="M50 20 V80 M20 50 H80 M29 29 L71 71 M29 71 L71 29" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="6" fill="currentColor" />
  </svg>
);

export function Ingredients() {
  return (
    <section id="ingredients" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-palma-teal-light/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-palma-cream/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-palma-teal"></span>
            <span className="text-xs font-bold uppercase text-palma-teal tracking-[0.2em]">Dưỡng chất tinh túy</span>
            <span className="h-px w-6 bg-palma-teal"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-palma-teal tracking-tight">
            5 Thành phần vàng chăm sóc tóc
          </h2>
          <p className="text-palma-charcoal/60 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Sự kết hợp hoàn hảo giữa y học tự nhiên và công nghệ hiện đại, loại bỏ hóa chất có hại.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 1. Dầu dừa ép lạnh - Core Hero Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-palma-cream to-white p-8 md:p-12 rounded-[3rem] border border-palma-teal/10 flex flex-col md:flex-row justify-between gap-8 card-shadow hover:border-palma-teal-medium/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-palma-teal-light/20 rounded-full blur-3xl group-hover:bg-palma-teal-medium/10 transition-all duration-500" />
            <div className="space-y-6 max-w-md relative z-10">
              <span className="text-[10px] font-bold text-palma-brown uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-palma-teal/5 shadow-sm inline-block">
                Thành phần cốt lõi
              </span>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-palma-teal">
                  Dầu dừa ép lạnh
                </h3>
                <p className="text-sm text-palma-charcoal/80 leading-relaxed font-medium">
                  Chứa nhiều axit lauric và vitamin E giúp dưỡng ẩm sâu, phục hồi tóc hư tổn từ gốc, mang lại độ bóng khỏe và ngăn ngừa rụng tóc hiệu quả.
                </p>
              </div>
              <div className="text-[11px] font-bold text-palma-brown-light flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5" />
                Giữ trọn 100% dưỡng chất tự nhiên từ dừa Việt Nam
              </div>
            </div>
            <div className="shrink-0 flex items-center justify-center relative z-10 md:pr-4">
              <div className="w-24 h-24 rounded-[2.5rem] bg-white flex items-center justify-center shadow-md border border-palma-teal/5 group-hover:scale-110 transition-transform duration-500">
                <IconCoconut />
              </div>
            </div>
            {/* Number Indicator */}
            <span className="absolute right-8 top-6 font-serif text-5xl font-extrabold text-palma-teal/5 select-none">
              01
            </span>
          </div>

          {/* 2. Nha đam - Medium Card */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[3rem] border border-palma-teal/5 card-shadow hover:border-palma-teal-medium/20 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[250px]">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-palma-teal-light/10 rounded-full blur-2xl" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-[1.8rem] bg-palma-cream/50 flex items-center justify-center border border-palma-teal/5 group-hover:scale-110 transition-transform duration-500">
                  <IconAloe />
                </div>
                <span className="font-serif text-4xl font-extrabold text-palma-teal/5 select-none">
                  02
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-palma-brown uppercase tracking-wider">
                  Cấp ẩm & làm dịu
                </span>
                <h3 className="font-serif text-xl font-bold text-palma-teal">
                  Chiết xuất nha đam
                </h3>
              </div>
              <p className="text-xs md:text-sm text-palma-charcoal/70 leading-relaxed font-medium">
                Làm dịu da đầu nhạy cảm, giảm tình trạng ngứa, gàu, bổ sung nước giúp sợi tóc luôn đàn hồi và hạn chế chẻ ngọn.
              </p>
            </div>
          </div>

          {/* 3. Trà xanh */}
          <div className="lg:col-span-4 bg-white p-8 md:p-10 rounded-[3rem] border border-palma-teal/5 card-shadow hover:border-palma-teal-medium/20 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[250px]">
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-[1.8rem] bg-palma-cream/50 flex items-center justify-center border border-palma-teal/5 group-hover:scale-110 transition-transform duration-500">
                  <IconTea />
                </div>
                <span className="font-serif text-4xl font-extrabold text-palma-teal/5 select-none">
                  03
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-palma-brown uppercase tracking-wider">
                  Chống oxy hóa
                </span>
                <h3 className="font-serif text-xl font-bold text-palma-teal">
                  Chiết xuất trà xanh
                </h3>
              </div>
              <p className="text-xs md:text-sm text-palma-charcoal/70 leading-relaxed font-medium">
                Kháng khuẩn tự nhiên cho da đầu, bảo vệ tóc trước tác nhân ô nhiễm môi trường, hỗ trợ nang tóc phát triển khỏe mạnh.
              </p>
            </div>
          </div>

          {/* 4. Vitamin B5 */}
          <div className="lg:col-span-4 bg-white p-8 md:p-10 rounded-[3rem] border border-palma-teal/5 card-shadow hover:border-palma-teal-medium/20 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[250px]">
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-[1.8rem] bg-palma-cream/50 flex items-center justify-center border border-palma-teal/5 group-hover:scale-110 transition-transform duration-500">
                  <IconBeaker />
                </div>
                <span className="font-serif text-4xl font-extrabold text-palma-teal/5 select-none">
                  04
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-palma-brown uppercase tracking-wider">
                  Nuôi dưỡng nang tóc
                </span>
                <h3 className="font-serif text-xl font-bold text-palma-teal">
                  Vitamin B5 (Panthenol)
                </h3>
              </div>
              <p className="text-xs md:text-sm text-palma-charcoal/70 leading-relaxed font-medium">
                Thấm sâu vào thân tóc làm dày sợi tóc, giảm thiểu tình trạng tóc gãy rụng do uốn nhuộm và tăng độ đàn hồi tự nhiên.
              </p>
            </div>
          </div>

          {/* 5. Tinh dầu bưởi */}
          <div className="lg:col-span-4 bg-white p-8 md:p-10 rounded-[3rem] border border-palma-teal/5 card-shadow hover:border-palma-teal-medium/20 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[250px]">
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-[1.8rem] bg-palma-cream/50 flex items-center justify-center border border-palma-teal/5 group-hover:scale-110 transition-transform duration-500">
                  <IconCitrus />
                </div>
                <span className="font-serif text-4xl font-extrabold text-palma-teal/5 select-none">
                  05
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-palma-brown uppercase tracking-wider">
                  Kích thích mọc tóc
                </span>
                <h3 className="font-serif text-xl font-bold text-palma-teal">
                  Tinh dầu bưởi
                </h3>
              </div>
              <p className="text-xs md:text-sm text-palma-charcoal/70 leading-relaxed font-medium">
                Mùi hương thanh mát thư giãn, lưu thông máu da đầu giúp nang tóc hấp thụ dinh dưỡng tốt hơn, nuôi dưỡng sợi tóc dày mượt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
