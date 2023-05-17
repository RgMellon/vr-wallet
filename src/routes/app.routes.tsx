import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { RegisterCard } from "../pages/RegisterCard";
import { ResumeCard } from "../pages/ResumeCard";
import { ListCard } from "../pages/ListCard";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";

import BackSVG from "../assets/svg/bx_arrow-back.svg";
import PlusSvg from "../assets/svg/ic_round-plus.svg";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const { goBack, navigate } = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          title: "Cadastro",
        }}
        name="registerCard"
        component={RegisterCard}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          title: "Resume",
          headerBackTitleVisible: true,
        }}
        name="resumeCard"
        component={ResumeCard}
      />

      <Stack.Screen
        options={{
          title: "ListCard",
          headerBackTitleVisible: false,
          headerTitle: "Wallet Test",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: theme.colors.blueDark,
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                goBack();
              }}
            >
              <BackSVG />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigate("registerCard");
              }}
            >
              <PlusSvg />
            </TouchableOpacity>
          ),
        }}
        name="listCard"
        component={ListCard}
      />
    </Stack.Navigator>
  );
}
