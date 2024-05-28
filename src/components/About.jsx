import aboutImg from "../assets/aboutMePic.jpg"
import {ABOUT_TEXT} from "../constants"
import { motion } from "framer-motion"

export default function About() {
    return (
      <div className="border-b border-gray-700 pb-4">
        <h2 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div whileInView={{ opacity: 1, x:0 }} initial ={{ opacity: 0, x: -100}}
            transition={{ duration: 0.5 }} whileHover={{ scale: 0.9 }} className="flex items-center justify-center h-full">
              <img className="rounded-2xl" src={aboutImg} alt="about image" />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div whileInView={{ opacity:1 , x: 0 }} initial={{ opacity:0, x:100 }}
            transition={{ duration: 0.5}} className="flex justify-center lg:justify-start h-full">
              <p className="my-2 max-w-xl py-6">
                {ABOUT_TEXT}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }
  
