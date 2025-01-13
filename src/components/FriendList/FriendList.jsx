import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
      <div>
          <ul className={css.list}>
              {friends.map(item => (
                  <li className={css.item} key={item.id}>
                      <FriendListItem {...item} />
                </li>
              ))}
</ul>
    </div>
  )
}

export default FriendList