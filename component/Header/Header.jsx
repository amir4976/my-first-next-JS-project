import Link from "next/link";
import styles from "../../styles/Home.module.css";
import HeaderStyle from '../../styles/Header.module.css'
function Header() {
  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.logo}>
        <Link href="/">Dj events</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events'>
            Events
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
