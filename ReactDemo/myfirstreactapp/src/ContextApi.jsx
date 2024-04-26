import React,{createContext,useContext,useState} from 'react'


const LoginContext = createContext();

const ContextApi = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false);

  return (

    <div>
        <LoginContext.Provider value={[isLoggedin,setIsLoggedIn]}>
        <h1>context Api</h1>
        <Home/>
        </LoginContext.Provider>
    </div>
  )
}
const Home = () => {
    return (
        <>
            <Profile/>
        </>
    )
}

const Profile = () => {
    

    return <div><WishList/></div>
}


const WishList = () => {
    const [isLoggedin,setIsLoggedIn] = useContext(LoginContext);
    

    return <div>{
        isLoggedin ? <h1>WishList</h1> : <h1>Login Again</h1>
    }
    <button onClick={()=>{
        setIsLoggedIn(!isLoggedin);
    }}>{isLoggedin ? "LogOut" : "LogIn"}</button>
    </div>
}
export default ContextApi