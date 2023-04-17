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
    const storedFormValuesList = storedKeys.filter((key) => key.startsWith('formValues2_')).map((key) => JSON.parse(localStorage.getItem(key)));
    setFormValuesList(storedFormValuesList);
  }, []);
  return (
    <>
      <BodyContainer> <h1>Opções de Medicamentos</h1></BodyContainer>
      {formValuesList.length !== 0 ? (
        <BodyContainer>
          {formValuesList.map((formValues2, index) => (
            <Card key={index}>
              <h1>{formValues2.nome}</h1>
              <img src="src\imgs\OIP (1).jpg" style={{ width: '50%', height: '50%' }} />
              <p >Dscrição:{formValues2.descricao}</p>
              <p>Dosagem: {formValues2.dosagem}</p>
              <p>Laboratorio: {formValues2.laboratorio}</p>
              <p>Preco: R$ {formValues2.preco}</p>
              <p>Tipo: {formValues2.tipo}</p>
            </Card>
          ))}
        </BodyContainer>
      ) : (
        <>
          <p>Não há lojas cadastradas! cadastre <Link to="/Cadastro-de-medicamentos">Aqui!</Link> </p>
          <IoIosSad style={{ width: '50%', height: '50%' }} alt="imagem padrão" />

        </>
      )}
    </>
  );
}
export default ListaDeLoja;