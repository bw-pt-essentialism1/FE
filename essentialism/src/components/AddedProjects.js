import React from "react"
import { OnboardingButton, P } from "../styles"
import { useHistory } from "react-router-dom"

function AddedProjects() {
  const History = useHistory()
  return (
    <div>
      <h1>Essentialism</h1>
      <P>Great job adding your projects!</P>
      <P>Now we are going to compare your values to your current projects</P>
      <P>Take a moment to think about how your current involvements fit into your top 3 Values and vice versa...</P>
      <OnboardingButton onClick={() => History.push("/project-values")}>I'm ready to compare!</OnboardingButton>
    </div>
  )
}

export default AddedProjects