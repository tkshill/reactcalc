import "./styles.css";
import React from "react";
import ReactReconciler from "react-reconciler";

type OperatorType = "addition" | "subtraction" | "multiplication" | "division";
type CalculatorComponentType = OperatorType | "operand";

type Expression =
  | number
  | {
      operator: OperatorType;
      leftoperand: Expression;
      rightOperand: Expression;
    };

type Result = number;

export const initialResult: Result = 0;

type OperatorProp = { children: any };

type OperandProp = { value: number };

const Addition = (props: OperatorProp) => {
  console.log(React.createElement("addition", null, props.children));
  return React.createElement("addition", null, props.children);
};

const Subtraction = (props: OperatorProp) =>
  React.createElement("subtraction", null, props.children);

const Multiplication = (props: OperatorProp) =>
  React.createElement("multiplication", null, props.children);

const Division = (props: OperatorProp) =>
  React.createElement("division", null, props.children);

const Operand = (props: OperandProp) =>
  React.createElement("operand", props.value, []);

const AppComponent = () => (
  <Addition>
    <Operand value={4} />
    <Operand value={7} />
  </Addition>
);

export const render = (app: React.ReactNode, resultContext: Result): void =>
  console.log(resultContext);

export function App() {
  return <AppComponent />;
}
