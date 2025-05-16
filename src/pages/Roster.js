import React, { useState } from 'react';
import './Roster.css'; // Make sure this path is correct

const rosterData = [
  // =================== COACHING STAFF ===================
  {
    id: 1,
    name: 'Coach Haile Gebrselassie',
    role: 'Head Coach',
    type: 'coach',
    image: '/images/coaches/haile.jpg',
  },
  {
    id: 2,
    name: 'Mekdes D.',
    role: 'Assistant Coach',
    type: 'coach',
    image: '/images/coaches/mekdes.jpg',
  },
  {
    id: 3,
    name: 'Solomon K.',
    role: 'Fitness Coach',
    type: 'coach',
    image: '/images/coaches/solomon.jpg',
  },

  // =================== PLAYERS ===================
  {
    id: 4,
    name: 'Abel M.',
    role: 'Forward',
    type: 'player',
    image: '/images/players/abel.jpg',
  },
  {
    id: 5,
    name: 'Yonatan S.',
    role: 'Midfielder',
    type: 'player',
    image: '/images/players/yonatan.jpg',
  },
  {
    id: 6,
    name: 'Nahom G.',
    role: 'Defender',
    type: 'player',
    image: '/images/players/nahom.jpg',
  },
  {
    id: 7,
    name: 'Dawit B.',
    role: 'Goalkeeper',
    type: 'player',
    image: '/images/players/dawit.jpg',
  },
  {
    id: 8,
    name: 'Mulugeta A.',
    role: 'Defender',
    type: 'player',
    image: '/images/players/mulugeta.jpg',
  },
];

export default function Roster() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredRoster =
    selectedType === 'all'
      ? rosterData
      : rosterData.filter((member) => member.type === selectedType);

  return (
    <div className="roster-container">
      <h2 className="roster-title">Team Roster</h2>

      <div className="filter-buttons">
        <button
          className={selectedType === 'all' ? 'active' : ''}
          onClick={() => setSelectedType('all')}
        >
          All
        </button>
        <button
          className={selectedType === 'coach' ? 'active' : ''}
          onClick={() => setSelectedType('coach')}
        >
          Coaches
        </button>
        <button
          className={selectedType === 'player' ? 'active' : ''}
          onClick={() => setSelectedType('player')}
        >
          Players
        </button>
      </div>

      <div className="roster-grid">
        {filteredRoster.map((member) => (
          <div key={member.id} className="roster-card">
            <img src={member.image} alt={member.name} className="roster-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
