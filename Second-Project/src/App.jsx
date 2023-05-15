import Card from "./components/Card";
import swPosterImg from "./assets/Star_Wars.jpg";
import esbPosterImg from "./assets/Star_Wars-2.jpg";
import rotjPosterImg from "./assets/Star_Wars-3.jpg";


export default function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg}/>
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg} />
    </>
  );
}
