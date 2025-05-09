
import ManagerList from "./managerList";
import ManagerForm from "./Managerform";
import { managerService } from "@/data/managers/managerService";
import { Manager } from "@/core/managers/entities";


const ManagerPage: React.FC = () => {
  const handleCreate = async (data: Omit<Manager, "id">) => {
      await managerService.create(data);
      window.location.reload(); // opcional, mejor manejar estado
    };
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Funcionarios</h1>
        <ManagerForm onSubmit={handleCreate} />
        <hr className="my-4" />
        <ManagerList />
      </div>
    );
};

export default ManagerPage;