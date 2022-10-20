import Image from "next/image";
import Link from "next/link";

import styles from "./card.module.sass";

export default function Card({ pokemon }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.nameContainer}>
        <h4>#{pokemon.id}</h4>
        <h1>{pokemon.name}</h1>
        <Link href={`/detalhes/${pokemon.id}`}>
          <a>Detalhes</a>
        </Link>
      </div>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="160"
        height="160"
        alt={pokemon.name}
      />
    </div>
  );
}
