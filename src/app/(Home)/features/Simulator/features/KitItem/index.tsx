import { KitItemDTO } from '@/dtos/KitItemDTO';
import { formatoToPrice } from '@/utils/formatToPrice';
import React from 'react';

import * as S from './styles';

interface KitItemProps {
  item: KitItemDTO;
}

const KitItem: React.FC<KitItemProps> = ({ item }) => {
  return (
    <S.Container>
      <img src={item.url} alt="foto do item" />
      <span className="title">{item.titulo}</span>
      <span>
        qtd: <span className="qtd">{item.qtde}</span>
      </span>
      <span className="price">{formatoToPrice(item.valueTotal)}</span>
    </S.Container>
  );
};

export default KitItem;
