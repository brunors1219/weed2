# Convite de casamento

## Database setup

**CLIENT**: MongoDB
**HOST**: cluster0.0dtj2.mongodb.net
**USER**: weddingAnselmo
**PASSWORD**: VWkw1dBa3jJL5eTO
**DATABASE NAME**:myFirstDatabase

```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://weddingAnselmo:<password>@cluster0.0dtj2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

---

### Links

[Padrões de projetos (Eslint & Prettier)](https://quill-bite-489.notion.site/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-be8e85fc6216430ba0adcc2e567885f3)
