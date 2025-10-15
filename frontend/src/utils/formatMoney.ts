// Formata os números para o formato de dinheiro
export const formatMoney = (data: number): any => {
  const formatedData = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatedData.format(data);
};
