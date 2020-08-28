import React, { useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"

const arrayOfPixels = [
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
  [255, 255, 0],
  [0, 255, 255],
]

const quantize = require("quantize")

const maximumColorCount = 5

const colorMap = quantize(arrayOfPixels, maximumColorCount)
const quantizedColors = colorMap.palette()
console.log(quantizedColors)

const App = () => {
  return (
    <>
      <div className="App">
        {arrayOfPixels.map((item, i) => {
          return (
            <div
              style={{
                backgroundColor: `rgb(${arrayOfPixels[i][0]},${arrayOfPixels[i][1]},${arrayOfPixels[i][2]}`,
                width: `${100 / arrayOfPixels.length}%`,
                height: `100vh`,
              }}
            ></div>
          )
        })}
      </div>
      <div className="App">
        {quantizedColors.map((item, i) => {
          return (
            <div
              style={{
                backgroundColor: `rgb(${quantizedColors[i][0]},${quantizedColors[i][1]},${quantizedColors[i][2]}`,
                width: `${100 / quantizedColors.length}%`,
                height: `100vh`,
              }}
            ></div>
          )
        })}
      </div>
    </>
  )
}

export default App
