"use client";

import { useQueryArticles } from "@/api/article/queries";
import mentalHealthIMG from "@/assets/mental_health.svg";
import Image from "next/image";

const MentalHealth = () => {
  const { dataArticles } = useQueryArticles();

  return (
    <div className="Container">
      {dataArticles?.slice(0, 1).map((item, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-2 items-start gap-8 lg:gap-20"
        >
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <p className="titleSection hidden lg:block">
              {/* Mari Berkenalan dengan{" "}
            <span className="text-primary">“Mental Health”</span> */}
              {item.title}
            </p>
            <p>{item.desc}</p>
          </div>
          <div className="order-1 lg:order-2 w-full">
            <p className="titleSection flex flex-col text-center mb-4 lg:hidden">
              {item.title}
              {/* Mari Berkenalan dengan{" "}
              <span className="text-primary">“Mental Health”</span> */}
            </p>
            <div className="lg:w-[464px] lg:h-[333px] w-full rounded-3xl shadow-md border overflow-hidden">
              <Image
                src={mentalHealthIMG}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
              {/* <p className="text-blue/80">{formatDate(item.date)}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { MentalHealth };
