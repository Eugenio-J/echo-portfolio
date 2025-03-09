import logo from "../assets/kevinRushLogo.png/"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"


const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
      {/* <img src={logo} alt="logo" /> */}
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/eugenio-j/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
      {/* <FaLinkedin href="https://www.linkedin.com/in/eugenio-j/"/> */}
      <FaGithub />
      <FaInstagram />
      <FaSquareXTwitter />
    </div>
  </nav>
}

export default Navbar