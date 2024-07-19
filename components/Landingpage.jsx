import React, { useState, useEffect } from 'react';
import profilepic from '../assests/profile1.jpg'
import bg from '../assests/hostel.jpg'

export default function Landingpage(props) {
  const styles = {
    container: {
      position: 'relative',
      minHeight: '90vh',
      padding: '50px',
      overflow: 'hidden',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)', // Adjust the blur radius as needed
      zIndex: -1, // Ensure the background is behind the content
    },
    profileCard: {
      display: 'flex',
      border: '1px solid #ccc',
      padding: '30px',
      borderRadius: '10px',
      width: '80%',
      margin: '10px auto',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      position: 'relative', // Ensure content is positioned correctly over the background
      zIndex: 1, // Ensure the profile card is above the background
    },
    profilePicture: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '100px',
    },
    profileImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
    },
    profileInfo: {
      marginTop: '5px',
      textAlign: 'center',
    },
    editButton: {
      display: 'block',
      margin: '20px 10px',
      padding: '20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    profileDetails: {
      flex: 1,
    },
    ratings: {
      margin: '10px 0',
    },
    contactInfo: {
      marginTop: '10px',
    },
    basicInfo: {
      marginTop: '20px',
    },
    btnlink: {
      marginTop: '110px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage}></div>
      {props.role === "user" ? (
        <div>
          <div style={styles.profileCard}>
            <div style={styles.profilePicture}>
              <img
                src={profilepic}
                alt="Profile"
                style={styles.profileImage}
              />
              <div style={styles.profileInfo}>
                <h2>Manish Kr Poddar</h2>
                <h3>Tech Lead</h3>
                <div style={styles.contactInfo}>
                  <h3>Contact Information</h3>
                  <p>Address: Andheri Chakala, Mumbai, MH</p>
                  <p>Phone: +91-8133046733</p>
                  <p>Email: example@example.com</p>
                  <p>Hostel: Girl Hostel 3</p>
                </div>
              </div>
            </div>
            <div style={styles.profileDetails}>
              <h2>Manish Kr Poddar</h2>
              <h4>Technical Lead</h4>
              <div style={styles.ratings}>
                {/* <span>RATINGS</span>
                <span>⭐⭐⭐⭐</span> */}
              </div>
              <div style={styles.contactInfo}>
                <h3>Summary</h3>
                <p>Starting Date : 19-01-2024</p>
                <p>No Of Days: 217</p>
                <p>No Of Days leave taken: 19</p>
                <p>Cost Per Day: 125/-</p>
                <p>Cost Till Today(13-07-2024): 24750/-</p>
                <p>One Time Pay: 12500/-</p>
                <p>Refundable Amount: 12250/-</p>
              </div>
              <div style={styles.basicInfo}>
                <h3>Basic Information</h3>
                <p>BirthDay: 04 March 2022</p>
                <p>Gender: Male</p>
              </div>
            </div>
            <div style={styles.profileDetails}>
              <div style={styles.btnlink}>
                <a href='/leave' style={styles.editButton}>
                  Apply Leave
                </a>
                <a href='/menu' style={styles.editButton}>
                  See Mess Menu
                </a>
                <a href='/complain' style={styles.editButton}>
                  Complain
                </a>
                <a href='/contact' style={styles.editButton}>
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div style={styles.profileCard}>
            <div style={styles.profileDetails}>
              <h2>ADMIN PORTAL</h2>
              <div style={styles.profileDetails}>
                <div style={styles.btnlink}>
                  <a href='/addStudents' style={styles.editButton}>
                    Add Student
                  </a>
                  <a href='/menu' style={styles.editButton}>
                    Approve Leave
                  </a>
                  <a href='/complain' style={styles.editButton}>
                    Change Menu
                  </a>
                  <a href='/contact' style={styles.editButton}>
                    Check Complain
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
