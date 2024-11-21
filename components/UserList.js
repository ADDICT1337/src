import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div>
      {users.length === 0 ? (
        <p>Пользователи не найдены</p>
      ) : (
        users.map(user => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserList;

