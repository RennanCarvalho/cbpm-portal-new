export const generateTodayDate = (): string => {
  const todayDate = new Date().toLocaleString('pt-br');

  return todayDate;
};
