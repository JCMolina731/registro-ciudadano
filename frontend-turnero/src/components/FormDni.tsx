import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FormDniProps {
    dni: string;
    setDni: (dni: string) => void;
    onSubmit: (dni: string) => void;
  }


  const FormDni: React.FC<FormDniProps> = ({ dni, setDni, onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (dni.length === 8) {
        onSubmit(dni);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          maxLength={8}
          placeholder="Ingrese DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </form>
    );
  };
  
  export default FormDni;