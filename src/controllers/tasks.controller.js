import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

export const createTasks = async (req, res) => {
  const task = Task(req.body);

  await task.save();

  res.redirect("/");
};

export const renderTasksEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.massage);
  }
};

export const editTasks = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTasks = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

export const tasksToggleDone = async (req, res) => {
    const { id } = req.params;
  
    const task = await Task.findById(id);
  
    task.done = !task.done;
  
    await task.save();
  
    res.redirect("/");
  }