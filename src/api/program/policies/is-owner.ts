// src/api/program/policies/is-owner.ts

export default async (policyContext: any, config: any, { strapi }: { strapi: any }) => {
  // 1. Dapatkan informasi pengguna yang sedang login
  const user = policyContext.state.user;

  // 2. Dapatkan parameter 'id' dari URL (misal: /api/programs/123)
  const { id } = policyContext.params;

  // Pastikan pengguna sudah login dan ada ID program yang diminta.
  if (!user || !id) {
    return false; // Tolak akses jika tidak memenuhi syarat.
  }

  // 3. Gunakan 'strapi.entityService' untuk mencari program di database.
  const program = await strapi.entityService.findOne('api::program.program', id, {
    populate: ['pic'], // Kita minta Strapi untuk menyertakan data relasi 'pic'.
  });

  // Jika program tidak ditemukan, tolak akses.
  if (!program) {
    return false;
  }
  
  // 4. Periksa apakah ID pengguna yang login SAMA DENGAN ID PIC yang terhubung ke program.
  if (program.pic && program.pic.id === user.id) {
    // Jika cocok, kembalikan 'true' untuk mengizinkan akses.
    return true;
  }

  // 5. Jika tidak cocok, kembalikan 'false' untuk menolak akses.
  return false;
};
