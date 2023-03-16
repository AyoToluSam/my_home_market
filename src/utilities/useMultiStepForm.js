import { useState } from "react";


export const useMultiStepForm = (steps) => {

  const [currentStepIndex, setCurrentStepIndex] = useState()

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
    next,
    back,
    goTo
  }
}


