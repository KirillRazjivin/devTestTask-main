import React from "react"
import { useState } from "react";
import UniversalInput from "../UniversalInput";
import "../CreateForm/CreateInputForm.css";


const RenderInput = () => {
    const [data, Setdata] = useState({
      firstValue: '',
      secondValue: '',
      thirdValue: '',
      fourValue: '',
      fiveValue: ''
    })

    const handleChange = (e, field) => {
      Setdata({
        ...data,
        [field]: e.target.value
      });
    };
  
    return (
        <form className="form">
             <UniversalInput
          type="number" 
          disabled={false}
          value={data.firstValue}
          onChange={(e) => handleChange(e, 'firstValue')}
          placeholder="Number type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={data.secondValue}
          onChange={(e) => handleChange(e, 'secondValue')}
          placeholder="Text type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          multiline={true}
          disabled={false}
          value={data.thirdValue}
          onChange={(e) =>  handleChange(e, 'thirdValue')}
          placeholder="Text multiline type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={data.fourValue}
          onChange={(e) => handleChange(e, 'fourValue')} 
          mask={"111-111"}
          placeholder="With mask"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={data.fiveValue}
          onChange={(e) => handleChange(e, 'fiveValue')}
          options={[
            { value: "first element", label: "first element" },
            { value: "second element", label: "second element" },
            { value: "third element", label: "third element" },
          ]}
          placeholder="Another type"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          }}
          className="inputItem"
        />
        </form>
    )
}

export default RenderInput