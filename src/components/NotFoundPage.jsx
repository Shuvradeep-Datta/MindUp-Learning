import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '72px',
    margin: '0 0 20px',
    color: '#FF6B6B',
  },
  text: {
    fontSize: '20px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '18px',
    color: '#3498db',
    textDecoration: 'none',
  },
};

export default NotFoundPage;