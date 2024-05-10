import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>`@{tag}`</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.statsName}>Followers</span>
          <span className={css.amount}>{followers}</span>
        </li>
        <li>
          <span className={css.statsName}>Views</span>
          <span className={css.amount}>{views}</span>
        </li>
        <li>
          <span className={css.statsName}>Likes</span>
          <span className={css.amount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
