import css from "./FriendList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.smallSlate}>
      <img className={css.pic} src={avatar} alt="Avatar" width="48" />
      <p className={css.nick}>{name}</p>

      {isOnline ? (
        <p className={css.green}>Online</p>
      ) : (
        <p className={css.red}>Offline</p>
      )}
    </div>
  );
}

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
