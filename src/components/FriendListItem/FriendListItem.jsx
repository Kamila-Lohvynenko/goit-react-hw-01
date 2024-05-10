import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.green : css.red}`}>
        {isOnline ? `Online` : `Offline`}
      </p>
    </div>
  );
};

export default FriendListItem;
