import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function Main() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techsSize = useMemo(() => techs.length, [techs]);

  const handleAddTech = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {techsSize} Techs</strong>
      <br />
      <input
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
        type="text"
      />
      <button type="button" onClick={handleAddTech}>
        Add
      </button>
    </>
  );
}
