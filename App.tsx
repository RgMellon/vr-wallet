import { View } from "react-native";
import { Theme } from "./src/template/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import theme from "./src/styles/theme";
import { CreditCardProvider } from "./src/hooks/useCreditCard";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.blueDark }}>
      <Theme>
        <NavigationContainer>
          <CreditCardProvider>
            <AppRoutes />
          </CreditCardProvider>
        </NavigationContainer>
      </Theme>
    </View>
  );
}
