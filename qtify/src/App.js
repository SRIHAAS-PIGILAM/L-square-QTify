import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topRes, newRes, songsRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/albums/top"),
          axios.get("https://qtify-backend.labs.crio.do/albums/new"),
          axios.get("https://qtify-backend.labs.crio.do/songs"),
        ]);

        setTopAlbums(topRes.data);
        setNewAlbums(newRes.data);
        setSongs(songsRes.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div
        style={{
          backgroundColor: "#121212",
          minHeight: "100vh",
        }}
      >
        <Section
          title="Top Albums"
          data={topAlbums}
          buttonText="Collapse"
        />

        <Section
          title="New Albums"
          data={newAlbums}
          buttonText="Show all"
        />
      </div>
    </>
  );
}

export default App;