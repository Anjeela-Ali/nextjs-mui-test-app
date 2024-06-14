
'use client';
import { Button, styled } from '@mui/material'
import React from 'react'
import { Colors } from '../theme/colors'

const MainButtonComponent = styled(Button, {
        name:'MainButtonComponent',
        slot:'Root'
}
)(({})=>({
        color:Colors.text.primary,
        textTransform: 'capitalize',
        fontSize:'14px',
}))
const MainButton = ({
  title,
  onButtonClick,
  disabled
}:{
  title:string,
  onButtonClick:(param: string) => void,
  disabled:React.ReactNode
}) => {
  return (
    <div>
      <MainButtonComponent onClick={()=>onButtonClick(title)}>{title} </MainButtonComponent>
    </div>
  )
}

export default MainButton
