import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Roster.css';

const rosterData = [
  // === COACHING STAFF ===
  {
    id: 1,
    name: 'Coach Jordan',
    role: 'Head Coach',
    type: 'coach',
    image: '/images/coaches/haile.jpg',
  },
  {
    id: 2,
    name: 'Mickiy',
    role: 'Assistant Coach',
    type: 'coach',
    image: '/images/coaches/mekdes.jpg',
  },
 
  // === PLAYERS ===
  {
    name: "Elias Gojjam",
    position: "Defence",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/EliasGojam.JPG",
  },
  {
    name: "Samuel Miteku",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Marron Acheampong",
    position: "Defence",
    country: "",
    imgSrc: "",
  },
  {
    name: "Ambes Sahlu",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Henok Wonwossen",
    position: "Forward",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Abel Aklog",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Kirubel Gizaw",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Abiyou Temesgen",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/abeiyo.JPG",
  },
  {
    name: "Robel Tedla",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Robelsmall.JPG",
  },
  {
    name: "Abinet Kassa",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Abentk.PNG",
  },
  {
    name: "Robell Wolde",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Robi.PNG",
  },
  {
    name: "Eyasu Tesfaye",
    position: "GoalKeeper",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/EyasuTesfaye.JPG",
  },
  {
    name: "Amsalue Mkunte",
    position: "Defense",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/amsal.jpg",
  },
  {
    name: "Matthew Tilahun",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Samuel Meressa",
    position: "GoalKeeper",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/samilgoal.PNG",
  },
  {
    name: "Samuel Gojjam",
    position: "Forward",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/sami gojam.PNG",
  },
  {
    name: "Daniel Meketa",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Daniel Meketa.PNG",
  },
  {
    name: "Markos Chekole",
    position: "Defense",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Matiwos Rumluy",
    position: "Defnese",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Jordan Tilahun",
    position: "Head Coach",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Jordan.PNG",
  },
  {
    name: "Akale Assayehgen",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Akale.PNG",
  },
  {
    name: "Mamadi Jiana",
    position: "Forward",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/mamdi.PNG",
  },
  {
    name: "Aubery sleamu-Bell",
    position: "Defnese",
    country: "Ethiopia",
    imgSrc: "",
  },
  {
    name: "Asnake Jida",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/AsnakeJida.PNG",
  },
  {
    name: "Dagimawi Tamrat",
    position: "Forward",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/dx.PNG",
  },
  {
    name: "Tilahun Tefera",
    position: "Defnese",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Tilahun Tefera.PNG",
  },
  {
    name: "Yamlaksira Getachew",
    position: "Midfielder",
    country: "Ethiopia",
    imgSrc: "/assets/PlayerPictures/Bamlak.PNG",
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
