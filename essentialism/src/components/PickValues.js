import React, { useEffect, useState } from "react"
import { OnboardingButton } from "../styles"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../utils/Spinner"

function PickValues() {
  const History = useHistory()
  const id = localStorage.getItem("user_id")
  const token = localStorage.getItem("token")
  const [userValues, setUserValues] = useState([])
  const [count, setCount] = useState(0)
  const { isLoading, error } = useSelector(state => state)
  const dispatch = useDispatch()

  let disabled = true
  if (count > 2) disabled = false

  useEffect(() => {
    async function getUserValues() {
      setCount(count + 1)
      dispatch({ type: POST_FAVORITE_VALUES_START })
      try {
        const res = await axios.get(`https://essentialism-backend1.herokuapp.com/users/uservalues/${id}`, {
          headers: {
            Authorization: token
          }
        })
        setUserValues(res.data.values.values)
        dispatch({ type: POST_FAVORITE_VALUES_SUCCESS })

      }
      catch (err) {
        console.log(err.response.data)
        dispatch({ type: POST_FAVORITE_VALUES_FAILURE })

      }
    }
    getUserValues()
  }, [id, token])

  return (
    <div>
      <h1>Essentialism</h1>
      <h3>Your Values</h3>
      {userValues && userValues.map(cv => <p key={cv.id}>{cv.value}</p>)}
      {isLoading && <Spinner />}
      <h5>Please Select 3 Values</h5>
      <OnboardingButton disabled={disabled} onClick={() => History.push("explain-values")}>I'm done!</OnboardingButton>
    </div>
  )
}


export default PickValues

export const POST_FAVORITE_VALUES_START = 'POST_FAVORITE_VALUES_START';
export const POST_FAVORITE_VALUES_SUCCESS = 'POST_FAVORITE_VALUES_SUCCESS';
export const POST_FAVORITE_VALUES_FAILURE = 'POST_FAVORITE_VALUES_FAILURE';