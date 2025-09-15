import styles from './MainContent.module.css';

import AboutSection from './Sections/AboutSection/AboutSection';
import SkillsSection from './Sections/SkillsSection/SkillsSection';
import PersonalSection from './Sections/PersonalSection/PersonalSection';
import ProjectsSection from './Sections/ProjectsSection/ProjectsSection';
import ContactsSection from './Sections/ContactsSection/ContactsSection';

const sections = [
    { id: 'about', Component: AboutSection },
    { id: 'personal', Component: PersonalSection },
    { id: 'skills', Component: SkillsSection },
    { id: 'projects', Component: ProjectsSection },
    { id: 'contacts', Component: ContactsSection },
];

function MainContent() {
    return (
        <main className={styles.mainContent}>
            {sections.map(section => (
                <section.Component key={section.id} />
            ))}
        </main>
    )
}

export default MainContent
