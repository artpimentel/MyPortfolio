import { useState, useEffect } from 'react';

type TypingEffectProps = {
    text: string;
    speed?: number;
};

function TypingEffect({ text, speed = 40 }: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isTyping) {
            if (displayedText.length < text.length) {
                timer = setTimeout(() => {
                    setDisplayedText(text.substring(0, displayedText.length + 1));
                }, speed);
            } else {
                setIsTyping(false);
            }
        }

        return () => clearTimeout(timer);
    }, [text, speed, displayedText, isTyping]);

    return <span>{displayedText}</span>;
}

export default TypingEffect;