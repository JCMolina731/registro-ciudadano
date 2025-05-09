import { useEffect, useState } from "react";
import { Office } from "@/core/offices/entities";
import { officeService } from "@/data/offices/officeService";

const OfficeList: React.FC = () => {
  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    officeService.getAll().then(setOffices);
  }, []);

  return (
    <ul className="space-y-2">
      {offices.map((office) => (
        <li key={office.id} className="border p-2">
          {office.name} ({office.acronym})
        </li>
      ))}
    </ul>
  );
};

export default OfficeList;