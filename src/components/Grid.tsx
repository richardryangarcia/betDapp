import React from "react";
import { Bet } from "./Bet";
import { groupBy } from "../utils/display";
import { Container, Row, Col } from "react-bootstrap";

type GridProps = {
  collection: any;
  addToBet: (address: string, amount: string) => void;
};
export const Grid: React.FC<GridProps> = ({ collection, addToBet }) => {
  const groupedCollection = groupBy(4, collection);
  return (
    <Container>
      {groupedCollection.map((set: any[]) => {
        return (
          <Row>
            {set.map((element: any) => {
              return (
                <Col xs={6} md={6} lg={3}>
                  <Bet bet={element} addToBet={addToBet} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};
