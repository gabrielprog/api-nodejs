const express = require("express");
const app = express();
const project = [{
    id: "1",
    title: "exemplo",
    task: ["Tarefa exemplo"]
}]
app.use(express.json());

// CREATE -> PROJECT ONLY WITH ID AND TITLE
app.post("/project",(request,response) => {
    const {id,title} = request.body;
    
    project.push({
        id: id,
        title:title,
        task: []
    });

    return response.json(project);
});

app.listen(3000);