import Link from "next/link";
import Image from "next/image";

import { MainHeaderBackground } from "./main-header-background";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          <span className={classes.logoText}>FlavorShare</span>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">FlavorShare Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
