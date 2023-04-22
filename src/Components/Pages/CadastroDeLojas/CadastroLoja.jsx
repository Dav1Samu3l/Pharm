import { useState } from 'react';
import BodyContainer from '../../style/Body-styled';
import FormContainer from '../../style/Form-style';
import ReactInputMask from 'react-input-mask';



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
        <h1>Cadastro de novas lojas</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            Razão social: <span style={{ color: 'red' }}>*</span>
            <ReactInputMask
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
            <ReactInputMask
              mask="99.999.999/9999-99"
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
            <ReactInputMask
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
            <ReactInputMask
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
            <ReactInputMask
              mask="(99) 9999-9999"
              type="tel"
              name="telefone"
              onChange={handleChange}
              value={formValues.telefone || ''}
            />
          </label>
          <br />
          <label>
            Celular: <span style={{ color: 'red' }}>*</span>
            <ReactInputMask
              mask="(99) 99999-9999"
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
              <ReactInputMask
                mask="99999-999"
                name="cep"
                type="text"
                id="cep"
                onBlur={handleBlurCep}
              />
              <br />
              <label htmlFor="endereco">Endereço:</label>
              <ReactInputMask
                onMouseOut={handleBlurCep}
                name="endereco"
                type="text"
                id="endereco"
                value={formValues.endereco || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <br />
              <label htmlFor="bairro">Bairro:</label>
              <ReactInputMask
                name="bairro"
                type="text"
                id="bairro"
                value={formValues.bairro || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <br />
              <label
                htmlFor="cidade">Cidade:</label>
              <ReactInputMask
                type="text"
                id="cidade"
                value={formValues.cidade || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <br />
              <label htmlFor="estado">Estado:</label>
              <ReactInputMask
                name="estado"
                type="text"
                id="estado"
                value={formValues.estado || ''}
                onChange={(event) => setEndereco(event.target.value)} />
              <label htmlFor="Numero">Numero: </label>
              <ReactInputMask
                name='numero'
                type='text'
                id='numero'
                value={formValues.numero || ''}
                onChange={handleChange} />
            </form>
          </fieldset>
          <button type="submit">Salvar</button>
        </form>
      </FormContainer>
    </BodyContainer>
  );
}

export default CadastroDeLoja;