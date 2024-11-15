import { json } from "react-router-dom";

const getaddwish2=()=>
{
     const storgeWishlist=localStorage.getItem('wish-list2');;
     if(storgeWishlist)
     {
        const storgeWishliststr=JSON.parse(storgeWishlist);
        return storgeWishliststr;
     }
     else
     {
        return [];
     }
}

const addtowishlist2=(id)=>
{
    const storedlist=getaddwish2();
    if(storedlist.includes(id))
    {
        console.log(id, "alrady wish list done");
    }
    else
    {   storedlist.push(id)
        const storgeWishliststr=JSON.stringify(storedlist);
        localStorage.setItem('wish-list2',storgeWishliststr);
    }

}

export{addtowishlist2 ,getaddwish2}