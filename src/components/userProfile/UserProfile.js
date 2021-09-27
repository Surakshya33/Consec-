import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="Untitled Design.png" />
          </div>
          <h4>Hana</h4>
          <p>Stay quiet and keep Coding....</p>
          			
					
        </div>
        <div className="profile__card">
        <p id="norank">31 <img src="Crown.png" class="crown"/></p>	
        <p id="Rank">Rank</p>
        </div>
      </div>
    );
  }
}
