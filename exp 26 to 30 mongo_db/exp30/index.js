const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3011;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set("view engine", "ejs");


mongoose.connect("mongodb://127.0.0.1:27017/employeesDB");

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  office: String,
  salary: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);

//POST REQ
app.post("/employees", async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    });

    await newEmployee.save();
    res
      .status(201)
      .send({ message: "Employee created", employee: newEmployee });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// GET REQ TO GET ALL EMPLOYEES
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET REQ TO GET EMPLOYEE VIA ID
app.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee)
      return res.status(404).send({ message: "Employee not found" });
    res.send(employee);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// PUT REQ TO UPDATE EMPLOYEES
app.put("/employees/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEmployee)
      return res.status(404).send({ message: "Employee not found" });

    res.send({ message: "Employee updated", employee: updatedEmployee });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// DELETE REQ TO DELETE EMPLOYEE
app.delete("/employees/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee)
      return res.status(404).send({ message: "Employee not found" });

    res.send({ message: "Employee deleted", employee: deletedEmployee });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
