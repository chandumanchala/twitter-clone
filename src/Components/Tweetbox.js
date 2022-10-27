import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import { db } from "../firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "hemu",
      username: "hemupala",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
    });
    //reseting the posts
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetbox__imageInput"
          placeholder="optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetbox__tweetbutton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
