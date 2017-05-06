import React, { PropTypes } from 'react'
import Avatar from 'react-toolbox/lib/avatar'
import style from './style.css'

const UserProfile = ({ user, avatar }) => {
  return (
    <section className={style.userProfile}>
      <Avatar className={style.logo} image={avatar} />
      <div className={style.info}>
        <div className={style.name}>{user.name}</div>
        <div className={style.email}>{user.email}</div>
      </div>
    </section>
  )
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired
}

UserProfile.defaultProps = {
  user: { name: 'User Name', email: 'User Email' },
  avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
}

export default UserProfile
