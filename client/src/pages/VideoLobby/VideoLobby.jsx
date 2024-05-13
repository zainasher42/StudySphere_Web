import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import "./LobbyScreen.css"; // Import your CSS file

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="lobby-container"> {/* Create a container div for the background */}
      <Card className="lobby-card"> {/* Add a class to the card */}
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Lobby
          </Typography>
          <form onSubmit={handleSubmitForm}>
            <TextField
              id="email"
              label="Email ID"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              id="room"
              label="Room Number"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Join
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LobbyScreen;
