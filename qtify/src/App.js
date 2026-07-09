import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );

        setTopAlbums(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopAlbums();
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
        />
      </div>
    </>
  );
}

export default App;