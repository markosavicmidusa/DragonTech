import { IQuizMetadata } from "@/lib/models/quiz_metadata.model"
import Image from "next/image"
import Link from "next/link"

import { Images } from "@/data/backgroundImages/backgroundImages";


export default function Quiz({image}:{image:Images}){

    return (
        <div>
          <div className="z-0 w-80 h-52 rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                 <div className="relative h-52">
                 <Image
                        src={`/assets/rosenApotheke/${image.picturePath}`} // Replace with your image URL
                        alt={image.label}
                        layout="fill" // Makes the image cover the parent container
                        objectFit="cover" // Ensures the image covers the container without distortion
                    />
                 </div>
                 
          </div>
         
        </div>

        

        )
}


 {/*<Link href={`/quizes/${quiz.id}`}>
           
        </Link>*/}