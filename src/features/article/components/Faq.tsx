import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { faq } from "../libs/data";

const Faq = () => {
  return (
    <div className="Container">
      <div className="ContainerX">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-y-2"
        >
          {faq.map((item, index) => (
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
