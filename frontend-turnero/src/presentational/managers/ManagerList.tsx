import { useEffect, useState } from "react";
import { Office } from "@/core/offices/entities";
import { Manager } from "@/core/managers/entities";
import { managerService } from "@/data/managers/managerService";
import { officeService } from "@/data/offices/officeService";
/* Tabla*/ 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import ManagerEdit from "./ManagerEdit";

const ManagerList: React.FC = () => {
  const [manager, setManagers] = useState<Manager[]>([]);
  const [offices, setOffices] = useState<Office[]>([]);
  useEffect(() => {
    const fetchData = async () => {
        const [mgrs, offs] = await Promise.all([
          managerService.getAll(),  // <-- managers
          officeService.getAll()    // <-- offices
        ]);
        setManagers(mgrs);
        setOffices(offs);
      };

    fetchData();
  }, []);

  const getOfficeById = (id: number) => {
    return offices.find((o) => o.id === id);
  };
  
  return (
    <>   
      <h1 className="text-center">Lista de Funcionarios</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">DNI</TableHead>
            <TableHead>Nombres y Apellidos</TableHead>
            <TableHead>Oficina</TableHead>
            <TableHead>Acciones</TableHead>
            <TableHead>Ubicacion</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {manager.map((mgr) => 
            {
              const office = getOfficeById(mgr.idoffice);
              return(
                <TableRow key={mgr.id}>
                    <TableCell className="border p-2">{mgr.dni}</TableCell>
                    <TableCell className="border p-2">{mgr.name} {mgr.firstlastname} {mgr.secondlastname}</TableCell>
                    <TableCell className="border p-2">{office?.name}</TableCell>
                    <TableCell className="border p-2">{office?.location} Piso</TableCell>
                    <TableCell className=" space-x-4 ">
                      <ManagerEdit manager ={mgr} />
                      <Button className="border p-2 bg-red-500 ">Eliminar</Button>
                    </TableCell>
                </TableRow>
            )
            }
            )} 
        </TableBody>
      </Table>
    </>
  );
};

export default ManagerList;