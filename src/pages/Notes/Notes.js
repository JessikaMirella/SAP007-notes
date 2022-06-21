import { useContext } from "react";
import { AuthGoogleContext } from "../../lib/authentication";
import Header from "../../components/Header/Header";
import logout from "../../images/logout.png";
import "./Notes.css";

function Notes() {
  const { user, singOut } = useContext(AuthGoogleContext);

  console.log(user);
  return (
    <div>
      <Header className="headerNotes">
        <h1>Olá, {user.displayName}</h1>
        <button
          className="logoutButton"
          onClick={() => {
            singOut();
          }}
        >
          {<img className="logoutImg" src={logout} alt="logout" />}
        </button>
      </Header>
    </div>
  );
}

export default Notes;
