import { useState } from "react";

function AddPetMenu() {

    const [menuOn, setMenuOn] = useState(true);

    const toggleMenu = () =>{
        setMenuOn(!menuOn);
    };

    return (
    <div className='menu'>
        <button className="menu-button" onClick={toggleMenu}>Add +</button>
        {menuOn && (
            <ul className='add-menu'>
                <h2>ola</h2>
            </ul>
        )}
        <h2>Insert your Pet details!</h2>
    </div>
  )
};

export default AddPetMenu