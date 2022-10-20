import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.githubContainer}>
        <Link href="/">
          <a>
            <Image
              src={require("../../Images/logoHeader.png")}
              width="154"
              height="46"
              alt="PokeNext"
            />
          </a>
        </Link>

        <Link href="https://github.com/thiago-albuquerque/pokenext.git">
          <a
            className={styles.github}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Link>
      </div>
    </header>
  );
}
