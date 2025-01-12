import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
  <div className={css.card}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.profile_name}>{name}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>

  <ul className={css.profile_stats}>
    <li className={css.item}>
      <span className={css.item_name}>Followers</span>
      <span className={css.item_number}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.item_name}>Views</span>
      <span className={css.item_number}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.item_name}>Likes</span>
      <span className={css.item_number}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile