
const Welcome = ({isMember, name}) => {
    if(isMember === true){
        return(
            <div>
             {name}님 다시 오셨군요. 
            </div>
        )
    }else{
        return(
            <div>
                {name}님 가입하시겠어요?
            </div>
        )
    }

}

export default Welcome
