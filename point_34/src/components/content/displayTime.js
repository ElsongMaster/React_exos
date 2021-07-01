import React, { useState, useEffect } from "react";

function DisplayTime() {
  let [tempsJavascript, setTempsJavascript] = useState(new Date().getTime());

  useEffect(() => {
    setInterval(() => {
      setTempsJavascript(new Date().getTime());
    }, 1000);
    document.title = tempsJavascript;
  });

  return (
    <div>
      <p>Temps Javscript:{tempsJavascript} millisecondes</p>
      <button onClick={() => setTempsJavascript(new Date().getTime())}>
        Mettre à jour
      </button>
    </div>
  );
}

// class DisplayTime extends React.Component {
//   state = {
//     dateCourante: new Date(),
//   };
//   currentPage = "heure";
//   intervalCode = null;
//   componentDidMount() {
//     this.intervalCode = setInterval(() => {
//       this.setState({
//         dateCourante: new Date(),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalCode);
//   }
//   render() {
//     let tempsJavascript = this.state.dateCourante.getTime();
//     let tempsPHP = tempsJavascript / 1000;
//     return (
//       <div>
//         {this.props.format === "jsTime" && (
//           <p>Temps tempsJavaScript : {tempsJavascript} millisecondes</p>
//         )}

//         {this.props.format === "phpTime" && (
//           <p>Temps PHP: {tempsPHP} secondes</p>
//         )}

//         {this.props.format === "humanTime" && (
//           <p>
//             Date pour un humain: {this.state.dateCourante.getDate()}/
//             {this.state.dateCourante.getMonth()}/
//             {this.state.dateCourante.getFullYear()}
//           </p>
//         )}
//       </div>
//     );
//   }
// }

export default DisplayTime;
