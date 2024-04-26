import React,{useState} from 'react'

const ConditionalRendering = () => {
    const [isLoggedin,setIsLoggedIn] = useState(true);
    // && ,|| ,?:
  return (
    <div>
        <nav>
            
            {/* {!isLoggedin && <><button>Login</button> <button>SignUp</button></>} */}
            {/* {isLoggedin || <><button>Login</button> <button>SignUp</button></>} */}

            {isLoggedin?<><button  onClick={()=>{
                setIsLoggedIn(false)
            }}>Logout</button></> : <><button onClick={()=>{
                setIsLoggedIn(true)
            }}>Login</button> <button>SignUp</button></>}

        </nav>
    </div>
  )
}

export default ConditionalRendering