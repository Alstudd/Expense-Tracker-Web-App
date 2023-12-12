// assets
import logomark from "../assets/logomark.svg"

function Navbar({ userName }) {
  return (
    <nav>
        <img src={logomark} alt="logomark" height={30} />
    </nav>
  )
}

export default Navbar