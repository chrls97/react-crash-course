//  conditional rendering = allow you to control when gets rendered
//                          in your application based on certain conditions
//                          (show, hide, or change components)

import UserGreeting from "./UserGreeting/UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="champipay" />
    </>
  )
}

export default App
