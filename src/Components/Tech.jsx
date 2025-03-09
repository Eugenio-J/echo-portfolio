import { RiReactjsLine } from "react-icons/ri"
import { TbBrandCSharp  } from "react-icons/tb"
import { SiBlazor  } from "react-icons/si"
import { SiDotnet } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { motion } from "motion/react"


const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
  
            <motion.div  
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => {}}
            onHoverEnd={event => {}}
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCSharp className="text-5xl text-purple-400"/>
            </motion.div>

            <motion.div 
             whileHover={{ scale: 1.2 }}
             onHoverStart={event => {}}
             onHoverEnd={event => {}}
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDotnet className="text-5xl text-purple-400"/>
            </motion.div>

            <motion.div  
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => {}}
            onHoverEnd={event => {}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiBlazor className="text-5xl text-purple-400" alt="Blazor"/>
            </motion.div>
            
            <motion.div 
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => {}}
            onHoverEnd={event => {}}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => {}}
            onHoverEnd={event => {}}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiGithubFill className="text-5xl text-black-400"/>
            </motion.div>

            <motion.div 
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => {}}
            onHoverEnd={event => {}}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMsqlServer className="text-5xl text-red-400"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Tech