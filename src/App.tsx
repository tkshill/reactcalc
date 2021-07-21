import "./styles.css";
import React from "react";
import ReactReconciler from "react-reconciler";

type Result = number;

type Expression = (operand: number) => Result;

export const initialResult: Result = 0;

type OperatorProp = { value: number; children?: any };

const Addition = (props: OperatorProp) =>
  React.createElement("addition", props.value, props.children);

const Multiplication = (props: OperatorProp) =>
  React.createElement("multiplication", props.value, props.children);

const AppComponent = () => (
  <Addition value={4}>
    <Multiplication value={5} />
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
  getPublicInstance(param) {},
  getRootHostContext(param: any) {
    return null;
  },
  getChildHostContext(param: any): HostContext {},
  prepareForCommit(containerInfo: any) {
    return null;
  },
  resetAfterCommit(param: any) {},
  createInstance(
    type: string,
    props: Props,
    rootContainer: any,
    hostContext: Result,
    internalHandler: any
  ): Expression {
    switch (type) {
      case "addition":
        return (x: number) => props.value + x;
      case "substraction":
        return (x: number) => props.value - x;
      case "multiplication":
        return (x: number) => props.value * x;
      case "division":
        return (x: number) => props.value / x;
      default:
        throw Error;
    }
  },
  createTextInstance(
    text: any,
    rootContainer: any,
    hostContainer: any,
    internalHandler: any
  ) {},

  appendChild(parent: Result, child: Expression) {
    parent = child(parent);
  },
  appendInitialChild(parentExpression, child) {},
  appendChildToContainer(container, child) {},
  finalizeInitialChildren(expression, type, props, rootContainer, hostContext) {
    return false;
  },
  prepareUpdate(expression, type, oldProps, newProps, rootContainer) {
    return null;
  },
  shouldSetTextContent(type, props) {
    return false;
  },

  commitTextUpdate(text, oldText, newText) {},
  commitMount(expression, type, newProps, internalExpressionHandle) {},
  replaceContainerChildren(container: any, newChildren: any) {},
  resetTextContent(expression) {},
  commitUpdate(
    expression,
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
  hideInstance(Instance: any) {},
  unhideInstance(Instance: any, props: any) {},
  unhideTextInstance(Instance: any, text: any) {},
  scheduleTimeout(fn) {},
  preparePortalMount(containerInfo) {},
  cancelTimeout(id) {},
  noTimeout: {},
  queueMicrotask(fn) {}
});

export const render = (app: React.ReactNode, resultContext: Result): void =>
  expressionReconciler.createContainer(resultContext, app, false, false);

export function App() {
  return <AppComponent />;
}
