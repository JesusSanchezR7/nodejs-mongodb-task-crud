import { Router } from "express";

import {
  renderTasks,
  createTasks,
  renderTasksEdit,
  tasksToggleDone,
  editTasks,
  deleteTasks,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTasks);

router.get("/tasks/:id/edit", renderTasksEdit);

router.post("/tasks/:id/edit", editTasks);

router.get("/tasks/:id/delete", deleteTasks);

router.get("/tasks/:id/toggleDone", tasksToggleDone);

export default router;
