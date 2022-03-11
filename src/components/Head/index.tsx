import type { ReactNode } from 'react';
import NextHead from 'next/head';

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