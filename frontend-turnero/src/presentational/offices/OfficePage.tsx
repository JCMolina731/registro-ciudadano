import OfficeForm from "./OfficeForm";
import OfficeList from "./OfficeList";
import { officeService } from "@/data/offices/officeService";
import { Office } from "@/core/offices/entities"; // Importa la interfaz correcta

const OfficePage: React.FC = () => {
  const handleCreate = async (data: Omit<Office, "id">) => {
    await officeService.create(data);
    window.location.reload(); // opcional, mejor manejar estado
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Oficinas</h1>
      <OfficeForm onSubmit={handleCreate} />
      <hr className="my-4" />
      <OfficeList />
    </div>
  );
};

export default OfficePage;