## Indice

- [Sobre](#-sobre)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Preview do projeto](#-preview-do-projeto)
- [Funcionalidades](#-Funcionalidades)

---

## 🤔 Sobre

Projeto **Wallet Test**

Layout baseado [Nesse projeto](https://www.figma.com/file/LQJIMG9Kg8kqL0821rBkiQ/Wallet-Test?node-id=2-1039)

---

## Json-server

O Projeto utiliza JSON-SERVER, para uma melhor exeperiencia na hora de executar, e poder executar no emulador fisico, lendo o QRCODE, voce
deverá

- Descobrir o seu ip
- Entrar em **src/service/api.ts** e modificar o ip, pelo ip da sua maquina, depois rodar

```js
const api = axios.create({
  baseURL: 'http://IP_DA_SUA_MAQUINA_AQUI:3000/',
});
```

```
json-server --watch db.json --host IP_DA_SUA_MAQUINA_AQUI  --port 3000
```

## Passo a passo para executar

OBS: para executar o teste pelo celular fisico, baixe o expo-go nas stores

O Projeto foi utilizado usando expo, então para executa-lo basta seguir os passos

```bash
  #clonar o repositorio
  $ git clone https://github.com/RgMellon/vr-wallet.git

  #entrar na pasta do projeto
  $ cd vr-wallet

  #instalar as dependencias
  $ yarn

  # Basta ler o codigo de barras que aparecerá pelo seu celular, caso tenho o EXPO-GO instalado, com isso o projeto deverá abrir. voce também pode apertar a tecla I para abrir no Emulador IOS ou A para abrir no emulador android
  $ npx expo start

  # Para rodar os testes

  $ yarn jest

```

## 📱 Preview do projeto

Segue o preview em video do projeto

<div>
  <img style="margin: 5px" alt="login" src="https://i.imgur.com/LBjROFn.jpg" width="200">

  <img style="margin: 5px" alt="login" src="https://i.imgur.com/4eonCQ4.jpg" width="200">

  <img style="margin: 5px" alt="login" src="https://i.imgur.com/kEZAU4m.jpg" width="200">

  <img style="margin: 5px" alt="login" src="https://i.imgur.com/kdZrlXD.jpg" width="200">

  <img style="margin: 5px" alt="login" src="https://i.imgur.com/FRDaipG.jpg" width="200">

</div>

---

## 💻 Tecnologias utilizadas

O projeto foi feito utilizando das seguintes tecnologias

- Expo
- React Native
- Styled Components
- Typescript
- Axios
- Context
- Hook
- Jest

---

Desenvolvido com ♥ por Renan Melo
