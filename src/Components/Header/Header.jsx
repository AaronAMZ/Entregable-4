import "./Header.css"

const Header = ({onCreate}) => {
  return (
    
    <header className="header">
        <h1>Users</h1>
        <button className="button-form" onClick={() => onCreate()}> Create a new user</button>
     </header>
  )
}

export default Header