import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

const Header = props => {
  const [username, setUsername] = useState(null);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      localStorage.setItem('uid', user.uid);

      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            setUsername(doc.data().username);
          }
        });
    }
  });

  const logout = () => {
    localStorage.removeItem('uid');
    firebase
      .auth()
      .signOut()

      .then(() => {
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to={'/quizzes'}>
            <img src="/images/logo.png" alt="Todoist" />
          </Link>
        </div>
        <div className="settings">
          {!username ? (
            <ul>
              <li className="settings__add">
                <Link to={'/login'}>
                  <p>Log in</p>
                </Link>
                <Link to={'/register'}>
                  <p>Register</p>
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="settings__add">
                <p>{username}</p>
                <p onClick={() => logout()}>Log out</p>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
