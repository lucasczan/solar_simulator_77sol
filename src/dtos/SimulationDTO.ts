import { KitItemDTO } from './KitItemDTO';

interface SimulationDTO {
  economia: number;
  potencial: string;
  valor_instalacao: number;
  kit: KitItemDTO[];
}


export {type SimulationDTO}