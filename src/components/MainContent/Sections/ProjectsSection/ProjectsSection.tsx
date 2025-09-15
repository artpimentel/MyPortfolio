import Section from '../../../Section/Section.tsx';

import styles from './ProjectsSection.module.css';

const projectsData = {
    '2025': {
        title: 'Delícias da Lili',
        description: 'Plataforma de vendas online totalmente integrada para pedidos com Whatsapp.',
        link: ''
    },
}

function ProjectsSection() {
    return (
        <Section id="projects" className={styles.projectsSection} >
            <div className={styles.sectionContent}>
                <h2>Projetos</h2>
                <ul className={styles.projectsList}>
                    {Object.entries(projectsData).map(([year, item], index) => (
                        <li key={index} className={styles.project}>
                            <span className={styles.projectYear}>{year}</span>
                            <h3 className={styles.projectTitle}>{item.title}</h3>
                            <p className={styles.projectDescription}>{item.description}</p>
                            <a href={item.link} className={styles.projectLink}>Veja Mais</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default ProjectsSection
