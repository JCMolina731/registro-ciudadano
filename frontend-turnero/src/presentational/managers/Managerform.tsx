import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { officeService } from "@/data/offices/officeService";
import { Office } from "@/core/offices/entities";

interface ManagerFormProps {
  onSubmit: (data: { 
    dni: number; name: 
    string;firstlastname: 
    string; secondlastname: 
    string;  idoffice: number }) => void;
  initialData?: {
    dni: number;
    name: string;
    firstlastname: string;
    secondlastname: string;
    idoffice: number;
  };
}

const ManagerForm: React.FC<ManagerFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    dni: initialData?.dni || 23232323 ,
    name: initialData?.name || "",
    firstlastname: initialData?.firstlastname || "",
    secondlastname: initialData?.secondlastname || "" ,
    idoffice: initialData?.idoffice || 1,
  });

  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    officeService.getAll().then(setOffices);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "idoffice" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.dni || !formData.name || !formData.firstlastname || !formData.secondlastname) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
      <Input
        name="dni"
        placeholder="DNI"
        value={formData.dni}
        onChange={handleChange}
      />  
      <Input
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        name="firstlastname"
        placeholder="Apellido Paterno"
        value={formData.firstlastname}
        onChange={handleChange}
      />
      <Input
        name="secondlastname"
        placeholder="Apellido Materno"
        value={formData.secondlastname}
        onChange={handleChange}
      />
      <select
        name="idoffice"
        value={formData.idoffice}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        {offices.map((office) => (
          <option key={office.id} value={office.id}>
            {office.name}
          </option>
        ))}
      </select>
      <Button type="submit" className="bg-green-500">Registrar Funcionario</Button>
    </form>
  );
};

export default ManagerForm;