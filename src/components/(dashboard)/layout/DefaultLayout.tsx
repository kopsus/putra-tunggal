"use client";
import React, { useState } from "react";
import Sidebar from "../_global/Sidebar";
import Header from "../_global/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col items-end">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="py-4 mx-5 w-3/4">{children}</div>
      </div>
    </>
  );
}
