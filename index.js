const express = require("express");
const app = express();
const project = [{
    id: "1",
    title: "Criar um back-end de um done list",
    task: ["Tarefa exemplo"]
}]
app.use(express.json());

// CREATE -> PROJECT ONLY WITH ID AND TITLE
app.post("/project",(request, response) => {
    const {id,title} = request.body;
    
    project.push({
        id: id,
        title:title,
        task: []
    });

    return response.json(project);
});
// READ -> PROJECT ONLY READ ALL TASK AND PROJECT
app.get("/project",(request, response) => {
    return response.json(project);
});
// UPDATE -> PROJECT ALTER TITLE OF PROJECT
app.put("/project/:id",(request, response) => {
    const {id} = request.params;
    const {title} = request.body;
    const index = project.findIndex(xId => xId.id === id);

    project[index]["title"] = title;

    return response.json(project);
});
// DELETE -> PROJECT DELETE PROJECT AND TASK
app.delete("/project/:id", (request, response) => {
    const {id} = request.params;
    const index = project.findIndex(xId => xId.id === id);

    project.splice(index,1);

    response.send();
});
// ADD -> ADD TASK IN PROJECT
app.post("/project/:id/tasks",(request, response) => {
    const {id} = request.params;
    const {task} = request.body;
    const index = project.findIndex(xId => xId.id === id);

    project[index]["task"].push(task);

    return response.json(project);
});
app.listen(3000);