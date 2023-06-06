import { ReactNode } from 'react';
import cn from 'classnames';

type FavoriteButtonProps = {
  title?: ReactNode;
  favorited?: boolean;
  float?: 'none' | 'left' | 'right';
  onClick?: VoidFunction;
};

export function FavoriteButton(props: FavoriteButtonProps) {
  const {
    title,
    favorited = false,
    float = 'none',
    onClick = () => {},
  } = props;

  const classes = cn('btn btn-sm', {
    'btn-primary': favorited,
    'btn-outline-primary': !favorited,
    [`pull-xs-${float}`]: true,
  });

  return (
    <button className={classes} type="button" onClick={onClick}>
      <i className="ion-heart" /> {title}
    </button>
  );
}