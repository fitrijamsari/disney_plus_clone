import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      // console.log(snapshot);
      let tempMovies = snapshot.docs.map((doc) => {
        // console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      });
      // console.log(tempMovies);
      // so we grab data, then dispatch action to save the movies to store
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px); //since header 70px
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  //disbale scroll at x axis
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    //set to position absolute and then strecht everything to the relative edge, so semua 0
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
