import { createContext, useContext, useState } from "react";
import api from "../service/api";
import uuid from "react-native-uuid";
import { FormData } from "../pages/RegisterCard";
import { CreditCardDTO } from "../dto/creditCardDTO";

export const CreditCardContext = createContext<CreditCardContextData>(
  {} as CreditCardContextData
);

export type CreditCardProviderProps = {
  children: React.ReactNode;
};

export type CreditCardContextData = {
  handleAddCreditCard: (form: FormData) => Promise<void>;
  currentCreditCard: CreditCardDTO;
};

const CreditCardProvider = ({ children }: CreditCardProviderProps) => {
  const [currentCreditCard, setCurrentCreditCard] = useState<CreditCardDTO>(
    {} as CreditCardDTO
  );

  async function handleAddCard(form: FormData) {
    const creditType = Math.random() < 0.5;

    const data = {
      id: uuid.v4(),
      creditType: creditType ? "green" : "dark",
      number: form.card_number,
      cvv: form.security_code,
      name: form.titular_name,
      expiration_date: form.expiration_date,
    };

    try {
      await api.post("/cards", data);
      setCurrentCreditCard(data as CreditCardDTO);
    } catch (err) {
      throw new Error();
    }
  }

  return (
    <CreditCardContext.Provider
      value={{
        handleAddCreditCard: handleAddCard,
        currentCreditCard,
      }}
    >
      {children}
    </CreditCardContext.Provider>
  );
};

const useCreditCard = () => useContext(CreditCardContext);

export { CreditCardProvider, useCreditCard };
