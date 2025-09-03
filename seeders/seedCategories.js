const seedCategories = async () => {
  const module = await import("../models/categories.js");
  const Category = module.default;

  const count = await Category.countDocuments();
  if (count > 0) {
    console.log("Categories already seeded.");
    return;
  }

  // Example Categories data (10 docs)
  const categoriesData = [
    {
      // 1
      _id: "68b5d30d1d2e853054b2773a",
      name: "Artificial Intelligence",
      slug: "artificial-intelligence",
      articles: [
        "68b69d987af68da48f18e12c", // Article 1
        "68b69d987af68da48f18e130", // Article 5
        "68b69d987af68da48f18e133", // Article 8
        "68b69d987af68da48f18e136", // Article 11
      ],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 2
      _id: "68b5d30d1d2e853054b2772f",
      name: "Machine Learning",
      slug: "machine-learning",
      articles: [
        "68b69d987af68da48f18e12c", // Article 1
        "68b69d987af68da48f18e12d", // Article 2
      ],
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 3
      _id: "68b5d30d1d2e853054b27730",
      name: "Data Science",
      slug: "data-science",
      articles: [
        "68b69d987af68da48f18e12d", // Article 2
        "68b69d987af68da48f18e12e", // Article 3
        "68b69d987af68da48f18e135", // Article 10
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 4
      _id: "68b5d30d1d2e853054b27731",
      name: "Blockchain",
      slug: "blockchain",
      articles: ["68b69d987af68da48f18e12f"], // Article 4
      createdBy: "68b4975eac3eeb1342627130", // Kamran Ali
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 5
      _id: "68b5d30d1d2e853054b27732",
      name: "Cybersecurity",
      slug: "cybersecurity",
      articles: [
        "68b69d987af68da48f18e130", // Article 5
        "68b69d987af68da48f18e131", // Article 6
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 6
      _id: "68b5d30d1d2e853054b27733",
      name: "Cloud Computing",
      slug: "cloud-computing",
      articles: [
        "68b69d987af68da48f18e131", // Article 6
        "68b69d987af68da48f18e132", // Article 7
        "68b69d987af68da48f18e137", // Article 12
      ],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 7
      _id: "68b5d30d1d2e853054b27734",
      name: "Internet of Things",
      slug: "internet-of-things",
      articles: ["68b69d987af68da48f18e132"], // Article 7
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 8
      _id: "68b5d30d1d2e853054b27735",
      name: "E-learning",
      slug: "e-learning",
      articles: ["68b69d987af68da48f18e133"], // Article 8
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 9
      _id: "68b5d30d1d2e853054b27736",
      name: "HealthTech",
      slug: "healthtech",
      articles: ["68b69d987af68da48f18e134"], // Article 9
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      createdAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 10
      _id: "68b5d30d1d2e853054b27737",
      name: "Startups",
      slug: "startups",
      articles: [
        "68b69d987af68da48f18e12f", // Article 4
        "68b69d987af68da48f18e135", // Article 10
      ],
      createdBy: "68b4975eac3eeb1342627130", // Kamran Ali
      createdAt: "2025-09-01T15:45:00.000Z",
    },
  ];

  await Category.insertMany(categoriesData);
  console.log("Categories seeded successfully.");
};

export default seedCategories;
