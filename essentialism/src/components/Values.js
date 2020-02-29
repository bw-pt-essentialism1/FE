import React from "react"
import axios from "axios"
import { OnboardingButton } from "../styles"
import { useHistory } from "react-router-dom"

function Values() {
  const History = useHistory()
  function getValues() {
    axios.get("")
  }

  return (
    <div>
      <h1>Essentialism</h1>
      <h3>Choose Your Values</h3>
      <OnboardingButton onClick={() => History.push("/pick-three")}>I'm done selecting!</OnboardingButton>
    </div>
  )
}

export default Values