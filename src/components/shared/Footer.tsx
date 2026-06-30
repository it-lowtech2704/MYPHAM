import { Phone, MapPin, Mail, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-palma-teal-dark text-white pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-palma-teal-medium/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-palma-brown/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10 border-b border-white/10 pb-16">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-6">
          <Logo isSolid={false} />
          <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
            Mang đến giải pháp chăm sóc tóc an toàn, lành tính với thành phần cốt lõi từ Dầu dừa ép lạnh Việt Nam. Đồng hành cùng bạn trên hành trình nuôi dưỡng mái tóc khỏe đẹp bền vững.
          </p>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Khám phá</h4>
          <ul className="space-y-4 font-medium text-sm text-white/80">
            <li>
              <a href="#home" className="hover:text-palma-teal-light transition-colors">Trang chủ</a>
            </li>
            <li>
              <a href="#story" className="hover:text-palma-teal-light transition-colors">Câu chuyện thương hiệu</a>
            </li>
            <li>
              <a href="#ingredients" className="hover:text-palma-teal-light transition-colors">Thành phần tự nhiên</a>
            </li>
            <li>
              <a href="#products" className="hover:text-palma-teal-light transition-colors">Sản phẩm chính</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Thông tin liên hệ</h4>
          <div className="space-y-4">
            <a href="tel:0933767823" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-palma-teal-dark transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none">Hotline tư vấn</p>
                <p className="text-base font-bold text-white mt-1">0933.767.823</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none">Khu vực phân phối</p>
                <p className="text-base font-bold text-white mt-1">Đảo Phú Quý, Bình Thuận, Việt Nam</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none">Email</p>
                <p className="text-base font-bold text-white mt-1">contact@palmaorganics.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-medium">
        <p className="italic">"Nuôi dưỡng mái tóc từ gốc dừa Việt Nam"</p>
        <p>© 2026 Palma Organics. All rights reserved.</p>
      </div>
    </footer>
  );
}
