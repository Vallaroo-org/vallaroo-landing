import Footer from '@/src/layout/Footer/Footer';
import Topbar from '@/src/layout/Topbar';
import { type ReactNode } from 'react';

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default PagesLayout;
