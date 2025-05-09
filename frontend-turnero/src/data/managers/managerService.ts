import { Manager } from "@/core/managers/entities";

const BASE_URL = "http://localhost:3000/api/managers";

export const managerService = {
    async getAll(): Promise<Manager[]>{
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data.data;
    },

    async getById(id: number): Promise<Manager>{
        const res = await fetch(`${BASE_URL}/${id}`);
        const data = await res.json();
        return data.data
    },

    async create(manager: Omit<Manager,"id">): Promise<Manager>{
        const res = await fetch(BASE_URL,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(manager),
        });
        const data = await res.json()
        return data.data
    },

    async update(id:number, manager: Omit<Manager,"id">): Promise<Manager>{
        const res = await fetch(`${BASE_URL}/${id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(manager)
        });
        const data = await res.json()
        return data.data
    }
}