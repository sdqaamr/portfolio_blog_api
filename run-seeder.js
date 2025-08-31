import dbConnect from "./config/database.js";
import seedUsers from "./seeders/seedUsers.js";

const runSeeder = async () => {
  dbConnect();
  await seedUsers();
  //   console.log("Seeding completed successfully.");
  process.exit();
};

runSeeder();
