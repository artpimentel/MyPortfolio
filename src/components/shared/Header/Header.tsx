import styles from './Header.module.css';

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const navLinks = [
    { href:'#about', label:'Sobre' },
    { href:'#personal', label:'Pessoal' },
    { href:'#skills', label:'Competências' },
    { href:'#projects', label:'Projetos' },
    { href:'#contacts', label:'Contatos' },
];

function Header() {
    const handleNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        event.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerContent}>
                <div className={styles.socialLinks}>
                    <a
                        href="https://www.linkedin.com/in/arthur-pimentel-382655232/"
                        aria-label="Acessar perfil do Linkedin"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkedinIcon}
                    >
                        <FaLinkedinIn className={styles.icon} />
                    </a>
                    <a
                        href="https://github.com/artpimentel"
                        aria-label="Acessar perfil do Github"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.githubIcon}
                    >
                        <FaGithub className={styles.icon} />
                    </a>
                </div>
                <nav className={styles.navBar}>
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a 
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header