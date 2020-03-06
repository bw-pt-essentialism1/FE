import React from "react"
import { NewProject, WhiteSpace, OnboardingButton, H4 } from "../styles"
import { useHistory } from "react-router-dom"
function ListValues() {
  const History = useHistory()

  return (
    <div>
      <h1>Essentialism</h1>
      <h4>List your current projects and involvements</h4>
      <NewProject>Add a new project</NewProject>
      <WhiteSpace>
        <H4>Projects</H4>
        <OnboardingButton
          onClick={() => History.push("/project-list")}>I don't have any projects :(</OnboardingButton>
      </WhiteSpace>
    </div>
  )
}

export default ListValues