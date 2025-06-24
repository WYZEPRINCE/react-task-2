import React from 'react'
import pd1 from "../assets/images/pd1.png"
import pd2 from "../assets/images/pd2.png"
import pd3 from "../assets/images/pd3.png"


const Project1 = () => {
  return (
    <div className="project1">
      <h2>
        <span className="title-head">Sample</span>
        <br />
        <strong>Project1</strong>
      </h2>
      <img src={pd1} width={1020} height={400} alt={""} />
      <div className="project-details">
        <img src={pd2} width={510} height={400} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. 
        </p>
      </div>
      <img src={pd3} width={1020} height={400} alt="" />
    </div>
  );
}

export default Project1