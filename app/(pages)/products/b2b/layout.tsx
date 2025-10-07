import Footer from '@/src/layout/Footer/Footer';
import Topbar from '@/src/layout/Topbar';
import { type ReactNode } from 'react';

const B2BLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return (
        <>
            {children}
        </>
    );
};

export default B2BLayout;

