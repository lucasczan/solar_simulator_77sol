import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { SimulationDTO } from '@/dtos/SimulationDTO';
import { formatoToPrice } from '@/utils/formatToPrice';
import React from 'react';

import * as S from './styles';

interface ResultModalProps {
  close(): void;
  simulationResultData: SimulationDTO;
}

const ResultModal: React.FC<ResultModalProps> = ({
  close,
  simulationResultData
}) => {
  return (
    <Modal close={close}>
      <S.Content>
        <h2>Resultado</h2>
        <div className="potencialContainer">
          <span>Potencial:</span>
          <S.Tag>{simulationResultData.potencial}</S.Tag>
        </div>
        <span>
          Economia:{' '}
          <span className="value">
            {formatoToPrice(simulationResultData.economia)}
          </span>
        </span>
        <span>
          Valor da instalação:{' '}
          <span className="value">
            {formatoToPrice(simulationResultData.valor_instalacao)}
          </span>
        </span>
        <div className="buttonsContainer">
          <Button onClick={close}>OK</Button>
        </div>
      </S.Content>
    </Modal>
  );
};

export default ResultModal;
