// Formata a data para o formato brasileiro dd/mm/aaa
export const formatDate = (date: string): any => {
  const convertedToDate = new Date(date);

  const newDate = new Intl.DateTimeFormat('pt-br', {
    timeZone: 'UTC',
  }).format(convertedToDate);

  return newDate;
};
