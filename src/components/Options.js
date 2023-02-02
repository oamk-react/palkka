import React from 'react'

export default function Options(props) {
  const percentages = []

  for (let i = props.min;i <= props.max;i = i + 0.25) {
    percentages.push(i)
  }

  return (
    percentages.map (percentage => {
      return <option value={percentage}>{percentage.toFixed(2)}%</option>
    })
  )
}
