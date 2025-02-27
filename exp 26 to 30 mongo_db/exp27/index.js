const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Ab_Company");

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: Date,
  gender: String,
  email: String,
  address: String,
  nationality: String,
  position: String,
  department: String,
  skills: [String],
});

const Employee = mongoose.model("Employee", employeeSchema);

// Serve the form
app.get("/", (req, res) => {
  res.render("formdata");
});

// CRUD operations
app.post("/", async (req, res) => {
  const { action, name, age, dob, gender, email, address, nationality, position, department, skills } = req.body;
  
  if (!name) return res.send("Name is required");

  try {
    if (action === "Insert") {
      if (!age || !dob || !gender || !email || !address || !nationality || !position || !department) {
        return res.send("Enter data into all field");
      }
      const newEmployee = new Employee({
        name,
        age: parseInt(age),
        dob,
        gender,
        email,
        address,
        nationality,
        position,
        department,
        skills: Array.isArray(skills) ? skills : [skills],
      });
      await newEmployee.save();
      return res.send("Employee added successfully");
    }
    
    if (action === "Update") {
      const updatedEmployee = await Employee.findOneAndUpdate(
        { name },
        { age: parseInt(age), dob, gender, email, address, nationality, position, department, skills: Array.isArray(skills) ? skills : [skills] },
        { new: true }
      );
      return updatedEmployee ? res.send("Employee updated successfully") : res.send("Employee not found");
    }
    
    if (action === "Delete") {
      const deletedEmployee = await Employee.findOneAndDelete({ name });
      return deletedEmployee ? res.send("Employee deleted successfully") : res.send("Employee not found");
    }
    
    if (action === "Select") {
      const selectedEmployee = await Employee.findOne({ name });
      return selectedEmployee ? res.send(selectedEmployee) : res.send("Employee not found");
    }

    res.send("Invalid action");
  } catch (error) {
    console.error("Database operation failed:", error);
    res.send("An error occurred while processing the request");
  }
});

// Start the server
app.listen(3020, () => {
  console.log("Server running on http://localhost:3020");
});
