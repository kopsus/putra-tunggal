import { TitleContent } from "../../_global/components/Text";
import Logo from "../../../assets/logo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { dataFaq } from "../libs/data";

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
      <div className="my-16 ContainerX">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-y-2"
        >
          {dataFaq.map((item, index) => (
            <AccordionItem key={index} value={item.answer}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
