import { useState } from "react";

function AddPetMenu() {

    const [menuOn, setMenuOn] = useState(false);

    const toggleMenu = () =>{
        setMenuOn(!menuOn);
    };

    return (
    <div className='menu'>
        <button className="menu-button" onClick={toggleMenu}>Add +</button>
        {menuOn && (
            <ul className='add-menu'>
                <p>Insert your Pet details!</p>
            </ul>
        )}
    </div>
  )
};

export default AddPetMenu