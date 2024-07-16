import React, { HTMLAttributes, forwardRef } from "react";
import { CheckCircle, DollarSign } from "react-feather";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import MenuCardSvg from "./assets/figma-menu-card.svg?raw";



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

const CardHeader = Div;

const FlexRow = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, ...rest } = props;
    rest.style = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1em",
      ...rest.style,
    };
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

const MenuCard = Card;
const MenuCardHeader = CardHeader;
const MenuCardTitle = Div;
const MenuCardDescription = Div;
const MenuCardActions = Div;
const MenuCardAction = FlexRow;
const MenuCardActionIcon = Div;
const MenuCardActionTitle = Div;
const MenuActionSeparator = () => <hr style={{ width: "100%" }} />;

export const PurchaseSteps: React.FC = () => {
  return (
    <article style={{ padding: "2em" }}>
      <div className="storybook-page">
        <h2>Purchase Steps</h2>
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
          <div dangerouslySetInnerHTML={{ __html: MenuCardSvg }}></div>
          <p>Example:</p>
          <MenuCard
            className="shadow-lg w-full overflow-clip"
            variant="elevated"
            width="100%"
            maxWidth="700px"
          >
            <MenuCardHeader
              className="bg-[#F5F5F5]  py-[14px] px-[16px] border-b-[1px] border-[rgba(0,0,0,0.1)]"
                            
            >
              <MenuCardTitle
                className="card-title"
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
            
            <MenuCardActions
              className="card-actions"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <MenuCardAction className="w-full" style={{ color: "#999999", padding: "16px" }}>
                <MenuCardActionIcon>
                  {/* <Package /> */}
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
                <Badge
                  colorScheme="green"
                  backgroundColor="#B7F4B5"
                  border="solid 1px rgba(0,0,0,0.1)"
                  paddingX="4px"
                  borderRadius="3px"
                  fontSize="10px"
                  fontWeight="500"
                  style={{ textTransform: "none" }}
                >
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
        </div>
      </div>
    </article>
  );
};
