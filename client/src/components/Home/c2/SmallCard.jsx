import React from 'react';
import backgroundImage from '../../../assets/background.jpg'; // Assuming the path to your background image is correct

const SmallCard = ({ name }) => {
  return (
    <div style={styles.card}>
      <div style={styles.background}></div>
      <div style={styles.content}>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%', // Adjust as needed
    height: '200px', // Adjust as needed
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    marginRight:'3%'
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

export default SmallCard;
