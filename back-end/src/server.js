import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

app.use(express.json());

let db;

async function connectToDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    db = client.db('Blog-With-Mern-db');
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
}

connectToDB().then(() => {
  app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const article = await db.collection('articles').findOne({ name });
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  });

  app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
      $inc: { upvotes: 1 }
    }, {
      returnDocument: 'after',
    });

    res.json(updatedArticle);
  });

  app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
      $push: { comments: newComment }
    }, {
      returnDocument: 'after',
    });

    res.json(updatedArticle);
  });


const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database', err);
});