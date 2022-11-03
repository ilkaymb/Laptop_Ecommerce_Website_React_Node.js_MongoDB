
const express = require('express')
const router = express.Router()
const Model = require('../models/WebData');
const LogIn = require('../models/LogIn');
const OurProduct = require('../models/OurProductModel');

const N11 = require('../models/N11Model');
const Vatan = require('../models/VatanModel');
const Teknosa = require('../models/Teknosa');








router.post("/signin", async (req,res)=>{
    try {
        const {admin_username, admin_password} = req.body;
        const user = await LogIn.findOne({admin_username:`${admin_username}`,admin_password:`${admin_password}`})
        
    if(admin_username==='' && admin_password==='')
        return res.status(400).json({message: "Lütfen Alanları Boş Bırakmayın"})

    if(admin_username==='')
        return res.status(400).json({message: "Lütfen Kullanıcı Adınızı Girin"})

    if(admin_password==='')
        return res.status(400).json({message: "Lütfen Kullanıcı Şifrenizi Girin"})


    if(!user)
        return res.status(400).json({message: "Giriş Başarısız"})
     
    if(admin_password === user.admin_password && admin_username === user.admin_username)
        return res.status(200).json({ user, message: 'Giriş Başarılı' })


    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})




router.post("/getOurProduct", async (req,res)=>{
    const model = await OurProduct.find({})
   
    if(!model)
        console.log("data yok")
    else
        res.json({model, message: 'Authentication successful'})
})


router.post("/getOurProduct2", async (req,res)=>{
    const {page}=req.body

    const model = await OurProduct.find({}).limit(9)
    .skip((page - 1) * 9)
   
    const count = await OurProduct.find({}).count({}) 

    if(!model)
        console.log("data yok")
    else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
})
//

router.post("/getSearchData", async (req,res)=>{  
    const {inputText,minValue,maxValue}=req.body

    const {page}=req.body

    if(inputText=='')
    {
        const model = await OurProduct.find({}).limit(9).skip((page - 1) * 9)
    
        const count = await OurProduct.find({}).count({}) 
          
        if(!model)
            res.status(400).json({message: 'veri bulunamadı'})
        else
            res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
    }
    else
    {

         const model = await OurProduct.find({name: { $regex: inputText }}).limit(9).skip((page - 1) * 9)
    
        const count = await OurProduct.find({name: { $regex: inputText }}).count({}) 
              
        if(!model)
            res.status(400).json({message: 'veri bulunamadı'})
        else
            res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
    
    
    

   
    }
  

    }

          
        
/* 
    if(minValue ==0 && maxValue ==0 && inputText=='')
    {
        const model = await OurProduct.find({}).limit(9).skip((page - 1) * 9)
    
        const count = await OurProduct.find({}).count({}) 
          
        if(!model)
            res.status(400).json({message: 'veri bulunamadı'})
        else
            res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
    }
    else if(minValue !=0 && maxValue !=0 && inputText!='')
    {
        const model = await OurProduct.find({name:{$regex:`${inputText}`},price:{$gte:`${minValue}`,$lte:`${maxValue}`}}).limit(9).skip((page - 1) * 9)
 
    const count = await OurProduct.find({price:{$gte:`${minValue}`},price:{$lte:`${maxValue}`},name:{$regex:`${maxValue}`}}).count({}) 
    
        if(!model)
        res.status(400).json({message: 'veri bulunamadı'})
        else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
    }

 */
 
   
)


router.post("/getProduct", async (req,res)=>{ 
    const {page}=req.body

    const model = await Model.find({}).limit(9)
    .skip((page - 1) * 9)
   
    const count = await Model.find({}).count({}) 

    if(!model)
        console.log("data yok")
    else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
})


router.post("/getSearchProduct", async (req,res)=>{    
    const {inputText}=req.body
    
    const {page}=req.body

    const model = await Model.find({ item_name: { $regex: inputText }}).limit(9)
    .skip((page - 1) * 9)
 
    const count = await Model.find({ item_name: { $regex: inputText }}).count({}) 

    if(!model)
        res.status(400).json({message: 'veri bulunamadı'})
    else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
   
})

router.post("/getN11", async (req,res)=>{    
    const {inputText}=req.body
    
    const {page}=req.body

    const model = await N11.find({name: { $regex: inputText }}).limit(9)
    .skip((page - 1) * 9)
 
    const count = await N11.find({name: { $regex: inputText }}).count({})


    if(!model)
        res.status(400).json({message: 'veri bulunamadı'})
    else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
   
})

router.post("/getVatan", async (req,res)=>{    
    const {inputText}=req.body
    
    const {page}=req.body

    const model = await Vatan.find({name: { $regex: inputText }}).limit(9)
    .skip((page - 1) * 9)
 
    const count = await Vatan.find({name: { $regex: inputText }}).count({})


    if(!model)
        res.status(400).json({message: 'veri bulunamadı'})
    else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
   
})

router.post("/getTeknosa", async (req,res)=>{    
    const {inputText}=req.body
    
    const {page}=req.body

    const model = await Teknosa.find({name: { $regex: inputText }}).limit(9)
    .skip((page - 1) * 9)
 
    const count = await Teknosa.find({name: { $regex: inputText }}).count({})


    if(!model)
        res.status(400).json({message: 'veri bulunamadı'})
    else
        res.json({ items:{model},count: {count}, message: 'Authentication successful'}) 
   
})

router.post("/getOurProductSingle", async (req,res)=>{
    const {id} = req.body;
    
    const product = await OurProduct.findById(id)
   
    if(!product)
        res.status(400).json({message: 'veri alınamadı'})
    else
        res.json({product, message: 'veri alindi'})
})

router.post("/getProductSingle", async (req,res)=>{
    const {id} = req.body;
    
    const product = await Model.findById(id)
   
    if(!product)
        res.status(400).json({message: 'veri alınamadı'})
    else
        res.json({product, message: 'veri alindi'})
})

router.post("/ourProductUpdate", async (req,res)=>{
    const {id,name,price,score,img_url} = req.body.formData;

    const product = await OurProduct.findByIdAndUpdate(id,{"name":`${name}`,"price":`${price}`,"score":`${score}`,"img_url":`${img_url}`})
   
    if(!product)
        return res.status(400).json({message: "veri güncelleme basarisiz"})
    else
        res.json({message: 'veri güncellendi'}) 
})


router.post("/postDelete", async (req,res)=>{
    const {id} = req.body;

    const product = await OurProduct.findByIdAndDelete(id)
   
    if(!product)
        return res.status(400).json({message: "veri silme basarisiz"})
    else
        res.status(200).json({message: 'veri silindi'})  

})

router.post("/newProduct", async (req,res)=>{
     const {name,price,score,img_url} = req.body.formData;

    let product = new OurProduct({
        name: name,
        img_url: img_url,
        price: price,
        score: score
    }); 
  
    await product.save((error, data) => {
        if(error){
            return res.status(400).json({message: "İşlem Başarısız"})
        } 
        else{
            res.status(200).json({message: 'Veri Eklendi'}) 
        } 

    })
})
   
router.post("/getData", async (req,res)=>{ 

    const {page}=req.body
    const model  = await Vatan.aggregate([ { 
        $lookup:{
        from :"vatans",
        localField:"model",
        foreignField :"model",
        as :"vatan"
    }
},
        { 
        $lookup:{
        from :"n11",
        localField:"model",
        foreignField :"model",
        as :"n11"
    }
},
{
    $unwind: "$n11"
},
{ 
    $lookup:{
    from :"teknosas",
    localField:"model",
    foreignField :"model",
    as :"teknosa"
}
},
{
$unwind: "$teknosa"
},
{
    $project:{
        vatan:1,
        teknosa:1,
        n11:1
    }
}

]).limit(9).skip((page - 1) * 9)



//const value=count[0].count
if(!model)
res.status(400).json({message: 'veri bulunamadı'})
else
res.json({  items:{model},message: 'Authentication successful'}) 

}) 



module.exports = router

