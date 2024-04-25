import { useState, useEffect } from 'react';
import './App.css';
import NavBrand from './component/NavBrand';
import FooterBrandList from "./component/FooterBrandList";
import TermsOfUsePrivacy from './component/TermsOfUsePrivacy';
import FooterLeft from './component/FooterLeft';
import FooterRight from './component/FooterRight';
import styled from 'styled-components';
import CustomAccordion from './component/CustomAccordian';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile below 768px width
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <NavBrand />
      <FooterWrapper>
        {isMobile ? <CustomAccordion/> : <FooterRight />}
        <FooterLeft />
      </FooterWrapper>
      <FooterBrandList />
      <TermsOfUsePrivacy />
    </div>
  );
}

export default App;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center horizontally */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
