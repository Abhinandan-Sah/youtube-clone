import Button from "./Button";

const ButtonList = (() => {

    const lists = ["ALL", "Gaming" , "Songs", "Live", "Cricket", "Soccer", "News", "Movies", "Business", "Stock Market"];

    return(
        <div className="flex justify-center ">
            {lists.map((list, index)=> <Button name={list} key={index}/>)}
        </div>
    );
});

export default ButtonList;