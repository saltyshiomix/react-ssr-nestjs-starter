import React from 'react';
import ReactSsrScript from '@react-ssr/nestjs-express/script';

interface LayoutProps {
  children: React.ReactNode;
  script: string;
}

export const Layout = (props: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>react-ssr-nestjs-starter</title>
      </head>
      <body>
        {props.children}
        <ReactSsrScript script={props.script} />
      </body>
    </html>
  );
};
