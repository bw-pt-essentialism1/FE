import React from "react"
import { TextBox, OnboardingButton } from "../styles"
function ExplainValues() {

  return (
    <div>
      <h1>Essentialism</h1>
      <p>In a few sentences, describe why the selected values are most important to you.</p>
      <p>Focus on your thoughts and feelings</p>
      <p>Don't worry about spelling, grammar, or how well-written it is.</p>
      <TextBox cols="65" rows="19" type=" text-box"></TextBox>
      <OnboardingButton>I've Finished writing</OnboardingButton>
    </div>
  )
}

export default ExplainValues