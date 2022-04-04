import { useState} from "react";
import axios from "axios";
// import Select from 'react-select'

export const Forms = () => {
  // const [state, setState] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritalState: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/users", formData).then(() => {
      alert("User created successfully");
    });
    setFormData({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      maritalState: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Forms</h1>

        <input
          value={formData.name}
          id="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <input
          value={formData.age}
          id="age"
          type="number"
          onChange={handleChange}
          placeholder="Enter Age"
        />

        <input
          value={formData.address}
          id="address"
          type="text"
          onChange={handleChange}
          placeholder="Enter Address"
        />

        <select name="" id="department"
        checked={formData.department}
        onChange={handleChange}>
          <option value="">Select</option>
          <option value="Computer">Computer</option>
          <option value="Electronic">Electronic</option>
          <option value="Civil">Civil</option>
        </select>

        <input
          value={formData.salary}
          id="salary"
          type="number"
          onChange={handleChange}
          placeholder="Enter Salary"
        />

        <input
          type="checkbox"
          id="maritalState"
          value="true"
          checked={formData.maritalState}
          onChange={handleChange}
        />
        <label for="maritalState">Marital Status</label>

        <input type="submit" value="Submit Data" />
      </form>

      {/* <textarea ref={focusPoint} /> */}

<br />
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>address</th>
          <th>department</th>
          <th>salary</th>
          <th>maritalState</th>
        </tr>
        <tr>
          <td>{formData.name}</td>
          <td>{formData.age}</td>
          <td>{formData.address}</td>
          <td>{formData.department}</td>
          <td>{formData.salary}</td>
          <td>{formData.maritalState}</td>
        </tr>
      </table>
    </div>
  );
};
