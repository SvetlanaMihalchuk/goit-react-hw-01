import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <div>
           <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
                      <p className={css.name}>{name}</p>
                      {isOnline ? <p className={css.text_online}>Online</p> : <p className={css.text_offline}>Offline</p>}
    </div>
  );
}
export default FriendListItem