import express from "express";

const articlesInfo = [
    {
        name: "learn-react",
        upvotes: 0,
        comments: [],
    },
    {
        name: "learn-node",
        upvotes: 0,
        comments:[],
    },
    {
        name: "mongodb",
        upvotes: 0,
        comments: [],
    },
]
const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvote', (req,res) => {
    const article = articlesInfo.find(article => article.ArticleName === req.params.name);
    article.upvotes += 1;

    res.json(article);
})

app.post('/api/articles/:name/comment', (req,res) => {
    const {username, text} = req.body;
    const article = articlesInfo.find(article => article.ArticleName === req.params.name);
    article.Comments.push({username, text});

    res.json(article);
})
// app.get("/home", (req,res)=>{
//     res.send("Hello World");
// })

// app.post("/home", (req,res)=>{ 
//     res.send("Hello "+req.body.name+" World");
// })

// app.post("/articles/:name", (req,res)=>{ 
//     res.send("Hello "+req.params.name +" World");
// })

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})

