import React from "react";

class DisplayTime extends React.Component {
  currentPage = "heure";

  render() {
    let dateCourante = new Date();
    let tempsJavascript = dateCourante.getTime();
    let tempsPHP = tempsJavascript / 1000;
    return (
      <div>
        <p>Temps tempsJavaScript : {tempsJavascript} millisecondes</p>
        <p>Temps PHP: {tempsPHP} secondes</p>
        <p>
          Date pour un humain: {dateCourante.getDate()}/
          {dateCourante.getMonth()}/{dateCourante.getFullYear()}
        </p>
      </div>
    );
  }
}

export default DisplayTime;
