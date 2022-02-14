import NextLink from "next/link";
import { forwardRef } from "react";

const Link = ({ href, children, passHref }: any, ref: any) => {
  return href ? (
    <NextLink href={href} passHref={passHref}>
      {children}
    </NextLink>
  ) : (
    <div>{children}</div>
  );
};

export default forwardRef(Link);
