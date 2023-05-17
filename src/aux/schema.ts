import * as Yup from "yup";

export const schema = Yup.object().shape({
  card_number: Yup.string()
    .required("Campo obrigatório")
    .min(19, "O campo deve conter no mínimo 19 caracteres"),
  titular_name: Yup.string().required("Campo obrigatório"),
  security_code: Yup.string().required("Campo obrigatório"),
  expiration_date: Yup.string()
    .required("Campo obrigatório")
    .test("validade", "Data inválida", (value) => {
      return (
        /^(0[1-9]|1[0-2])\/\d{2}$/.test(value) &&
        new Date(`20${value.substr(3, 2)}`, value.substr(0, 2), 0) > new Date()
      );
    }),
});
