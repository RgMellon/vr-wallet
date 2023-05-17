export type CreditCardDTO = {
  id: string | number[];
  number: string;
  cvv?: string;
  name: string;
  creditType: "green" | "dark";
  expiration_date?: string;
};
