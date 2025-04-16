import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import robotImage from './assets/Group 6.png';
import logoImage from './assets/Frame 1000005895.png';
import maskImage from './assets/Mask group (1).png';
// Now we can import SearchPage again
import SearchPage from './pages/SearchPage';
import LoginModal from './LoginModal';

// HomePage component that contains the original content
const HomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to the search page
    navigate('/search');
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <LeftSection>
          <BackgroundMask src={maskImage} alt="" />
          <Logo src={logoImage} alt="BATTLEXO LAB Logo" />
          <Heading>
            The future is closer than you think.
          </Heading>
          <Tagline>
            Something smart, fast, and revolutionary is on its way.
          </Tagline>
          <RobotContainer>
            <RobotImage src={robotImage} alt="Robot" />
            <Shadow />
          </RobotContainer>
        </LeftSection>
        
        <RightSection>
          <Form onSubmit={handleSubmit}>
            <FormTitle>Get early access!</FormTitle>
            <FormGroup>
              <Label>Name</Label>
              <Input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Email Address</Label>
              <Input 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Phone Number</Label>
              <Input 
                type="tel" 
                name="phone" 
                placeholder="Enter your mobile number" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>What you want to build?</Label>
              <Select 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select category</option>
                <option value="web">Web App</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">AI Solution</option>
                <option value="other">Other</option>
              </Select>
            </FormGroup>
            
            <SubmitButton type="submit">Join waitlist</SubmitButton>
          </Form>
          <LoginLink to="/login">Already have an account? Sign in</LoginLink>
        </RightSection>
      </ContentWrapper>
    </PageContainer>
  );
};

// Main App component with routing
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<LoginModal />} />
    </Routes>
  );
};

// ... existing styled components ...

export default App; 