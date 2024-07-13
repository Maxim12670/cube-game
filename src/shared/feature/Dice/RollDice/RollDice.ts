
const RollDice = (
  setIsRolling: React.Dispatch<React.SetStateAction<boolean>>,
  setNumber: React.Dispatch<React.SetStateAction<number>>) => {

  setIsRolling(true);
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
    setIsRolling(false);
    console.log(`Выпало число: ${randomNumber}`);
  }, 1000);
};

export default RollDice;