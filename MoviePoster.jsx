import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const MoviePoster = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate();


    const MoviePopup = ({ title, keyWords, trailerUrl, onClick}) => (
        <div className="popup mb-2">
          <div className="popup-content">
            <p className="font-normal text-lg">{keyWords}</p>
            <a onClick={()=> onClick(trailerUrl)} className="font-normal text-lg border border-solid p-2 pr-3 pl-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 cursor-pointer">Watch Now</a>
            
          </div>
        </div>
      );

    const openPopup = () => {
       showPopup ? setShowPopup(false) : setShowPopup(true);
    };

  
  


    const handlePosterClick = ()=>{
        openPopup()

    }
    
    return (
        <>
        <div className="flex-shrink-0 mr-4" onClick={handlePosterClick} style={{ maxWidth: '200px' }}>
            <div className="flex space-x-4 overflow-x-auto">
            <img src={props.imageUrl} alt={props.title} style={{ maxWidth: '200px', height: '200px' }} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <p className="mt-2 text-lg font-medium">{props.title}</p>
            {showPopup && (
            <MoviePopup
            title={props.title}
            keyWords={props.keyWords}
            trailerUrl={props.videoUrl}
            onClick = {props.onClick}
        />
      )}
        </div>


        </>
    );
};

export default MoviePoster;
















function Widget() {
  return (
      <div className="bg-zinc-900 text-white min-h-screen p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">prime video</h1>
          <button className="bg-white text-black px-4 py-2 rounded">Sign In</button>
        </div>
        <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold"><span className="text-blue-500">Prime</span> Mystery and thriller movies</h2>
        <div className="flex space-x-4 overflow-x-auto">
          <img src="https://placehold.co/200x300" alt="Movie 6" className="rounded-lg"/>
        </div>
      </div>
        </div>
      </div>
  )
}
