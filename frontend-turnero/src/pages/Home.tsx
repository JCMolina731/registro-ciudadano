import { useState } from "react";
import FormDni from "../components/FormDni";
import TicketDialog from "../components/TicketDialog";
import TicketPrinter from "../components/TicketPrinter";

interface Citizen {
  name: string;
  firstlastname: string;
  // Puedes agregar más campos si lo necesitas
}

interface Ticket {
  code: string;
  createdAt: string;
}

const Home: React.FC = () => {
  const [dni, setDni] = useState<string>("");
  const [citizen, setCitizen] = useState<Citizen | null>(null);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleDniSubmit = async (dniValue: string) => {
    setDni(dniValue);
    try {
        const res = await fetch("http://localhost:3000/api/validatedni", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dni: dniValue }),
        });
    
        if (!res.ok) throw new Error("No se encontró el ciudadano");
    
        const data = await res.json();
        setCitizen(data);
        setShowDialog(true);
      } catch (error) {
        console.error("Error al validar el DNI:", error);
        alert("DNI no encontrado o error en el servidor.");
      }
  };

  const handleOfficeSelect = async (officeId: number) => {
    try {
      const res = await fetch("http://localhost:3000/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dni, idoffice: officeId }),
      });
      const data = await res.json();
      setTicket(data.ticket);
      setShowDialog(false);
    } catch (err) {
      console.error("Error al generar el ticket:", err);
    }
  };

  const handlePrinted = () => {
    setTicket(null);
    setCitizen(null);
    setDni("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Sistema de Turnos</h1>

      {!ticket && (
        <FormDni onSubmit={handleDniSubmit} dni={dni} setDni={setDni} />
      )}

      {ticket && citizen && (
        <TicketPrinter
          ticket={ticket}
          citizen={{ data: citizen }}
          onPrinted={handlePrinted}
        />
      )}

      <TicketDialog
        open={showDialog}
        setOpen={setShowDialog}
        onSelect={handleOfficeSelect}
      />
    </div>
  );
};

export default Home;