function Personnage(props) {
  return (
    <div>
      <p>
        Je m'appelle: {props.dataPersoParent.nom} {props.dataPersoParent.prenom}{" "}
        , j'ai {props.dataPersoParent.age} ans et j'habite à{" "}
        {props.dataPersoParent.Commune}
      </p>
    </div>
  );
}

export default Personnage;
