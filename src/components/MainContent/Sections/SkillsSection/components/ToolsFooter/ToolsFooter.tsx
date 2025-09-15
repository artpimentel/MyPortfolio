import { useState } from 'react';
import styles from './ToolsFooter.module.css';

import ExcelIcon from '../../../../../../assets/icons/excel.svg';
import WordIcon from '../../../../../../assets/icons/word.svg';
import PowerPointIcon from '../../../../../../assets/icons/powerpoint.svg';
import PhotoshopIcon from '../../../../../../assets/icons/photoshop.svg';
import IllustratorIcon from '../../../../../../assets/icons/illustrator.svg';
import CanvaIcon from '../../../../../../assets/icons/canva.svg';
import FigmaIcon from '../../../../../../assets/icons/figma.svg';

const toolsData = {
    Office: [
        { name: 'Excel', icon: ExcelIcon },
        { name: 'Word', icon: WordIcon },
        { name: 'PowerPoint', icon: PowerPointIcon },
    ],
    Design: [
        { name: 'Photoshop', icon: PhotoshopIcon },
        { name: 'Illustrator', icon: IllustratorIcon },
        { name: 'Canva', icon: CanvaIcon },
        { name: 'Figma', icon: FigmaIcon },
    ],
};

const options = Object.keys(toolsData);

function ToolsFooter() {
    const [activeTab, setActiveTab] = useState(options[0]);

    const activeIndex = options.indexOf(activeTab);

    return (
        <div className={styles.tools}>
            <div className={styles.optionsWrapper}>
                <ul className={styles.toolsOptions}>
                    {options.map((tag) => (
                        <li
                            key={tag}
                            className={`${styles.toolOption} ${activeTab === tag ? styles.active : ''}`}
                            onClick={() => setActiveTab(tag)}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <div
                    className={styles.optionHighlight}
                    style={{ transform: `translateX(${activeIndex * 100}%)` }}
                />
            </div>

            <div className={styles.toolsContent}>
                <div
                    className={styles.toolsContentWrapper}
                    style={{ transform: `translateX(-${activeIndex * 50}%)` }}
                >
                    {options.map((category) => (
                        <ul key={category} className={styles.toolCategory}>
                            {toolsData[category as keyof typeof toolsData].map((tool) => (
                                <li key={tool.name} className={styles.toolCard}>
                                    <img src={tool.icon} alt={tool.name} className={styles.toolIcon} /> 
                                    <span className={styles.toolName}>{tool.name}</span>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToolsFooter;