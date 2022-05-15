import { useState } from 'react';
import Head from 'next/head'
import Gifts from './../gifts/index';

export default function insertgifts() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');
    const category = Array.from(form.elements).find(({ name }) => name === 'category').value;
    const name = Array.from(form.elements).find(({ name }) => name === 'name').value;
    const value = Array.from(form.elements).find(({ name }) => name === 'value').value;

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-wedd');

    const data = await fetch('https://api.cloudinary.com/v1_1/die6t1h9a/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
    const url = data.secure_url;

    const gift = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: 'POST',
      body: JSON.stringify({
        category,
        name,
        value,
        url
      }),
    })
    .then(response => response.json())
    .then(() => {
      window.location.reload();
    });
  }

  return (
    <div>
      <Head>
        <title>Cadastro de produtos</title>
        <meta name="description" content="Upload your gifts to Wedd!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
        Cadastro de produtos para vender em nossa lista de casamentos
        </h1>

        <form method="post" onSubmit={handleOnSubmit}>
          <p>
            <label>Categoria</label>
            <select name="category" id="category">
              <option value="Ferramentas">Ferramentas</option>
              <option value="Casa, Móveis e Decoração">Casa, Móveis e Decoração</option>
              <option value="Eletrodomésticos">Eletrodomésticos</option>
              <option value="Eletrônicos e Acessórios">Eletrônicos e Acessórios</option>
              <option value="Esportes">Esportes</option>
              <option value="Laser">Laser</option>
            </select>
          </p>
          <p>
            <label>Descrição</label>
            <input type="text" id="name" name="name" />
          </p>
          <p>
            <label>Valor</label>
            <input type="text" id="value" name="value" />
          </p>

          <p>
            <label>Foto</label>
            <input type="file" name="file" onChange={handleOnChange}/>
          </p>
          
          <img src={imageSrc} height={"100px"} width={"100px"} />
          
          {imageSrc && !uploadData && (
            <p>
              <button>Salvar</button>
            </p>
          )}

          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )}
        </form>
      </main>

      <Gifts />

    </div>
  )
}
