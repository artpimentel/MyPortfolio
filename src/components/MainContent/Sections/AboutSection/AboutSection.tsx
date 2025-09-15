import Section from '../../../Section/Section.tsx'

import styles from './AboutSection.module.css';

import EuPNG from '../../../../assets/images/eu.png'

function AboutSection() {
    return (
        <Section id="about" >
            <div className={styles.sectionContent}>
                
                <div className={styles.decorSide} aria-hidden="true">

                </div>

                <div className={styles.decorCircles} aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.profile}>
                    <div className={styles.profilePhoto}>
                        <img src={EuPNG} alt="" />
                    </div>

                </div>

                <div className={styles.profileContent}>
                    <h1>Opá, <span>Arthur Pimentel</span> aqui!</h1>
                    <h2>Desenvolvedor <span>Front-End_</span></h2>
                    <p>
                        Tenho 20 anos, sou estudante de <span>Sistemas de Informação</span> na Universidade Federal Fluminense (UFF) e <span>Desenvolvedor de Software</span> em formação. Minha missão é construir pontes entre o <span>Design</span> e a <span>Tecnologia</span> para criar ótimas <span>Experiências Digitais</span> e <span>Soluções Eficientes</span>. Meu foco está no <span>Desenvolvimento Web</span> com interfaces responsivas e performáticas, aplicando princípios de <span>UI/UX</span> para garantir a melhor <span>Experiência do Usuário</span>. Além disso, utilizo Python e outras linguagens e tecnologias na <span>Análise de Dados</span>, buscando sempre a solução mais robusta para cada problema.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default AboutSection
