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
          <p>{formValues2.endereco}</p>
          <p>Razão social: {formValues2.razaoSocial}</p>
          <p>CNPJ: {formValues2.cnpj}</p>
          <p>Nome Fantasia: {formValues2.nomeFantasia}</p>
          <p>E-mail: {formValues2.email}</p>
          {formValues2.telefone && <p>Telefone: {formValues2.telefone}</p>}
          <p>Celular: {formValues2.celular}</p>
        </Card>
      ))}  
       </BodyContainer>
  );
}
export default ListaDeLoja;