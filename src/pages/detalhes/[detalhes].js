import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./detalhes.module.sass";

export async function getStaticPaths() {
  const maxPokemons = 260;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { detalhes: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.detalhes;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

export default function Detalhes({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.loadingContainer}>
        <Image src={require("../../Images/loading.gif")} width="484" />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.pokemonContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="300"
              height="300"
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>
          </div>

          <div className={styles.infoContainer}>
            <h3>Informações</h3>

            <div className={styles.aboutContainer}>
              <span>
                <h1>{pokemon.name}</h1>
                <h4>Nome</h4>
              </span>

              <span>
                <h1>#{pokemon.id}</h1>
                <h4>Id</h4>
              </span>

              <span>
                <h1>{pokemon.height * 10}cm</h1>
                <h4>Altura</h4>
              </span>

              <span>
                <h1>{pokemon.weight / 10}kg</h1>
                <h4>Peso</h4>
              </span>
            </div>

            <div className={styles.typeContainer}>
              <div>
                <h4>Tipo</h4>
              </div>

              <span>
                {pokemon.types.map((item, index) => (
                  <h6
                    className={`${styles.type_normal} ${
                      styles["type_" + item.type.name]
                    }`}
                    key={index}
                  >
                    {item.type.name}
                  </h6>
                ))}
              </span>
            </div>
            {/*  */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
