import { TitleContent } from "../../_global/components/Text";
import Logo from "../../../assets/logo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const Faq = () => {
  return (
    <div className="Container">
      <div className="flex items-center justify-center gap-x-2">
        <TitleContent>Tanya Biro Psikologi Putra Tunggal(FAQs)</TitleContent>
        <div className="bg-primary flex items-center gap-1 px-2 rounded-lg">
          <img src={Logo} alt="logo" className="w-12 h-12" />
          <p className="text-white text-2xl font-medium leading-[37.5px]">
            Putra Tunggal
          </p>
        </div>
      </div>
      <div className="my-16 px-5 md:px-10 lg:px-16">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-y-2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Perbedaan psikolog dan psikiater
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Apakah data yang diberikan pada terapis terjamin kerahasiaannya?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Berapa kali saya harus melakukan konsultasi?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Apakah saya perlu meminum obat?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Berapa biaya pelayanan di Psikologi Putra Tunggal?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
