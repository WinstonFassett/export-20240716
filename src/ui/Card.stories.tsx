import { Box, BoxProps } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { forwardRef } from "react";
import {
  AlertTriangle,
  Check,
  CheckCircle,
  DollarSign,
  X,
} from "react-feather";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card, CardBody, CardFooter, CardHeader } from "./Card";
import { Input } from "./Input";
const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = <CardBody>This is the card body</CardBody>;

export const Plain: Story = {
  args: {
    children,
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    shadow: "md",
    children,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children,
  },
};

const FlexRow = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap="1em"
      {...rest}
    >
      {children}
    </Box>
  );
});

export const PurchaseStepsCard = () => {
  const MenuCard = Card;
  const MenuCardHeader = CardHeader;
  const MenuCardTitle = Box;
  const MenuCardDescription = Box;
  const MenuCardActions = Box;
  const MenuCardAction = FlexRow;
  const MenuCardActionIcon = Box;
  const MenuCardActionTitle = Box;
  const MenuActionSeparator = () => <hr style={{ width: "100%" }} />;

  return (
    <MenuCard variant="elevated" width="100%" maxWidth="700px">
      <MenuCardHeader
        borderTopRadius="var(--chakra-radii-md)"
        padding="14px 16px 14px 16px"
        backgroundColor="#F5F5F5"
        borderBottom="1px solid rgba(0,0,0,0.1)"
      >
        <MenuCardTitle
          style={{
            color: "#231F20",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "19px",
          }}
        >
          Order #123456
        </MenuCardTitle>
        <MenuCardDescription
          style={{
            fontSize: "12px",
            lineHeight: "16.2px",
            color: "#999999",
          }}
        >
          Spliff Decision
        </MenuCardDescription>
      </MenuCardHeader>
      <MenuCardActions style={{ display: "flex", flexDirection: "column" }}>
        <MenuCardAction style={{ color: "#999999", padding: "16px" }}>
          <MenuCardActionIcon>
            <CheckCircle size="16px" />
          </MenuCardActionIcon>
          <MenuCardActionTitle
            style={{
              flex: 1,
              textAlign: "left",
              fontSize: "14px",
              lineHeight: "19px",
            }}
          >
            Confirm delivery
          </MenuCardActionTitle>
          <Badge colorScheme="green" backgroundColor="#B7F4B5">
            Confirmed
          </Badge>
        </MenuCardAction>
        <MenuActionSeparator />
        <MenuCardAction style={{ color: "#231F20", padding: "16px" }}>
          <MenuCardActionIcon>
            <DollarSign color="#999999" size="16px" />
          </MenuCardActionIcon>
          <MenuCardActionTitle
            style={{
              flex: 1,
              textAlign: "left",
              fontSize: "14px",
              lineHeight: "19px",
            }}
          >
            Record payment
          </MenuCardActionTitle>
        </MenuCardAction>
      </MenuCardActions>
    </MenuCard>
  );
};

export const ConfirmDeliveryCard = () => {
  const CardTitle = Box;
  const CardDescription = Box;
  const CardIcon = Box;
  return (
    <Card shadow="lg" minWidth="480px" align="center">
      <CardBody
        padding="32px 24px 32px 24px"
        gap="16px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CardIcon>
          <AlertTriangle size="24px" color="#999999" />
        </CardIcon>
        <CardTitle
          style={{
            fontSize: "20px",
            lineHeight: "27px",
            fontWeight: "600",
          }}
        >
          Confirm delivery for Order #123456
        </CardTitle>
        <CardDescription style={{ fontSize: ".8em", fontWeight: "bold" }}>
          Enter the order number to confirm delivery
        </CardDescription>
        <Input
          placeholder="Enter order number"
          value={"123456"}
          width="320px"
        />
      </CardBody>
      <CardFooter gap="8px" justify="space-between" flexWrap="wrap">
        <Button flex={1} gap="8px" colorScheme="primary">
          <Check size="12px" />
          <div>Confirm delivery</div>
        </Button>
        <Button flex={1} gap="8px" variant="outline">
          <X size="12px" />
          <div>Cancel</div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ConfirmDeliveryCardWithInvalidOrderNumber = () => {
  const CardTitle = Box;
  const CardDescription = Box;
  const CardIcon = Box;
  return (
    <Card shadow="lg" minWidth="480px" align="center">
      <CardBody
        padding="32px 24px 32px 24px"
        gap="16px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CardIcon>
          <AlertTriangle size="24px" color="#999999" />
        </CardIcon>
        <CardTitle
          style={{
            fontSize: "20px",
            lineHeight: "27px",
            fontWeight: "600",
          }}
        >
          Confirm delivery for Order #123456
        </CardTitle>
        <CardDescription style={{ fontSize: ".8em", fontWeight: "bold" }}>
          Enter the order number to confirm delivery
        </CardDescription>
        <Input
          borderColor="red"
          _hover={{ borderColor: "red" }}
          _focus={{ borderColor: "red" }}
          placeholder="Enter order number"
          value={"123456"}
          width="320px"
        />
      </CardBody>
      <CardFooter gap="8px" justify="space-between" flexWrap="wrap">
        <Button isDisabled flex={1} gap="8px" colorScheme="primary">
          <Check size="12px" />
          <div>Confirm delivery</div>
        </Button>
        <Button flex={1} gap="8px" variant="outline">
          <X size="12px" />
          <div>Cancel</div>
        </Button>
      </CardFooter>
    </Card>
  );
};
