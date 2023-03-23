interface KitItemDTO {
  id: number;
  qtde: number;
  valor: number;
  categoria: number;
  potenciaModulo: number;
  valueTotal: number;
  descricao: string;
  datasheet: string;
  url: string;
  titulo: string;
  custo: number;
  estimativaEntrega: null;
  fornecedor: number;
  garantia: number;
  
}

export { type KitItemDTO };
