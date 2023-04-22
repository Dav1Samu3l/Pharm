import { useState, useEffect } from "react";
import BodyContainer from "../../style/Body-styled.jsx";
import Card from "../../style/Card-style.jsx";
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import Modal from "../../style/Modal-style.jsx";


function Medicamentos() {
  const [formValuesList, setFormValuesList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    // busca todos os registros do localStorage pela key  formValues_ *
    const storedKeys = Object.keys(localStorage);
    const storedFormValuesList = storedKeys.filter((key) => key.startsWith('formValues2_')).map((key) => JSON.parse(localStorage.getItem(key)));
    setFormValuesList(storedFormValuesList);
  }, []);

  function handleOpenModal(index) {
    setModalIndex(index);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIndex(null);
    setModalIsOpen(false);
  }

  return (
    <>
      <BodyContainer> <h1>Opções de Medicamentos</h1></BodyContainer>
      {formValuesList.length !== 0 ? (
        <BodyContainer>
          {formValuesList.map((formValues2, index) => (
            <Card key={index}>
              <h1>{formValues2.nome}</h1>
              <img src="src\imgs\OIP (1).jpg" style={{ width: '50%', height: '50%' }} />
              <p>Preco: R$ {formValues2.preco}</p>
              <p>Tipo: {formValues2.tipo}</p>
              <button onClick={() => handleOpenModal(index)}>Ver detalhes</button>
            </Card>
          ))}
        </BodyContainer>
      ) : (
        <>
          <p>Não há lojas cadastradas! cadastre <Link to="/Cadastro-de-medicamentos">Aqui!</Link> </p>
        </>
      )}
      <Modal>
        <ReactModal isOpen={modalIsOpen} onRequestClose={() => handleCloseModal()}>
          {modalIndex !== null && (
            <>
              <h1>Detalhes do medicamento</h1>
              <p>Nome: {formValuesList[modalIndex].nome}</p>
              <p>Descrição: {formValuesList[modalIndex].descricao}</p>
              <p>Dosagem: {formValuesList[modalIndex].dosagem}</p>
              <p>Laboratório: {formValuesList[modalIndex].laboratorio}</p>
              <p>Preço: R$ {formValuesList[modalIndex].preco}</p>
            </>
          )}
          <button onClick={() => handleCloseModal()}>Fechar</button>
        </ReactModal>
      </Modal>
    </>
  );
}
export default Medicamentos;