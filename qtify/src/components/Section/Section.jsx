// import { useState } from "react";
// import styles from "./Section.module.css";
// import Card from "../Card/Card";

// function Section({ title, data }) {
//   const isSongs = title === "Songs";

//   const [showAll, setShowAll] = useState(false);

//   const displayedData =
//     showAll || isSongs
//       ? data
//       : data.slice(0, 7);

//   const currentButtonText =
//     showAll ? "Collapse" : "Show all";

//   return (
//     <section className={styles.section}>
//       <div className={styles.header}>
//         <h2>{title}</h2>

//         {!isSongs && (
//           <button
//             className={styles.button}
//             onClick={() =>
//               setShowAll((prev) => !prev)
//             }
//           >
//             {currentButtonText}
//           </button>
//         )}
//       </div>

//       <div className={styles.grid}>
//         {displayedData.map((item) => (
//           <Card
//             key={item.id}
//             image={item.image}
//             follows={item.follows || item.likes}
//             title={item.title}
//             type={
//               isSongs
//                 ? "song"
//                 : "album"
//             }
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Section;

// import { useState } from "react";

// import styles from "./Section.module.css";

// import Card from "../Card/Card";
// import Carousel from "../Carousel/Carousel";

// function Section({ title, data }) {
//   const isSongs = title === "Songs";

//   const [showAll, setShowAll] = useState(false);

//   const renderCard = (item) => (
//     <Card
//       image={item.image}
//       follows={item.follows || item.likes}
//       title={item.title}
//       type={isSongs ? "song" : "album"}
//     />
//   );

//   return (
//     <section className={styles.section}>
//       <div className={styles.header}>
//         <h2>{title}</h2>

//         {!isSongs && (
//           <button
//             className={styles.button}
//             onClick={() =>
//               setShowAll((prev) => !prev)
//             }
//           >
//             {showAll
//               ? "Collapse"
//               : "Show all"}
//           </button>
//         )}
//       </div>

//       {showAll ? (
//         <div className={styles.grid}>
//           {data.map((item) => (
//             <Card
//               key={item.id}
//               image={item.image}
//               follows={
//                 item.follows || item.likes
//               }
//               title={item.title}
//               type={
//                 isSongs
//                   ? "song"
//                   : "album"
//               }
//             />
//           ))}
//         </div>
//       ) : (
//         <Carousel
//           data={data}
//           renderComponent={renderCard}
//           navigationId={title}
//         />
//       )}
//     </section>
//   );
// }

// export default Section;


import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import styles from "./Section.module.css";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({
  title,
  data,
  genres = [],
}) {
  const isSongs = title === "Songs";

  const [showAll, setShowAll] = useState(false);

  const [selectedGenre, setSelectedGenre] =
    useState("all");

  const filteredSongs =
    selectedGenre === "all"
      ? data
      : data.filter(
          (song) =>
            song.genre.key === selectedGenre
        );

  const renderCard = (item) => (
    <Card
      image={item.image}
      follows={item.follows || item.likes}
      title={item.title}
      type={isSongs ? "song" : "album"}
    />
  );

  const displayData = isSongs
    ? filteredSongs
    : data;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {!isSongs && (
          <button
            className={styles.button}
            onClick={() =>
              setShowAll((prev) => !prev)
            }
          >
            {showAll
              ? "Collapse"
              : "Show all"}
          </button>
        )}
      </div>

      {isSongs && (
        <div className={styles.tabsContainer}>
          <Tabs
            value={selectedGenre}
            onChange={(
              event,
              newValue
            ) =>
              setSelectedGenre(
                newValue
              )
            }
            textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="All"
              value="all"
              className={
                styles.tab
              }
            />

            {genres.map(
              (genre) => (
                <Tab
                  key={genre.key}
                  label={
                    genre.label
                  }
                  value={
                    genre.key
                  }
                  className={
                    styles.tab
                  }
                />
              )
            )}
          </Tabs>
        </div>
      )}

      {showAll && !isSongs ? (
        <div className={styles.grid}>
          {displayData.map(
            (item) => (
              <Card
                key={item.id}
                image={
                  item.image
                }
                follows={
                  item.follows ||
                  item.likes
                }
                title={
                  item.title
                }
                type="album"
              />
            )
          )}
        </div>
      ) : (
        <Carousel
          data={displayData}
          renderComponent={
            renderCard
          }
          navigationId={
            title
          }
        />
      )}
    </section>
  );
}

export default Section;