import { BaseService } from "./baseService";
import { PokeService } from "./pokeService";

const baseService = new BaseService();
export const pokeService = new PokeService(baseService);
