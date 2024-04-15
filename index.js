const express=require("express")
const app = express();
const data=require("./indian_medicine_data.json")
const cors=require("cors")
const dotenv=require("dotenv")

dotenv.config();
app.use(cors())
app.options("*",cors())
app.get('/medicine-data', (req, res) => {
  let { skip, limit } = req.query;
  
  skip = parseInt(skip) || 0;
  limit = parseInt(limit) || 10;

  const filteredData = data.slice(skip, skip + limit);
  res.json(filteredData);
});

app.get('/',(req,res)=>{
    const filteredData = data.slice(0, 10);
    res.json(filteredData);
})

const PORT = process.env.PORT || 6070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
