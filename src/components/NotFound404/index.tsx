import './index.css';
import img404 from "./img404.svg";

function NotFound(){
    return (
        <div className='mainCtn'>
            <div className='imgCtn'>
                <img
                    src={img404}
                    alt="404 Error"
                />
            </div>
            <h1 style={{color:'white'}}>Page Not Found</h1>
        </div>
    );
};

export default NotFound;
