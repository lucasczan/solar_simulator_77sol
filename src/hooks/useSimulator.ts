import { SimulatorContext } from '@/context/SimulatorContext';
import { useContext } from 'react';

export function useSimulator() {
  return useContext(SimulatorContext);
}
