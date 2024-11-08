import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.slate}>
      <div className={css.personal}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.nick}>@{tag}</p>
        <p className={css.loco}>{location}</p>
      </div>

      <ul className={css.changables}>
        <li className={css.follow}>
          <span>Followers</span>
          <span className={css.val}>{stats.followers}</span>
        </li>
        <li className={css.view}>
          <span>Views</span>
          <span className={css.val}>{stats.views}</span>
        </li>
        <li className={css.like}>
          <span>Likes</span>
          <span className={css.val}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
