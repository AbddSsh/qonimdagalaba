import { useState, useEffect } from "react";
import { Loading, Player } from "./components";
import { videosList } from "./assets/data";

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previusIndex, setPreviusIndex] = useState(
    Math.floor(Math.random() * videosList.length)
  );
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  useEffect(() => {
    setSelectedUrl(videosList[currentIndex].url);
  }, [currentIndex]);

  const handlePrevious = () => {
    setIsLoading(true);
    setCurrentIndex(previusIndex);
    setPreviusIndex((prevIndex) =>
      prevIndex === 0 ? videosList.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleNext = () => {
    setIsLoading(true);
    setPreviusIndex(currentIndex);
    setCurrentIndex(Math.floor(Math.random() * videosList.length));
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <main className="main_page">
      <div className="main__wrapper">
        <h1 className="title">#qonimdagalaba</h1>
        <section className="player_wrapper">
          {isLoading ? <Loading /> : <Player videoUrl={selectedUrl} />}
          <div className="controls">
            <button
              onClick={handlePrevious}
              className="btn-arrow btn-arrow-left"
            >
              Previous
            </button>
            <button onClick={handleNext} className="btn-arrow btn-arrow-right">
              Next
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
