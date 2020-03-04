import React from "react"
import gear from "../imgs/gear.png"
import home from "../imgs/home-run.png"
import moon from "../imgs/moon.png"
import pencil from "../imgs/pencil.png"
import settings from "../imgs/settings.png"

import { Settings, Seperate } from "../styles"

function Home() {

  return (
    <div>
      <h1>Essentialism</h1>
      <Seperate>
        <Settings src={settings} />
        <Settings src={moon} />
      </Seperate>
    </div>
  )
}

export default Home