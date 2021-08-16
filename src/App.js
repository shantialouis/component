
import MyProfilePhoto from './component/profile/MyProfilePhoto'
import MyAddress from './component/profile/MyAddress'
import MyFullName from './component/profile/MyFullName'


function App() {
  return (
    <div className = "shalewa">
      <div className="my-address">
      <MyProfilePhoto/>
      <MyFullName/>
      <MyAddress/>
    </div>
    </div>
  );
}

export default App;
