import Section from '../../../Section/Section.tsx';
import styles from './SkillsSection.module.css';

import SkillsFolder from './components/SkillsFolder/SkillsFolder.tsx';
import ToolsFooter from './components/ToolsFooter/ToolsFooter.tsx';

function SkillsSection() {
    return (
        <Section id="skills">
            <div className={styles.langs}>
                <h2>Linguagens e Tecnologias</h2>
                <SkillsFolder />
            </div>

            <ToolsFooter />
        </Section>
    );
}

export default SkillsSection;