import React from "react"
import { OnboardingButton } from "../styles"
import { useHistory } from "react-router-dom"


function PickThree() {
  const History = useHistory()

  return (
    <div>
      <h1>Essentialism</h1>
      <p>Now that you've selected your values we are going to narrow them down to your Top 3 values!</p>
      <p>Take a moment to think about your goals, where you are in your life's journey, and the things that you would like to imporve...</p>
      <OnboardingButton onClick={() => History.push("/pick-values")}>I'm Ready</OnboardingButton>
    </div>
  )
}


export default PickThree