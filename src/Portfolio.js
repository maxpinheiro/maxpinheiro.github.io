import React, {useState} from "react";
import { getAllSketches, getAllPaintings, getAllGraphics, getAllPieces, getRandomPiece } from "./art-service";
import BounceLoader from "react-spinners/BounceLoader";


function Portfolio() {
    const [selectedType, setSelectedType] = useState(null);
    const [pieces, setPieces] = useState(null);
    //const [loadedIdxs, setLoadedIdxs] = useState([]);
    const [loadedCt, setLoadedCt] = useState(false);

    function selectWorks(type) {
        setSelectedType(type);
        setPieces(null);
        //setLoadedIdxs([]);
        setLoadedCt(0);

        if (type === 'sketches') {
            getAllSketches().then(pieces => setPieces(pieces))
        }

        if (type === 'paintings') {
            getAllPaintings().then(pieces => setPieces(pieces))
        }

        if (type === 'graphic art') {
            getAllGraphics().then(pieces => setPieces(pieces))
        }

        if (type === 'all pieces') {
            getAllPieces().then(pieces => setPieces(shuffleArray(pieces)))
        }

        if (type === 'random piece') {
            getRandomPiece().then(pieces => setPieces(pieces))
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const types = ['all pieces', 'paintings', 'sketches', 'graphic art', 'miscelaneous', 'random piece']
    return (
        <div className="container-fluid min-vh-100 bg-dark-violet" id="portfolio">
            <div className="container d-flex flex-column justify-content-center py-1">
                <p className="text-center text-header">portfolio</p>
                {
                    selectedType === null && 
                    <div className="row">
                        {
                            types.map((type, idx) => 
                            <div className="col border rounded-lg py-3 mx-3 pointer" key={idx} onClick={() => selectWorks(type)} ><p className="text-center text-white text-title">{type}</p></div>)
                        }
                        
                    </div>
                }
                {
                    selectedType !== null && (pieces === null || loadedCt < pieces.length) &&
                    <div className="d-flex align-items-center flex-column">
                        
                        <BounceLoader color="#FFFFFF" size={60} loading={true} />
                        <p className="text-center text-body">fetching artwork...</p>
                    </div>
                }
                {
                    selectedType !== null && pieces !== null && 
                    <div>
                        {
                            loadedCt === pieces.length &&
                            <span className="d-flex justify-content-center align-items-center mb-2">
                                <button className="btn text-white" onClick={() => {setSelectedType(null); setPieces(null); setLoadedCt(0)}}><i className="fas fa-arrow-left fa-2x"></i></button>
                                <p className="text-center text-medium my-auto ml-3">{selectedType}</p>
                            </span>
                        }
                        
                        
                        <div className="d-flex flex-column align-items-center">
                            {
                                selectedType === 'random piece' && loadedCt === pieces.length &&
                                <p className="text-white text-heading pointer border border-white rounded-lg px-2" onClick={() => selectWorks('random piece')}>new random piece</p>
                            }
                            {
                                selectedType === 'all pieces' && loadedCt === pieces.length &&
                                <p className="text-white text-heading pointer border border-white rounded-lg px-2" onClick={() => selectWorks('all pieces')}>shuffle pieces</p>
                            }
                            {
                                pieces.map(({name, url}, idx) => (
                                    <div key={idx} className="mb-3">
                                        {/*<img src={url} alt={name} style={{maxWidth: "25vw"}} onLoad={() => setLoadedIdxs(prevLoaded => [...prevLoaded, idx])}/>*/}
                                        {/*loadedIdxs.includes(idx) && <p className="text-center text-title text-white">{name}</p>*/}
                                        <img src={url} alt={name} style={{maxHeight: "70vh", maxWidth: "75vw"}} onLoad={() => setLoadedCt(prev => prev + 1)} />
                                        {loadedCt === pieces.length && <p className="text-center text-title text-white font-italic mt-1">{name}</p>}
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    
                }
                
            </div>
            
        </div>
    );
}

export default Portfolio;