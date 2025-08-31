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
      _id: "68b4975eac3eeb1342627127",
      fullName: "Admin User",
      email: "admin@example.com",
      role: "admin",
      otp: "1234",
      otpExpiresAt: "2025-12-31T23:59:59.000Z",
      password: "$2b$10$o.s4Aq7LAQr3kxim/KcOL.kAzL6lGMqXAHNTsoflOTLMoglveeVb.", // pswd: admin123
      profilePicture: "https://example.com/profiles/admin.jpg",
      phone: "+923330000001",
      city: "Lahore",
      gender: "female",
      status: "active",
    },
    {
      _id: "68b4975eac3eeb1342627128",
      fullName: "Ali Raza",
      email: "ali.raza@example.com",
      role: "user",
      otp: "5678",
      otpExpiresAt: "2025-11-20T10:45:00.000Z",
      password: "$2b$10$0M3K0x6jZCg1DPX5HRdQGuYnIWGG32ny5J4KecHdqriGUJu4EkQki", // pswd: raza123
      profilePicture: "https://example.com/profiles/ali_raza.jpg",
      phone: "+923330000002",
      city: "Karachi",
      gender: "male",
      status: "active",
    },
    {
      _id: "68b4975eac3eeb1342627129",
      fullName: "Sara Ahmed",
      email: "sara.ahmed@example.com",
      role: "user",
      otp: "4321",
      otpExpiresAt: "2025-10-15T09:30:00.000Z",
      password: "$2b$10$C7myWPdEIkhSoMRW65oMDe1I/TQ90.nAYPImoqnLUKsNdHN3lGViy", // pswd: sara123
      profilePicture: "https://example.com/profiles/sara_ahmed.jpg",
      phone: "+923330000003",
      city: "Islamabad",
      gender: "female",
      status: "inactive",
    },
    {
      _id: "68b4975eac3eeb134262712a",
      fullName: "Bilal Khan",
      email: "bilal.khan@example.com",
      role: "user",
      otp: "8765",
      otpExpiresAt: "2025-09-05T14:20:00.000Z",
      password: "$2b$10$L.vN2iuiK9VWhLPxmbR8uuUQ/DOjLiytFdP8km4DNcLNfHKjh0RfO", // pswd: bilal123
      profilePicture: "https://example.com/profiles/bilal_khan.jpg",
      phone: "+923330000004",
      city: "Faisalabad",
      gender: "male",
      status: "active",
    },
    {
      _id: "68b4975eac3eeb134262712b",
      fullName: "Ayesha Siddiqui",
      email: "ayesha.s@example.com",
      role: "user",
      otp: "9876",
      otpExpiresAt: "2025-08-01T08:00:00.000Z",
      password: "$2b$10$eEaVZ8M0J/.lGmGIPdfAqecPFonVp.MI9J39GOjQYJxRMGY0H0pzy", // pswd: ayesha123
      profilePicture: "https://example.com/profiles/ayesha_siddiqui.jpg",
      phone: "+923330000005",
      city: "Multan",
      gender: "female",
      status: "active",
    },
    {
      _id: "68b4975eac3eeb134262712c",
      fullName: "Usman Shah",
      email: "usman.shah@example.com",
      role: "user",
      otp: "3456",
      otpExpiresAt: "2025-07-18T12:15:00.000Z",
      password: "$2b$10$YG5Dbl/HHK0Z1sTk3vcuFOGMw2FNZdokxUdNpY5qp18kANiwsDy6e", // pswd: usman123
      profilePicture: "https://example.com/profiles/usman_shah.jpg",
      phone: "+923330000006",
      city: "Peshawar",
      gender: "male",
      status: "banned",
    },
    {
      _id: "68b4975eac3eeb134262712d",
      fullName: "Maryam Iqbal",
      email: "maryam.iqbal@example.com",
      role: "user",
      otp: "6789",
      otpExpiresAt: "2025-06-10T11:00:00.000Z",
      password: "$2b$10$W3U4dWdpRrtIe1XB0AZTxeKtb6WuHYUDPZsyb5079Piy/OJDod21a", // pswd: maryam123
      profilePicture: "https://example.com/profiles/maryam_iqbal.jpg",
      phone: "+923330000007",
      city: "Quetta",
      gender: "female",
      status: "active",
    },
    {
      _id: "68b4975eac3eeb134262712e",
      fullName: "Hassan Raza",
      email: "hassan.raza@example.com",
      role: "user",
      otp: "1111",
      otpExpiresAt: "2025-05-22T16:45:00.000Z",
      password: "$2b$10$okp0.JT.aGRCJPZ9IcqsEOZwP1dZoRtWW05i3wC7O7C2xVNR3XGIe", // pswd: hassan123
      profilePicture: "https://example.com/profiles/hassan_raza.jpg",
      phone: "+923330000008",
      city: "Sialkot",
      gender: "male",
      status: "active",
    },
    {
      _id: "68b4975eac3eeb134262712f",
      fullName: "Noor Fatima",
      email: "noor.fatima@example.com",
      role: "user",
      otp: "2222",
      otpExpiresAt: "2025-04-25T13:20:00.000Z",
      password: "$2b$10$wMfQdg9OuPAltmfiNKPWFuaKBFRuNXei21XXuQNcmASTqE0XooLIa", // pswd: noor123
      profilePicture: "https://example.com/profiles/noor_fatima.jpg",
      phone: "+923330000009",
      city: "Hyderabad",
      gender: "female",
      status: "inactive",
    },
    {
      _id: "68b4975eac3eeb1342627130",
      fullName: "Kamran Ali",
      email: "kamran.ali@example.com",
      role: "user",
      otp: "3333",
      otpExpiresAt: "2025-03-30T19:30:00.000Z",
      password: "$2b$10$FNwC8HNRBN56GPvX3qxgQ.QO/mm6doLOhjBbVf87LrMVrtbsjzgYO", // pswd: kamran123
      profilePicture: "https://example.com/profiles/kamran_ali.jpg",
      phone: "+923330000010",
      city: "Rawalpindi",
      gender: "male",
      status: "active",
    },
  ];

  await Users.insertMany(usersData);
  console.log("Users seeded successfully.");
};

export default seedUsers;
