export function priceReducer(percent: number, amount: number) {
  // Calculate the reduced price based on the given percentage and amount.
  const reducedAmount = amount - amount * (percent / 100);
  return reducedAmount;
}
