import React from "react";
import { Card, Form, Button, FormControl } from "react-bootstrap";

type BetProps = {
  bet?: any;
  addToBet: (address: string, amount: string) => void;
};
export const Bet: React.FC<BetProps> = ({ bet, addToBet }) => {
  const [amount, setAmount] = React.useState("");
  if (!bet) return <div />;
  const {
    address,
    balance,
    primary,
    beneficiary,
    sport,
    gameType,
    contributorCount
  } = bet;
  return (
    <Card style={{ fontSize: "8px" }}>
      <Card.Body>
        <Card.Text>
          <p>address: {address}</p>
          <p>balance: {balance}</p>
          <p>Primary:{primary}</p>
          <p>Beneficiary:{beneficiary}</p>
          <p>sport: {sport}</p>
          <p>game: {gameType}</p>
          <p>Contributors: {contributorCount}</p>
        </Card.Text>

        <Form
          onSubmit={(e: any) => {
            e.preventDefault();
            addToBet(address, amount);
          }}
        >
          <Form.Group controlId={`amount${address}`}>
            <Form.Control
              type='text'
              value={amount}
              onChange={(e: any) => {
                e.preventDefault();
                setAmount(e.currentTarget.value);
              }}
              placeholder='amount'
            />
          </Form.Group>

          <Button variant='outline-success' size='sm' type='submit'>
            Bet
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
