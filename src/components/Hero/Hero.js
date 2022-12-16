import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a full-stack software engineer and web developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://duckduckgo.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;