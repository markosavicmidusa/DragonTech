"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { getBackgroundImages } from '@/data/controller';

export default function RandomPicturesBlock() {
    const images = getBackgroundImages(); // Fetch your background images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={`/assets/${image.picturePath}`} // Replace with your image URL
                        alt={image.label}
                        layout="fill" // Makes the image cover the parent container
                        objectFit="cover" // Ensures the image covers the container without distortion
                    />
                </div>
            ))}
        </div>
    );
}
