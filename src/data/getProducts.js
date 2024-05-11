const products = [
    {
      id: "Lumilagro2024",
      name: "TERMO LUMILAGRO LUMINOX ACERO 1,5L",
      description: "Termo matero con pico cebador y capacidad de 1,5 litros.",
      fullDescription: "La tecnología de aislamiento de temperatura de Lumilagro mantiene las cosas calientes o frías durante muchas más horas.",
      stock: 10,
      category: "termo",
      image: "https://www.lumilagro.com.ar/wp-content/uploads/2020/12/termo-lumilagro-luminox-acero-2-1-800x800.jpg",
      price: 54315
    },
    {
      id: "TermoBala2024",
      name: "TERMO BALA RUBBER DOBLE ACERO",
      description: "Diseño moderno y comodo.",
      fullDescription: "Termo bala: tu fiel compañero en cualquier momento. Compacto, resistente y listo para mantener tus bebidas calientes o frías durante horas.",
      stock: 10,
      category: "termo",
      image: "https://acdn.mitiendanube.com/stores/987/259/products/termo-negro1-e7997e7b3761a38faf16854768793310-1024-1024.jpg",
      price: 41000
    },
    {
      id: "Journey2024",
      name: "TERMO JOURNEY DE ACERO INOXIDABLE DOBLE CAPA DE 1 LITRO",
      description: "Termo Journey De Acero Inoxidable Doble Capa De 1 Litro",
      fullDescription: "¿Necesitás el complemento perfecto para tu kit matero? Experimentá la calidad de este termo Journey con el que vas a poder disfrutar de cualquier infusión. Llevalo a donde quieras y tené listo tu café, té, o jugo rápidamente.",
      stock: 10,
      category: "termo",
      image: "https://acdn.mitiendanube.com/stores/001/450/256/products/termo-verde-nuevo-frente1-9ebc319aca02038ab116166160261528-480-0.webp",
      price: 39000
    },
    {
      id: "MateCeramica2024",
      name: "MATE CAMIONERO DE CERÁMICA",
      description: "Mate de ceramica estilo uruguayo, forrado en cuero con costura artesanal y virola de acero.",
      fullDescription: "Disfruta de tu mate con un toque de elegancia con este mate de cerámica. Su diseño artesanal no solo le da un aspecto único, sino que también mantiene tu yerba mate a la temperatura perfecta para disfrutar de su sabor auténtico. Con este mate, cada sorbo se convierte en una experiencia especial, fusionando tradición y estilo en cada momento compartido.",
      stock: 10,
      category: "mate",
      image: "https://arjaque.com/wp-content/uploads/2024/04/PhotoRoom_20231127_131049-300x300.jpg",
      price: 21500
    },
    {
      id: "WaterDog2024",
      name: "WATERDOG MATE TÉRMICO ACERO INOXIDABLE",
      description: "El mate de acero inoxidable: duradero, moderno y listo para mantener tu yerba mate caliente por más tiempo.",
      fullDescription: "El mate de acero inoxidable: un compañero moderno y resistente para tu momento de mate. Su diseño elegante y duradero garantiza una experiencia de bebida excepcional, manteniendo tu yerba mate caliente durante más tiempo. Con este mate, disfruta de la tradición con un toque contemporáneo, sin comprometer calidad ni estilo.",
      stock: 10,
      category: "mate",
      image: "https://www.nakaoutdoors.com.ar/img/articulos/2022/12/waterdog_mate_termico_acero_inoxidable_imagen1.jpg",
      price: 29000
    },
    {
      id: "Camionero2024",
      name: "MATE CAMIONERO + BOMBILLA DE ALPACA",
      description: "El mate camionero: resistente y confiable en cada viaje. Mantén tu yerba mate caliente en la carretera.",
      fullDescription: "El mate camionero: robusto y confiable, como un compañero de ruta. Listo para mantener tu yerba mate caliente en cualquier trayecto, este mate es el complemento perfecto para tus largos viajes. Resistente y diseñado para durar, es la elección ideal para los amantes del mate que nunca paran.",
      stock: 10,
      category: "mate",
      image: "https://apolomates.com.ar/wp-content/uploads/2023/03/Combo-1-premium.jpg",
      price: 27300
    },
    {
      id: "PicoLoro2024",
      name: "BOMBILLA PICO DE LORO",
      description: "Bombilla pico de loro acero inoxidable para mate camionero",
      fullDescription: "Excelente calidad! Ideal para tomar con mates camioneros uruguayos o torpedos.",
      stock: 10,
      category: "bombilla",
      image: "https://http2.mlstatic.com/D_NQ_NP_927011-MLA41850319636_052020-O.webp",
      price: 8500
    },
    {
      id: "CamioneroBombilla2024",
      name: "BOMBILLA PICO DE LORO ALPACA",
      description: "Bombilla camionero: resistente para viajes largos, perfecta para tu mate en la carretera.",
      fullDescription: "Bombilla tipo camionero: resistente y funcional. Diseñada para acompañarte en largos trayectos, esta bombilla asegura un mate perfecto en cualquier camino. Robusta y duradera, es la elección ideal para los amantes del mate que no se detienen.",
      stock: 10,
      category: "bombilla",
      image: "https://d22fxaf9t8d39k.cloudfront.net/18b89e7248b473dd9093f234b047e7af6c768d41c5e0ab7ee25ef98eeadc30fa19762.jpeg",
      price: 10500
    }
  ]
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    },);
  });
  
  export default getProducts;