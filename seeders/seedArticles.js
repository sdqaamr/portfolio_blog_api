const seedArticles = async () => {
  const module = await import("../models/articles.js");
  const Article = module.default;

  const count = await Article.countDocuments();
  if (count > 0) {
    console.log("Articles already seeded.");
    return;
  }

  // Example Articles data (12 docs)
  const articlesData = [
    {
      // 1
      _id: "68b69d987af68da48f18e12c",
      title: "Neural Networks in Artificial Intelligence",
      slug: "neural-networks-in-artificial-intelligence",
      content:
        "Neural networks are the backbone of modern AI, enabling systems to learn from large datasets. This article explores how they power intelligent decision-making across industries.",
      categories: [
        "68b5d30d1d2e853054b2773a", // AI
        "68b5d30d1d2e853054b2772f", // ML
      ],
      tags: [
        "68b67a1539400d687b630840", // Neural Networks
        "68b67a1539400d687b630845", // Deep Learning
        "68b67a1539400d687b630852", // Computer Vision
      ],
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      published: true,
    },
    {
      // 2
      _id: "68b69d987af68da48f18e12d",
      title: "Big Data Driving Machine Learning",
      slug: "big-data-driving-machine-learning",
      content:
        "Machine learning relies heavily on massive amounts of structured and unstructured data. Big Data provides the fuel that powers accurate models and predictions.",
      categories: [
        "68b5d30d1d2e853054b2772f", // ML
        "68b5d30d1d2e853054b27730", // DS
      ],
      tags: [
        "68b67a1539400d687b630837", // Big Data
        "68b67a1539400d687b63083b", // Predictive Analytics
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      published: true,
    },
    {
      // 3
      _id: "68b69d987af68da48f18e12e",
      title: "Predictive Analytics in Data Science",
      slug: "predictive-analytics-in-data-science",
      content:
        "Predictive analytics uses historical data and machine learning algorithms to forecast future outcomes. Data scientists leverage it for business intelligence and strategy.",
      categories: ["68b5d30d1d2e853054b27730"], // DS
      tags: [
        "68b67a1539400d687b63083b", // Predictive Analytics
        "68b67a1539400d687b630837", // Big Data
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      published: false,
    },
    {
      // 4
      _id: "68b69d987af68da48f18e12f",
      title: "Blockchain and Decentralized Apps",
      slug: "blockchain-and-dapps",
      content:
        "Blockchain technology has unlocked decentralized applications (DApps) that operate without central control. This article explains how DApps are reshaping industries.",
      categories: [
        "68b5d30d1d2e853054b27731", // Blockchain
        "68b5d30d1d2e853054b27737", // Startups
      ],
      tags: [
        "68b67a1539400d687b63084c", // DApps
        "68b67a1539400d687b63084f", // NFTs
        "68b67a1539400d687b630846", // Business Incubators
      ],
      createdBy: "68b4975eac3eeb1342627130", // Kamran Ali
      published: true,
    },
    {
      // 5
      _id: "68b69d987af68da48f18e130",
      title: "Fighting Cybersecurity Threats with Ethical Hacking",
      slug: "fighting-cybersecurity-threats-with-ethical-hacking",
      content:
        "Ethical hackers simulate attacks to identify vulnerabilities before malicious actors exploit them. This is becoming a vital defense strategy in modern cybersecurity.",
      categories: [
        "68b5d30d1d2e853054b27732", // Cybersecurity
        "68b5d30d1d2e853054b2773a", // AI
      ],
      tags: [
        "68b67a1539400d687b630839", // Ethical Hacking
        "68b67a1539400d687b630850", // Penetration Testing
        "68b67a1539400d687b63084b", // Zero Trust
      ],
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      published: false,
    },
    {
      // 6
      _id: "68b69d987af68da48f18e131",
      title: "Hybrid Cloud Security in Cloud Computing",
      slug: "hybrid-cloud-security-in-cloud-computing",
      content:
        "Hybrid cloud solutions combine private and public infrastructures, offering scalability with control. Cloud security practices ensure safe data transfer and storage.",
      categories: [
        "68b5d30d1d2e853054b27733", // Cloud Computing
        "68b5d30d1d2e853054b27732", // Cybersecurity
      ],
      tags: [
        "68b67a1539400d687b63084e", // Hybrid Cloud
        "68b67a1539400d687b63083f", // Cloud Security
        "68b67a1439400d687b630836", // Serverless
      ],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      published: true,
    },
    {
      // 7
      _id: "68b69d987af68da48f18e132",
      title: "Smart Homes and the Internet of Things",
      slug: "smart-homes-and-iot",
      content:
        "The Internet of Things enables smart homes that automate energy, security, and daily tasks. Devices like wearables and sensors are making connected living a reality.",
      categories: [
        "68b5d30d1d2e853054b27734", // IoT
        "68b5d30d1d2e853054b27733", // Cloud Computing
      ],
      tags: [
        "68b67a1539400d687b63083d", // Smart Homes
        "68b67a1539400d687b630843", // Wearables
        "68b67a1539400d687b630841", // Edge Computing
      ],
      createdBy: "68b4975eac3eeb1342627127", // Admin User
      published: false,
    },
    {
      // 8
      _id: "68b69d987af68da48f18e133",
      title: "Gamification in E-learning Platforms",
      slug: "gamification-in-e-learning-platforms",
      content:
        "Gamification boosts learner engagement by integrating points, badges, and challenges into courses. E-learning platforms use gamification to make education interactive.",
      categories: [
        "68b5d30d1d2e853054b27735", // E-learning
        "68b5d30d1d2e853054b2773a", // AI
      ],
      tags: [
        "68b67a1539400d687b630851", // Gamification
        "68b67a1539400d687b63083e", // EdTech Tools
        "68b67a1539400d687b630844", // Virtual Classrooms
      ],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      published: true,
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
        "68b67a1539400d687b63084d", // Telemedicine
        "68b67a1539400d687b63083a", // Health Apps
        "68b67a1539400d687b630849", // MedTech Devices
      ],
      createdBy: "68b4975eac3eeb134262712a", // Bilal Khan
      published: true,
    },
    {
      // 10
      _id: "68b69d987af68da48f18e135",
      title: "Seed Funding Trends in Startups",
      slug: "seed-funding-trends-in-startups",
      content:
        "Seed funding provides essential capital for early-stage startups. Recent trends highlight how incubators and investors shape the journey from idea to market.",
      categories: [
        "68b5d30d1d2e853054b27737", // Startups
        "68b5d30d1d2e853054b27730", // DS
      ],
      tags: [
        "68b67a1539400d687b630838", // Seed Funding
        "68b67a1539400d687b630846", // Business Incubators
      ],
      createdBy: "68b4975eac3eeb1342627128", // Ali Raza
      published: false,
    },
    {
      // 11
      _id: "68b69d987af68da48f18e136",
      title: "AI-Powered Personal Assistants",
      slug: "ai-powered-personal-assistants",
      content:
        "Virtual assistants like Siri, Alexa, and Google Assistant leverage natural language processing and AI to make daily tasks easier for millions of users.",
      categories: ["68b5d30d1d2e853054b2773a"], // AI
      tags: [
        "68b67a1539400d687b63083c", // NLP
        "68b67a1539400d687b630842", // Voice Recognition
        "68b67a1539400d687b630847", // Chatbots
      ],
      createdBy: "68b4975eac3eeb134262712e", // Hassan Raza
      published: true,
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
        "68b67a1539400d687b630848", // Remote Work
        "68b67a1539400d687b63084a", // Collaboration Tools
        "68b67a1539400d687b630853", // Digital Nomads
      ],
      createdBy: "68b4975eac3eeb134262712d", // Maryam Iqbal
      published: true,
    },
  ];

  await Article.insertMany(articlesData);
  console.log("Articles seeded successfully.");
};

export default seedArticles;
