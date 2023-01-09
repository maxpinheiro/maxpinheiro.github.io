import React, {useState} from "react";
import { useSelector } from "react-redux";
import { getAllSketches, getAllPaintings, getAllGraphics, getAllPieces, getRandomPiece, Piece } from "../art-service";
import BounceLoader from "react-spinners/BounceLoader";
import { getPortfolioBackground, getTextTheme } from "../store/Theme.store";

export type PieceType = 'sketches' | 'paintings' | 'graphic art' | 'all pieces' | 'random piece' | 'miscelaneous';

const Portfolio: React.FC = () => {
    const [selectedType, setSelectedType] = useState<PieceType | null>(null);
    const [pieces, setPieces] = useState<Piece[] | null>(null);
    const backgroundClass = useSelector(getPortfolioBackground);
    const textClass = useSelector(getTextTheme);
    //const [loadedIdxs, setLoadedIdxs] = useState([]);
    const [loadedCt, setLoadedCt] = useState(0);

    function selectWorks(type: PieceType) {
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

    function shuffleArray<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const types: PieceType[] = ['all pieces', 'random piece', 'paintings', 'sketches', 'graphic art', 'miscelaneous'];

    return (
        <div className={`full-page ${backgroundClass} ${textClass}`} id="portfolio">
            <div className="column-centered">
                <div className={`row-center align-center border-bottom border-${textClass.split('text-')[1]} px-3`}>
                    <p className="text-center text-header my-3">portfolio</p>
                </div>
                {
                    selectedType === null && 
                    <div className="responsive-falling-row my-5">
                        {
                            types.map((type, idx) => 
                            <div className="column border border-white rounded-lg py-3 px-1 my-1 mx-2 pointer " key={idx} onClick={() => selectWorks(type)} ><p className="text-center mx-auto  my-auto text-title">{type}</p></div>)
                        }
                        
                    </div>
                }
                {
                    selectedType !== null && (pieces === null || loadedCt < pieces.length) &&
                    <div className="column-centered my-4">
                        
                        <BounceLoader color="#FFFFFF" size={60} loading={true} />
                        <p className="text-center text-body">fetching artwork...</p>
                    </div>
                }
                {
                    selectedType !== null && pieces !== null && 
                    <div>
                        {
                            //loadedCt === pieces.length &&
                            <span className="row-center align-center mb-2">
                                <div className="pointer" onClick={() => {setSelectedType(null); setPieces(null); setLoadedCt(0)}}><i className="fas fa-arrow-left fa-2x"></i></div>
                                <p className="text-center text-medium my-auto mx-3">{selectedType}</p>
                            </span>
                        }
                        
                        
                        <div className="column-centered">
                            {
                                selectedType === 'random piece' && loadedCt === pieces.length &&
                                <p className=" text-heading pointer border border-white rounded-lg px-2" onClick={() => selectWorks('random piece')}>new random piece</p>
                            }
                            {
                                selectedType === 'all pieces' && loadedCt === pieces.length &&
                                <p className=" text-heading pointer border border-white rounded-lg px-2" onClick={() => selectWorks('all pieces')}>shuffle pieces</p>
                            }
                            {
                                pieces.map(({name, url}, idx) => (
                                    <div key={idx} className="mb-3">
                                        {/*<img src={url} alt={name} style={{maxHeight: "70vh", maxWidth: "75vw"}} onLoad={() => setLoadedIdxs(prevLoaded => [...prevLoaded, idx])}/>*/}
                                        {/*(true || loadedIdxs.includes(idx)) && <p className="text-center text-title text-white font-italic mt-1">{name}</p>*/}
                                        {<img src={url} alt={name} style={{maxHeight: "70vh", maxWidth: "75vw"}} onLoad={() => setLoadedCt(prev => prev + 1)} />}
                                        {loadedCt === pieces.length && <p className="text-center text-title font-italic mt-1">{name}</p>}
                                    </div>
                                ))
                            }

                            {
                                pieces.length > 3 &&
                                <p className="text-about pointer underline mb-3" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>back to top</p>
                            }
                            
                        </div>
                    </div>
                    
                }
                
            </div>
            
        </div>
    );
}

export default Portfolio;