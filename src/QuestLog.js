import React from 'react'

export const QuestLog = ({quest,keyword, description, gold, xp, status}) => {
  return (
    <div>
        Quest Board<br/>
        {quest}<br/>
        {keyword}<br/>
        {description}<br/>
        {gold}<br/>
        {xp} <br/>
        {status}<br/>
    </div>
  )
}
