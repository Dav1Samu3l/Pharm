import { useState, useEffect } from "react";
import BodyContainer from "../../style/Body-styled.jsx";
import Card from "../../style/Card-style.jsx";


function ListaDeLoja() {
  const [formValuesList, setFormValuesList] = useState([]);
  useEffect(() => {
    // busca todos os registros do localStorage pela key  formValues_ *
    const storedKeys = Object.keys(localStorage);
    const storedFormValuesList = storedKeys.filter((key) => key.startsWith('formValues2_')).map((key) => JSON.parse(localStorage.getItem(key)));
    setFormValuesList(storedFormValuesList);
  }, []);
  return (
    <BodyContainer>
      {formValuesList.map((formValues2, index) => (
        <Card key={index}>
          <h2>{formValues2.nome}</h2>
          <p>{formValues2.laboratorio}</p>
          <p>Dosagem: {formValues2.dosagem}</p>
          <p>Laboratorio: {formValues2.laboratorio}</p>
          <p>Preco: R$ {formValues2.preco}</p>
          <p>Tipo: {formValues2.tipo}</p>
        </Card>
      ))}  
       </BodyContainer>
  );
}
export default ListaDeLoja;