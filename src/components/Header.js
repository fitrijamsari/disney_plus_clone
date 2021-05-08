//rfce
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";

function Header() {
  //grab user from store (redux)
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  //to avoid user logout after refresh
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
    history.push("/");
  }, []);

  //signin popup using google firebase auth
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      // console.log(result);
      // dispatch related data (name, email and photo) to setUserLogin redux
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
    history.push("/");
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>

      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt=""></img>
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg"></img>
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg"></img>
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg"></img>
              <span>ORIGINAL</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg"></img>
              <span>MOVIE</span>
            </a>
            <a>
              <img src="/images/series-icon.svg"></img>
              <span>SERIES</span>
            </a>
          </NavMenu>
          {/* <UserImg src="/images/fitri.jpg" /> */}
          <UserImg onClick={signOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;

//styled-component

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  //flex this menu to max
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;

    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      padding-right: 5px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      //create white underline, &:after ni umpana akan create another div kat sebelah span, see F12
      //kalau set position absolute, kena ada parent as reference relative
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        //add transition
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

//locate login kat hujung
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
