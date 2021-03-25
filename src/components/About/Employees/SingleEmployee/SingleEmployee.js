import React from 'react';

const singleEmployee = props => {
  return (
    <div className={props.classname}>
      <div className={`${props.classname}-photo`}>
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className={`${props.classname}-info`}>
        <p className={`${props.classname}-name`}>
          {props.name}
        </p>
        <p className={`${props.classname}-job`}>
          <span style={{marginRight: "0.6rem", textTransform: "capitalize", fontWeight: "bold"}}>job:</span>
          <span>{props.job}</span>
        </p>
        <p className={`${props.classname}-speciality`}>
          <span style={{marginRight: "0.6rem", textTransform: "capitalize", fontWeight: "bold"}}>speciality:</span>
          <span>{props.speciality}</span>
        </p>
        <button 
          className={`${props.classname}-expand`}
          onClick={props.showSlide}>
          expand
        </button>
      </div>
    </div>
  );
}

export default singleEmployee;

// export const singleEmployee = (employeeType) => {
//   let employeePerson = employeeType.map(employee => {
//     return (
//       <div
//         key={employee.id}
//         className={employee.classname}>
//           <div className={`${employee.classname}-photo`}>
//             <img src={employee.imageUrl} alt={employee.name} />
//           </div>
//           <div className={`${employee.classname}-info`}>
//             <p className={`${employee.classname}-name`}>
//               {employee.name}
//             </p>
//             <p className={`${employee.classname}-job`}>
//               <span style={{marginRight: "0.6rem", textTransform: "capitalize", fontWeight: "bold"}}>job:</span>
//               <span>{employee.job}</span>
//             </p>
//             <p className={`${employee.classname}-speciality`}>
//               <span style={{marginRight: "0.6rem", textTransform: "capitalize", fontWeight: "bold"}}>speciality:</span>
//               <span>{employee.speciality}</span>
//             </p>
//             <button className={`${employee.classname}-expand`}>
//               expand
//             </button>
//           </div>
//       </div>
//     );
//   })
//   return employeePerson;
// }


