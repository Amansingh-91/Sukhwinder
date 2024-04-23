import React, {useRef} from 'react'

const UseRefExample2 = () => {
    const p = useRef();
    console.log("render");
    const call = () => {
        console.log(p);
        p.current.style.color = "red";
        // p.current.textContent = "Aman";
    }
    return (
        <center>
            <div>
                <p ref={p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatum quae, impedit placeat fuga, non ea animi consectetur officiis minus maiores cum doloremque, distinctio dolores architecto necessitatibus optio at perferendis.</p>
            </div>
            <button onClick={call}>btn</button>
        </center>
    )
}

export default UseRefExample2