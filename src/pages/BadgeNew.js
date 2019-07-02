import React from "react";
import NavBar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='Logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName='Jesus'
                lastName='Gomez'
                twitter='chuygomezbeta'
                jobTitle='IT Engineer'
                avatarUrl='https://www.gravatar.com/avatar/?d=identicon'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
