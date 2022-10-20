import Image from "next/image";

import logo from "../../Images/logoFooter.png";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={logo} width="101" height="37" />
    </footer>
  );
}
