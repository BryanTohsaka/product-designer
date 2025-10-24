import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images dinámicamente (Vite)
const imagesMap = import.meta.glob("../../assets/slide/*.{jpg,jpeg,png,webp}", { eager: true });
const images = Object.values(imagesMap) as any[];

const SliderHashiri = () => {
    const swiperRef = useRef<any>(null);
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        if (swiperRef.current && loaded === images.length) {
            // Recalcula tamaños ahora que las imágenes cargaron
            swiperRef.current.update();
            // Asegura que quede en el primer slide (si estás en modo loop)
            try { swiperRef.current.slideToLoop(0, 0); } catch (e) { /* noop */ }
        }
    }, [loaded]);

    return (
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            observer={true}           /* importante */
            observeParents={true}     /* importante */
            onSwiper={(s) => { swiperRef.current = s; }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper p-36" /* nota abajo sobre p-36 */
        >
            {images.map((img: any, i: number) => (
                <SwiperSlide key={i} className="flex justify-center">
                    <img
                        src={img.default ?? img}
                        alt={`Slide ${i + 1}`}
                        className="h-auto max-h-screen object-contain mx-auto"
                        onLoad={() => setLoaded(s => s + 1)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderHashiri;