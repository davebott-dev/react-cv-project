import {useState} from 'react';


const Panel = ({title,children}) => {
    const [isActive, setIsActive] = useState(false);

    return (
    <form>    
          <h1>{title}</h1>
    
          {isActive ==true ? (<div className="children">{children}</div>): (
            <button onClick ={()=> setIsActive(true)}>Show</button>
          )}

    </form>

   



    )


}

export default Panel;