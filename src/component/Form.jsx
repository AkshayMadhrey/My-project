import React from "react";
import { useState } from "react";
import './Form.css'

function Form() {
    const [name, setName] = useState(" ");
    const [mobile, setMobile] = useState(" ");
    const [address, setAddress] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({ name, mobile, address });
        setData((prev) => [{ "name": name, "mobile": mobile, "address": address},...prev]);
    }
    const [data, setData] = useState([]);
    console.log(data);

    const handleReset = () => {
        setName("")
        setMobile("")
        setAddress("")
    };

    const deleteData = (i) => {
        console.log(i, "this index row want to be delete");
        let total = [...data]
        total.splice(i, 1)
        setData(total)

    };

    return (
        <div className="main-head">
        <div className="container">
            <h1>Form</h1>
            <div className="form-field">
                <form onSubmit={handleSubmit}>

                    <label>Name:</label><br />
                    <input type="text" placeholder="Enter name" value={name}
                        onChange={(e) => setName(e.target.value)} /><br />

                    <label>Mobile:</label><br />
                    <input type="text" placeholder="Enter mobile" value={mobile}
                        onChange={(e) => setMobile(e.target.value)} /><br />

                    <label>Address:</label><br></br>
                    <input type="text" placeholder="Enter address" value={address}
                        onChange={(e) => setAddress(e.target.value)} /><br /><br />

                    <button type="submit">Add data</button>
                    <input type="reset" onClick={handleReset} value="Reset" />
                </form>
                <table className="table-field">
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Action</th>

                    </tr>
                    {
                        data.map(
                            (info,i) => {
                                console.log(i);
                                return (
                                    <tr>
                                        <td>{info.name}</td>
                                        <td>{info.mobile}</td>
                                        <td>{info.address}</td>
                                        <td>
                                            <button onClick={() => deleteData(i)}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            }
                        )
                    }

                </table>
            </div>
        </div>
        </div>
    );

}
export default Form;