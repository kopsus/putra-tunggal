"use client";

import { useQueryProfile } from "@/api/user/queries";
import TableRiwayat from "@/components/(dashboard)/riwayat/Table";
import { Profile } from "@/components/profile/Profile";
import TableHistory from "@/components/profile/TableHistory";
import React from "react";

const ProfilePage = () => {
  const { dataProfile } = useQueryProfile();

  return (
    <div className="Container w-10/12 mx-auto flex flex-col gap-20">
      <Profile />
      {dataProfile?.role?.role === "User" ? (
        <TableHistory />
      ) : dataProfile?.role?.role === "Dokter" ? (
        <TableRiwayat searchName="" />
      ) : null}
    </div>
  );
};

export default ProfilePage;
