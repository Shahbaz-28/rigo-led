'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, title, description, src, link, color, progress, range, targetScale }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[70vh] md:h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{
          backgroundColor: color, 
          scale, 
          top: `calc(-5vh + ${i * 25}px)`
        }} 
        className="flex flex-col relative -top-1/4 h-[390px] sm:h-[450px] md:h-[480px] lg:h-[520px] w-[90vw] sm:w-[80vw] md:w-[90vw] lg:w-[1000px] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] origin-top"
      >
        <h2 className="text-center m-0 text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-white leading-tight">{title}</h2>
        <div className="flex flex-col lg:flex-row h-full mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]">
          <div className="w-full lg:w-[40%] relative lg:top-[10%] order-2 lg:order-1">
            <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white leading-relaxed">
              <span className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold">{description.charAt(0)}</span>
              {description.slice(1)}
            </p>
            <span className="flex items-center gap-[5px] mt-3 sm:mt-4">
              <Link 
                href={link}
                className="text-[10px] sm:text-[11px] lg:text-[12px] underline cursor-pointer text-white hover:text-gray-200 transition-colors"
              >
                See more
              </Link>
              <svg width="18" height="10" className="sm:w-[20px] sm:h-[11px] lg:w-[22px] lg:h-[12px]" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white"/>
              </svg>
            </span>
          </div>

          <div className="relative w-full lg:w-[60%] h-[150px] sm:h-[180px] md:h-[200px] lg:h-full rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] overflow-hidden order-1 lg:order-2">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                alt={title}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
