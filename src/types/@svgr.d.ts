declare module '*.svg' {
  import('react');
  import { FC, SVGProps } from 'react';

  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const content: FC<SVGProps<SVGSVGElement>>;

  export default content;
  export { ReactComponent };
}
