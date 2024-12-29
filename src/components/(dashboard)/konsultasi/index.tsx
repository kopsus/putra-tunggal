"use client";

import { ArrowLeft, User } from "lucide-react";
import React from "react";
import { HistoryChat } from "./HistoryChat";
import Card from "../_global/Card";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Chat } from "./Chat";
import { Button } from "@/components/ui/button";

const Konsultasi = () => {
  const [isOpenChat, setIsOpenChat] = React.useState(false);
  const [tabActive, setTabActive] = React.useState("Online");

  return (
    <>
      {isOpenChat ? (
        <Button
          onClick={() => setIsOpenChat(false)}
          className="bg-red hover:bg-red/80 mb-5"
        >
          <ArrowLeft /> Kembali
        </Button>
      ) : (
        <div className="flex items-center gap-2 mb-5">
          <button
            onClick={() => setTabActive("Online")}
            className={`${
              tabActive === "Online" ? "bg-primary text-white" : ""
            } flex items-center gap-1 rounded-full overflow-hidden py-2 px-4 text-sm`}
          >
            <User size={28} />
            Online
          </button>
          <button
            onClick={() => setTabActive("Offline")}
            className={`${
              tabActive === "Offline" ? "bg-primary text-white" : ""
            } flex items-center gap-1 rounded-full overflow-hidden py-2 px-4 text-sm`}
          >
            <RiCalendarScheduleLine size={28} />
            Offline
          </button>
        </div>
      )}
      <Card className="rounded-xl overflow-hidden p-5">
        {tabActive === "Online" ? (
          <>
            <HistoryChat
              isOpenChat={isOpenChat}
              setIsOpenChat={setIsOpenChat}
            />
            <Chat isOpenChat={isOpenChat} setIsOpenChat={setIsOpenChat} />
          </>
        ) : null}
      </Card>
    </>
  );
};

export default Konsultasi;
