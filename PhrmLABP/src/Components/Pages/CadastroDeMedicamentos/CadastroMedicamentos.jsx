import { useState } from 'react';
import BodyContainer from '../../style/Body-styled';
import FormContainer from '../../style/Form-style';

function MedicamentoForm() {
   const [formValues, setFormValues] = useState({});

   const handleInputChange = (event) => {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      // Gera uma chave única para o registro utilizando a data e hora atual
      const key = `formValues2_${new Date().toISOString()}`;
      // Salva o registro no localStorage com a chave gerada
      localStorage.setItem(key, JSON.stringify(formValues));
      // Reseta o estado do formulário
      setFormValues({});
      // Reseta os campos do formulário
      event.target.reset();
    };


   return (
      <BodyContainer>
         <FormContainer>
            <form onSubmit={handleSubmit}>
               <label>
                  Nome do medicamento: <span style={{ color: 'red' }}>*</span>
                  <input
                     type="text"
                     name="nome"
                     onChange={handleInputChange}
                     value={formValues.nome}
                     required
                  />
               </label>
               <br />
               <label>
                  Nome do laboratório: <span style={{ color: 'red' }}>*</span>
                  <input
                     type="text"
                     name="laboratorio"
                     onChange={handleInputChange}
                     value={formValues.laboratorio}
                     required
                  />
               </label>
               <br />
               <label>
                  Dosagem do medicamento: <span style={{ color: 'red' }}>*</span>
                  <input
                     type="text"
                     name="dosagem"
                     onChange={handleInputChange}
                     value={formValues.dosagem}
                     required
                  />
               </label>
               <br />
               <label>
                  Descrição do medicamento:
                  <textarea
                     name="descricao"
                     onChange={handleInputChange}
                     value={formValues.descricao}
                  />
               </label>
               <br />
               <label>
                  Preço unitário do medicamento: <span style={{ color: 'red' }}>*</span>
                  <input
                     type="number"
                     name="preco"
                     onChange={handleInputChange}
                     value={formValues.preco}
                     required
                  />
               </label>
               <br />
               <label>
                  Tipo do medicamento: <span style={{ color: 'red' }}>*</span>
                  <select
                     name="tipo"
                     onChange={handleInputChange}
                     value={formValues.tipo}
                     required
                  >
                     <option value="">Selecione o tipo</option>
                     <option value="Comprimido">Comprimido</option>
                     <option value="Cápsula">Cápsula</option>
                     <option value="Xarope">Xarope</option>
                     <option value="Pomada">Pomada</option>
                  </select>
               </label>
               <br />
               <button type="submit">Salvar</button>
            </form>
         </FormContainer>
      </BodyContainer>
   );
}

export default MedicamentoForm;
