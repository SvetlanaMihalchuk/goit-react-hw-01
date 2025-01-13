import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
      <div>
          <ul className={css.list}>
              {friends.map(item => (
                  <li className={css.item} key={item.id}>
                      <img className={css.avatar} src={item.avatar} alt="Avatar" width="48" />
                      <p className={css.name}>{item.name}</p>
                      {item.isOnline ? <p className={css.text_online}>Online</p> : <p className={css.text_offline}>Offline</p>}
                  </li>
              ))}
</ul>
    </div>
  )
}

export default FriendList