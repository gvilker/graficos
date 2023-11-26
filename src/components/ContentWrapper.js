import React, { useState, useEffect } from 'react';
import BumpChart from './BumpChart';


const ContentWrapper = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataFilePath = '/resultados_totales.json';

    const fetchData = async () => {
      try {
        const response = await fetch(dataFilePath);
        const jsonData = await response.json();
        setData(jsonData);
        
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '500px' /* ajusta según sea necesario */ }}>
      {data ? (
        <BumpChart data={data} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ContentWrapper;
