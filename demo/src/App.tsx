import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ConfirmDelivery } from "../../src/stories/ConfirmDelivery";
import { PurchaseSteps } from "../../src/stories/PurchaseSteps";
import theme from "../../src/ui/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PurchaseSteps />
      <ConfirmDelivery />
    </ChakraProvider>
  );
}

export default App;
