'use client';

import React from 'react';

import * as S from './styles';
import { SimulatorForm } from './features/Form';
import { useSimulator } from '@/hooks/useSimulator';
import ResultModal from './features/ResultModal';

const Simulator: React.FC = () => {
  const { simulationResultData, clearSimulation } = useSimulator();
  return (
    <S.SimulatorContainer>
      {Boolean(simulationResultData.potencial) && (
        <ResultModal
          simulationResultData={simulationResultData}
          close={clearSimulation}
        />
      )}
      <SimulatorForm />
    </S.SimulatorContainer>
  );
};

export default Simulator;
