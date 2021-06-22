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

type Instance = any;
type TextInstance = any;
type HostContext = any;
type PublicInstance = any;
type TimeoutHandle = any;
type NoTimeout = any;

const expressionReconciler = ReactReconciler({
  supportsMutation: false,
  supportsPersistence: false,
  isPrimaryRenderer: false,
  supportsHydration: false,
  now() {
    return Date.now();
  },
  getPublicInstance(instance: Instance | TextInstance): PublicInstance {},
  getRootHostContext(param: any) {
    return null;
  },
  getChildHostContext(param: any): HostContext {},
  prepareForCommit(containerInfo: any) {
    return null;
  },
  resetAfterCommit(param: any) {},
  createInstance(
    type,
    props,
    rootContainer,
    hostContext,
    internalHandler
  ): Instance {},
  createTextInstance(
    text,
    rootContainer,
    hostContainer,
    internalHandler
  ): TextInstance {},
  appendInitialChild(
    parentInstance: Instance,
    child: Instance | TextInstance
  ) {},
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    return false;
  },
  prepareUpdate(instance, type, oldProps, newProps, rootContainer) {
    return null;
  },
  shouldSetTextContent(type, props) {
    return false;
  },
  appendChildToContainer(container, child) {},
  appendChild(parent, child) {},
  commitTextUpdate(text, oldText, newText) {},
  commitMount(instance, type, newProps, internalInstanceHandle) {},
  replaceContainerChildren(container: any, newChildren: any) {},
  resetTextContent(instance) {},
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) {},
  insertBefore(parentInstance, child, beforeChild) {},
  insertInContainerBefore(container, child, beforeChild) {},
  removeChild(parentInstance, child) {},
  removeChildFromContainer(container, child) {},
  hideInstance(instance) {},
  unhideInstance(instance, props) {},
  unhideTextInstance(instance, text) {},
  scheduleTimeout(fn) {},
  preparePortalMount(containerInfo) {},
  cancelTimeout(id) {},
  noTimeout: {},
  queueMicrotask(fn) {}
});

export const render = (app: React.ReactNode, resultContext: Result): void =>
  console.log(resultContext);

export function App() {
  return <AppComponent />;
}
