import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { officeService } from "@/data/offices/officeService";
import { Manager } from "@/core/managers/entities";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


interface ManagerEditProps {
    manager: Manager;
  }

const ManagerEdit: React.FC<ManagerEditProps> = ({ manager }) =>{
    const [dni, setDni] = useState(manager.dni);
    const [name, setName] = useState(manager.name);
    const [firstLastname, setFirstLastname] = useState(manager.firstlastname);
    const [secondLastname, setSecondLastname] = useState(manager.secondlastname);
    const [idoffice, setIdOffice] = useState(manager.idoffice);
    const [offices, setOffices] = useState<Office[]>([]);
    const [selectedOfficeId, setSelectedOfficeId] = useState<number>(manager.idoffice);
    const [open, setOpen] = useState(false);

    const getOfficeById = (id: number) => {
        return offices.find((o) => o.id === id);
      };

      useEffect(() => {
        const fetchOffices = async () => {
          const data = await officeService.getAll();
          setOffices(data);
        };
        fetchOffices();
      }, []);
    return(
        <Dialog>
            <DialogTrigger>
                <Button className="border p-2 bg-amber-400">Editar</Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                <DialogTitle>Editar Datos del Funcionario</DialogTitle>
                <DialogDescription>
                    Modifica tu perfil {name} {firstLastname}.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="dni" className="text-right">
                    DNI
                    </Label>
                    <Input id="dni" value={dni} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                    Nombres
                    </Label>
                    <Input id="name" value={name} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="firstlastname" className="text-right">
                    Apellido Paterno
                    </Label>
                    <Input id="firstlastname" value={firstLastname} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="secondlastname" className="text-right">
                    Apellido Materno
                    </Label>
                    <Input id="secondlastname" value={secondLastname} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="idoffice" className="text-right">
                    Oficina
                    </Label>
                    <Input id="idoffice" value={manager.idoffice} className="col-span-3" />
                </div>
                </div>
                <DialogFooter>
                <Button type="submit" className="bg-green-500">Guardar Cambios</Button>
                </DialogFooter>
            </DialogContent>
            </Dialog>
    )
}

export default ManagerEdit;