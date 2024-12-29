import { StaticImageData } from "next/image";

type TypeArticle = {
  id?: string;
  title: string;
  desc: string;
  date: string;
  image: string | StaticImageData;
};

export type { TypeArticle };
