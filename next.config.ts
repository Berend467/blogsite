import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
