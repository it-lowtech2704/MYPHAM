"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"250" | "500">("250");

  const products = {
    "250": {
      name: "Dầu Gội Dừa Thiên Nhiên 250ml",
      tagline: "Tiện lợi cho trải nghiệm cá nhân & du lịch",
      desc: "Phiên bản dung tích 250ml nhỏ gọn thích hợp cho người dùng bắt đầu làm quen với dòng sản phẩm tự nhiên hoặc mang đi công tác, du lịch xa nhà.",
      img: "/images/chai 250ml .png",
      specs: [
        { key: "Tên sản phẩm", value: "Dầu gội dừa thiên nhiên Palma Organics" },
        { key: "Dung tích", value: "250ml (Nắp bật tiện lợi)" },
        { key: "Loại tóc", value: "Mọi loại tóc, tóc khô sơ, hư tổn" },
        { key: "Xuất xứ", value: "Việt Nam" },
        { key: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
      ],
    },
    "500": {
      name: "Dầu Gội Dừa Thiên Nhiên 500ml",
      tagline: "Vòi pump tiện dụng cho cả gia đình",
      desc: "Phiên bản dung tích 500ml kinh tế đáp ứng nhu cầu chăm sóc tóc thường ngày lâu dài của cá nhân hoặc các thành viên trong gia đình.",
      img: "/images/Chai 500ml.png",
      specs: [
        { key: "Tên sản phẩm", value: "Dầu gội dừa thiên nhiên Palma Organics" },
        { key: "Dung tích", value: "500ml (Vòi pump tiện dụng)" },
        { key: "Loại tóc", value: "Mọi loại tóc, tóc gãy rụng, da đầu yếu" },
        { key: "Xuất xứ", value: "Việt Nam" },
        { key: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
      ],
    },
  };

  const product = products[activeTab];

  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-12 bg-palma-cream/50 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-palma-teal"></span>
            <span className="text-xs font-bold uppercase text-palma-teal tracking-[0.2em]">Các phiên bản đóng gói</span>
            <span className="h-px w-6 bg-palma-teal"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-palma-teal tracking-tight leading-none">
            Khám phá quy cách đóng gói
          </h2>
          <p className="text-palma-charcoal/60 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Chọn lựa phiên bản phù hợp nhất với nhu cầu sử dụng thực tế của bạn và gia đình.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("250")}
            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm ${
              activeTab === "250"
                ? "bg-palma-teal text-white shadow-palma-teal/20"
                : "bg-white text-palma-teal border border-palma-teal/10 hover:bg-palma-teal/5"
            }`}
          >
            Phiên bản 250ml
          </button>
          <button
            onClick={() => setActiveTab("500")}
            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm ${
              activeTab === "500"
                ? "bg-palma-teal text-white shadow-palma-teal/20"
                : "bg-white text-palma-teal border border-palma-teal/10 hover:bg-palma-teal/5"
            }`}
          >
            Phiên bản 500ml
          </button>
        </div>

        {/* Product Details Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-white p-8 md:p-16 rounded-[3rem] border border-palma-teal/5 card-shadow">
          {/* Product Image */}
          <div className="lg:col-span-5 flex justify-center relative group">
            <div className="absolute inset-0 bg-palma-teal-light/20 rounded-full filter blur-2xl opacity-40 scale-75 group-hover:scale-90 transition-transform duration-700" />
            <img
              src={product.img}
              alt={product.name}
              className="relative z-10 max-h-[400px] object-contain drop-shadow-2xl transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-palma-brown uppercase tracking-widest bg-palma-cream px-3.5 py-1.5 rounded-full inline-block">
                {product.tagline}
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-palma-teal leading-tight">
                {product.name}
              </h3>
              <p className="text-palma-charcoal/80 text-sm md:text-base font-medium leading-relaxed">
                {product.desc}
              </p>
            </div>

            {/* Specifications Table */}
            <div className="border-t border-b border-palma-teal/10 divide-y divide-palma-teal/5 py-4">
              {product.specs.map((spec) => (
                <div key={spec.key} className="grid grid-cols-3 py-3 text-xs md:text-sm font-medium">
                  <span className="text-palma-charcoal/50 font-bold uppercase tracking-wider text-[10px] md:text-xs">
                    {spec.key}
                  </span>
                  <span className="col-span-2 text-palma-charcoal/90">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Order/CTA Box */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-palma-teal text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-palma-teal-medium hover:scale-105 transition-all duration-300 shadow-md shadow-palma-teal/10"
              >
                Đặt hàng trực tiếp
              </a>
              <span className="text-[11px] font-bold text-palma-charcoal/50 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Đảm bảo hàng chính hãng 100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
