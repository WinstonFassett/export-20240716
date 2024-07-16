import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ConfirmDelivery } from "../../src/stories/ConfirmDelivery";
import { PurchaseSteps } from "../../src/stories/PurchaseSteps";

function App() {
  return (
    <ChakraProvider>
      <PurchaseSteps />
      <ConfirmDelivery />
    </ChakraProvider>
  );
}

export default App;
