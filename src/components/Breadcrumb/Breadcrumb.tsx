import { PropsWithChildren } from 'react';

import toArray, { keyGen } from '../../utils/util';
import { ReactComponent as Separator } from './separator.svg';

import styles from './Breadcrumb.module.scss';

function OriginBreadcrumb({ children }: PropsWithChildren) {
  return (
    <ul className={styles.breadcrumb}>
      {
        toArray(children).map((child, index, arr) => {
          if (arr.length !== index + 1) {
            return (
              <li key={keyGen()}>
                {child}
                <Separator />
              </li>
            );
          }
          return <li key={keyGen()}>{child}</li>;
        })
      }
    </ul>
  );
}
export default OriginBreadcrumb;
