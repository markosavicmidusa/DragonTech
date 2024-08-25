"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getCommercials } from "@/data/controller";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Model, Document } from "mongoose";

import QuizMetadataModel, { IQuizMetadata } from "@/lib/models/quiz_metadata.model";
import RandomPicturesBlock from "../forms/RandomPicturesBlock";
import RecentlyAdded from "../forms/RecentlyAdded";
import MostClicked from "../forms/MostClicked";
import MostFinished from "../forms/MostFinished";
import SoftwareDevelopmentSolutions from "../forms/SoftwareDevelopmentSolutions";
import Gaming from "../forms/Gaming";

export default function MainContent() {
 
 
  return (
    <div className="flex flex-col flex-grow w-full ">
      
      <div className="flex flex-col flex-wrap items-center w-full p-5 shadow-md hover:shadow-lg rounded-lg ">
         <h3 className="text-xl font-bold mb-4 ">TRANSFORM YOUR REALITY</h3>
         <RandomPicturesBlock />
      </div>

      {/* Block 2: VR PROJECTS block */}
      <div className="flex flex-col flex-wrap items-center w-full p-5 mt-10 shadow-md hover:shadow-lg rounded-lg ">
          <Link href="https://rosenapo-online.de/" className="flex flex-col items-center ">
            <h3 className="text-xl font-bold mb-4"> VR PROJECTS</h3>
            <h3 className="text-md font-bolds">ROSEN PHARMACY</h3>
            <h3 className="text-md font-bold mb-4">Waldkreiburg, Germany</h3>
            <MostClicked/>
          </Link>
      </div>

      {/* Block 3: VIDEO tour block */}
      <div className="flex flex-col flex-wrap items-center w-full p-5 mt-10 shadow-md hover:shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">TAKE A TOUR THROUGH ROSEN PHARMACY - VIDEO</h3>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/exoBUB9TcdY" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* Block 4.1: Software Development */}         
      <div className="flex flex-col flex-wrap items-center w-full p-5 mt-10 shadow-md hover:shadow-lg rounded-lg sm:p-3 sm:mt-6 md:p-4 md:mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">SOFTWARE DEVELOPMENT SOLUTIONS</h3>
        <SoftwareDevelopmentSolutions/>
      </div>

      {/* Block 4.2: Software Development */}         
      <div className="flex flex-col flex-wrap items-center w-full p-5 mt-10 shadow-md hover:shadow-lg rounded-lg sm:p-3 sm:mt-6 md:p-4 md:mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">GAMING</h3>
        <Gaming />
      </div>

      {/* Block 4.3: Marketing Block */}         
      <div className="flex flex-col flex-wrap items-center w-full p-5 mt-10 shadow-md hover:shadow-lg rounded-lg sm:p-3 sm:mt-6 md:p-4 md:mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">SEE YOUR FUTURE</h3>
        <RecentlyAdded />
      </div>

       
      {/* Block 5: Random Quizes */}
      <div className="flex flex-col flex-wrap items-center w-full p-5 shadow-md hover:shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-4">MEET US</h3>
          <div className="mb-3 bg-zinc-900 rounded-md p-5">
          
          <p>EMAIL:</p>
          <p className="text-xl font-bold mb-4">dragon.vr.tech@gmail.com</p>
          <p>ADDRESS:</p>
          <p className="text-xl font-bold mb-4">Belgrade, Serbia</p>
          <h3 className="text-md font-bold mb-2 mt-10">SEE YOU !</h3>
          
          </div>
          
       </div>
    </div>
  );
}
