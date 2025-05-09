import { Office } from "./entities";

export interface OfficeUseCases{
    getAll:() => Promise<Office[]>;
    getById:(id: number) => Promise<Office>;
    create: (office: Omit<Office, "id">) =>Promise<Office>;
    update: (id: number, office: Omit<Office,"id">) => Promise<Office>;
}