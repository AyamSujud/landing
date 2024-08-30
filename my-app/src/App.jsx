import React from 'react';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';
import UpdatesList from './components/UpdatesList';
import Footer from './components/Footer';
import './ceses/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageContainer />
      <div className="jewel">
        <h1 className="Tuljep">Hello！</h1>
        <p className="welcome-text">Welcome to TechForge! Here you will find all the latest and most updated technology news </p>
        <hr className="styled-hr" />
      </div>
      <UpdatesList />
      <hr className="stail-hr" />
      <div className="rekomen">
        <h1>Hot News!</h1>
      </div>
      <div className="grid-gambar">
        <div className="gambar-c1">
          <div className="imag-container">
            <img src="Tecno.png" alt="CC 201 HD AIO" className="image" />
            <div className="text-top-right">
              <p>Tecno Unjuk Kebolehan Pova 6 Pro 5G lewat Turnamen E-sports MLBB di Ukrida</p>
              <a href="https://example.com" className="link-bottom-right"><span>Tecno Pova 6 Pro 5G </span></a>
            </div>
          </div>
        </div>
        <div className="gambar-c1">
          <div className="imag-container">
            <img src="apel musik.jpeg" alt="JR 205 YK-SLO" className="image" />
            <div className="text-top-right">
              <p>Apple Music Tawarkan Langganan Gratis 3 Bulan, Jangan Sampai Terlewat!</p>
              <a href="https://example.com" className="link-bottom-right"><span>Jangan Sampai Terlewat! </span></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="stail-hr" />
      <div className="contact-me">
        <h2>Contact Me</h2>
        <p>If you have the latest news about technology, you can contact us below:</p>
        <form className="contact-form">
          <label>
            Username:
            <input type="text" name="username" className="input-field" />
          </label>
          <label>
            Email:
            <input type="email" name="email" className="input-field" />
          </label>
          <label>
            Message:
            <textarea name="message" className="input-field" />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
