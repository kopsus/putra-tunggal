import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { TitleContent } from "../../_global/components/Text";
import { biayaPelayanan } from "../libs/data";

const ServiceFee = () => {
  return (
    <div className="Container flex flex-col">
      <TitleContent className="mb-5">Biaya pelayanan</TitleContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pelayanan</TableHead>
            <TableHead>Biaya</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {biayaPelayanan.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="min-w-[532px]">{item.pelayanan}</TableCell>
              <TableCell>{item.biaya}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-primary px-4 py-2 text-white">
        <p>Catatan:</p>
        <p>
          Harga dapat berubah untuk info lebih lanjut hubungi: 0815-4282-4697
        </p>
      </div>
    </div>
  );
};

export default ServiceFee;
