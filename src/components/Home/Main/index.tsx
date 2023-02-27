import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";

import "./index.scss";
import { IProducts } from "../../../interface/IProduct";
import { UserContext } from "../../Contexts/UserContext";

let defaultProducts = [
  {
    id: 1,
    image: "./src/assets/phone.svg",
    name: 'Smartphone Samsung Galaxy Z Flip4 5G Tela dobrável de 6.7" 256GB Processador Snapdragon 8GB de RAM Câmera Dupla Traseira Violeta',
    listPrice: "R$ 7.498,89",
    price: "R$ 6.749,00",
  },
  {
    id: 2,
    image: "./src/assets/notebook.svg",
    name: 'Notebook Dell Inspiron I15-i1100-A40P Intel Core i5 8GB 256GB SSD W11 15.6" Preto',
    listPrice: "R$ 7.498,89",
    price: "R$ 6.749,00",
  },
  {
    id: 3,
    image: "./src/assets/television.svg",
    name: "Smart TV LED 32'' Samsung Tizen HD 32T4300 2020 - WIFI, HDR para Brilho e Contraste com Plataforma Tizen 2 HDMI 1 USB - Preta",
    listPrice: "R$ 7.498,89",
    price: "R$ 6.749,00",
  },
];

const Main: React.FC<{state: string}> = ({state}) => {
  const { storeRegionalization, modalStep } = useContext(UserContext);
  
  return (
    <main className="main">
      <h1 className="main__state-selection">Seleção de produtos {storeRegionalization?.name}</h1>
      <div className="products">
        {!state
          ? defaultProducts.map((product: any) => {
              return <ProductCard product={product} key={product.id} />;
            })
          : storeRegionalization?.products.map((product: IProducts) => {
              return <ProductCard product={product} key={product.id} />;
            })
          }
      </div>
    </main>
  );
};

export default Main;
