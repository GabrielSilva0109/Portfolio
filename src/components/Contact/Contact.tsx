import react from 'react'
import Header from '../Header/Header';

interface ContactProps {
    toggleTheme: () => void;
    theme: string;
}


const Contact: React.FC<ContactProps> = ({ toggleTheme, theme }) => {
    return (

        <>
            <Header toggleTheme={toggleTheme} theme={theme} />
        </>
    )
}

export default Contact