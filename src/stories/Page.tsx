import React, { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, forwardRef } from 'react';
import { AlertTriangle, Package, DollarSign, Check, X, CheckCircle } from 'react-feather';


const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { children, ...rest } = props;
  rest.style = { display: 'flex', alignItems: 'center', gap: '.5em', ...rest.style };
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const { ...rest } = props;
  return (
    <input ref={ref} {...rest} />
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

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
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


const CardHeader = Div;
const CardTitle = Div
const CardDescription = Div;
const CardBody = Div;
const CardFooter = Div;
const CardIcon = Div

const MenuCard = Card
const MenuCardHeader = Div
const MenuCardTitle = Div
const MenuCardDescription = Div
const MenuCardActions = Div
const MenuCardAction = Button
const MenuCardActionIcon = Div
const MenuCardActionTitle = Div
const MenuCardBadge = Div

export const Page: React.FC = () => {

  return (
    <article>
      <div className="storybook-page">
        <h2>Confirm Delivery</h2>
      </div>
      <div style={{ fontFamily: 'sans-serif'}}>
        <MenuCard>
          <MenuCardHeader style={{ padding: '1em', background: '#ccc'}}>
            <MenuCardTitle style={{fontWeight: 'bold'}}>Order #123456</MenuCardTitle>
            <MenuCardDescription style={{fontSize: '.8em', color: '#777'}}>Spliff Decision</MenuCardDescription>
          </MenuCardHeader>
          <MenuCardActions style={{ display: 'flex', flexDirection: 'column'}}>
            <MenuCardAction disabled>
              <MenuCardActionIcon>
                {/* <Package /> */}
                <CheckCircle />
              </MenuCardActionIcon>
              <MenuCardActionTitle style={{flex: 1, textAlign: 'left'}}>
                Confirm Delivery
              </MenuCardActionTitle>
              <MenuCardBadge style={{ color: 'green '}}>Confirmed</MenuCardBadge>
            </MenuCardAction>
            <MenuCardAction>
              <MenuCardActionIcon>
                <DollarSign />
              </MenuCardActionIcon>
              <MenuCardActionTitle style={{flex:1, textAlign: 'left'}}>Record Payment</MenuCardActionTitle>
            </MenuCardAction>
          </MenuCardActions>        
        </MenuCard>
        
        <Card style={{ textAlign: 'center' }}>
          <CardHeader style={{ padding: '1em', borderBottom: '1px solid gray'}}>
            <CardIcon><AlertTriangle /></CardIcon>
            <CardTitle style={{ fontSize: '1.5em'}}>Confirm delivery for Order #123456</CardTitle>
            <CardDescription style={{ fontSize: '.8em', fontWeight: 'bold' }}>Enter the order number to confirm delivery</CardDescription>
          </CardHeader>
          <CardBody style={{ padding: '1em' }}>
            <Input placeholder='Enter order number' />
          </CardBody>
          <CardFooter style={{ borderTop: '1px solid gray' }}>
            <FlexRow style={{ justifyContent: 'center', gap: '.5em', padding: '1em'}}>
              <Button disabled>
                <Check />
                Confirm Delivery
              </Button>            
              <Button>
                <X />
                Cancel
              </Button>
            </FlexRow>
          </CardFooter>
        </Card>
      </div>

    </article>
  );
};