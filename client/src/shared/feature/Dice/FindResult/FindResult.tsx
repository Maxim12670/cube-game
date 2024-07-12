import ShowTitle from "../../ShowTitle/ShowTitle";

const calculateProfit = (factor: number, betSize: number) => {
  return betSize * factor;
}

const FindResult =
  (currentBtn: string | null,
    numberDots: number,
    inputValue: number,
    betSize: number,
    setTitle: React.Dispatch<React.SetStateAction<JSX.Element>>,
    updateBalance: (value: number) => void) => {

    switch (currentBtn) {
      case 'btn-even':
        if (numberDots % 2 === 0) {
          const profit = calculateProfit(2, betSize);
          updateBalance(profit);
          setTitle(ShowTitle(true, numberDots, profit));
          break;
        }
        updateBalance(-betSize);
        setTitle(ShowTitle(false, numberDots));
        break;

      case 'btn-odd':

        if (numberDots % 2 != 0) {
          const profit = calculateProfit(2, betSize);
          updateBalance(profit);
          setTitle(ShowTitle(true, numberDots, profit));
          break;
        }
        updateBalance(-betSize);
        setTitle(ShowTitle(false, numberDots));
        break;

      case 'btn-first-three':
        if (1 <= numberDots && numberDots <= 3) {
          const profit = calculateProfit(2, betSize);
          updateBalance(profit);
          setTitle(ShowTitle(true, numberDots, profit));
          break;
        }
        updateBalance(-betSize);
        setTitle(ShowTitle(false, numberDots));
        break;

      case 'btn-second-three':
        if (4 <= numberDots && numberDots <= 6) {
          const profit = calculateProfit(2, betSize);
          updateBalance(profit);
          setTitle(ShowTitle(true, numberDots, profit));
          break;
        }
        updateBalance(-betSize);
        setTitle(ShowTitle(false, numberDots));
        break;

      case 'btn-input':
        if (numberDots == inputValue) {
          const profit = calculateProfit(3, betSize);
          updateBalance(profit);
          setTitle(ShowTitle(true, numberDots, profit));
          break;
        }
        updateBalance(-betSize);
        setTitle(ShowTitle(false, numberDots));
        break;
    }
  }

export default FindResult;