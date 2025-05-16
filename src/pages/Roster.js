import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Roster.css';

const rosterData = [
  // === COACHING STAFF ===
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
  // === PLAYERS ===
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
    <motion.div
      className="roster-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        className="roster-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Team Roster
      </motion.h2>

      <div className="filter-buttons">
        {['all', 'coach', 'player'].map((type) => (
          <motion.button
            key={type}
            className={selectedType === type ? 'active' : ''}
            onClick={() => setSelectedType(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type === 'all' ? 'All' : type === 'coach' ? 'Coaches' : 'Players'}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="roster-grid"
        layout
        transition={{ layout: { duration: 0.5 } }}
      >
        <AnimatePresence>
          {filteredRoster.map((member) => (
            <motion.div
              key={member.id}
              className="roster-card"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <img src={member.image} alt={member.name} className="roster-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
