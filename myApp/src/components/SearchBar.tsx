import React, { Fragment, useState } from "react";
import "./ExploreContainer.css";
import { IonSearchbar, IonButton } from '@ionic/react'

type SearchBarProps = {
    defaultName: string
    getWeather: (location) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ defaultName, getWeather }) => {
    const [city, setCity] = useState({});

    const updateCity = (e: { detail: { value: string } }) => {
        setCity(e.detail.value)
    }

    return <Fragment>
        <IonSearchbar onIonChange={e => updateCity(e)} placeholder="Entrez le nom d'une ville..." />
        <IonButton onClick={() => getWeather(city)} expand="block">Rechercher</IonButton>
    </Fragment>;
};

export default SearchBar;