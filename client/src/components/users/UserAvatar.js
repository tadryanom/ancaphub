import React from 'react'
import defaultAvatar from '../../assets/default-profile-picture.jpg'
import styled from 'styled-components'

const Avatar = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  border-radius:100%;

  img {
    width: 100%;
    height: 100%;
  }
`

const UserAvatar = ({avatar, username, style, size, ...props}) => {
  return (
    <Avatar size={size || 35} style={{ ...style }} {...props}>
      <img 
        src={avatar == "" ? defaultAvatar : avatar} 
        alt={"Foto de perfil de" + username}
      />
    </Avatar>
  )
}

export default UserAvatar