import React, { HTMLAttributes, forwardRef } from "react";
import { AlertTriangle, Check, X } from "react-feather";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import ConfirmDeliverySvg from "./assets/figma-confirm-delivery.svg?raw";

const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

const CardTitle = Div;
const CardDescription = Div;
const CardIcon = Div;
const CardBody = Div;
const CardFooter = Div;

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
          <Card className="bg-base-100 w-96 shadow-xl overflow-clip w-[480px]" shadow="lg" borderRadius="8px" align="center">
            <CardBody
              style={{
                padding: "32px 24px 32px 24px",
                gap: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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
                color="#231F20"
                fontSize="14px"
              />
            </CardBody>
            <CardFooter
              className="card-actions w-full flex gap-[8px] justify-between flex-wrap p-4"
              
              flexWrap="wrap"
              borderTop="solid 1px rgba(0,0,0,0.1)"
            >
              <Button
                color="primary"
                className="bg-[#FFCD00] text-[#231F20] hover:bg-[#E1B500] border-[rgba(0,0,0,0.1)] black h-[36px] min-h-[36px] p-0 flex-1 gap-[8px]"                
              >
                <Check size="12px" />
                <div>Confirm delivery</div>
              </Button>
              <Button
                className="h-[36px] min-h-[36px] flex-1 gap-[8px] border-[rgba(0,0,0,0.1)]"      
                variant="outline"                
              >
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
