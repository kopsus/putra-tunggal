import { Profile } from "@/components/profile/Profile";
import TableHistory from "@/components/profile/TableHistory";
import React from "react";

const page = () => {
  return (
    <div className="Container w-10/12 mx-auto flex flex-col gap-20">
      <Profile />
      <TableHistory />
    </div>
  );
};

export default page;
