import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addName, addAvatar } from "../../Slices/userSlice";
import { TiTick } from "react-icons/ti";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);

  const ImageArr = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPFG2avZ9h7ROn4W6qZy5risfoI-ykQlsew&s",
    },
    {
      id: 2,
      src: "data:image/png;base64,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",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtP4cDLkbkAyTXfdWfTYteZyVF_M43EKqQ_6jeImZD_ab6vHxfN1sxInIYHJdM3mCPaag&usqp=CAU",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEEJFJF_IRt7erUekFSx6QscC09hTvO1OfF-X-1wsCM1_oz-8KkJ1NKnUVMPL5vZPY_g&usqp=CAU",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtGMrPTHyE63stqAADsrLwhjvWYVWNYamOQ&s",
    },
  ];

  const [userCreds, setUserCreds] = useState({
    fullName: "",
    emailId: "",
    password: ""
    })
    const [showSignUp, setshowSignUp] = useState(true);
    const toggleSignUp = () => {
        setshowSignUp(!showSignUp);
  }
  

  const handleUserCreds = (event) => {
    const inputName = event.target.name;
    const val = event.target.value;
    setUserCreds(prev => ({...prev, [inputName]: val}))
  }

  const handleAvatar = (id, source) => {
    setSelectedImage(id);
    dispatch(addAvatar({id, source}))
  }

  // useEffect(() => {
  //   console.log("userCreds", userCreds.fullName, userCreds.emailId)
  // },[userCreds])

  const handleUser = (e, showSignUp) => {
    const apiUrl = "http://localhost:5000/";

    e.preventDefault();
    if (!showSignUp) {
      fetch(`${apiUrl}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: userCreds.emailId,
          password: userCreds.password,
        })
      })
          .then((res) => {
            console.log("User logged in", res)
            dispatch(addName(userCreds && userCreds.emailId));
            navigate('/browse');
        }).catch((err) => {
          console.log(err);
        })
    }
    else {
      fetch(`${apiUrl}api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: userCreds.fullName,
          emailAddress: userCreds.emailId,
          password: userCreds.password
        })
      }).then((response) => {
        console.log("Succesfully signed up", response)
          dispatch(addName(userCreds && userCreds.fullName));
         navigate("/browse");
      }).catch((err) => {
        console.log("error is", err);
      })
    }
  }
    return (
      <div className="main-wrapper">
        {/* <div className="header">
              <div className='header-text'>BOOKING.COM</div>
            </div> */}
        <div className="form">
          {showSignUp ? (
            <h1 className="heading">Finding your next stay?</h1>
          ) : (
            <h1>Welcome Back</h1>
          )}

          <form>
            <div className="input-wrapper">
              {showSignUp && (
                <input
                  name="fullName"
                  className="block"
                  type="text"
                  value={userCreds.fullName}
                  placeholder="Full Name"
                  onChange={handleUserCreds}
                ></input>
              )}

              <input
                name="emailId"
                className="block"
                type="email"
                value={userCreds.emailId}
                placeholder="Email Address"
                onChange={handleUserCreds}
              ></input>
              <input
                name="password"
                className="block"
                type="password"
                value={userCreds.password}
                placeholder="Password"
                onChange={handleUserCreds}
              ></input>
            </div>
            {showSignUp && (
              <div className="avatar-wrapper">
                <p className="text">Please choose your avatar from below</p>
                <div className="inner">
                  {ImageArr.map((ele) => {
                    return (
                      <div
                        className="avatar-image"
                        onClick={() => handleAvatar(ele.id, ele.src)}
                      >
                        {ele.id === selectedImage ? (
                          <TiTick
                            style={{
                              position: "absolute",
                              top: "-9px",
                              left: "-10px",
                            }}
                          />
                        ) : null}
                        <img src={ele.src} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* <Link to="/browse"> */}
            <button
              onClick={(e) => handleUser(e, showSignUp)}
              className="button"
              disabled={
                showSignUp
                  ? (userCreds.fullName.length === 0 ||
                    userCreds.emailId.length === 0 ||
                    userCreds.password.length === 0)
                  : (userCreds.emailId.length === 0 ||
                    userCreds.password.length === 0)
              }
            >
              {showSignUp ? "Sign Up" : "Sign In"}
            </button>
            {/* </Link> */}

            <div className="bottom">
              {showSignUp ? "Already a Member?" : "No Account?"}
              <p className="click-text" onClick={toggleSignUp}>
                {!showSignUp ? "Sign Up" : "Sign In"}
              </p>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Index