"use client"

import { useEffect, useState } from 'react';

import Quiz from '../cards/Quiz';

export default function MostFinished() {
  

    return (
        <div className="overflow-y-scroll max-h-80 w-full" style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E0 #27272A'}}>
         {/*   <ul className="flex flex-wrap gap-4 items-center justify-center">
                {quizzes.map((quiz) => (
                    <Quiz key={quiz.id} quiz={quiz}/>
                ))}
            </ul>*/}
        </div>
    );
}
