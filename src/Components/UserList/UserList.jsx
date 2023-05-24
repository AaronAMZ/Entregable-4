import "./UserList.css"

const UserList = ({ users, onEditUser, onDelete }) => {
  
    if (!users.length) return <p>Without users</p>;

    return (
        <article>
        <ul className="container">
            {users.map((user) => (
            <li key={user.id} className="user-card">
                <article className="contain-card">
                    <h2>{user.first_name} {user.last_name}</h2>
                    <h3>EMAIL</h3>
                    <p>📧 {user.email}</p>

                    <h3>BIRTHDAY</h3>
                    <p>🎁 {user.birthday}</p>

                    <div className="buttons">
                        <button className="delete" onClick={() => onDelete(user.id)}>🗑</button>
                        <button className="edit" onClick={() => onEditUser(user)}>🖊</button>
                    </div>
                </article>
            </li>))}
        </ul>

        </article>
    )
}

export default UserList