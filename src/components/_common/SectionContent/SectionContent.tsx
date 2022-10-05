import React from 'react';
import cl from './SectionContent.module.scss';

interface Props {
    children: React.ReactNode
}

const SectionContent = ({children}: Props) => {
    return (
        <section className={cl.container}>
            {children}
        </section>
    );
};

export default SectionContent;