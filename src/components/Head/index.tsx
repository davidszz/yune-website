import NextHead from 'next/head';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  title?: string;
}

export function Head({ children, title }: IProps) {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      
      <title>{title ?? 'Yune Store'}</title>
      {children}
    </NextHead>
  );
}