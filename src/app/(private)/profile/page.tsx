import TableRiwayat from "@/components/(dashboard)/riwayat/Table";
import { Profile } from "@/components/profile/Profile";
import TableHistory from "@/components/profile/TableHistory";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const token = (await cookies()).get("accessToken");
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const resp = await fetch(baseUrl + "/api/user?token=" + token?.value);
  const user = (await resp.json()).data;
  
  return (
    <div className="Container w-10/12 mx-auto flex flex-col gap-20">
      <Profile user={user} />
      {
        user.role.role === 'User' ? (
          <TableHistory />
        ): user.role.role === "Dokter" ? (
          <TableRiwayat searchName="" />
        ): null
      }
    </div>
  );
};

export default page;
