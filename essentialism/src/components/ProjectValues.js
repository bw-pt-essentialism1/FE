import React from "react"
import { NewProject, WhiteSpace, OnboardingButton, H4 } from "../styles"
import { useHistory } from "react-router-dom"

function ProjectValues() {
  const History = useHistory()

  return (
    <div>
      <h1>Essentialism</h1>
      <h4>Select the values that correspond with each project</h4>
      <NewProject>Add a new project</NewProject>
      <WhiteSpace>
        <H4>Projects</H4>
        <OnboardingButton onClick={() => History.push("/home")}>I'm ready to go!</OnboardingButton>
      </WhiteSpace>
    </div>
  )
}

export default ProjectValues