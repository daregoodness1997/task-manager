const getAllTasks = (req, res) => {
  res.json({ message: 'All Items' });
};

const createTask = (req, res) => {
  res.json({ message: 'Create Task' });
};
const getTask = (req, res) => {
  res.json({ message: 'get single Task' });
};
const updateTask = (req, res) => {
  res.json({ message: 'update Task' });
};
const deleteTask = (req, res) => {
  res.json({ message: 'delete Task' });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
