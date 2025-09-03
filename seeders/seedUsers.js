const seedUsers = async () => {
  const module = await import("../models/users.js");
  const Users = module.default;

  const count = await Users.countDocuments();
  if (count > 0) {
    console.log("Users already seeded.");
    return;
  }

  // Example Users data (10 docs)
  const usersData = [
    {
      // 1
      _id: "68b4975eac3eeb1342627127",
      fullName: "Admin User",
      email: "admin@example.com",
      role: "admin",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$o.s4Aq7LAQr3kxim/KcOL.kAzL6lGMqXAHNTsoflOTLMoglveeVb.", // pswd: admin123
      profilePicture: "https://example.com/profiles/admin.jpg",
      phone: "+923330000001",
      city: "Lahore",
      gender: "female",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
      categoriesCreated: [
        "68b5d30d1d2e853054b27734", // Internet of Things
        "68b5d30d1d2e853054b2772f", // Machine Learning
      ],
      articlesCreated: [
        "68b69d987af68da48f18e12c", // Article 1
        "68b69d987af68da48f18e132", // Article 7
      ],
      tagsCreated: [
        "68b67a1539400d687b630840", // Neural Networks
        "68b67a1539400d687b630845", // Deep Learning
        "68b67a1539400d687b630852", // Computer Vision
        "68b67a1539400d687b63083d", // Smart Homes
        "68b67a1539400d687b630843", // Wearables
        "68b67a1539400d687b630841", // Edge Computing
      ],
    },
    {
      // 2
      _id: "68b4975eac3eeb1342627128",
      fullName: "Ali Raza",
      email: "ali.raza@example.com",
      role: "user",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$0M3K0x6jZCg1DPX5HRdQGuYnIWGG32ny5J4KecHdqriGUJu4EkQki", // pswd: raza123
      profilePicture: "https://example.com/profiles/ali_raza.jpg",
      phone: "+923330000002",
      city: "Karachi",
      gender: "male",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
      categoriesCreated: [
        "68b5d30d1d2e853054b27730", // Data Science
        "68b5d30d1d2e853054b27732", // Cybersecurity
      ],
      articlesCreated: [
        "68b69d987af68da48f18e12e", // Article 3
        "68b69d987af68da48f18e135", // Article 10
        "68b69d987af68da48f18e12d", // Article 2
      ],
      tagsCreated: [
        "68b67a1539400d687b63083b", // Predictive Analytics
        "68b67a1539400d687b630837", // Big Data
        "68b67a1539400d687b630838", // Seed Funding
        "68b67a1539400d687b630846", // Business Incubators
      ],
    },
    {
      // 3
      _id: "68b4975eac3eeb1342627129",
      fullName: "Sara Ahmed",
      email: "sara.ahmed@example.com",
      role: "user",
      otp: 4321,
      otpExpiresAt: "2025-10-15T09:30:00.000Z",
      password: "$2b$10$C7myWPdEIkhSoMRW65oMDe1I/TQ90.nAYPImoqnLUKsNdHN3lGViy", // pswd: sara123
      profilePicture: "https://example.com/profiles/sara_ahmed.jpg",
      phone: "+923330000003",
      city: "Islamabad",
      gender: "female",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "inactive",
    },
    {
      // 4
      _id: "68b4975eac3eeb134262712a",
      fullName: "Bilal Khan",
      email: "bilal.khan@example.com",
      role: "user",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$L.vN2iuiK9VWhLPxmbR8uuUQ/DOjLiytFdP8km4DNcLNfHKjh0RfO", // pswd: bilal123
      profilePicture: "https://example.com/profiles/bilal_khan.jpg",
      phone: "+923330000004",
      city: "Faisalabad",
      gender: "male",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
      categoriesCreated: ["68b5d30d1d2e853054b27736"], // HealthTech
      articlesCreated: [
        "68b69d987af68da48f18e134", // Article 9
        "68b69d987af68da48f18e130", // Article 5
      ],
      tagsCreated: [
        "68b67a1539400d687b63084d", // Telemedicine
        "68b67a1539400d687b63083a", // Health Apps
        "68b67a1539400d687b630849", // MedTech Devices
        "68b67a1539400d687b630839", // Ethical Hacking
        "68b67a1539400d687b630850", // Penetration Testing
        "68b67a1539400d687b63084b", // Zero Trust
      ],
    },
    {
      // 5
      _id: "68b4975eac3eeb134262712b",
      fullName: "Ayesha Siddiqui",
      email: "ayesha.s@example.com",
      role: "user",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$eEaVZ8M0J/.lGmGIPdfAqecPFonVp.MI9J39GOjQYJxRMGY0H0pzy", // pswd: ayesha123
      profilePicture: "https://example.com/profiles/ayesha_siddiqui.jpg",
      phone: "+923330000005",
      city: "Multan",
      gender: "female",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
    },
    {
      // 6
      _id: "68b4975eac3eeb134262712c",
      fullName: "Usman Shah",
      email: "usman.shah@example.com",
      role: "user",
      otp: 3456,
      otpExpiresAt: "2025-07-18T12:15:00.000Z",
      password: "$2b$10$YG5Dbl/HHK0Z1sTk3vcuFOGMw2FNZdokxUdNpY5qp18kANiwsDy6e", // pswd: usman123
      profilePicture: "https://example.com/profiles/usman_shah.jpg",
      phone: "+923330000006",
      city: "Peshawar",
      gender: "male",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "banned",
    },
    {
      // 7
      _id: "68b4975eac3eeb134262712d",
      fullName: "Maryam Iqbal",
      email: "maryam.iqbal@example.com",
      role: "user",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$W3U4dWdpRrtIe1XB0AZTxeKtb6WuHYUDPZsyb5079Piy/OJDod21a", // pswd: maryam123
      profilePicture: "https://example.com/profiles/maryam_iqbal.jpg",
      phone: "+923330000007",
      city: "Quetta",
      gender: "female",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
      categoriesCreated: [
        "68b5d30c1d2e853054b2772e", // E-Learning
        "68b5d30d1d2e853054b2773a", // Artificial Intelligence
        "68b5d30d1d2e853054b27733", // Cloud Computing
      ],
      articlesCreated: [
        "68b69d987af68da48f18e133", // Article 8
        "68b69d987af68da48f18e131", // Article 6
        "68b69d987af68da48f18e137", // Article 12
      ],
      tagsCreated: [
        "68b67a1539400d687b630851", // Gamification
        "68b67a1539400d687b63083e", // EdTech Tools
        "68b67a1539400d687b630844", // Virtual Classrooms
        "68b67a1539400d687b63084e", // Hybrid Cloud
        "68b67a1539400d687b63083f", // Cloud Security
        "68b67a1439400d687b630836", // Serverless
        "68b67a1539400d687b630848", // Remote Work
        "68b67a1539400d687b63084a", // Collaboration Tools
        "68b67a1539400d687b630853", // Digital Nomads
      ],
    },
    {
      // 8
      _id: "68b4975eac3eeb134262712e",
      fullName: "Hassan Raza",
      email: "hassan.raza@example.com",
      role: "user",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$okp0.JT.aGRCJPZ9IcqsEOZwP1dZoRtWW05i3wC7O7C2xVNR3XGIe", // pswd: hassan123
      profilePicture: "https://example.com/profiles/hassan_raza.jpg",
      phone: "+923330000008",
      city: "Sialkot",
      gender: "male",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
      articlesCreated: ["68b69d987af68da48f18e136"], // Article 11
      tagsCreated: [
        "68b67a1539400d687b63083c", // NLP
        "68b67a1539400d687b630842", // Voice Recognition
        "68b67a1539400d687b630847", // Chatbots
      ],
    },
    {
      // 9
      _id: "68b4975eac3eeb134262712f",
      fullName: "Noor Fatima",
      email: "noor.fatima@example.com",
      role: "user",
      otp: 9822,
      otpExpiresAt: "2025-04-25T13:20:00.000Z",
      password: "$2b$10$wMfQdg9OuPAltmfiNKPWFuaKBFRuNXei21XXuQNcmASTqE0XooLIa", // pswd: noor123
      profilePicture: "https://example.com/profiles/noor_fatima.jpg",
      phone: "+923330000009",
      city: "Hyderabad",
      gender: "female",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "inactive",
    },
    {
      // 10
      _id: "68b4975eac3eeb1342627130",
      fullName: "Kamran Ali",
      email: "kamran.ali@example.com",
      role: "user",
      otp: null,
      otpExpiresAt: null,
      password: "$2b$10$FNwC8HNRBN56GPvX3qxgQ.QO/mm6doLOhjBbVf87LrMVrtbsjzgYO", // pswd: kamran123
      profilePicture: "https://example.com/profiles/kamran_ali.jpg",
      phone: "+923330000010",
      city: "Rawalpindi",
      gender: "male",
      createdAt: "2025-09-01T17:00:00.000Z",
      updatedAt: "2025-09-01T17:00:00.000Z",
      status: "active",
      categoriesCreated: [
        "68b5d30d1d2e853054b27737", // Startups
        "68b5d30d1d2e853054b27731", // Blockchain
      ],
      articlesCreated: [
        "68b69d987af68da48f18e12f", // Article 4
      ],
      tagsCreated: [
        "68b67a1539400d687b63084c", // DApps
        "68b67a1539400d687b63084f", // NFTs
      ],
    },
  ];

  await Users.insertMany(usersData);
  console.log("Users seeded successfully.");
};

export default seedUsers;
