import { useState } from 'react';

export default function PlayerComponent({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        className="player-name"
        value={name}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <div className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </div>
    </li>
  );
}
