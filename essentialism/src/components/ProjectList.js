import React from "react"
import { NewProject, WhiteSpace, OnboardingButton, H4 } from "../styles"

function ProjectList() {

  return (
    <div>
      <h1>Essentialism</h1>
      <h4>List your current projects and involvements</h4>
      <NewProject>Add a new project</NewProject>
      <WhiteSpace>
        <H4>Projects</H4>
        <OnboardingButton>I've added all my projects!</OnboardingButton>
      </WhiteSpace>
    </div>
  )
}

export default ProjectList