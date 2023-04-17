import Link from "next/link"
import Styles from '../../styles/Footer.module.css'

function Footer() {
  return (
    <footer Style={Styles.footer}>
        <p>copyright &copy : Dj event 2022</p>
        <p>
            <Link href='/about'>About</Link>
        </p>
    </footer>
    
  )
}

export default Footer