import classNames from 'classnames';
import styles from './Button.module.scss';
import ButtonTypeProps from './Button.props';

function Button({
  className, type, htmlType = 'button', icon, children, ...props
}: ButtonTypeProps) {
  return (

    <button
      className={classNames(
        className,
        styles.btn,
        {
          [styles.primary]: type === 'primary',
          [styles.ghost]: type === 'ghost',
          [styles.outlinePrimary]: type === 'outline-primary',
        },
      )}
            // eslint-disable-next-line react/button-has-type
      type={htmlType}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
