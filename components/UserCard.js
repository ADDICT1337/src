import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatarUrl} alt={user.name} />
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;

