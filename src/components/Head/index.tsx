import type { ReactNode } from 'react';
import NextHead from 'next/head';

interface Props {
  children?: ReactNode;
  title?: string;
}

export function Head({ children, title }: Props) {
  return (
    <NextHead>
      <title>{title ?? 'Yune Store'}</title>
      {children}
    </NextHead>
  )
}