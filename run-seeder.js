import dbConnect from "./config/database.js";
import seedUsers from "./seeders/seedUsers.js";
import seedCategories from "./seeders/seedCategories.js";
import seedTags from "./seeders/seedTags.js";

const runSeeder = async () => {
  dbConnect();
  await seedUsers();
  await seedCategories();
  await seedTags();
  //   console.log("Seeding completed successfully.");
  process.exit();
};

runSeeder();
