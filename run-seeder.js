import dbConnect from "./config/database.js";
import seedUsers from "./seeders/seedUsers.js";
import seedCategories from "./seeders/seedCategories.js";

const runSeeder = async () => {
  dbConnect();
  await seedUsers();
  await seedCategories();
  //   console.log("Seeding completed successfully.");
  process.exit();
};

runSeeder();
