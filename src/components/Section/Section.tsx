import styles from './Section.module.css';
import React from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

function Section({ id, children, className }: SectionProps) {
    return (
        <section id={id}
        className={`${styles.standardSection} ${className}`}
>
            {children}
        </section>
    );
}

export default Section;