export function formatCreditCardNumber(num: string) {
  num = num.replace(/\D/g, "");
  num = num.replace(/(\d{4})(?=\d)/g, "$1 ");

  return num;
}
