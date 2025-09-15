import type { JSX } from 'react';
import styles from './SkillsFolder.module.css';

import {
    FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGitAlt,
    FaGithub, FaPython, FaJava
} from 'react-icons/fa';

import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiCplusplus } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

const cards = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'NodeJS', 'ReactJS',
    'Git', 'GitHub', 'Python', 'C/C++', 'C#', 'Java'
];

const cardsColors: Record<string, string> = {
    HTML: 'rgba(227, 76, 38)',
    CSS: 'rgba(38, 77, 228)',
    JavaScript: 'rgba(247, 223, 30)',
    TypeScript: 'rgba(49, 120, 198)',
    NodeJS: 'rgba(104, 160, 99)',
    ReactJS: 'rgba(97, 218, 251)',
    Git: 'rgba(241, 80, 47)',
    GitHub: 'rgba(51, 51, 51)',
    Python: 'rgba(55, 118, 171)',
    'C/C++': 'rgba(0, 89, 156)',
    'C#': 'rgba(155, 79, 150)',
    Java: 'rgba(0, 115, 150)'
};

const cardsIcons: Record<string, JSX.Element> = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <IoLogoJavascript />,
    TypeScript: <SiTypescript />,
    NodeJS: <FaNodeJs />,
    ReactJS: <FaReact />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Python: <FaPython />,
    'C/C++': <SiCplusplus />,
    'C#': <TbBrandCSharp />,
    Java: <FaJava />
};

type cardStyle = React.CSSProperties & {
    ['--hover-color']?: string;
};

function SkillsFolder() {
    return (
        <ul className={styles.cardsFolder}>
            <li
                className={`${styles.card} ${styles.staticCard}`}
                style={{ zIndex: cards.length + 1 }}
            ></li>

            {cards.map((tag, index) => {
                const style: cardStyle = {
                    ['--hover-color']: cardsColors[tag],
                    zIndex: cards.length - index,
                    marginLeft: '-136px'
                };

                return (
                    <li
                        key={tag}
                        className={styles.card}
                        style={style}
                    >
                        <span className={styles.cardLabel}>{tag}</span>
                        <span className={styles.cardIcon}>{cardsIcons[tag]}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default SkillsFolder;