import React from 'react';
import backgroundImage from '../../../assets/background.gif'; // Assuming the path to your background image is correct

const LongCard = ({ name }) => {
  // Get the current date
  const currentDate = new Date().toDateString();

  return (
    <div style={styles.card}>
      <div style={styles.background}></div>
      <div style={styles.content}>
        <h1>Welcome {name}</h1>
        <p>{currentDate}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '1120px', // Adjust as needed
    height: '500px', // Adjust as needed
    borderRadius: '50px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    marginBottom:'160px'
  },
  background: {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'cover', // Ensure the image covers the entire container
    backgroundPosition: 'center', // Center the image within the container
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  content: {
    padding: '20px',
    color: '#fff',
    zIndex: 1, // Ensure the content is above the background image
  },
};

export default LongCard;
