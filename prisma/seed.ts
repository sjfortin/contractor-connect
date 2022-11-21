import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";
import { projectData } from "./projectData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    projectData.map(async (project) => {
      return prisma.project.upsert({
        where: { projectSlug: project.projectSlug },
        update: {},
        create: {
          name: project.name,
          projectSlug: project.projectSlug,
          category: project.category,
        },
      });
    })
  );
};

run()
  .catch((error) => {
    console.log({ error });
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
