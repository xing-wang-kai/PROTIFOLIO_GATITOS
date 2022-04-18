# :cyclone: REACT ROUTER DOM

(acess Aqui!)[https://secret-garden-28387.herokuapp.com/]

<div align: "center" align='center'>
    <img align="center" alt="kai-HTML" height="100" width="100"  src='./public/logo192.png' alt='logo React'/>
</div>

Este projeto de Ensino tem com o intuito o aprendizagem do uso do React Router Dom.

Importando a biblioteca React-router-dom 

:cyclone: [REACT-ROUTER-DOM web](https://v5.reactrouter.com/web/guides/quick-start)

- [x] npm install react-router-dom

## Usando Componentes `<Router> <Routes> <Route>`

Para usar o React router podemos importar 3 principais components de inicio que são:

```javascript

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

```

O componente Routes era o antigo Switch que foi substituido e poderá ser aplicado agora nos projetos..
Para aplicar o React router dom no projeto usamos a seguinte estrutura...

```javascript

function App() {
  return (
    <div className="App">
      
      <Router>
       <Header />
        <Routes>
          
          <Route exact path="/"      element={ <Home/>}    />
          <Route       path="/sobre" element={<Sobre/>}    />
          <Route       path='*'              element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

```

No exemplo acima englobamos os componentes Home e Sobre a página dentro de dois novos
componentes, sendo o primeiro de dentro para fora, Route que recebe parametros, podendo ser eles exact(informa que a rota deverá ser exata), path=''(recebe a rota) e element={informar o componete}...
Após informar este elementos todos os Route são englobados pelo componente Routes que por sua vez é englobado pelo componente Router...

## :cyclone: Criando Links com `<Link to="">`

Podemos criar tegues de links que renderizam um unico componente sem que ao clicar no mesmo seja realizado uma requisição completa para a página...
Para usar esse componente importamos o conteúdo Link do React router Dom e aplicamos no lugar das tags <a></a> o componente link recebe o paramentro to="" (caminho para renderizar o componete somente...)

```javascript
const Header = ( ) => {
    return(
    <header>

            <nav>
                <ul>
                    <li><Link to="/login">Entrar</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        
    </header>)
}

export default Header;
```
O exemplos acima usamos o link para redirecionar o componete Header para rederizar somente os componetes solicitados sem precisar fazer uma nova requisição a página toda...
_OBS: O componente Header ao ser usado em app.js ou outro componete precisa estar englobado por Router e Routes para surtir efeito ou então o componente não irá funcionar..._

## :cyclone: USANDO PARAMS 

O method Params pode ser importado de REACT router DOM e usado para definir que determinado valor será coletado dos params... 

```javascript
import { useParams } from 'react-router-dom';

const {id} = useParams();

const [post, setPost] = useState([]);

api.get(`/${id}`, {options} )
              .then((res)=>{
                    setPost(res.data)
             }
        )
```

No caso acima, o sistema vai buscar na url passada o params. ex.: 
http://localhost:3000/3

O parames é o número 3 que será jogado no id do get que então desta forma jogará os valores na API e buscará com FINDONE no mongoDB o valor referente ao dados...

## :cyclone: USANDO NAVIGATE;

O navigate é usado para redirecionar para algum rota especifica caso encontramos algum erro durante o procedimento de rederização. como exemplo usando o FindOne da API caso a mesma não retorne nenhum valor, para impedir que a página fique em branco usamos o Navigate para empurrar a página para página de error.

````javascript
import { useNavigate } from 'react-router-dom';

const [post, setPost] = useState([]);

let navigate = useNavigate();
"application/json"}
        api.get(`/${id}`, {options} )
              .then((res)=>{
                    setPost(res.data)
             }
        ).catch((err)=>{
            navigate('/error', {replace: true});
        })
```