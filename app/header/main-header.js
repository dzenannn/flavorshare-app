import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <img src={logo.src} alt="logo" />
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
  );
}
