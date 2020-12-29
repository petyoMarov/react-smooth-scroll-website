import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    to="home"
                    smooth
                    duration={500}
                    spy
                    exact="true"
                    offset={-80}
                    primary={primary}
                    dark={dark}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

InfoSection.propTypes = {
  lightBg: PropTypes.bool,
  id: PropTypes.string,
  imgStart: PropTypes.bool,
  topLine: PropTypes.string,
  lightText: PropTypes.bool,
  headline: PropTypes.string,
  darkText: PropTypes.bool,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
};

export default InfoSection;
