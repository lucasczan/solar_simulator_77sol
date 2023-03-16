'use client';
import { createContext, useCallback, useMemo, useState } from 'react';
import React from 'react';
import { getSimulation, getSimulationProps } from '@/services/api';
import { SimulationDTO } from '@/dtos/SimulationDTO';

interface ISimulatorContext {
  simulationResultData: SimulationDTO;
  handleSimulate(data: getSimulationProps): Promise<void>;
  clearSimulation(): void;
}

interface SimulatorContextProviderProps {
  children: React.ReactNode;
}

const SimulatorContext = createContext({} as ISimulatorContext);

const SimulatorContextProvider: React.FC<SimulatorContextProviderProps> = ({
  children
}) => {
  const [simulationResultData, setSimulationResultData] = useState(
    {} as SimulationDTO
  );

  const handleSimulate = useCallback(
    async ({ cep, estrutura, valor_conta }: getSimulationProps) => {
      const simulationResult = await getSimulation({
        cep,
        estrutura,
        valor_conta
      });
      setSimulationResultData(simulationResult);
    },
    []
  );

  const clearSimulation = useCallback(() => {
    setSimulationResultData({} as SimulationDTO);
  }, []);

  const memoizedValues = useMemo(
    () => ({
      simulationResultData,
      handleSimulate,
      clearSimulation
    }),
    [clearSimulation, handleSimulate, simulationResultData]
  );

  return (
    <SimulatorContext.Provider value={memoizedValues}>
      {children}
    </SimulatorContext.Provider>
  );
};

export { SimulatorContextProvider, SimulatorContext };
