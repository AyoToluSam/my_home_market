import { useState } from "react";


export const useMultiStepForm = (steps, titles) => {

  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = () => {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) {
        return i
      }
      return i + 1
    })
  }

  const back = () => {
    setCurrentStepIndex(i => {
      if (i <= 0) {
        return i
      }
      return i - 1
    })
  }

  const goTo = (index) => {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    title: titles[currentStepIndex],
    titles,
    next,
    back,
    goTo,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  }
}


