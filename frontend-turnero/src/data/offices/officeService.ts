import { Office } from "@/core/offices/entities";

const BASE_URL = "http://localhost:3000/api/offices";

export const officeService = {
    async getAll(): Promise<Office[]> {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data.data;
      },

    async getById(id: number): Promise<Office>{
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      return data.data
    },

    async create(office : Omit<Office, "id">):Promise<Office>{
      const res = await fetch(BASE_URL,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(office),
      });
      const data = await res.json();
      return data.data
    },

    async update(id: number, office: Omit<Office, "id">): Promise<Office>{
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(office),
      });
      const data = await res.json();
      return data.data;
    }
}