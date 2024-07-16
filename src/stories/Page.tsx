import { Button, Input, Card, CardHeader, CardBody, CardFooter, ButtonGroup, Heading, Text, Badge } from '@chakra-ui/react';
import React, { HTMLAttributes, forwardRef } from 'react';
import { AlertTriangle, Check, CheckCircle, DollarSign, X } from 'react-feather';
import ConfirmDeliverySvg from './assets/figma-confirm-delivery.svg?raw';
import MenuCardSvg from './assets/figma-menu-card.svg?raw';

const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

const FlexRow = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, ...rest } = props;
  rest.style = { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em', ...rest.style };
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

const CardStub = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, ...rest } = props;
  rest.style = { ...rest.style, 
    border: '1px solid #ddd',
    borderRadius: '0.5em',
    padding: '1em',
    margin: '1em',
    boxShadow: '0 0 2em rgba(0,0,0,0.1)',
   };
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});


const CardTitle = Div
const CardDescription = Div;
const CardIcon = Div

const MenuCard = Card
const MenuCardHeader = CardHeader
const MenuCardTitle = Div
const MenuCardDescription = Div
const MenuCardActions = Div
const MenuCardAction = FlexRow
const MenuCardActionIcon = Div
const MenuCardActionTitle = Div
const MenuCardBadge = Badge
const MenuActionSeparator= () => <hr style={{ width: '100%'}} />

export const Page: React.FC = () => {

  return ( 
    <article style={{ padding: '2em'}}>
      <div className="storybook-page">
        <h2>Confirm Delivery</h2>
      </div>
      <div className="app-page">

        <div style={{ padding: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>

        <div dangerouslySetInnerHTML={{__html:MenuCardSvg}}></div>

          <MenuCard shadow="md" variant="elevated" width="100%" maxWidth="700px">
            <MenuCardHeader borderTopRadius="var(--chakra-radii-md)" padding="14px 16px 14px 16px" backgroundColor="#F5F5F5" borderBottom="1px solid rgba(0,0,0,0.1)">
              <MenuCardTitle style={{ color: '#231F20', fontSize: '14px', fontWeight: '500', lineHeight: '19px'}}>Order #123456</MenuCardTitle>
              <MenuCardDescription style={{fontSize: '12px', lineHeight: '16.2px', color: '#999999', }}>Spliff Decision</MenuCardDescription>
            </MenuCardHeader>
            <MenuCardActions style={{ display: 'flex', flexDirection: 'column'}}>
              <MenuCardAction isDisabled style={{color: "#999999", padding: '16px'}}>
                <MenuCardActionIcon>
                  {/* <Package /> */}
                  <CheckCircle size="16px" />
                </MenuCardActionIcon>
                <MenuCardActionTitle style={{flex: 1, textAlign: 'left', fontSize: "14px", "lineHeight": "19px"}}>
                  Confirm delivery
                </MenuCardActionTitle>
                <MenuCardBadge colorScheme='green' backgroundColor="#B7F4B5" border="solid 1px rgba(0,0,0,0.1)" paddingX="4px" borderRadius="3px" fontSize="10px" fontWeight="500" style={{ textTransform: 'none' }}>Confirmed</MenuCardBadge>
              </MenuCardAction>
              <MenuActionSeparator />
              <MenuCardAction style={{color: "#231F20", padding: '16px'}}>
                <MenuCardActionIcon>
                  <DollarSign color="#999999" size="16px" />
                </MenuCardActionIcon>
                <MenuCardActionTitle style={{flex:1, textAlign: 'left', fontSize: "14px", "lineHeight": "19px"}}>Record payment</MenuCardActionTitle>
              </MenuCardAction>
            </MenuCardActions>        
          </MenuCard>
          
          <div dangerouslySetInnerHTML={{__html:ConfirmDeliverySvg}}></div>
          
          <Card shadow="lg" minWidth="480px" borderRadius="8px" align="center" >
            <CardBody style={{ padding: "32px 24px 32px 24px", gap: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CardIcon><AlertTriangle size="24px" color="#999999" /></CardIcon>
              <CardTitle style={{ fontSize: '20px', lineHeight: '27px', fontWeight: '600'}}>Confirm delivery for Order #123456</CardTitle>
              <CardDescription style={{ fontSize: '.8em', fontWeight: 'bold' }}>Enter the order number to confirm delivery</CardDescription>
              <Input placeholder='Enter order number' value={'123456'} width="320px" color="#231F20" fontSize="14px" />
            </CardBody>
            <CardFooter width="100%" gap="8px" justify="space-between" flexWrap="wrap" borderTop="solid 1px rgba(0,0,0,0.1)">
              <Button flex={1} gap="8px" colorScheme='primary' fontSize="14px" fontWeight="600" color="#231F20" border="solid 1px rgba(0,0,0,0.1)">
                <Check size="12px" />
                <div>Confirm Delivery</div>
              </Button>            
              <Button flex={1} gap="8px" variant="outline" fontSize="14px" fontWeight="600" color="#231F20" border="solid 1px rgba(0,0,0,0.1)">
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
