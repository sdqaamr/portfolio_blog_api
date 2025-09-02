const seedArticles = async () => {
  const module = await import("../models/articles.js");
  const Article = module.default;

  const count = await Article.countDocuments();
  if (count > 0) {
    console.log("Articles already seeded.");
    return;
  }

  // Example Articles data (15 docs)
  const articlesData = [
    {
      // 1
      _id: "68b69d987af68da48f18e12c",
      title: "Neural Networks in Artificial Intelligence",
      slug: "neural-networks-in-artificial-intelligence",
      content:
        "Neural networks are the backbone of modern AI, enabling systems to learn from large datasets. This article explores how they power intelligent decision-making across industries.",
      categories: ["68b5d30d1d2e853054b27733", "68b5d30d1d2e853054b2772f"], // AI, ML
      tags: [
        "68b67a1539400d687b630840",
        "68b67a1539400d687b630845",
        "68b67a1539400d687b630852",
      ], // Neural Networks, Deep Learning, Computer Vision
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      published: true,
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
    },
    {
      // 2
      _id: "68b69d987af68da48f18e12d",
      title: "Big Data Driving Machine Learning",
      slug: "big-data-driving-machine-learning",
      content:
        "Machine learning relies heavily on massive amounts of structured and unstructured data. Big Data provides the fuel that powers accurate models and predictions.",
      categories: ["68b5d30d1d2e853054b2772f", "68b5d30d1d2e853054b27730"], // ML, DS
      tags: ["68b67a1539400d687b630837", "68b67a1539400d687b63083b"], // Big Data, Predictive Analytics
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      published: true,
      createdAt: "2025-09-01T17:05:00.000Z",
      updatedAt: "2025-09-01T17:05:00.000Z",
    },
    {
      // 3
      _id: "68b69d987af68da48f18e12e",
      title: "Predictive Analytics in Data Science",
      slug: "predictive-analytics-in-data-science",
      content:
        "Predictive analytics uses historical data and machine learning algorithms to forecast future outcomes. Data scientists leverage it for business intelligence and strategy.",
      categories: ["68b5d30d1d2e853054b27730"], // DS
      tags: ["68b67a1539400d687b63083b", "68b67a1539400d687b630837"], // Predictive Analytics, Big Data
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      published: false,
      createdAt: "2025-09-01T17:10:00.000Z",
      updatedAt: "2025-09-01T17:10:00.000Z",
    },
    {
      // 4
      _id: "68b69d987af68da48f18e12f",
      title: "Blockchain and Decentralized Apps",
      slug: "blockchain-and-dapps",
      content:
        "Blockchain technology has unlocked decentralized applications (DApps) that operate without central control. This article explains how DApps are reshaping industries.",
      categories: ["68b5d30d1d2e853054b27731", "68b5d30d1d2e853054b27737"], // Blockchain, Startups
      tags: [
        "68b67a1539400d687b63084c",
        "68b67a1539400d687b63084f",
        "68b67a1539400d687b630846",
      ], // DApps, NFTs, Business Incubators
      createdBy: "68b4975eac3eeb1342627130", // Kamran Ali
      published: true,
      createdAt: "2025-09-01T17:15:00.000Z",
      updatedAt: "2025-09-01T17:15:00.000Z",
    },
    {
      // 5
      _id: "68b69d987af68da48f18e130",
      title: "Fighting Cybersecurity Threats with Ethical Hacking",
      slug: "fighting-cybersecurity-threats-with-ethical-hacking",
      content:
        "Ethical hackers simulate attacks to identify vulnerabilities before malicious actors exploit them. This is becoming a vital defense strategy in modern cybersecurity.",
      categories: ["68b5d30d1d2e853054b27732", "68b5d30d1d2e853054b27733"], // Cybersecurity, AI
      tags: [
        "68b67a1539400d687b630839",
        "68b67a1539400d687b630850",
        "68b67a1539400d687b63084b",
      ], // Ethical Hacking, Penetration Testing, Zero Trust
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      published: false,
      createdAt: "2025-09-01T17:20:00.000Z",
      updatedAt: "2025-09-01T17:20:00.000Z",
    },
    {
      // 6
      _id: "68b69d987af68da48f18e131",
      title: "Hybrid Cloud Security in Cloud Computing",
      slug: "hybrid-cloud-security-in-cloud-computing",
      content:
        "Hybrid cloud solutions combine private and public infrastructures, offering scalability with control. Cloud security practices ensure safe data transfer and storage.",
      categories: ["68b5d30d1d2e853054b27733", "68b5d30d1d2e853054b27732"], // Cloud Computing, Cybersecurity
      tags: [
        "68b67a1539400d687b63084e",
        "68b67a1539400d687b63083f",
        "68b67a1439400d687b630836",
      ], // Hybrid Cloud, Cloud Security, Serverless
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      published: true,
      createdAt: "2025-09-01T17:25:00.000Z",
      updatedAt: "2025-09-01T17:25:00.000Z",
    },
    {
      // 7
      _id: "68b69d987af68da48f18e132",
      title: "Smart Homes and the Internet of Things",
      slug: "smart-homes-and-iot",
      content:
        "The Internet of Things enables smart homes that automate energy, security, and daily tasks. Devices like wearables and sensors are making connected living a reality.",
      categories: ["68b5d30d1d2e853054b27734", "68b5d30d1d2e853054b27733"], // IoT, Cloud Computing
      tags: [
        "68b67a1539400d687b63083d",
        "68b67a1539400d687b630843",
        "68b67a1539400d687b630841",
      ], // Smart Homes, Wearables, Edge Computing
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      published: false,
      createdAt: "2025-09-01T17:30:00.000Z",
      updatedAt: "2025-09-01T17:30:00.000Z",
    },
    {
      // 8
      _id: "68b69d987af68da48f18e133",
      title: "Gamification in E-learning Platforms",
      slug: "gamification-in-e-learning-platforms",
      content:
        "Gamification boosts learner engagement by integrating points, badges, and challenges into courses. E-learning platforms use gamification to make education interactive.",
      categories: ["68b5d30d1d2e853054b27735", "68b5d30d1d2e853054b27733"], // E-learning, AI
      tags: [
        "68b67a1539400d687b630851",
        "68b67a1539400d687b63083e",
        "68b67a1539400d687b630844",
      ], // Gamification, EdTech Tools, Virtual Classrooms
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      published: true,
      createdAt: "2025-09-01T17:35:00.000Z",
      updatedAt: "2025-09-01T17:35:00.000Z",
    },
    {
      // 9
      _id: "68b69d987af68da48f18e134",
      title: "Telemedicine and HealthTech Apps",
      slug: "telemedicine-and-healthtech-apps",
      content:
        "Telemedicine platforms allow patients to consult doctors remotely, improving healthcare access. Health apps and MedTech devices support daily monitoring and wellbeing.",
      categories: ["68b5d30d1d2e853054b27736"], // HealthTech
      tags: [
        "68b67a1539400d687b63084d",
        "68b67a1539400d687b63083a",
        "68b67a1539400d687b630849",
      ], // Telemedicine, Health Apps, MedTech Devices
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      published: true,
      createdAt: "2025-09-01T17:40:00.000Z",
      updatedAt: "2025-09-01T17:40:00.000Z",
    },
    {
      // 10
      _id: "68b69d987af68da48f18e135",
      title: "Seed Funding Trends in Startups",
      slug: "seed-funding-trends-in-startups",
      content:
        "Seed funding provides essential capital for early-stage startups. Recent trends highlight how incubators and investors shape the journey from idea to market.",
      categories: ["68b5d30d1d2e853054b27737", "68b5d30d1d2e853054b27730"], // Startups, DS
      tags: ["68b67a1539400d687b630838", "68b67a1539400d687b630846"], // Seed Funding, Business Incubators
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      published: false,
      createdAt: "2025-09-01T17:45:00.000Z",
      updatedAt: "2025-09-01T17:45:00.000Z",
    },
    {
      // 11
      _id: "68b69d987af68da48f18e136",
      title: "AI-Powered Personal Assistants",
      slug: "ai-powered-personal-assistants",
      content:
        "Virtual assistants like Siri, Alexa, and Google Assistant leverage natural language processing and AI to make daily tasks easier for millions of users.",
      categories: ["68b5d30d1d2e853054b27733"], // AI
      tags: [
        "68b67a1539400d687b63083c",
        "68b67a1539400d687b630842",
        "68b67a1539400d687b630847",
      ], // NLP, Voice Recognition, Chatbots
      createdBy: "68b4975eac3eeb134262712e", // Hassan Raza
      published: true,
      createdAt: "2025-09-01T17:50:00.000Z",
      updatedAt: "2025-09-01T17:50:00.000Z",
    },
    {
      // 12
      _id: "68b69d987af68da48f18e137",
      title: "The Future of Remote Work",
      slug: "the-future-of-remote-work",
      content:
        "Remote work has become a norm after the pandemic, supported by collaboration tools and cloud-based platforms that enable distributed teams to thrive.",
      categories: ["68b5d30d1d2e853054b27733"], // Cloud Computing
      tags: [
        "68b67a1539400d687b630848",
        "68b67a1539400d687b63084a",
        "68b67a1539400d687b630853",
      ], // Remote Work, Collaboration Tools, Digital Nomads
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      published: true,
      createdAt: "2025-09-01T18:10:00.000Z",
      updatedAt: "2025-09-01T18:10:00.000Z",
    },
  ];

  await Article.insertMany(articlesData);
  console.log("Articles seeded successfully.");
};

export default seedArticles;
