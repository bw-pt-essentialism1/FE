import React from "react"
import { OnboardingButton } from "../styles"
import { useHistory } from "react-router-dom"

function PickValues() {
  const History = useHistory()

  return (
    <div>
      <h1>Essentialism</h1>
      <h3>Your Values</h3>
      <h5>Please Select 3 Values</h5>
      <OnboardingButton onClick={() => History.push("explain-values")}>I'm done!</OnboardingButton>
    </div>
  )
}


export default PickValues