import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MoviePoster from './MoviePoster'; 
import VideoPlayer from './videoPlayer'; // Ensure the filename matches your actual file

const HomePage = (props) => {
    const [playMovie, setPlayMovie] = useState(null);
    const [webSeries, setWebSeries] = useState([]);
    const [videoSong, setVideoSong] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [shortFilm, setShortFilm] = useState([]);
    const [documentary, setDocumentary] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("projectID", "tsd77ltb68ta");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            try {
                const response = await fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=200", requestOptions);
                const result = await response.json();

                const webSeries = result.data.filter(movie => movie.type === "web series");
                const videoSong = result.data.filter(movie => movie.type === "video song");
                const tvShows = result.data.filter(movie => movie.type === "tv show");
                const trailer = result.data.filter(movie => movie.type === "trailer");
                const shortFilm = result.data.filter(movie => movie.type === "short film");
                const documentary = result.data.filter(movie => movie.type === "documentary");
                const movies = result.data.filter(movie => movie.type === "movie");

                setWebSeries(webSeries);
                setVideoSong(videoSong);
                setTvShows(tvShows);
                setTrailer(trailer);
                setShortFilm(shortFilm);
                setDocumentary(documentary);
                setMovies(movies);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleMovieClick = (url) => {
        props.loginStatus ? setPlayMovie(url) : navigate("/home/signin");
    };

    if (loading) {
        return <div className="container mx-auto pt-[80px]">Loading...</div>;
    }

    return (
        <div className="container mx-auto pt-[80px] text-white">
            {playMovie ? (
                <VideoPlayer videoUrl={playMovie} onClose={() => setPlayMovie(null)} />
            ) : (
                <>
                    {[
                        { title: "Web Series", items: webSeries },
                        { title: "Short Films", items: shortFilm },
                        { title: "TV Shows", items: tvShows },
                        { title: "Documentaries", items: documentary },
                        { title: "Movies", items: movies },
                        { title: "Trailers", items: trailer },
                        { title: "Video Songs", items: videoSong }
                    ].map((section, idx) => (
                        <section key={idx} className="my-8">
                            <h2 className="text-xl font-bold"><span className="text-blue-500">Prime</span> {section.title}</h2>
                            <div className="flex space-x-4 overflow-x-auto pb-2">
                                {section.items.map(movie => (
                                    <MoviePoster
                                        key={movie.id}
                                        title={movie.title}
                                        imageUrl={movie.thumbnail}
                                        videoUrl={movie.video_url}
                                        keyWords={movie.keywords.slice(0, 2).join(" . ")}
                                        loginStatus={props.loginStatus}
                                        onClick={() => handleMovieClick(movie.video_url)}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </>
            )}
        </div>
    );
};

export default HomePage;
