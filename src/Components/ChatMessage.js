const ChatMessage = (({name, message}) => {
    return(
        <div className="flex gap-2 items-center shadow-sm w-full bg-gray-100 p-2 rounded-lg my-1">
            <img className='h-5 w-5  ' alt='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXysOIBN-iJZ71PxpFuKwOxvH9ZPietXw8pW5FpuCaQI4Y1OtXISofDfJbKmotwYueEA&usqp=CAU' />
            <p className="font-bold">{name}</p>
            <p className="text-wrap">{message}</p>
        </div>
    );
});

export default ChatMessage;