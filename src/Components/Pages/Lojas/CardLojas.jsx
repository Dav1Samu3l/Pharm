import { useState, useEffect } from "react";
import BodyContainer from "../../style/Body-styled.jsx";
import Card from "../../style/Card-style.jsx";
import { IoIosSad } from "react-icons/io";
import { Link } from "react-router-dom";


function ListaDeLoja() {
  const [formValuesList, setFormValuesList] = useState([]);
  useEffect(() => {

    // busca todos os registros do localStorage pela key  formValues_ *
    const storedKeys = Object.keys(localStorage);
    const storedFormValuesList = storedKeys.filter((key) => key.startsWith('formValues_')).map((key) => JSON.parse(localStorage.getItem(key)));
    setFormValuesList(storedFormValuesList);
  }, []);
  return (
    <>
      <BodyContainer> <h1>Opções de lojas</h1></BodyContainer>

      {formValuesList.length !== 0 ? (
        <BodyContainer>
          {formValuesList.map((formValues, index) => (
            <Card key={index}>
              <h2>{formValues.nome}</h2>
              <p>Razão social: {formValues.razaoSocial}</p>
              <p>CNPJ: {formValues.cnpj}</p>
              <p>Nome Fantasia: {formValues.nomeFantasia}</p>
              <p>E-mail: {formValues.email}</p>
              {formValues.telefone && <p>Telefone: {formValues.telefone}</p>}
              <p>Celular: {formValues.celular}</p>
              <p>{formValues.endereco} - {formValues.numero}</p>
              <p>{formValues.bairro}</p>
              <p>{formValues.cidade}</p>
              <p>{formValues.estado}</p>
              <p>{formValues.cep}</p>
            </Card>
          ))}
        </BodyContainer>
      ) : (
        <div id="aviso">
          <p>Não há lojas cadastradas! cadastre <Link to="/Cadastro-de-lojas">Aqui!</Link> </p>
          <IoIosSad style={{ width: '50%', height: '50%' }} alt="imagem padrão" />
        </div>


      )}
    </>
  );
}
export default ListaDeLoja;