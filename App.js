import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setUsers([]);
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const mockResponse = {
          data: { result: [{ id: '1', name: 'User1', avatarUrl: 'https://via.placeholder.com/50' }] },
        };
        setUsers(mockResponse.data.result);
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
      } finally {
        setLoading(false);
      }
    };
    

    const delayDebounce = setTimeout(fetchUsers, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>Поиск пользователей бота</h1>
      <div>
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? <p>Загрузка...</p> : (
        <div>
          {users.length === 0 ? (
            <p>Пользователи не найдены</p>
          ) : (
            users.map(user => (
              <div key={user.id}>
                <img src={user.avatarUrl} alt={user.name} width="50" height="50" />
                <p>{user.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default App;

