"use client"

import { useEffect, useState } from 'react';

import Quiz from '../cards/Quiz';
import { rosenImages } from '@/data/rosenApotheke/rosenApotheke';
import { getRosenImages } from '@/data/controller';



export default function MostClicked() {
    const images = getRosenImages();

    return (
        <div className="overflow-y-scroll max-h-80 w-full" style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E0 #27272A'}}>
            <ul className="flex flex-wrap gap-4 items-center justify-center">
                {images.map((image) => (
                    <Quiz key={image.label} image={image}/>
                ))}
            </ul>
        </div>
    );
}
