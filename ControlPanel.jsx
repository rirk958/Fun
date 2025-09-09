import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Modal.css";

export default function ControlPanel() {
  const [openVideo, setOpenVideo] = useState(false);
  const [openActor, setOpenActor] = useState(false);
  const [openChannel, setOpenChannel] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenVideo(true)}>Add Video</button>
      <button onClick={() => setOpenActor(true)}>Actor</button>
      <button onClick={() => setOpenChannel(true)}>Channel</button>

      {openVideo && <VideoModal onClose={() => setOpenVideo(false)} />}
      {openActor && <ActorModal onClose={() => setOpenActor(false)} />}
      {openChannel && <ChannelModal onClose={() => setOpenChannel(false)} />}
    </div>
  );
}

/* ---------- Actor Modal ---------- */
function ActorModal({ onClose }) {
  const [name, setName] = useState("");
  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    const res = await axios.get("/api/actors");
    setActors(res.data);
  };
  useEffect(() => { fetchActors(); }, []);

  const addActor = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await axios.post("/api/actors", { name: name.trim() });
    setName("");
    fetchActors();
  };

  const delActor = async (id, actorName) => {
    const ok = window.confirm(`Delete actor "${actorName}"?`);
    if (!ok) return;
    await axios.delete(`/api/actors/${id}`);
    fetchActors();
  };

  return (
    <div className="modal">
      <div className="box">
        <h3>Actors</h3>
        <form onSubmit={addActor}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Actor name" />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
        <ul>
          {actors.map(a => (
            <li key={a._id}>
              {a.name}
              <button onClick={() => delActor(a._id, a.name)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Channel Modal ---------- */
function ChannelModal({ onClose }) {
  const [name, setName] = useState("");
  const [channels, setChannels] = useState([]);

  const fetchChannels = async () => {
    const res = await axios.get("/api/channels");
    setChannels(res.data);
  };
  useEffect(() => { fetchChannels(); }, []);

  const addChannel = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await axios.post("/api/channels", { name: name.trim() });
    setName("");
    fetchChannels();
  };

  const delChannel = async (id, channelName) => {
    const ok = window.confirm(`Delete channel "${channelName}"?`);
    if (!ok) return;
    await axios.delete(`/api/channels/${id}`);
    fetchChannels();
  };

  return (
    <div className="modal">
      <div className="box">
        <h3>Channels</h3>
        <form onSubmit={addChannel}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Channel name" />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
        <ul>
          {channels.map(c => (
            <li key={c._id}>
              {c.name}
              <button onClick={() => delChannel(c._id, c.name)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Video Modal ---------- */
// Replace this with your Add Video form
function VideoModal({ onClose }) {
  return (
    <div className="modal">
      <div className="box">
        {/* Add Video fields here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
