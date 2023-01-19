import React from 'react'
import { VoorstellingBigCard } from '../components/Voorstelling/VoorstellingBigCard';

export class VoorstellingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { voorstellingen: [], loading: true, selectedGenre: null };
        this.handleGenreChange = this.handleGenreChange.bind(this);
    }
    async componentDidMount() {
        let response = await fetch('api/Voorstelling');
        let data = await response.json();
        this.setState({ voorstellingen: data, loading: false });
    }

    handleGenreChange(event) {
        this.setState({ selectedGenre: event.target.value });
    }

    render() {
        const filteredVoorstellingen = this.state.selectedGenre
            ? this.state.voorstellingen.filter(voorstelling => voorstelling.genre === this.state.selectedGenre)
            : this.state.voorstellingen;

            filteredVoorstellingen.sort((b, a) => new Date(a.datumDateTime) - new Date(b.datumDateTime));
    
            

        return (
            <div>
                <div className="beginBanner">
                    <div className="beginBannerText">
                        <h4>Theater</h4>
                        <h1>Laak</h1>
                    </div>
                </div>
                <div className='genreFilter'>
                    <select defaultValue="" onChange={this.handleGenreChange}>
                        <option value="">Alles</option>
                        {Array.from(new Set(this.state.voorstellingen.map(voorstelling => voorstelling.genre))).map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
                
                <div className='VoorstellingPageContainer'>
                    <div className='bigCardsContainer'>
                        {this.state.loading ? "loading..." : filteredVoorstellingen.map(voorstelling => {
                            const vandaagVoorPlus = new Date();                           
                            const datum = new Date(voorstelling.datumDateTime);                           
                            const plus300 = new Date(vandaagVoorPlus.setDate(vandaagVoorPlus.getDate() + 300));                           
                            const huidigeDatum = new Date();

                            if ((datum > huidigeDatum) && (datum < plus300)) {
                                
                                return (
                                    <VoorstellingBigCard key={voorstelling.id} info={voorstelling} />
                                )         
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}