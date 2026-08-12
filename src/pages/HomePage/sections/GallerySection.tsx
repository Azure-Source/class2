import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_GALLERY_IMAGES } from '@/data/gallery';
import Image from '@/components/ui/image';

const CATEGORIES = ['全部', '集体活动', '运动会', '文艺汇演', '日常学习', '团建活动'] as const;
type Category = (typeof CATEGORIES)[number];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('全部');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === '全部') return MOCK_GALLERY_IMAGES;
    return MOCK_GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const lightboxImg =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
    );
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  return (
    <section id="gallery" className="w-full py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-10"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">班级相册</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            定格青春的每一个精彩瞬间，留下最珍贵的回忆
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4"
          >
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid mb-4 cursor-pointer group"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-border/30">
                  <Image
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-semibold">{img.title}</p>
                    <p className="text-xs opacity-80">{img.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute top-6 right-6 size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
              aria-label="关闭"
            >
              <X className="size-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
              aria-label="上一张"
            >
              <ChevronLeft className="size-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
              aria-label="下一张"
            >
              <ChevronRight className="size-6" />
            </button>

            <motion.div
              key={lightboxImg.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImg.imageUrl}
                alt={lightboxImg.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
              <div className="mt-4 text-white text-center">
                <h4 className="font-semibold text-lg">{lightboxImg.title}</h4>
                <p className="text-sm opacity-70">{lightboxImg.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
