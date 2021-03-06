import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/default-profile-picture.jpg';
import { Link } from 'react-router-dom';

const Avatar = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserAvatar = ({user, style, size, ...props }) => (
  <Avatar size={size || 35} style={{ ...style }} {...props}>
    <Link to={`/${user._id}`}>
    <img
      src={user.avatar && user.avatar !== '' ? user.avatar : defaultAvatar}
      alt={`Foto de perfil de ${user.username}`}
    />
    </Link>
  </Avatar>
);

Avatar.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

export default UserAvatar;
