import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>react-ssr-nestjs-starter</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
};
