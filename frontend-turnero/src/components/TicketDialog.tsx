import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Office {
    id: number;
    acronym: string;
    name: string;
  }
  
  interface TicketDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onSelect: (officeId: number) => void;
  }
  
  const TicketDialog: React.FC<TicketDialogProps> = ({ open, setOpen, onSelect }) => {
    const [offices, setOffices] = useState<Office[]>([]);
    const [filtered, setFiltered] = useState<Office[]>([]);
  
    useEffect(() => {
      const fetchOffices = async () => {
        const res = await fetch("http://localhost:3000/api/offices");
        const data = await res.json();
  
        // Accede correctamente al arreglo dentro de la propiedad 'data'
        if (data && Array.isArray(data.data)) {
          setOffices(data.data);
          setFiltered(data.data);
        } else {
          console.error('La respuesta de la API no contiene un arreglo en data:', data);
          setFiltered([]);
        }
      };
      
      if (open) fetchOffices();
    }, [open]);
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.toLowerCase();
      setFiltered(
        offices.filter((office) => office.name.toLowerCase().includes(query))
      );
    };
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Seleccione una oficina</DialogTitle> {/* Título accesible para screen readers */}
          </DialogHeader>
          <Input
            type="text"
            placeholder="Buscar oficina..."
            onChange={handleSearch}
            className="mb-3"
          />
          <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
            {filtered && filtered.length > 0 ? (
              filtered.map((office) => (
                <Button
                  key={office.id}  // Usamos 'id' como key única
                  onClick={() => onSelect(office.id)}
                  variant="outline"
                >
                  {office.name} ({office.acronym})
                </Button>
              ))
            ) : (
              <div>No se encontraron oficinas</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default TicketDialog;