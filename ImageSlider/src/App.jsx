import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function App({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImgs(url) {
    setLoading(true);

    try {
      const response = await fetch(`${url}?page1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  useEffect(() => {
    if (url !== "") {
      fetchImgs(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading Data! plaese wait</div>;
  }

  if (error !== null) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <>
    <h1>IMAGE SLIDER</h1>
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow left" />
      {images && images.length
        ? images.map((item, index) => (
            <img
              key={item.id}
              alt={item.download_url}
              src={item.download_url}
              className={
                currentSlide === index ? "currentImg" : "currentImg hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow right" />
      <span className="indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "currentIndicator"
                    : "currentIndicator inactive"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
    <h4>By: Talha</h4>
    </>
  );
}

export default App;
