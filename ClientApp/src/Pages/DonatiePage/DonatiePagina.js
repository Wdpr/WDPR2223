import React from "react";


export class DonatiePagina extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            donatieBedrag: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const gebruiker = JSON.parse(sessionStorage.getItem("gebruiker"));
        const bezoekerId = gebruiker.id;
        console.log(bezoekerId);
        const donatie = { Bedrag: this.state.donatieBedrag, Datum: new Date(), BezoekerId: bezoekerId};
        
        fetch("api/donatie/nieuweDonatie", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(donatie)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Could not add the donatie 1ste then");
                }
            })
            .catch(err => {
                console.error(err);
                alert("Could not add the donatie. 2de then");
            });
    }

    render() {
        return (
            <div>
                <div className="beginBanner">
                    <div className="beginBannerText">
                        <h4>Donateurs</h4>
                        <h1>Home</h1>
                        <h1>{JSON.parse(sessionStorage.getItem("gebruiker")).id}</h1>
                    </div>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                Donatie bedrag
                                <input type="number" name="donatieBedrag" placeholder="Vul het bedrag in" onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <button type="submit">Doneer</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
    