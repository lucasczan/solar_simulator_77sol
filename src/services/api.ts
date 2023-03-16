import { roofEnum } from '@/enums/roofEnum';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface getSimulationProps {
  estrutura: roofEnum;
  valor_conta: number;
  cep: string;
}

export async function getSimulation({
  estrutura,
  valor_conta,
  cep
}: getSimulationProps) {
  const { data } = await api.get(
    `busca-cep?estrutura=${estrutura}&valor_conta=${valor_conta}&cep=${cep}`
  );
  return data;
}
