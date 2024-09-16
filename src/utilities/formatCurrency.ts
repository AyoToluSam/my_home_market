const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (value: number | string) => {
  return CURRENCY_FORMATTER.format(Number(value));
};
