import React, { Fragment } from "react";

import {
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonContent,
    IonItem,
    IonList,
    IonAvatar,
    IonLabel,
} from "@ionic/react";

type WeatherDetailProps = {
    weather: any;
    forecast : any;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ weather, forecast }) => {
    console.log(weather, 'hello')
    return (
        <Fragment>
            {weather && <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{weather.name}</IonCardTitle>
                        <IonCardTitle></IonCardTitle>
                        <IonCardSubtitle>{weather.weather[0].main}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Aujourd'hui : {weather.weather[0].description}
                        <IonList>
                            <IonItem>
                                <IonAvatar slot="start"></IonAvatar>
                                <IonLabel>
                                    <h2>Finn</h2>
                                    <h3>I'm a big deal</h3>
                                    <p>Listen, I've had a pretty messed up day...</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
                <IonCard>

                    <IonCardContent>

                        <IonList>
                            <IonItem>
                                <IonAvatar slot="start"></IonAvatar>
                                <IonLabel>
                                    <h2>Finn</h2>
                                    <h3>I'm a big deal</h3>
                                    <p>Listen, I've had a pretty messed up day...</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>}

            <Fragment></Fragment>
        </Fragment>
    );
};

export default WeatherDetail;