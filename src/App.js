// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Sonny", message: "Hey guys" },
    { username: "Qazi", message: "What's Up" },
  ]);
  const [username, setUsername] = useState("");
  // useState = variable in React
  // useEffect = run code on a condition in React
  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    // run code here
    // if its blank inside [], this code runs ONCE when the app component loads
    // const username = prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));
  }, []); // Condition
  console.log(input);
  console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // All the logic for sending the message will be implemented here
    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
        alt="Messenger Icon"
        width="70"
        height="70"
      />

      <h1>Welcome to MessageX</h1>
      <h2>Welcome {username}</h2>
      {/* Form refreshes on Submit */}
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="app__input"
            placeholder="Enter a Message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__IconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          <Button
            disabled={!input}
            // Disable used above is use to disable the send message button when no input is given
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Messages
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>

      {/* input field */}
      {/* button  */}
      {/* messages themselves */}
    </div>
  );
}

export default App;

// Paste it is in your body tag
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.10/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.10/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// 31:33
// 1:23:47
// 1:49
// 2: 01
