import { json } from "react-router-dom";

const getaddwish=()=>
{
     const storgeWishlist=localStorage.getItem('wish-list');;
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

const addtowishlist=(id)=>
{
    const storedlist=getaddwish();
    if(storedlist.includes(id))
    {
        console.log(id, "alrady wish list done");
    }
    else
    {   storedlist.push(id)
        const storgeWishliststr=JSON.stringify(storedlist);
        localStorage.setItem('wish-list',storgeWishliststr);
    }

}

export{addtowishlist ,getaddwish}