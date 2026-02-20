import { useState, useRef, useEffect } from 'react';

import styles from './PersonalSection.module.css';

import Train from '../../../../assets/icons/TrainTrack/Train.svg?react';
import ArtStation from '../../../../assets/icons/TrainTrack/ArtStation.svg?react';
import CookStation from '../../../../assets/icons/TrainTrack/CookStation.svg?react';
import GameStation from '../../../../assets/icons/TrainTrack/GameStation.svg?react';
import TecStation from '../../../../assets/icons/TrainTrack/TecStation.svg?react';

import Section from '../../../Section/Section.tsx';

const stations = [ArtStation, CookStation, GameStation, TecStation];
const stationOptions = {
    'Estação da Criatividade': 'Desde muito cedo, meu amor pelas artes era muito claro. Comecei rabiscando no papel, mas logo percebi que a criatividade não cabia só nos desenhos. Alimentado pela minha paixão por literatura, filosofia e pelo desejo de contar histórias, encontrei a escrita. Mais recentemente foi a fotografia quem me conquistou, fruto do encanto pela beleza das paisagens por onde passo — serenas como a natureza ou vibrantes como a cidade. Hoje, esse caminho também me trouxe ao design gráfico e ao desenvolvimento front-end, onde reúno técnica e imaginação para transformar ideias em interfaces dinâmicas e funcionais.',
    'Estação da Culinária': 'Se comer bem já é uma maravilha, saber cozinhar bem é exepcional. Foi com esse pensamento que decidi aprender além do que foi passado pela minha mãe. Graças a ela, participei desde cedo da rotina da cozinha e também aprendi muito sobre panificação. Hoje faço muito além de ajudar e assumi a responsabilidade pela comida nos encontros de família. Desde os pães que carrego como preciosas heranças a pratos completos como massas, risotos, carnes, e muito mais. Cozinhar se tornou muito além de um hobbie, mas também uma forma de expressão e de cuidado.',
    'Estação dos VideoGames': 'Aos 9 anos ganhei meu primeiro videogame: um PlayStation 2. Passei horas no GTA San Andreas — sem nem imaginar que existiam missões — e em tantos outros jogos cujos nomes nem lembro mais. Depois veio o Nintendo 3DS, onde mergulhei no universo do Mario em suas várias versões e descobri um dos grandes amores da minha vida: Pokémon. Aos 13, tive meu primeiro computador, e foi aí que percebi que nunca abandonaria aquele "hábito de criança". De Minecraft a The Sims, de Stardew Valley a Hollow Knight, abrir um novo jogo era como abrir um novo mundo.',
    'Estação da Tecnologia': 'A tecnologia foi amor à primeira vista. Muito antes de ter meu próprio computador aos 13 anos, já me aventurava nos dos meus parentes, fascinado em como aquela "caixa" podia fazer tanta coisa. Durante a pandemia percebi que era isso que queria para minha vida e comecei a estudar, unindo minha veia criativa ao mundo da tecnologia. No início, criei pequenas páginas para conhecidos e familiares como forma de prática. Hoje, já desenvolvi inúmeras landing pages e busco inovar a cada novo projeto. O exemplo mais recente é uma página para o comércio da minha mãe, criada para facilitar toda a burocracia dos pedidos.'
};

function PersonalSection() {
    const [activeStation, setActiveStation] = useState(0);
    const [nextStation, setNextStation] = useState<number | null>(null);
    const [transitioning, setTransitioning] = useState(false);
    const [textTransition, setTextTransition] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if(trackRef.current) {
        const trackSize = trackRef.current.offsetWidth;
        trackRef.current.style.setProperty('--translateX', `${trackSize * 0.64515}px`);
    }
    }, []);

    function handleClick(index: number) {
        if (index === activeStation || transitioning) return;

        setNextStation(index);
        setTransitioning(true);

        setTextTransition(true);

        setTimeout(() => {
            setActiveStation(index);
            setTextTransition(false); 
            setNextStation(null);
            setTransitioning(false);
        }, 2600);
    }

    const ActiveStationComponent = stations[activeStation];
    const NextStationComponent = nextStation !== null ? stations[nextStation] : null;

    return (
        <Section id="personal" >
            <div className={styles.sectionContent}>

                <div className={styles.stationSelector}>
                    <div className={styles.stationContent}>
                        <h3 className={textTransition ? styles.textFadeOut : styles.textFadeIn}>
                            {Object.keys(stationOptions)[activeStation]}
                        </h3>
                        <p className={textTransition ? styles.textFadeOut : styles.textFadeIn}>
                            {Object.values(stationOptions)[activeStation]}
                        </p>
                    </div>

                    <ul className={styles.stationOptions}>
                    {Object.entries(stationOptions).map(([name], index) => (
                        <li key={index}>
                            <button
                                disabled={transitioning || index === activeStation}
                                className={styles.stationOption}
                                onClick={() => handleClick(index)}
                                >
                                {name}
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className={styles.deco}>
                    <div className={styles.trainTrack} ref={trackRef}>
                        <Train className={styles.trainIcon} />

                        {transitioning ? (
                            <div className={styles.transitionGroup}>
                            <ActiveStationComponent className={styles.mapOut} />
                            {NextStationComponent && (
                                <NextStationComponent className={styles.mapIn} />
                            )}
                            </div>
                        ) : (
                            <ActiveStationComponent className={styles.stationStatic} />
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default PersonalSection;