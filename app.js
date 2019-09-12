var puppet  = require('puppeteer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/html-to-image', (req, res)=>{
    puppet.launch().then(async browser =>{
        htmlContent = req.body.htmldata
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        const image = await page.screenshot({
            path:"image.jpeg"
        })
        await browser.close();
        res.end(image);
    })
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
