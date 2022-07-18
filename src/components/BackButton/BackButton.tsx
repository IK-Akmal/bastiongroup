import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './BackButton.module.scss';
import { ReactComponent as ArrowIcon } from './arrow-left.svg';
import BackButtonTypeProps from './BackButton.props';

function BackButton({ className, ...props }: BackButtonTypeProps) {
  return (
    <Button className={classNames(className, styles.backbtn)} icon={<ArrowIcon />} {...props} />
  );
}

export default BackButton;
