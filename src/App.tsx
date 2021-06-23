import "./styles.css";
import React from "react";
import ReactReconciler from "react-reconciler";

type OperatorType = "addition" | "subtraction" | "multiplication" | "division";
type CalculatorComponentType = OperatorType | "operand";

type Expression =
  | number
  | {
      operator: OperatorType;
      leftoperand: Expression | "Unset";
      rightOperand: Expression | "Unset";
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

type HostContext = any;
type PublicExpression = any;
type TimeoutHandle = any;
type NoTimeout = any;
type Props = any;

const expressionReconciler = ReactReconciler({
  supportsMutation: true,
  supportsPersistence: false,
  isPrimaryRenderer: false,
  supportsHydration: false,
  now() {
    return Date.now();
  },
  getPublicExpression(Expression: Expression): any {},
  getRootHostContext(param: any) {
    return null;
  },
  getChildHostContext(param: any): HostContext {},
  prepareForCommit(containerInfo: any) {
    return null;
  },
  resetAfterCommit(param: any) {},
  createExpression(
    type: string,
    props: Props,
    rootContainer: any,
    hostContext: Result,
    internalHandler: any
  ): Expression {
    switch (type) {
      case "addition":
        return {
          operator: "addition",
          leftoperand: "Unset",
          rightOperand: "Unset"
        };
      case "substraction":
        return {
          operator: "addition",
          leftoperand: "Unset",
          rightOperand: "Unset"
        };
      case "multiplication":
        return {
          operator: "addition",
          leftoperand: "Unset",
          rightOperand: "Unset"
        };
      case "division":
        return {
          operator: "addition",
          leftoperand: "Unset",
          rightOperand: "Unset"
        };
      case "operand":
        return props!.value;
      default:
        throw Error;
    }
  },
  createTextExpression(
    text: any,
    rootContainer: any,
    hostContainer: any,
    internalHandler: any
  ) {},

  appendChild(parent: Expression, child: Expression) {},
  appendInitialChild(parentExpression: Expression, child: Expression) {},
  appendChildToContainer(container, child) {},
  finalizeInitialChildren(Expression, type, props, rootContainer, hostContext) {
    return false;
  },
  prepareUpdate(Expression, type, oldProps, newProps, rootContainer) {
    return null;
  },
  shouldSetTextContent(type, props) {
    return false;
  },

  commitTextUpdate(text, oldText, newText) {},
  commitMount(Expression, type, newProps, internalExpressionHandle) {},
  replaceContainerChildren(container: any, newChildren: any) {},
  resetTextContent(Expression) {},
  commitUpdate(
    Expression,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalExpressionHandle
  ) {},
  insertBefore(parentExpression, child, beforeChild) {},
  insertInContainerBefore(container, child, beforeChild) {},
  removeChild(parentExpression, child) {},
  removeChildFromContainer(container, child) {},
  hideExpression(Instance: any) {},
  unhideExpression(Instance: any, props: any) {},
  unhideTextExpression(Instance: any, text: any) {},
  scheduleTimeout(fn) {},
  preparePortalMount(containerInfo) {},
  cancelTimeout(id) {},
  noTimeout: {},
  queueMicrotask(fn) {}
});

export const render = (app: React.ReactNode, resultContext: Result): void =>
  console.log(resultContext);
//expressionReconciler.createContainer(resultContext)

export function App() {
  return <AppComponent />;
}
