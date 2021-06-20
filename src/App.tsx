import "./styles.css";
import React from "react";
import ReactReconciler from "react-reconciler";

type CalculatorComponentType =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "operand";

type OperatorProp = { children: any };

type OperandProp = { value: number };

const Addition = (props: OperatorProp) =>
  React.createElement("addition", null, props.children);

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

export default function App() {
  return <AppComponent />;
}
