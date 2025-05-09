import { useEffect, useRef } from "react";

interface Ticket {
  code: string;
  createdAt: string;
}

interface Citizen {
  name: string;
  firstlastname: string;
}

interface TicketPrinterProps {
  ticket: Ticket;
  citizen: { data: Citizen };
  onPrinted: () => void;
}

const TicketPrinter: React.FC<TicketPrinterProps> = ({ ticket, citizen, onPrinted }) => {
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const print = () => {
      if (!printRef.current) return;
      const printContents = printRef.current.innerHTML;

      const win = window.open("", "", "width=600,height=400");
      if (!win) return;

      win.document.write(`
        <html>
          <head>
          <title>Ticket</title>
          <style>
              h2 {
              margin: 0;
              font-size: 18px;
              font-weight: bold;
            }
          </style>
          </head>
          
          <body>${printContents}</body>
          
        </html>
      `);
      win.document.close();
      win.focus();
      win.print();
      win.close();
      onPrinted();
    };

    print();
  }, [onPrinted]);

  return (
    <div ref={printRef} className="hidden">
      <h2>Municipalidad Distrital de El Tambo</h2>
      <p><strong>Ticket:</strong> {ticket.code}</p>
      <p><strong>Ciudadano:</strong>{citizen?.data?.name} {citizen?.data?.firstlastname}</p>
      <p><strong>Fecha:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default TicketPrinter;