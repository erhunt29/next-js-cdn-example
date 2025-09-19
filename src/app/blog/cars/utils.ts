import { readJson } from "@/utils/readJSON";

export interface Car {
  id: string;
  manufacturer: string;
  model: string;
  image: string;
  description: string;
}

export const getCars = async (): Promise<Car[]> => {
  const { data } = await readJson<{ data: Car[] }>(
    `${process.cwd()}/public/data/cars/cars.json`
  );
  return data;
};
