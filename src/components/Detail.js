import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  // console.log(id);

  const [movie, setMovie] = useState();

  useEffect(() => {
    //grab movie from db
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //if doc with the id exist, save the data to state
          setMovie(doc.data());
        } else {
          //redirect to homepage
          <Link to="/"></Link>;
        }
      });
  }, []);

  console.log("Movie is", movie);

  return (
    <Container>
      {/* kuar error movie undefined, sbb useEffect take a few sec to fetch data from db, so  but logic if movie true or exist..baru load data*/}

      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} alt="" />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin: 5vh 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  border-radius: 4px;
  height: 56px;
  background-color: rgba(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgba(249, 249, 249);
`;

const AddButton = styled.button`
  cursor: pointer;
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  // centerkn horizontal
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  margin-top: 16px;
  line-height: 1.4;
  font-size: 20px;
  color: rgba(249, 249, 249);
  width: 50vw;
`;
