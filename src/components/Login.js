import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an ads with a
          Disney+ subscription. As on 03/26/2021, the price of The Disney Bundle
          will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px); //since header 70px
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  //disbale scroll at x axis
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    //set to position absolute and then strecht everything to the relative edge, so semua 0
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  //susun atas bawah
  display: flex;
  flex-direction: column;
  //
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 10px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  margin-top: 16px;
  width: 80%;
`;
