import { ShieldAlert, Leaf, CheckCircle2, Heart } from "lucide-react";

export function USPSection() {
  const safetyClaims = [
    {
      title: "Không Sulfate",
      desc: "Chất tẩy rửa cực mạnh thường thấy trong dầu gội công nghiệp, gây bào mòn keratin và làm khô xơ sợi tóc.",
      icon: <ShieldAlert className="w-6 h-6 text-palma-teal" />,
    },
    {
      title: "Không Silicone",
      desc: "Tạo cảm giác mượt ảo, tích tụ lâu ngày làm bít tắc nang tóc, cản trở hấp thu dinh dưỡng và gây gãy rụng.",
      icon: <ShieldAlert className="w-6 h-6 text-palma-teal" />,
    },
    {
      title: "Không Paraben",
      desc: "Chất bảo quản độc hại gây mất cân bằng nội tiết tố và có khả năng kích ứng da đầu yếu nhạy cảm.",
      icon: <ShieldAlert className="w-6 h-6 text-palma-teal" />,
    },
  ];

  const qualityBadges = [
    {
      title: "Cruelty-Free",
      desc: "Hoàn toàn không thử nghiệm trên động vật trong toàn bộ chu kỳ phát triển sản phẩm.",
      icon: <Heart className="w-6 h-6 text-white" />,
    },
    {
      title: "Vegan Formula",
      desc: "Sử dụng 100% nguyên liệu chiết xuất thực vật, không chứa bất kỳ chế phẩm động vật nào.",
      icon: <Leaf className="w-6 h-6 text-white" />,
    },
    {
      title: "Dừa Ép Lạnh Việt Nam",
      desc: "Sử dụng nguồn nguyên liệu dừa bản địa thu hoạch tự nhiên tại Việt Nam, sản xuất chuẩn y tế.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="usp" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Cam kết 3 không */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-palma-teal"></span>
              <span className="text-xs font-bold uppercase text-palma-teal tracking-[0.2em]">Cam kết an toàn tuyệt đối</span>
              <span className="h-px w-6 bg-palma-teal"></span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-palma-teal tracking-tight leading-none">
              Tiêu chuẩn "3 KHÔNG" đột phá
            </h2>
            <p className="text-palma-charcoal/60 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Loại bỏ hoàn toàn các hóa chất độc hại gây tổn thương tóc lâu dài thường gặp ở sản phẩm công nghiệp thông thường.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyClaims.map((claim) => (
              <div
                key={claim.title}
                className="p-8 bg-palma-cream/40 rounded-[2.5rem] border border-palma-teal/5 flex gap-6 hover:border-palma-teal/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-palma-teal-light flex items-center justify-center shrink-0">
                  {claim.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-palma-teal leading-tight">
                    {claim.title}
                  </h3>
                  <p className="text-xs text-palma-charcoal/70 font-medium leading-relaxed">
                    {claim.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Chất lượng */}
        <div className="bg-palma-teal-dark rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-92 h-92 bg-palma-teal-medium/10 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:divide-x lg:divide-white/10">
            {qualityBadges.map((badge, idx) => (
              <div
                key={badge.title}
                className={`space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left ${
                  idx > 0 ? "lg:pl-12" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  {badge.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">{badge.title}</h3>
                  <p className="text-xs text-palma-teal-light/80 font-medium leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
