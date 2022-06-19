import { useContext } from "react";
import { AuthGoogleContext } from "../../lib/authentication";

function Notes() {
  const { user, singOut } = useContext(AuthGoogleContext);
  console.log(user);
  return (
    <div>
      <button onClick={()=>{singOut()}} >Sair</button>
    </div>
  );
}

export default Notes;
