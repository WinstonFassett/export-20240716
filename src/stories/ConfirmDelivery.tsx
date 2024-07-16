import { Box } from "@chakra-ui/react";
import React from "react";
import { AlertTriangle, Check, X } from "react-feather";
import { Button } from "../ui/Button";
import { Card, CardBody, CardFooter } from "../ui/Card";
import { Input } from "../ui/Input";
import ConfirmDeliverySvg from "./assets/figma-confirm-delivery.svg?raw";

const CardTitle = Box;
const CardDescription = Box;
const CardIcon = Box;

export const ConfirmDelivery: React.FC = () => {
  return (
    <article style={{ padding: "2em" }}>
      <div className="storybook-page">
        <h2>Delivery Confirmation</h2>
      </div>
      <div className="app-page">
        <div
          style={{
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <p>Figma:</p>
          <div dangerouslySetInnerHTML={{ __html: ConfirmDeliverySvg }}></div>

          <p>Example:</p>
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
                onChange={() => {}}
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
        </div>
      </div>
    </article>
  );
};
