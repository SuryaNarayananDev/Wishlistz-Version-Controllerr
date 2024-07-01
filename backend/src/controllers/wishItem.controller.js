const wishItemService=require("../services/wishItem.service")


async function removeWishItem(req, res) {
    
    const user = req.user;
    
    // console.log(user._id,"userId");

    try {
        await wishItemService.removeWishItem(user._id,req.params.id)

      return res.status(200).send({message:"item removed",status:true});
    } catch (err) {
        console.log("error",err.message)
      return res.status(500).json({ error: err.message });
    }
}

async function WishItemExitInUser(req, res) {
    
  const user = req.user;
  
  // console.log(user._id,"userId");

  try {
      await wishItemService.isWishItemExist(user._id,req.params.id)

    return res.status(200).send({message:"item Exits",status:true});
  } catch (err) {
      console.log("error",err.message)
    return res.status(500).json({ error: err.message });
  }
}

module.exports={removeWishItem,WishItemExitInUser};