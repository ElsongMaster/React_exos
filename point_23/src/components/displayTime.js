import React from "react";

class DisplayTime extends React.Component {
  currentPage = "heure";

  render() {
    console.log(this.props);
    let dateCourante = new Date();
    let tempsJavascript = dateCourante.getTime();
    let tempsPHP = tempsJavascript / 1000;
    return (
      <div>
        {this.props.format === "jsTime" && (
          <p>Temps tempsJavaScript : {tempsJavascript} millisecondes</p>
        )}

        {this.props.format === "phpTime" && (
          <p>Temps PHP: {tempsPHP} secondes</p>
        )}

        {this.props.format === "humanTime" && (
          <p>
            Date pour un humain: {dateCourante.getDate()}/
            {dateCourante.getMonth()}/{dateCourante.getFullYear()}
          </p>
        )}
      </div>
    );
  }
}

export default DisplayTime;
