import Link from "next/link";
import Image from "next/image";

import logImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";

const Header = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logImg} alt="NextLevel Food" priority /> NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community" Foodies Community></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
