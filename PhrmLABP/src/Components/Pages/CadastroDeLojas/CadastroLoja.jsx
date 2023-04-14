import { useState } from 'react';
import BodyContainer from '../../style/Body-styled';
import FormContainer from '../../style/Form-style';



function CadastroDeLoja() {

  const [formValues, setFormValues] = useState({});
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [enderecoValues, setEnderecoValues] = useState({});

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gera uma chave única para o registro utilizando a data e hora atual
    const key = `formValues_${new Date().toISOString()}`;
    // Salva o registro no localStorage com a chave gerada
    localStorage.setItem(key, JSON.stringify(formValues));

    // Reseta o estado do formulário
    setFormValues({});
  };

  const handleBlurCep = async (event) => {
    const cep = event.target.value;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setEndereco(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);

      // Atualiza os valores de endereço com os dados do CEP
      setEnderecoValues({
        endereco: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      });

      // Atualiza o estado formValues com os dados do CEP
      setFormValues({
        ...formValues,
        endereco: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BodyContainer>
      < FormContainer>
        <form onSubmit={handleSubmit}>
          <label>
            Razão social: <span style={{ color: 'red' }}>*</span>
            <input
              type="text"
              name="razaoSocial"
              onChange={handleChange}
              value={formValues.razaoSocial || ''}
              required
            />
          </label>
          <br />
          <label>
            CNPJ: <span style={{ color: 'red' }}>*</span>
            <input
              type="text"
              name="cnpj"
              onChange={handleChange}
              value={formValues.cnpj || ''}
              required
            />
          </label>
          <br />
          <label>
            Nome Fantasia: <span style={{ color: 'red' }}>*</span>
            <input
              type="text"
              name="nomeFantasia"
              onChange={handleChange}
              value={formValues.nomeFantasia || ''}
              required
            />
          </label>
          <br />
          <label>
            E-mail: <span style={{ color: 'red' }}>*</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formValues.email || ''}
              required
            />
          </label>
          <br />
          <label>
            Telefone:
            <input
              type="tel"
              name="telefone"
              onChange={handleChange}
              value={formValues.telefone || ''}
            />
          </label>
          <br />
          <label>
            Celular: <span style={{ color: 'red' }}>*</span>
            <input
              type="tel"
              name="celular"
              onChange={handleChange}
              value={formValues.celular || ''}
              required
            />
          </label>
          <br />
          <fieldset>
            <legend>Endereço:</legend>
            <form>
              <label htmlFor="cep">CEP:<span style={{ color: 'red' }}> *</span></label>
              <input
                name="cep"
                type="text"
                id="cep"
                onBlur={handleBlurCep}
                onMouseOut={handleBlurCep} />
              <br />
              <label htmlFor="endereco">Endereço:</label>
              <input
              onMouseOut={handleBlurCep}
                name="endereco"
                type="text"
                id="endereco"
                value={formValues.endereco || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <br />
              <label htmlFor="bairro">Bairro:</label>
              <input
                name="bairro"
                type="text"
                id="bairro"
                value={formValues.bairro || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <br />
              <label
                htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                value={formValues.cidade || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <br />
              <label htmlFor="estado">Estado:</label>
              <input
                name="estado"
                type="text"
                id="estado"
                value={formValues.estado || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <label htmlFor="Numero">Numero: </label>
                <input
                  name='numero'
                  type='text'
                  id='numero'
                  value={formValues.numero || ''}
                  onChange={handleChange}/>
            </form>
          </fieldset>
          <button type="submit">Salvar</button>
        </form>
      </FormContainer>
    </BodyContainer>
  );
}

export default CadastroDeLoja;