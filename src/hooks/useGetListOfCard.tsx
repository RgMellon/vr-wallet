import { useEffect, useState } from "react";
import api from "../service/api";
import { CreditCardDTO } from "../dto/creditCardDTO";
import { useNavigation } from "@react-navigation/native";
export function useGetListOfCard() {
  const { setOptions } = useNavigation();
  const [list, setList] = useState<CreditCardDTO[]>([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  async function getListOfCards() {
    try {
      setOptions({
        headerShown: false,
      });
      const response = await api.get("/cards");
      setList(response.data);
    } catch (err) {
      alert("Ops, aconteceu um erro, tente mais tarde");
      throw new Error("Error on getListOfCards");
    } finally {
      setOptions({
        headerShown: true,
      });
      setLoad(false);
    }
  }

  useEffect(() => {
    getListOfCards();
  }, []);

  return {
    list,
    load,
  };
}
