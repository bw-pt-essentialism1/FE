import React from "react"
import { P, H1, OnboardingButton } from "../styles"
import { useHistory } from "react-router-dom"

function Onboarding() {
  const History = useHistory()
  return (
    <div>
      <H1>Welcome to the beginning of your journey...</H1>
      <P>This is Essentialism</P>
      <P>The way of the Essentialist involves doing less, but better.</P>
      <P>It's not about getting more done in less time or getting less done.</P>
      <P>I'ts about only getting the right things done.</P>
      <P>The first step to Essentialism is identifying your values...</P>
      <P>Let's do that now!</P>
      <OnboardingButton onClick={() => History.push("/values")}>I'm Ready!</OnboardingButton>
    </div>
  )
}


export default Onboarding