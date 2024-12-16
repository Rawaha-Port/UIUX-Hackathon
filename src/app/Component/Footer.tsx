import React from 'react';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    width: '1440px',
    height: '380px',
    background: '#2A254B',
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicitly casting to 'column'
    padding: '20px',
    position: 'relative' as 'relative', // Explicitly casting to 'relative'
    fontFamily: 'Satoshi' as string, // Ensuring it's treated as a string
  };

  const menuStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicitly casting to 'column'
    alignItems: 'flex-start',
    position: 'absolute',
    width: '108px',
    height: '175px',
    left: '82px',
    top: '58px',
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'Satoshi' as string, // Ensuring it's treated as a string
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px',
    color: '#FFFFFF',
  };

  return (
    <footer style={footerStyle}>
      <div style={menuStyle}>
        <span style={{ ...textStyle, fontSize: '16px' }}>Menu</span>
        <span style={textStyle}>New arrivals</span>
        <span style={textStyle}>Best sellers</span>
        <span style={textStyle}>Recently viewed</span>
        <span style={textStyle}>Popular this week</span>
        <span style={textStyle}>All products</span>
      </div>

      <div style={{ ...menuStyle, left: '299px' }}>
        <span style={{ ...textStyle, fontSize: '16px' }}>Categories</span>
        <span style={textStyle}>Crockery</span>
        <span style={textStyle}>Furniture</span>
        <span style={textStyle}>Homeware</span>
        <span style={textStyle}>Plant pots</span>
        <span style={textStyle}>Chairs</span>
      </div>

      <div style={{ ...menuStyle, left: '516px' }}>
        <span style={{ ...textStyle, fontSize: '16px' }}>Our Company</span>
        <span style={textStyle}>About us</span>
        <span style={textStyle}>Vacancies</span>
        <span style={textStyle}>Contact us</span>
        <span style={textStyle}>Privacy</span>
        <span style={textStyle}>Returns policy</span>
      </div>

      <div style={{ position: 'absolute', width: '142px', height: '20px', left: '730px', top: '58px' }}>
        <span style={{ ...textStyle, fontSize: '16px' }}>Join our mailing list</span>
      </div>

      <div style={{ position: 'absolute', width: '1277px', height: '0px', left: '80px', top: '312px', border: '1px solid #4E4D93' }} />

      <div style={{ display: 'flex', gap: '24px', position: 'absolute', width: '264px', height: '24px', left: '1093px', top: '334px' }}>
        <div style={{ width: '24px', height: '24px', backgroundColor: '#FFFFFF' }} />
        <div style={{ width: '24px', height: '24px', backgroundColor: '#FFFFFF' }} />
        <div style={{ width: '24px', height: '24px', backgroundColor: '#FFFFFF' }} />
        <div style={{ width: '24px', height: '24px', backgroundColor: '#FFFFFF' }} />
        <div style={{ width: '24px', height: '24px', backgroundColor: '#FFFFFF' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'absolute', width: '627px', height: '56px', left: '730px', top: '94px' }}>
        <div style={{ width: '509px', height: '56px', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <input 
            type="email" 
            placeholder="your@email.com" 
            style={{ 
              ...textStyle, 
              width: '100%',  // Ensure it takes up the full width of the container
              height: '36px', // Adjust height to fit inside the container
              padding: '0 10px', // Adjust padding for better alignment
              background: 'transparent', 
              border: 'none' 
            }} 
          />
        </div>
        <button style={{ padding: '16px 32px', background: '#FFFFFF', color: '#2A254B' }}>Subscribe</button>
      </div>

      <div style={{ position: 'absolute', width: '164px', height: '19px', left: '80px', top: '336px', fontFamily: 'Satoshi', fontWeight: 400, fontSize: '14px', color: '#FFFFFF' }}>
        Copyright 2022 Avion LTD
      </div>
    </footer>
  );
};

export default Footer;
