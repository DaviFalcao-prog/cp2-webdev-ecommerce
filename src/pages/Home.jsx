import Section from "../components/Section";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
export default function Home() {
    const [titulo, setTitulo] = useState([]);
    const [preco, setPreco] = useState([]);
    const [image, setImage] = useState([]);

      const API = import.meta.env.VITE_API_URL;
     
  useEffect(() => {
    fetch(`${API}/jewelery`)
      .then(res => res.json())
      .then(data => setTitulo(data))
  }, [])
      useEffect(() => {
    fetch(`${API}/men's%20clothing`)
      .then(res => res.json())
      .then(data => setPreco(data))
  }, [])
    useEffect(() => {
    fetch(`${API}/electronics`)
      .then(res => res.json())
      .then(data => setImage(data))
  }, [])

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <Section titulo="Joias">
          {titulo.map(pegaItem => (
          <Cards {...pegaItem} />
          ))}
        </Section>
        <Section titulo="Preco">
          {preco.map(pegaItem => (
          <Cards {...pegaItem} />
          ))}

        </Section>
        <Section titulo="Roupas Masculinas">
          {image.map(pegaItem => (
          <Cards {...pegaItem} />
        ))}
        </Section>
    </div>
  );
}
