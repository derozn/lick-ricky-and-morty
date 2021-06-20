import NextLink from 'next/link';
import { Anchor } from './BackToListing.styles';

export const BackToListing = () => (
  <NextLink href="/">
    <Anchor>{'<'} Back to listing</Anchor>
  </NextLink>
);
