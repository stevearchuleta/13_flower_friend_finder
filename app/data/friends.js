// Friendly Flower Finder Questions (DATA)
// =============================================================
var  friendlyFlower= [
  {
    friendlyFlowerId: "0123",
    commonName: "Tulip",
    latinName: "Tulipa",
    characteristics: "spring-blooming perennial; herbaceous bulbiferous geophyte",
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2Fd51e274c-e719-46f4-a0ad-7c2785b0e07a%2Fsvn%2Fvan-zyverden-flower-bulbs-21597-64_1000.jpg&imgrefurl=https%3A%2F%2Fwww.homedepot.com%2Fp%2FVan-Zyverden-Tulips-Bulbs-Triumph-Mixture-Set-of-100-21597%2F302431179&docid=PEtzwv63psUW-M&tbnid=JAh-ncSPU4LMmM%3A&vet=1&w=1000&h=1000&itg=1&source=sh%2Fx%2Fim',
    Scores: [5, 4, 5, 2, 1, 3, 4, 1, 1, 3]
  },
  {
    friendlyFlowerId: "1234",
    commonName: "Bleeding Heart",
    latinName: "Dicentra spectabilis",
    characteristics: "spring-blooming perennial; fern-like leaves; heart-shaped flowers",
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whiteflowerfarm.com%2Fmas_assets%2Fcache%2Fimage%2F2%2Fd%2Fc%2Fd%2F11725.Jpg&imgrefurl=https%3A%2F%2Fwww.whiteflowerfarm.com%2F27735-product.html&docid=GTqKsyg5JuCcUM&tbnid=tbfkcTuCXsU1gM%3A&vet=1&w=1000&h=1000&source=sh%2Fx%2Fim',
    Scores: [5, 4, 1, 5, 3, 5, 2, 2, 3, 2]
  },
  {
    friendlyFlowerId: "2345",
    commonName: "Lavender",
    latinName: "Lavandula",
    characteristics: "perennial shrub; midsummer purple flowers; native to the Mediterranean region",
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.crocdn.co.uk%2Fimages%2Fproducts2%2Fpl%2F00%2F00%2F00%2F40%2Fpl0000004047.jpg%3Fwidth%3D940%26height%3D940&imgrefurl=https%3A%2F%2Fwww.crocus.co.uk%2Fplants%2F_%2Flavandula-angustifolia-hidcote%2Fclassid.4047%2F&docid=0iLKY9QG80I-BM&tbnid=WiD5QXwOhnFYHM%3A&vet=1&w=600&h=600&source=sh%2Fx%2Fim',
    Scores: [5, 4, 1, 5, 2, 5, 2, 4, 2, 4]
  },
  {
    friendlyFlowerId: "3456",
    commonName: "Marigold",
    latinName: "Tagetes",
    characteristics: "annual herbaceous; orange/yellow flowers; in the daisy family",
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whiteflowerfarm.com%2Fmas_assets%2Fcache%2Fimage%2F2%2F7%2Ff%2Fa%2F10234.Jpg&imgrefurl=https%3A%2F%2Fwww.whiteflowerfarm.com%2Ftagetes-erecta-giant-orange&docid=GZbM1MunEcgOLM&tbnid=LQLdHk4w6QFWLM%3A&vet=1&w=425&h=375&itg=1&source=sh%2Fx%2Fim',
    Scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
  {
    friendlyFlowerId: "4567",
    commonName: "Orchid",
    latinName: "Orchidaceae",
    characteristics: " tropical; over 28,000 species; bilateral symmetrical flower with highly modified petal; fused stamens and carpels; extremely small seeds",
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bonnethouse.org%2Fwp-content%2Fuploads%2F2017%2F02%2FBH-2012-4.jpg&imgrefurl=https%3A%2F%2Fwww.bonnethouse.org%2Fevent%2Forchid-greenhouse-tour-5%2F&docid=ZtoIlr8bPXftIM&tbnid=yZaJWs5Fps4pRM%3A&vet=1&w=795&h=530&source=sh%2Fx%2Fim',
    Scores: [4, 2, 2, 2, 4, 1, 2, 1, 3, 2]
  },
  {
    friendlyFlowerId: "5678",
    commonName: "Pampas Grass",
    latinName: "Cortaderia selloana",
    characteristics: "tall perennial grass; dense tussocks; slender sharp leaves; white panicle flowers",
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gardeningknowhow.com%2Fwp-content%2Fuploads%2F2011%2F04%2FPampas-Grass-400x520.jpg&imgrefurl=https%3A%2F%2Fwww.gardeningknowhow.com%2Fornamental%2Ffoliage%2Fpampas-grass%2Fgrowing-pampas-grass.htm&docid=ZjAGtkMP-IfaDM&tbnid=Zi_nnZ8DVpxJLM%3A&vet=1&w=400&h=520&source=sh%2Fx%2Fim',
    Scores: [5, 2, 1, 5, 4, 5, 3, 4, 5, 3]
  },
  {
    friendlyFlowerId: "6789",
    commonName: "Tulip",
    latinName: "Tulipa",
    characteristics: "spring-blooming perennial herbaceous bulbiferous geophyte",
    photo:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    Scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
  {
    friendlyFlowerId: "7890",
    commonName: "Tulip",
    latinName: "Tulipa",
    characteristics: "spring-blooming perennial herbaceous bulbiferous geophyte",
    photo:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    Scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
  
  {
    friendlyFlowerId: "8901",
    commonName: "Tulip",
    latinName: "Tulipa",
    characteristics: "spring-blooming perennial herbaceous bulbiferous geophyte",
    photo:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    Scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
  {
    friendlyFlowerId: "9012",
    commonName: "Tulip",
    latinName: "Tulipa",
    characteristics: "spring-blooming perennial herbaceous bulbiferous geophyte",
    photo:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    Scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
  
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;