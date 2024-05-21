const products = [
  {
    id: 1,
    name: "Auriculares Sony WH-1000XM4",
    description: "Auriculares con cancelación de ruido",
    category: "Audio",
    price: 200,
    image: "https://join-banana.com/cdn/shop/products/sony-wh-1000xm4-wireless-noise-cancelling-headphones-silver.png?v=1690280134"
  },
  {
    id: 2,
    name: "Auriculares Bose QuietComfort 35 II",
    description: "Auriculares inalámbricos",
    category: "Audio",
    price: 200,
    image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png"
  },
  {
    id: 3,
    name: "Apple AirPods Max Azul",
    description: "Auriculares inalámbricos con cancelación de ruido",
    category: "Audio",
    price: 200,
    image: "https://help.apple.com/assets/6565035900841B483A0C22C5/6565035C04D345E0F000EF51/es_419/be407fad48c9ccafcd87007eb6645d61.png"
  },
  {
    id: 4,
    name: "Auriculares Jabra Elite 85h",
    description: "Auriculares inalámbricos resistentes al agua",
    category: "Audio",
    price: 200,
    image: "https://assets2.jabra.com/b/a/b/6/bab6eaa31128992c0b77d991ee524dd0d70c0cba_jabra_elite_85h_black_copper_01.png?w=400&h=400&auto=format"
  },
  {
    id: 5,
    name: "Procesador Intel Core i9-11900K",
    description: "Procesador de intel de alto rendimiento",
    category: "Hardware",
    price: 500,
    image: "https://lytetechnology.com/wp-content/uploads/2022/09/intel-i9-12th-gen.png"
  },
  {
    id: 6,
    name: "Procesador AMD Ryzen 9 5900X",
    description: "Procesador de ultima generacion de alto rendimiento para gaming",
    category: "Hardware",
    price: 500,
    image: "https://www.invidcomputers.com/images/0000000000413124022790413124--1-.jpg"
  },
  {
    id: 7,
    name: "Procesador Intel Core i7-10700K",
    description: "Procesador de alto rendimiento",
    category: "Hardware",
    price: 500,
    image: "https://cdn-reichelt.de/bilder/web/xxl_ws/E200/BX8070110700K_02.png"
  },
  {
    id: 8,
    name: "Procesador AMD Ryzen 7 5800X",
    description: "Procesador de alto rendimiento para gaming",
    category: "Hardware",
    price: 500,
    image: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%207%205800X%204.7GHz%2032MB%20Zen3%20AM4/113632935e5149029426a0c61d8a8a6e.webp"
  },
  {
    id: 9,
    name: "Apple MacBook Pro 16",
    description: "Portátil de alto rendimiento con pantalla Retina",
    category: "Computación",
    price: 600,
    image: "https://www.aptronixindia.com/pub/media/catalog/product/m/b/mbp14-spacegray-select-202110-removebg-preview_2__1.png"
  },
  {
    id: 10,
    name: "Dell XPS 13",
    description: "Portátil ultradelgado con pantalla InfinityEdge",
    category: "Computación",
    price: 600,
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=575&qlt=100,1&resMode=sharp2&size=575,402&chrss=full"
  },
  {
    id: 11,
    name: "HP Spectre x360",
    description: "Portátil convertible con pantalla táctil",
    category: "Computación",
    price: 600,
    image: "https://www.notebookcheck.org/uploads/tx_nbc2/spectreteaser.png"
  },
  {
    id: 12,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Portátil empresarial ultraligero",
    category: "Computación",
    price: 600,
    image: "https://p1-ofp.static.pub/fes/cms/2022/03/17/pw5jy11vn8u0jbi3rdu3aq1ij4bl15411237.png"
  }
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    },); 
  });
};


export const getProduct =(id)=> {
return products.find((prod) =>prod.id==id);
}

  