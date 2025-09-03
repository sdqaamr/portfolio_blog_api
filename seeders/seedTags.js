const seedTags = async () => {
  const module = await import("../models/tags.js");
  const Tag = module.default;

  const count = await Tag.countDocuments();
  if (count > 0) {
    console.log("Tags already seeded.");
    return;
  }

  // Example Tags data (30 docs)
  const tagsData = [
    {
      // 1
      _id: "68b67a1439400d687b630836",
      name: "Serverless",
      slug: "serverless",
      articles: ["68b69d987af68da48f18e131"], // Article 6
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:10:00.000Z",
    },
    {
      // 2
      _id: "68b67a1539400d687b630837",
      name: "Big Data",
      slug: "big-data",
      articles: [
        "68b69d987af68da48f18e12d", // Article 2
        "68b69d987af68da48f18e12e", // Article 3
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      createdAt: "2025-09-01T16:00:00.000Z",
    },
    {
      // 3
      _id: "68b67a1539400d687b630838",
      name: "Seed Funding",
      slug: "seed-funding",
      articles: ["68b69d987af68da48f18e135"], // Article 10
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      createdAt: "2025-09-01T16:22:00.000Z",
    },
    {
      // 4
      _id: "68b67a1539400d687b630839",
      name: "Ethical Hacking",
      slug: "ethical-hacking",
      articles: ["68b69d987af68da48f18e130"], // Article 5
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T16:05:00.000Z",
    },
    {
      // 5
      _id: "68b67a1539400d687b63083a",
      name: "Health Apps",
      slug: "health-apps",
      articles: ["68b69d987af68da48f18e134"], // Article 9
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T16:19:00.000Z",
    },
    {
      // 6
      _id: "68b67a1539400d687b63083b",
      name: "Predictive Analytics",
      slug: "predictive-analytics",
      articles: [
        "68b69d987af68da48f18e12d", // Article 2
        "68b69d987af68da48f18e12e", // Article 3
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      createdAt: "2025-09-01T16:02:00.000Z",
    },
    {
      // 7
      _id: "68b67a1539400d687b63083c",
      name: "NLP",
      slug: "nlp",
      articles: ["68b69d987af68da48f18e136"], // Article 11
      createdBy: "68b4975eac3eeb134262712e", // Hassan Raza
      createdAt: "2025-09-01T16:15:00.000Z",
    },
    {
      // 8
      _id: "68b67a1539400d687b63083d",
      name: "Smart Homes",
      slug: "smart-homes",
      articles: ["68b69d987af68da48f18e132"], // Article 7
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T16:03:00.000Z",
    },
    {
      // 9
      _id: "68b67a1539400d687b63083e",
      name: "EdTech Tools",
      slug: "edtech-tools",
      articles: ["68b69d987af68da48f18e133"], // Article 8
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:18:00.000Z",
    },
    {
      // 10
      _id: "68b67a1539400d687b63083f",
      name: "Cloud Security",
      slug: "cloud-security",
      articles: ["68b69d987af68da48f18e131"], // Article 6
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:08:00.000Z",
    },
    {
      // 11
      _id: "68b67a1539400d687b630840",
      name: "Neural Networks",
      slug: "neural-networks",
      articles: ["68b69d987af68da48f18e12c"], // Article 1
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T15:58:00.000Z",
    },
    {
      // 12
      _id: "68b67a1539400d687b630841",
      name: "Edge Computing",
      slug: "edge-computing",
      articles: ["68b69d987af68da48f18e132"], // Article 7
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T16:11:00.000Z",
    },
    {
      // 13
      _id: "68b67a1539400d687b630842",
      name: "Voice Recognition",
      slug: "voice-recognition",
      articles: ["68b69d987af68da48f18e136"],
      createdBy: "68b4975eac3eeb134262712e", // Hassan Raza
      createdAt: "2025-09-01T16:04:00.000Z",
    },
    {
      // 14
      _id: "68b67a1539400d687b630843",
      name: "Wearables",
      slug: "wearables",
      articles: ["68b69d987af68da48f18e132"], // Article 7
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T16:03:30.000Z",
    },
    {
      // 15
      _id: "68b67a1539400d687b630844",
      name: "Virtual Classrooms",
      slug: "virtual-classrooms",
      articles: ["68b69d987af68da48f18e133"], // Article 8
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:16:00.000Z",
    },
    {
      // 16
      _id: "68b67a1539400d687b630845",
      name: "Deep Learning",
      slug: "deep-learning",
      articles: ["68b69d987af68da48f18e12c"], // Article 1
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T16:01:00.000Z",
    },
    {
      // 17
      _id: "68b67a1539400d687b630846",
      name: "Business Incubators",
      slug: "business-incubators",
      articles: [
        "68b69d987af68da48f18e12f", // Article 4
        "68b69d987af68da48f18e135", // Article 10
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      createdAt: "2025-09-01T16:23:00.000Z",
    },
    {
      // 18
      _id: "68b67a1539400d687b630847",
      name: "Chatbots",
      slug: "chatbots",
      articles: ["68b69d987af68da48f18e136"],
      createdBy: "68b4975eac3eeb134262712e", // Hassan Raza
      createdAt: "2025-09-01T16:14:00.000Z",
    },
    {
      // 19
      _id: "68b67a1539400d687b630848",
      name: "Remote Work",
      slug: "remote-work",
      articles: ["68b69d987af68da48f18e137"],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:02:30.000Z",
    },
    {
      // 20
      _id: "68b67a1539400d687b630849",
      name: "MedTech Devices",
      slug: "medtech-devices",
      articles: ["68b69d987af68da48f18e134"], // Article 9
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T16:21:00.000Z",
    },
    {
      // 21
      _id: "68b67a1539400d687b63084a",
      name: "Collaboration Tools",
      slug: "collaboration-tools",
      articles: ["68b69d987af68da48f18e137"],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:04:30.000Z",
    },
    {
      // 22
      _id: "68b67a1539400d687b63084b",
      name: "Zero Trust",
      slug: "zero-trust",
      articles: ["68b69d987af68da48f18e130"], // Article 5
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T16:06:00.000Z",
    },
    {
      // 23
      _id: "68b67a1539400d687b63084c",
      name: "DApps",
      slug: "dapps",
      articles: ["68b69d987af68da48f18e12f"], // Article 4
      createdBy: "68b4975eac3eeb1342627130", // Kamran Ali
      createdAt: "2025-09-01T16:12:00.000Z",
    },
    {
      // 24
      _id: "68b67a1539400d687b63084d",
      name: "Telemedicine",
      slug: "telemedicine",
      articles: ["68b69d987af68da48f18e134"], // Article 9
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T16:20:00.000Z",
    },
    {
      // 25
      _id: "68b67a1539400d687b63084e",
      name: "Hybrid Cloud",
      slug: "hybrid-cloud",
      articles: ["68b69d987af68da48f18e131"], // Article 6
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:09:00.000Z",
    },
    {
      // 26
      _id: "68b67a1539400d687b63084f",
      name: "NFTs",
      slug: "nfts",
      articles: ["68b69d987af68da48f18e12f"], // Article 4
      createdBy: "68b4975eac3eeb1342627130", // Kamran Ali
      createdAt: "2025-09-01T16:13:00.000Z",
    },
    {
      // 27
      _id: "68b67a1539400d687b630850",
      name: "Penetration Testing",
      slug: "penetration-testing",
      articles: ["68b69d987af68da48f18e130"], // Article 5
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T16:07:00.000Z",
    },
    {
      // 28
      _id: "68b67a1539400d687b630851",
      name: "Gamification",
      slug: "gamification",
      articles: ["68b69d987af68da48f18e133"], // Article 8
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:17:00.000Z",
    },
    {
      // 29
      _id: "68b67a1539400d687b630852",
      name: "Computer Vision",
      slug: "computer-vision",
      articles: ["68b69d987af68da48f18e12c"], // Article 1
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T15:59:00.000Z",
    },
    {
      // 30
      _id: "68b67a1539400d687b630853",
      name: "Digital Nomads",
      slug: "digital-nomads",
      articles: ["68b69d987af68da48f18e137"],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T16:05:30.000Z",
    },
  ];

  await Tag.insertMany(tagsData);
  console.log("Tags seeded successfully.");
};

export default seedTags;
