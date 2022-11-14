import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";


const Profile = () => {
  const name=useSelector((state)=>state.profile.name.split(" ")[0]);

  

  return (
    <main className="profile-main">
          <div>
            <div>
              <div className="profile-big-icon">
                <FontAwesomeIcon icon={faUser}/>
              </div>
              <div className="profile-top-info">
                <p>PROFILE</p>
                <p>{name?name:"User_name"}</p>
              </div>
            </div>
          </div>
          <div>

          </div>
          
        
    </main>
  )
}
export default Profile;
