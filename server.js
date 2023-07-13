const express = require("express");
const app = express();
const pool = require("./db")//remember this is from module.exports = pool

//middleware
app.use(cors())
app.use(express.json) //dont forget body parser 

app.post("/gas",async (req,res)=>{
   

    try {
        const  {namee,phone,gas,pic} = req.body
    const newData = await pool(
        "INSERT INTO gas VALUES((nextval_id_seq), $1,$2,$3,$4) RETURNING *",
        {namee,phone,gas,pic}
    )

    res.json(newData.rows[0])
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})