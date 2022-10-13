import { useState, useEffect } from "react";
import Wardrobe from "./Wardrobe";
import Outfit from "./Outfit";
import Weather from "./Weather";
import SeasonButtons from "./SeasonButtons";

const Container = () => {
  const [wardrobe, setWardrobe] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [seasonWardrobe, setSeasonWardrobe] = useState([]);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const SEASONS = ["summer", "fall", "winter", "spring"];

  const fetchWardrobe = async () => {
    try {
      let path = `${process.env.REACT_APP_WARDROBE_API}/wardrobe`;
      let response = await fetch(path, { mode: "cors" });
      // check status
      // if 200
      if (response.status === 200) {
        let fetchedWardrobeData = await response.json();
        let dataToStore = fetchedWardrobeData.data.map((item) => ({
          ...item,
          url: `http://localhost:8000${item.url}`,
        }));
        setWardrobe(dataToStore);
      } else {
        // deal with error
        throw new Error(`Sorry, could not find any data`);
        throw new Error(`Could not find: ${response.url}`);
      }
    } catch (error) {
      console.log("Something went wrong fetching data", error.message);
      setError(error.message);
    }
  };

  const deleteItem = async (event) => {
    try {
      let id = event.target.id;
      let path = `${process.env.REACT_APP_WARDROBE_API}/wardrobe/${id}`;
      let responseDelete = await fetch(path, {
        method: "DELETE",
        mode: "cors",
      });
      console.log(responseDelete);
      if (responseDelete.status === 200) {
        console.log("Item is deleted");

        let restItemstoDisplay = wardrobe.filter((item) => item.id !== id);
        setWardrobe(restItemstoDisplay);

        let restItemstoDisplayOutfit = outfit.filter((item) => item.id !== id);
        setOutfit(restItemstoDisplayOutfit);
      } else {
        throw new Error(`Sorry, could not delete any data`);
      }
    } catch (error) {
      console.log("Something went wrong deleting data", error.message);
      setError(error.message);
    }
  };

  const fetchWeather = async () => {
    try {
      let path = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin?unitGroup=metric&key=${process.env.REACT_APP_VISUAL_KEY}&contentType=json`;
      let response = await fetch(path, { mode: "cors" });
      let data = await response.json();
      let city = data.address;
      let temperature = data.currentConditions.temp;
      let conditions = data.currentConditions.conditions;
      conditions = conditions
        .split(" ")
        .map((word) => word.toLowerCase())
        .join(" ");
      setWeather({ city, conditions, temperature });
    } catch (error) {
      console.log("There was an error when fetching data", error);
    }
  };

  const getDataFromLS = () => {
    let outfitJson = localStorage.getItem("outfitLS");
    let outfitParsed = JSON.parse(outfitJson);
    if (outfitParsed) {
      setOutfit(outfitParsed);
    }
  };

  const saveDataToLS = () => {
    localStorage.setItem("outfitLS", JSON.stringify(outfit));
  };

  useEffect(() => {
    fetchWardrobe();
    fetchWeather();
    getDataFromLS();
  }, []);

  useEffect(() => {
    saveDataToLS();
  }, [outfit]);

  const addToOutfit = (event) => {
    let id = event.target.id;
    let clickedItem = wardrobe.find((item) => item.id === id);
    setOutfit([...outfit, clickedItem]);
  };
  const removeFromOutfit = (event) => {
    let updatedOutfit = outfit.filter((item) => item.id !== event.target.id);
    setOutfit(updatedOutfit);
  };

  const displaySeason = (event) => {
    let seasonWardrobe = wardrobe.filter(
      (item) => item.season === event.target.id
    );
    setSeasonWardrobe(seasonWardrobe);
  };

  const resetSeason = () => {
    setSeasonWardrobe([]);
  };

  return (
    <div className="Container">
      <Weather weatherData={weather} />

      {/* Add a condition for error and display the message (component) */}
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <SeasonButtons
            seasons={SEASONS}
            displaySeason={displaySeason}
            resetSeason={resetSeason}
          />
          <Wardrobe
            wardrobeData={seasonWardrobe.length > 0 ? seasonWardrobe : wardrobe}
            addToOutfit={addToOutfit}
            deleteItem={deleteItem}
          />
          <Outfit outfitData={outfit} removeFromOutfit={removeFromOutfit} />
        </>
      )}
    </div>
  );
};

export default Container;
