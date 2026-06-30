import { Sparkles, Leaf } from "lucide-react";

export function BrandStory() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 md:px-12 bg-palma-cream relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Showcase (Images) */}
        <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white rotate-1 hover:rotate-0 transition-all duration-700">
          <img
            src="/images/sản phẩm và hộp.png"
            alt="Palma Organics sản phẩm và hộp"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-palma-teal-medium/10 text-palma-teal rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-palma-brown uppercase tracking-wider">Tinh chất</p>
              <p className="text-sm font-bold text-palma-charcoal">Đậm đặc tự nhiên</p>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-palma-teal"></span>
            <span className="text-xs font-bold uppercase text-palma-teal tracking-[0.2em]">Câu chuyện thương hiệu</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-palma-teal leading-tight tracking-tight">
            Nâng tầm giá trị dừa Việt từ tình yêu thiên nhiên
          </h2>

          <div className="space-y-4 text-palma-charcoal/80 text-sm md:text-base leading-relaxed font-medium">
            <p>
              Palma Organics được thành lập từ mong muốn mãnh liệt mang lại cho người tiêu dùng một giải pháp chăm sóc tóc an toàn, lành tính mà cực kỳ hiệu quả, chiết xuất từ nguồn nguyên liệu trù phú của quê hương Việt Nam.
            </p>
            <p>
              Trọng tâm của Palma Organics là ứng dụng công nghệ hiện đại kết hợp với **dầu dừa ép lạnh** nguyên bản - giữ lại nguyên vẹn hàm lượng vitamin E dồi dào, axit lauric cùng các dưỡng chất thiết yếu phục hồi sâu cấu trúc tóc hư tổn.
            </p>
            <p>
              Song song với việc mang lại vẻ đẹp tự nhiên cho mái tóc, chúng tôi luôn hướng đến giá trị nhân văn: Nâng cao giá trị của nông sản Việt Nam và cam kết phát triển bền vững, thân thiện với môi trường và động vật.
            </p>
          </div>

          {/* Key values list */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-palma-teal/10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-palma-teal-light text-palma-teal flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-palma-teal tracking-wide">Ép lạnh thủ công</h4>
                <p className="text-xs text-palma-charcoal/60 mt-0.5">Giữ 100% dưỡng chất tinh khiết</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-palma-teal-light text-palma-teal flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-palma-teal tracking-wide">Yêu thương động vật</h4>
                <p className="text-xs text-palma-charcoal/60 mt-0.5">Cam kết không thử nghiệm tàn nhẫn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
