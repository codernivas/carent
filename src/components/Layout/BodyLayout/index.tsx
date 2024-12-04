// components/Layout.tsx
import React from 'react';
import Header from '../HeaderLayout';
import Footer from '../FooterLayout';

interface LayoutProps {
  children: React.ReactNode;
}

const BodyLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem', minHeight: '80vh' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default BodyLayout;
