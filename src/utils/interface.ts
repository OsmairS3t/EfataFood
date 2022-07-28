export interface IProduto {
  id: string;
  nome: string;
  preco: number;
  ingredientes: string;
  foto: string;
}

export interface IVenda {
  id: string;
  produto: IProduto;
  datavenda: Date;
  quant: number;
  desconto: number;
  total: number;
}