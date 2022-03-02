import type { ReactNode } from 'react';
import NextHead from 'next/head';

interface IProps {
  children?: ReactNode;
  title?: string;
}

export function Head({ children, title }: IProps) {
  return (
    <NextHead>
      <title>{title ?? 'Yune Store'}</title>
      {children}
    </NextHead>
  );
}