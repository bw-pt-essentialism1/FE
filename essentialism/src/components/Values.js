import React, { useEffect, useState } from "react"
import axios from "axios"
import { OnboardingButton } from "../styles"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../utils/Spinner"

function Values() {
  const History = useHistory()
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(state => state)
  const [values, setValues] = useState([])

  useEffect(() => {
    async function getValues() {
      dispatch({ type: GET_VALUES_START })
      try {
        const { data } = await axios.get("https://essentialism-backend1.herokuapp.com/values")
        setValues(data.values)
        dispatch({ type: GET_VALUES_SUCCESS })
      }
      catch (err) {
        console.log(err)
        dispatch({ type: GET_VALUES_FAILURE })
      }

    }
    getValues()
  }, [dispatch])

  const token = localStorage.getItem("token")
  const user_id = localStorage.getItem("user_id")

  async function threeFavoriteValues(e, id) {
    e.preventDefault()
    try {
      dispatch({ type: POST_VALUES_START })
      await axios({
        method: "post",
        url: "https://essentialism-backend1.herokuapp.com/users/uservalues",
        data: {
          value_id: id,
          user_id
        },
        headers: {
          Authorization: token
        }
      })
      dispatch({ type: POST_VALUES_SUCCESS })

    }
    catch (err) {
      console.log("err", err)
      dispatch({ type: POST_VALUES_FAILURE })

    }

  }

  return (
    <div>
      <h1>Essentialism</h1>
      <h3>Choose Your Values</h3>
      {/* {count === 3 && <h3>You've picked all of your values!</h3>} */}
      {error && <p>{error}</p>}
      {isLoading && <Spinner />}
      <OnboardingButton onClick={() => History.push("/pick-three")}>I'm done selecting!</OnboardingButton>
      {values && values.map(cv => <p onClick={e => threeFavoriteValues(e, cv.id)} key={cv.id}>{cv.value}</p>)}
    </div>
  )
}

export default Values

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE';

export const POST_VALUES_START = 'POST_VALUES_START';
export const POST_VALUES_SUCCESS = 'POST_VALUES_SUCCESS';
export const POST_VALUES_FAILURE = 'POST_VALUES_FAILURE';