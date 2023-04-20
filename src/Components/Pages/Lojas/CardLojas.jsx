import { useState, useEffect } from "react";
import BodyContainer from "../../style/Body-styled.jsx";
import Table from "../../style/Table-style.jsx";
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
      <BodyContainer>
        {formValuesList.length !== 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Razão social</th>
                <th>CNPJ</th>
                <th>Nome Fantasia</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Celular</th>
                <th>Endereço</th>
                <th>Número</th>
                <th>Cidade</th>
                <th>Bairro</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {formValuesList.map((formValues, index) => (
                <tr key={index}>
                  <td>{formValues.razaoSocial}</td>
                  <td>{formValues.cnpj}</td>
                  <td>{formValues.nomeFantasia}</td>
                  <td>{formValues.email}</td>
                  <td>{formValues.telefone}</td>
                  <td>{formValues.celular}</td>
                  <td>{formValues.endereco}</td>
                  <td>{formValues.numero}</td>
                  <td>{formValues.cidade}</td>
                  <td>{formValues.bairro}</td>
                  <td>{formValues.estado} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div id="aviso">
            <p>Não há lojas cadastradas! cadastre <Link to="/Cadastro-de-lojas">Aqui!</Link> </p>
          </div>
        )}
      </BodyContainer>
    </>
  );
}
export default ListaDeLoja;
