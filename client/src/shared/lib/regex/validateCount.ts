
export const isValidateCount = (str: string): boolean => {
  const regex = /^[1-6]$/;
  return regex.test(str);
}