import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';

type Link = ChakraLinkProps & LinkProps;

const LinkComponent = ({ href, children, ...props }: Link) => {
  return (
    <Link href={href} passHref>
      <ChakraLink {...props} _focus={{ border: 'none' }}>
        {children}
      </ChakraLink>
    </Link>
  );
};

export default LinkComponent;
