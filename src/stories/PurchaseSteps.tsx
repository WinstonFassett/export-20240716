import { Box, BoxProps } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { CheckCircle, DollarSign } from "react-feather";
import { Badge } from "../ui/Badge";
import { Card, CardHeader } from "../ui/Card";
import MenuCardSvg from "./assets/figma-menu-card.svg?raw";

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

const MenuCard = Card;
const MenuCardHeader = CardHeader;
const MenuCardTitle = Box;
const MenuCardDescription = Box;
const MenuCardActions = Box;
const MenuCardAction = FlexRow;
const MenuCardActionIcon = Box;
const MenuCardActionTitle = Box;
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
          <MenuCard variant="elevated" width="100%" maxWidth="700px">
            <MenuCardHeader
              borderTopRadius="var(--chakra-radii-md)"
              padding="14px 16px 14px 16px"
              backgroundColor="#F5F5F5"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <MenuCardTitle
                color="#231F20"
                fontSize="14px"
                fontWeight="500"
                lineHeight="19px"
              >
                Order #123456
              </MenuCardTitle>
              <MenuCardDescription
                fontSize="12px"
                lineHeight="16.2px"
                color="#999999"
              >
                Spliff Decision
              </MenuCardDescription>
            </MenuCardHeader>
            <MenuCardActions display="flex" flexDirection="column">
              <MenuCardAction color="#999999" padding="16px">
                <MenuCardActionIcon>
                  <CheckCircle size="16px" />
                </MenuCardActionIcon>
                <MenuCardActionTitle
                  flex={1}
                  textAlign="left"
                  fontSize="14px"
                  lineHeight="19px"
                >
                  Confirm delivery
                </MenuCardActionTitle>
                <Badge colorScheme="green" backgroundColor="#B7F4B5">
                  Confirmed
                </Badge>
              </MenuCardAction>
              <MenuActionSeparator />
              <MenuCardAction color="#231F20" padding="16px">
                <MenuCardActionIcon>
                  <DollarSign color="#999999" size="16px" />
                </MenuCardActionIcon>
                <MenuCardActionTitle
                  flex={1}
                  textAlign="left"
                  fontSize="14px"
                  lineHeight="19px"
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
