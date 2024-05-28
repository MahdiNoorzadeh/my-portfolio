import logo from "../assets/MaLogo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
            <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/in/mahdi-noorzadeh-7927a1218/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }}  href="https://github.com/MahdiNoorzadeh" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }}  href="#" target="https://www.instagram.com/noorzadeh_techguy?igsh=MWJjNWllYm54c2dyNw==" rel="noopener noreferrer">
            <FaInstagram/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }}  href="https://x.com/RedStar2077?t=rUQBLf_0U5rG6A8iEimFMg&s=09" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter/>
            </motion.a>
        </div>
    </nav>
  )
}
