import {useState} from 'react';


const Panel = ({title,children,isActive,onShow}) => {

    return (
    <form>    
          <h1>{title}</h1>
    
          {isActive ==true ? (<div className="children">{children}</div>): (
            <button className="btn" onClick ={onShow}>Show</button>
          )}
    </form>

    )


}

export default Panel;