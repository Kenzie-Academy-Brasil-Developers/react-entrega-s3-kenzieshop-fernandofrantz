const products = [
  {
    id: 1,
    name: "Painel solar - 420w",
    price: 863.99,
    image:
      "https://minhacasasolar.fbitsstatic.net/img/p/painel-solar-420w-halfcell-policristalino-canadian-solar-cs3w-420p-81011/267472.jpg?w=400&h=400&v=202107051049",
  },
  {
    id: 2,
    name: "Painel solar - 500w",
    price: 1017.82,
    image:
      "https://www.energiatotal.com.br/content/images/thumbs/0001605_painel-solar-420w-canadian-hiku-bi-partida.jpeg",
  },
  {
    id: 3,
    name: "Inversor solar - 3kw",
    price: 8063.99,
    image:
      "https://www.solvix.com.br/wp-content/uploads/2017/06/INVERSOR-FRONIUS-PRIMO.jpg",
  },
  {
    id: 4,
    name: "Inversor solar - 2kw",
    price: 6063.99,
    image:
      "https://www.neosolar.com.br/loja/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/i/n/inversor_off_grid_h_brido_epever_upower-hi-2_1.jpg",
  },
  {
    id: 5,
    name: "Controlador de carga - 20A",
    price: 209.99,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_729087-MLB45141915428_032021-O.webp",
  },
  {
    id: 6,
    name: "Bateria - 165A",
    price: 820.93,
    image:
      "https://images.tcdn.com.br/img/img_prod/655927/bateria_estacionaria_de_165a_12v_97_1_20181114180320.jpg",
  },
  {
    id: 7,
    name: "Bateria - 30A",
    price: 342.5,
    image:
      "https://images.tcdn.com.br/img/img_prod/655927/bateria_estacionaria_de_30a_12v_89_1_20181114180119.jpg",
  },
];

const productsReducer = (state = products, action) => {
  return state;
};
export default productsReducer;
