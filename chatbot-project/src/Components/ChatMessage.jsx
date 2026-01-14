import robotProfileImage from '../assets/robot.png';
import userProfileImage from '../assets/user.png';
import './ChatMessage.css'
export function ChatMessage(props) {
    //Props is like a parameter, which is passed by the component as a object, It contains the attribute and its value

    // console.log(props)
    const { message, sender } = props;
    /*
    if(sender === 'robot'){
    return(
      <div>
        <img src="robot.png" width ="50"/>
        {message}          
      </div>
    )
    }
    */
    return (
      <div className = {
        sender==='user' 
          ? 'chat-message-user'
          : 'chat-message-robot'
      }>
        {sender === "robot" && <img src={robotProfileImage} className = "chat-message-profile"  />}
        <div className = "chat-message-text">
          {message}
        </div>
        {sender === "user" && <img src={userProfileImage} className = "chat-message-profile"/>}
      </div>
    );
  }
  
 
    // {sender === 'user' && <img src="user.png" width ="50"/>} This works as a If statement by using 'AND' operator, if the value before && is true the value after && operator will be executed