var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Connect to the University database
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/University");

// Schema for Student collection
var studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String,
});

var Student = mongoose.model("Student", studentSchema);

// Serve the form
app.get("/", (req, res) => {
  res.render("formdata"); // Ensure "formdata.ejs" is in your "views" folder
});

// CRUD operations
app.post("/", async (req, res) => {
  var studentInfo = req.body;
  console.log(req.body);

  // CREATE
  if (studentInfo.b1 === "Insert") {
    if (!studentInfo.t1 || !studentInfo.t2 || !studentInfo.t3) {
      res.send("Data missing in the columns");
    } else {
      try {
        var newStudent = new Student({
          name: studentInfo.t1,
          age: studentInfo.t2,
          nationality: studentInfo.t3,
        });

        await newStudent.save();
        res.send("Data Saved Successfully");
      } catch (err) {
        console.error("Error saving to the database:", err);
        res.send("Error in saving to the DB");
      }
    }
  }
  // UPDATE
  else if (studentInfo.b1 === "Update") {
    if (!studentInfo.t1 || !studentInfo.t2 || !studentInfo.t3) {
      res.send("Data Input Error for Update");
    } else {
      try {
        var updatedStudent = await Student.findOneAndUpdate(
          { name: studentInfo.t1 },
          {
            age: parseInt(studentInfo.t2),
            nationality: studentInfo.t3,
          },
          { new: true } // Return updated document
        );

        if (updatedStudent) {
          res.send("Student Updated Successfully");
        } else {
          res.send("Student not found");
        }
      } catch (err) {
        console.error("Error updating the student:", err);
        res.send("Error in updating the student");
      }
    }
  }
  // DELETE
  else if (studentInfo.b1 === "Delete") {
    if (!studentInfo.t1) {
      res.send("Provide the name of the student to delete");
    } else {
      try {
        var deletedStudent = await Student.findOneAndDelete({
          name: studentInfo.t1,
        });

        if (deletedStudent) {
          res.send("Student Deleted Successfully");
        } else {
          res.send("Student not found");
        }
      } catch (err) {
        console.error("Error deleting the student:", err);
        res.send("Error in deleting the student");
      }
    }
  }
  // RETRIEVE
  else if (studentInfo.b1 === "Select") {
    if (!studentInfo.t1) {
      res.send("Provide the name of the student to select");
    } else {
      try {
        var selectedStudent = await Student.findOne({ name: studentInfo.t1 });

        if (selectedStudent) {
          res.send(`
              <h1>Student Details</h1>
              <p>Name: ${selectedStudent.name}</p>
              <p>Age: ${selectedStudent.age}</p>
              <p>Nationality: ${selectedStudent.nationality}</p>
            `);
        } else {
          res.send("Student not found");
        }
      } catch (err) {
        console.error("Error selecting the student:", err);
        res.send("Error in selecting the student");
      }
    }
  } else {
    res.send("Invalid operation");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
