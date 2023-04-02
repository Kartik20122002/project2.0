import express from 'express';
import { storeData } from './Database/db.js';
import { fetchData }from './Utils/FetchData.js';

const app = express();

const port = process.env.PORT || 8080;

const trails = {
  "btcinr": {
    "base_unit": "btc",
    "quote_unit": "inr",
    "low": "2400961.0",
    "high": "2478042.0",
    "last": "2448998.0",
    "type": "SPOT",
    "open": "2400963",
    "volume": "5.36783",
    "sell": "2448998.0",
    "buy": "2429508.0",
    "at": 1680433722,
    "name": "BTC/INR"
  },
  "xrpinr": {
    "base_unit": "xrp",
    "quote_unit": "inr",
    "low": "42.5052",
    "high": "44.6685",
    "last": "44.1211",
    "type": "SPOT",
    "open": "43.3001",
    "volume": "159334.1",
    "sell": "44.39",
    "buy": "44.1211",
    "at": 1680433722,
    "name": "XRP/INR"
  },
}

app.set("view engine", "ejs");
app.use(express.static('./views'));
app.set('views','./views')
app.use(express.urlencoded({extended : true}));

app.get('/',async (req,res)=>{
  const data = await fetchData();
  const response = await storeData(data);

  res.render('HomePage',{data : data}); 

});

app.get('/update',async (req,res)=>{
  const data = await fetchData();
  const response = await storeData(data);

  res.render('Update.ejs',{data : data});
})


app.listen(port, () =>  console.log(`http://localhost:${port}/`));
