import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

function Welcome() {
  const location = useLocation();

  return (
    <>
        <div className="Home---UsersSupervisors">
            <div>
                <div className="background">
                    <div className="Wallpaper">
                        <span className="Welcome-Text">
                            Welcome, Joe
                        </span>
                        <span className="Date-Text">
                            29, FEBURARY, 2077.
                        </span>
                        <span className="Day-Text"> 
                            Monday
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Welcome;
