import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/'>
        <Image src={Logo} alt='A Plate with food on it' />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
