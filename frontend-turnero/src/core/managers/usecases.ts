import { Manager } from "./entities";

export interface ManagerUseCases{
    getAll:() => Promise<Manager[]>;
    getById:(id:number) => Promise<Manager>;
    create:(manager: Omit<Manager,"id">) => Promise<Manager>;
    update:(id:number, manager: Omit<Manager,"id">) => Promise<Manager>;
}