"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { getIntroImages, getSoftwareDevImages } from '@/data/controller';

export default function SoftwareDevelopmentSolutions() {
    const images = getSoftwareDevImages();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative w-full h-72 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={`/assets/softwareDevelopment/${image.picturePath}`}
                        alt={image.label}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            ))}
        </div>
    );
}
