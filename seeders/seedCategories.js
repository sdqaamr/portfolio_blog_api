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
      _id: "68b5d30c1d2e853054b2772e",
      name: "Artificial Intelligence",
      slug: "artificial-intelligence",
      createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 2
      _id: "68b5d30d1d2e853054b2772f",
      name: "Machine Learning",
      slug: "machine-learning",
      createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 3
      _id: "68b5d30d1d2e853054b27730",
      name: "Data Science",
      slug: "data-science",
      createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 4
      _id: "68b5d30d1d2e853054b27731",
      name: "Blockchain",
      slug: "blockchain",
      createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 5
      _id: "68b5d30d1d2e853054b27732",
      name: "Cybersecurity",
      slug: "cybersecurity",
      createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 6
      _id: "68b5d30d1d2e853054b27733",
      name: "Cloud Computing",
      slug: "cloud-computing",
      createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 7
      _id: "68b5d30d1d2e853054b27734",
      name: "Internet of Things",
      slug: "internet-of-things",
      createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 8
      _id: "68b5d30d1d2e853054b27735",
      name: "E-learning",
      slug: "e-learning",
      createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 9
      _id: "68b5d30d1d2e853054b27736",
      name: "HealthTech",
      slug: "healthtech",
      createdBy: "68b4975eac3eeb134262712a",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
    {
      // 10
      _id: "68b5d30d1d2e853054b27737",
      name: "Startups",
      slug: "startups",
      createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T15:45:00.000Z",
      updatedAt: "2025-09-01T15:45:00.000Z",
    },
  ];

  await Category.insertMany(categoriesData);
  console.log("Categories seeded successfully.");
};

export default seedCategories;
