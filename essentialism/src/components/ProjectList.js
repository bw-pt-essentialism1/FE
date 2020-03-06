import React from "react"
import { NewProject, WhiteSpace, OnboardingButton, H4 } from "../styles"
import { useHistory } from "react-router-dom"

function ProjectList() {
  const History = useHistory()
  return (
    <div>
      <h1>Essentialism</h1>
      <h4>List your current projects and involvements</h4>
      <NewProject>Add a new project</NewProject>
      <WhiteSpace>
        <H4>Projects</H4>
        <OnboardingButton onClick={() => History.push("/added-projects")}>I've added all my projects!</OnboardingButton>
      </WhiteSpace>
    </div>
  )
}

export default ProjectList