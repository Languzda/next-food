import Link from "next/link";
import Image from "next/image";

import logImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
