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
      // 17
      _id: "68b67a1439400d687b630836",
      name: "Serverless",
      slug: "serverless",
      //   createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T16:10:00.000Z",
      updatedAt: "2025-09-01T16:10:00.000Z",
    },
    {
      // 3
      _id: "68b67a1539400d687b630837",
      name: "Big Data",
      slug: "big-data",
      //   createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T16:00:00.000Z",
      updatedAt: "2025-09-01T16:00:00.000Z",
    },
    {
      // 29
      _id: "68b67a1539400d687b630838",
      name: "Seed Funding",
      slug: "seed-funding",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T16:22:00.000Z",
      updatedAt: "2025-09-01T16:22:00.000Z",
    },
    {
      // 12
      _id: "68b67a1539400d687b630839",
      name: "Ethical Hacking",
      slug: "ethical-hacking",
      //   createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T16:05:00.000Z",
      updatedAt: "2025-09-01T16:05:00.000Z",
    },
    {
      // 26
      _id: "68b67a1539400d687b63083a",
      name: "Health Apps",
      slug: "health-apps",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T16:19:00.000Z",
      updatedAt: "2025-09-01T16:19:00.000Z",
    },
    {
      // 5
      _id: "68b67a1539400d687b63083b",
      name: "Predictive Analytics",
      slug: "predictive-analytics",
      //   createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T16:02:00.000Z",
      updatedAt: "2025-09-01T16:02:00.000Z",
    },
    {
      // 22
      _id: "68b67a1539400d687b63083c",
      name: "LMS",
      slug: "lms",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T16:15:00.000Z",
      updatedAt: "2025-09-01T16:15:00.000Z",
    },
    {
      // 7
      _id: "68b67a1539400d687b63083d",
      name: "Smart Homes",
      slug: "smart-homes",
      //   createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T16:03:00.000Z",
      updatedAt: "2025-09-01T16:03:00.000Z",
    },
    {
      // 25
      _id: "68b67a1539400d687b63083e",
      name: "EdTech Tools",
      slug: "edtech-tools",
      //   createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T16:18:00.000Z",
      updatedAt: "2025-09-01T16:18:00.000Z",
    },
    {
      // 15
      _id: "68b67a1539400d687b63083f",
      name: "Cloud Security",
      slug: "cloud-security",
      //   createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T16:08:00.000Z",
      updatedAt: "2025-09-01T16:08:00.000Z",
    },
    {
      // 1
      _id: "68b67a1539400d687b630840",
      name: "Neural Networks",
      slug: "neural-networks",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T15:58:00.000Z",
      updatedAt: "2025-09-01T15:58:00.000Z",
    },
    {
      // 18
      _id: "68b67a1539400d687b630841",
      name: "Edge Computing",
      slug: "edge-computing",
      //   createdBy: "68b4975eac3eeb134262712a",
      createdAt: "2025-09-01T16:11:00.000Z",
      updatedAt: "2025-09-01T16:11:00.000Z",
    },
    {
      // 10
      _id: "68b67a1539400d687b630842",
      name: "Ransomware",
      slug: "ransomware",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T16:04:00.000Z",
      updatedAt: "2025-09-01T16:04:00.000Z",
    },
    {
      // 8
      _id: "68b67a1539400d687b630843",
      name: "Wearables",
      slug: "wearables",
      //   createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T16:03:30.000Z",
      updatedAt: "2025-09-01T16:03:30.000Z",
    },
    {
      // 23
      _id: "68b67a1539400d687b630844",
      name: "Virtual Classrooms",
      slug: "virtual-classrooms",
      //   createdBy: "68b4975eac3eeb134262712a",
      createdAt: "2025-09-01T16:16:00.000Z",
      updatedAt: "2025-09-01T16:16:00.000Z",
    },
    {
      // 4
      _id: "68b67a1539400d687b630845",
      name: "Deep Learning",
      slug: "deep-learning",
      //   createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T16:01:00.000Z",
      updatedAt: "2025-09-01T16:01:00.000Z",
    },
    {
      // 30
      _id: "68b67a1539400d687b630846",
      name: "Business Incubators",
      slug: "business-incubators",
      //   createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T16:23:00.000Z",
      updatedAt: "2025-09-01T16:23:00.000Z",
    },
    {
      // 21
      _id: "68b67a1539400d687b630847",
      name: "MOOCs",
      slug: "moocs",
      //   createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T16:14:00.000Z",
      updatedAt: "2025-09-01T16:14:00.000Z",
    },
    {
      // 6
      _id: "68b67a1539400d687b630848",
      name: "AR/VR",
      slug: "ar-vr",
      //   createdBy: "68b4975eac3eeb134262712a",
      createdAt: "2025-09-01T16:02:30.000Z",
      updatedAt: "2025-09-01T16:02:30.000Z",
    },
    {
      // 28
      _id: "68b67a1539400d687b630849",
      name: "MedTech Devices",
      slug: "medtech-devices",
      //   createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T16:21:00.000Z",
      updatedAt: "2025-09-01T16:21:00.000Z",
    },
    {
      // 9
      _id: "68b67a1539400d687b63084a",
      name: "Phishing",
      slug: "phishing",
      //   createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T16:04:30.000Z",
      updatedAt: "2025-09-01T16:04:30.000Z",
    },
    {
      // 13
      _id: "68b67a1539400d687b63084b",
      name: "Zero Trust",
      slug: "zero-trust",
      //   createdBy: "68b4975eac3eeb134262712a",
      createdAt: "2025-09-01T16:06:00.000Z",
      updatedAt: "2025-09-01T16:06:00.000Z",
    },
    {
      // 19
      _id: "68b67a1539400d687b63084c",
      name: "DApps",
      slug: "dapps",
      //   createdBy: "68b4975eac3eeb134262712d",
      createdAt: "2025-09-01T16:12:00.000Z",
      updatedAt: "2025-09-01T16:12:00.000Z",
    },
    {
      // 27
      _id: "68b67a1539400d687b63084d",
      name: "Telemedicine",
      slug: "telemedicine",
      //   createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T16:20:00.000Z",
      updatedAt: "2025-09-01T16:20:00.000Z",
    },
    {
      // 16
      _id: "68b67a1539400d687b63084e",
      name: "Hybrid Cloud",
      slug: "hybrid-cloud",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T16:09:00.000Z",
      updatedAt: "2025-09-01T16:09:00.000Z",
    },
    {
      // 20
      _id: "68b67a1539400d687b63084f",
      name: "NFTs",
      slug: "nfts",
      //   createdBy: "68b4975eac3eeb1342627130",
      createdAt: "2025-09-01T16:13:00.000Z",
      updatedAt: "2025-09-01T16:13:00.000Z",
    },
    {
      // 14
      _id: "68b67a1539400d687b630850",
      name: "Penetration Testing",
      slug: "penetration-testing",
      //   createdBy: "68b4975eac3eeb1342627127",
      createdAt: "2025-09-01T16:07:00.000Z",
      updatedAt: "2025-09-01T16:07:00.000Z",
    },
    {
      // 24
      _id: "68b67a1539400d687b630851",
      name: "Gamification",
      slug: "gamification",
      //   createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T16:17:00.000Z",
      updatedAt: "2025-09-01T16:17:00.000Z",
    },
    {
      // 2
      _id: "68b67a1539400d687b630852",
      name: "Computer Vision",
      slug: "computer-vision",
      //   createdBy: "68b4975eac3eeb134262712a",
      createdAt: "2025-09-01T15:59:00.000Z",
      updatedAt: "2025-09-01T15:59:00.000Z",
    },
    {
      // 11
      _id: "68b67a1539400d687b630853",
      name: "Malware Analysis",
      slug: "malware-analysis",
      //   createdBy: "68b4975eac3eeb1342627128",
      createdAt: "2025-09-01T16:05:30.000Z",
      updatedAt: "2025-09-01T16:05:30.000Z",
    },
  ];

  await Tag.insertMany(tagsData);
  console.log("Tags seeded successfully.");
};

export default seedTags;
