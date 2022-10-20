import Head from "next/head";
import favicon from "../Images/favicon.ico";

import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

import styles from "../styles/home.module.sass";

export async function getStaticProps() {
  const maxPokemons = 260;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>

      <Header />

      <main className={styles.main}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>

      <Footer />
    </>
  );
}
