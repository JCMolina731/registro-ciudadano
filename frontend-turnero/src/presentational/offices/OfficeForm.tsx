import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface OfficeFormProps {
  onSubmit: (data: { name: string; acronym: string; location: number }) => void;
  initialData?: {
    name: string;
    acronym: string;
    location: number;
  };
}

const OfficeForm: React.FC<OfficeFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    acronym: initialData?.acronym || "",
    location: initialData?.location || 1, // valor por defecto 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "location" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.acronym || !formData.location) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
      <Input
        name="name"
        placeholder="Nombre de la oficina"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        name="acronym"
        placeholder="Siglas (acronym)"
        value={formData.acronym}
        onChange={handleChange}
      />
      <select
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value={1}>Primer Piso</option>
        <option value={2}>Segundo Piso</option>
        <option value={3}>Tercer Piso</option>
        <option value={4}>Cuarto Piso</option>
      </select>
      <Button type="submit">Guardar Oficina</Button>
    </form>
  );
};

export default OfficeForm;