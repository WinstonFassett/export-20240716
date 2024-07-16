import { Box, useDisclosure } from "@chakra-ui/react";
import type { Meta } from "@storybook/react";
import { AlertTriangle, Check, X } from "react-feather";
import { Button } from "./Button";
import { Input } from "./Input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./Modal";

const meta = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

export const Usage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ position: "relative", minHeight: "50vh" }}>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{Lorem}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                console.log("todo: close modals");
              }}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export const ConfirmDeliveryDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CardTitle = Box;
  const CardDescription = Box;
  const CardIcon = Box;
  return (
    <div style={{ position: "relative", minHeight: "50vh" }}>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            padding="32px 24px 32px 24px"
            gap="16px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <CardIcon>
              <AlertTriangle size="24px" color="#999999" />
            </CardIcon>
            <CardTitle fontSize="20px" lineHeight="27px" fontWeight="600">
              Confirm delivery for Order #123456
            </CardTitle>
            <CardDescription fontSize=".8em" fontWeight="bold">
              Enter the order number to confirm delivery
            </CardDescription>
            <Input placeholder="Enter order number" width="320px" />
          </ModalBody>

          <ModalFooter gap="8px" justifyContent="space-between" flexWrap="wrap">
            <Button flex={1} gap="8px" colorScheme="primary" onClick={onClose}>
              <Check size="12px" />
              <div>Confirm delivery</div>
            </Button>
            <Button flex={1} gap="8px" variant="outline" onClick={onClose}>
              <X size="12px" />
              <div>Cancel</div>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const Lorem =
  "Lorem ipsum odor amet, consectetuer adipiscing elit. Varius scelerisque tempor consectetur montes fusce dictum mus. Magnis congue condimentum augue vehicula conubia nam. Leo ornare ipsum nam ultricies sodales consequat. Commodo pellentesque blandit torquent a, phasellus semper suscipit. Rutrum habitasse fermentum sociosqu non erat! Convallis mollis nam iaculis montes morbi suspendisse nibh efficitur dis";
