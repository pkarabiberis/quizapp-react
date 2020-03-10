import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserValue } from '../../context/user-context';
import { firebase } from '../../firebase';

export const Header = ({ history }) => {
  const [username, setUsername] = useState('');
  //const { user } = useUserValue();
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    if (uid) {
      firebase
        .firestore()
        .collection('users')
        .doc(uid)
        .get()
        .then(doc => {
          setUsername(doc.data().username);
        });
    }
  }, [uid]);

  const logout = () => {
    localStorage.removeItem('uid');
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <>
      <Navbar bg="#07142f" variant="dark">
        <Link to={'/quizzes'}>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        {!username.length ? (
          <>
            <Link to={'/login'}>
              <Navbar.Brand>Login</Navbar.Brand>
            </Link>
            <Link to={'/register'}>
              <Navbar.Brand>Register</Navbar.Brand>
            </Link>
          </>
        ) : (
          <>
            <p>{username}</p>
            <p onClick={() => logout()}>Logout</p>
          </>
        )}

        <Nav className="mr-auto"></Nav>
      </Navbar>
    </>
  );
};
