
export const isValudateString = (str: string): boolean => {
  const regex = /^[a-zA-Z0-9_]*$/;
  return regex.test(str);
}