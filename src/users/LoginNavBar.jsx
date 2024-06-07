import Logo from "../Logo.js/Logo"
import image from '../assets/Logo.png'
export default function LoginNavBar() {
  return (
    <div className="grid grid-cols-2 md:px-12 p-4">
      <div className="flex justify-start">
        <a href="/">
          <Logo image={image} />
        </a>
      </div>
      <div className="flex justify-end">
        < a href="/signup" className="font-bold text-[#32ff54] hover:scale-105 hover:text-[#af4eff] transition-[0.9s]">
          Sign Up
        </a>
      </div>
    </div>
  )
}
