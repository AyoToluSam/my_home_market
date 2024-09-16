import React from "react";
import { TabsContainer } from "./TabStyles";

type TabsProps = {
  tabs: string[];
  currentStepIndex: number;
  onSwitch?: (index: number) => void;
};

const Tabs = ({ tabs = [], currentStepIndex, onSwitch }: TabsProps) => {
  return (
    <TabsContainer>
      {tabs.map((formTitle, index) => {
        return (
          <h3
            key={index}
            className={currentStepIndex === index ? "active" : ""}
            onClick={() => onSwitch && onSwitch(index)}
          >
            {formTitle}
          </h3>
        );
      })}
    </TabsContainer>
  );
};

export default Tabs;
