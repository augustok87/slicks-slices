const formatter = Intl.NumberFormat('en-AR', {
  style: 'currency',
  currency: 'ARS',
});

export default function formatMoney(cents) {
  return formatter.format(cents);
}
