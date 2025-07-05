//import css
import styles from './UserGreeting.module.css';

function UserGreeting(props){
  
  const welcomeMessage = <h1 className={styles["welcome-message"]}>Welcome {props.username}</h1>;
  const loginMessage = <h1  className={styles["login-message"]}>Please Log in to continue</h1>;

  // Conditional Rendering
  return(props.isLoggedIn ? welcomeMessage : loginMessage )
}

export default UserGreeting;