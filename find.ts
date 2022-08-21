import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// async function main() {
//     let result = await prisma.courses.findFirst();
//     result = await prisma.courses.findFirst({
//         take: -1,
//     });
//     console.log(result);
//
// }
// main();

// async function buscar() {
//     const result = await prisma.courses.findMany({
//         include: {
//             teacher: true,
//         }
//     });
//     console.log(result);
//
// }
//
// buscar()