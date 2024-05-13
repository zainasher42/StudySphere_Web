import React from 'react';
import TopBar from '../../components/general/TopBar';
import './styles.css';
import LongCard from '../../components/Home/c1/LongCard';
import SmallCard from '../../components/Home/c2/SmallCard';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
      <TopBar />
      <div className="content">
        <LongCard />
        <div className="small-cards">
          <SmallCard name="Text Channels" />
          <SmallCard name="Voice Channels" />
          <Link to="/VideoLobby" className='mCard'>
          <SmallCard name="Video Calls" />
          </Link>
          <SmallCard name="Notifications" />              
        </div>
      </div>   
    </div>
  );
}

export default Home;
