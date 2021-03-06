import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import BoxDepoimentos from '../src/components/BoxDepoimentos'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(propriedades) {
  return (
    <Box as ="aside">
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px", width: "100%"}}
      />
      <hr />
      <p>

      </p>

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>        
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home(props) {


    const [comunidades, setComunidades] = React.useState([]);
    const [depoimentos, setDepoimentos] = React.useState([]);

    const comunidadesJaInseridas = [

      {id: '12354625255165',
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'},

      {id: '123547285652872165',
      title: 'Amo caneta em gel',
      image: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/06/dscf0268-1024x768.jpg'},

      {id: '123547282839657227832872165',
      title: 'Músicas MP3',
      image: 'https://www.gadoo.com.br/wp-content/uploads/2015/08/8103.jpg'},

      {id: '1235462939382725165',
      title: 'Malhação',
      image: 'http://2.bp.blogspot.com/-jdmwcnWh3vI/TWLB18SEr-I/AAAAAAAAAyg/UIInKPSj3Us/s1600/BaseCD-7891430310820-capa.jpg'},


      {id: '123546282792872723825165',
      title: 'Eu nunca terminei uma borracha',
      image: 'https://mercur.vteximg.com.br/arquivos/ids/159006-1000-1000/borracha_prima_2.jpg?v=636840182910830000'},

      {id: '1234815154398282773636245165',
      title: 'Um mamão vai na cabeça',
      image: 'https://scontent.fbau1-1.fna.fbcdn.net/v/l/t1.6435-9/59844161_264004154404326_1430639862402252800_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeETmAfwIKna3MHAPEDPsqv6LYdeld5rn8gth16V3mufyO37DG9Qxb4UaZoybWVGd9M&_nc_ohc=-fb9ycoUl_4AX8gN5TI&_nc_ht=scontent.fbau1-1.fna&oh=286a06ce0da455c5fb685287fc207da1&oe=60F74965'},
    ]

    const depoimentosJaInseridos = [

      {id: '12354625255165',
      depo: 'O ki dizer dessa pessoah que mal conheço + jah considero pakas? Só ki t-doluuu demaissss (LLLL)',
      image: 'http://www.rdtladygaga.com/uploads/images/2020/11/724d0064385a1a04752acf115ba308c9_medium.jpg'},
    ]
    const usuarioAleatorio = props.githubUser;
    const pessoasFavoritas = [
      'juunegreiros',
      'omariosouto',
      'peas',
      'rafaballerini',
      'marcobrunodev',
      'felipefialho',
      'caroldireito1',
    ]

  function ProfileRelationsBox(propriedades) {
    return (
      <ProfileRelationsBoxWrapper>        
        <h2 className="smallTitle">
          {propriedades.title} ({propriedades.items.length})
        </h2>

      </ProfileRelationsBoxWrapper>
    );
  }

  const [seguidores, setSeguidores] = React.useState([{
    id: '1465165',
  
  }]);


  React.useEffect(function() {
  fetch('https://api.github.com/users/juunegreiros/followers')
  .then(function (respostaDoServidor) {
  return respostaDoServidor.json();
  })
  .then(function(respostaCompleta) {
  setSeguidores(respostaCompleta);
  })
  } )
  
  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem vinda, ~Karol~.
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">Crie uma comunidade</h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);
            console.log('Campo: ', dadosDoForm.get('title'));
            console.log('Campo: ', dadosDoForm.get ('image'));

            const comunidade ={
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get ('image')
            }

            const comunidadesAtualizadas = [...comunidades, comunidade]
            setComunidades(comunidadesAtualizadas)
          }}>
            <div>
              <input placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
              />
            </div>
            <div>
              <input placeholder="Coloque uma URL para usarmos de capa" 
              name="image" 
              aria-label="Coloque uma URL para usarmos de capa"/>
            </div>

            <button style={{background: '#2E7BB4', borderRadius: "15px",}}>
              Criar comunidade
            </button>                
          </form>
        </Box>

        <Box>
        <h2 className="subTitle">Deixe seu depoimento</h2>
          <form onSubmit={function handleCriaDepoimento(e) {
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);
            console.log('Campo: ', dadosDoForm.get('title'));
            console.log('Campo: ', dadosDoForm.get ('image'));

            const depoimento ={
              id: new Date().toISOString(),
              depo: dadosDoForm.get('depo'),
              image: dadosDoForm.get ('image')
            }

            const depoimentosAtualizados = [...depoimentos, depoimento]
            setDepoimentos(depoimentosAtualizados)
          }}>
            <div>
              <input placeholder="Escreva aqui seu depoimento para Karol"
              name="depo" 
              aria-label="Escreva aqui seu depoimento para Karol"
              type="text"
              />
            </div>
            <div>
              <input placeholder="Coloque a URL da sua foto" 
              name="image" 
              aria-label="Coloque a URL da sua foto"/>
            </div>

            <button style={{background: '#2E7BB4', borderRadius: "15px",}}>
              Criar depoimento
            </button>                
          </form>
        </Box>
       <div>
        <BoxDepoimentos style={{padding: "5px"}}>
            <h2 className="smallTitle">
              Depoimentos ({depoimentos.length + depoimentosJaInseridos.length})
            </h2>

            <ul>
              {depoimentos.map((itemAtual) => {
                return (
                  <li class={"photo"} key={itemAtual.id}>
                    <a href={itemAtual}>
                      <img src={itemAtual.image} />
                    </a>
                  </li>

                  
                )
              })}

              {depoimentos.map((itemAtual) => {
                return (
                  <li class={"content"} key={itemAtual.depo.id}>
                    <a href={itemAtual.depo}>
                    <span>{itemAtual.depo}</span>
                    </a>
                      
                  </li>
                  
                )
              })}

              {depoimentosJaInseridos.map((itemAtual) => {
                return (
                  <li class={"photo"}  key={itemAtual.id}>
                    <a href={`${itemAtual.link}`}>
                      <img src={itemAtual.image} />
                    </a>
                  </li>                 
                )
              })}

                {depoimentosJaInseridos.map((itemAtual) => {
                return (
                  <li class={"content"} key={itemAtual.id}>
                    <div style={{padding: 'auto', textAlign: 'justify'}}>{itemAtual.depo}</div>
                      
                  </li>                 
                )
              })}

            </ul>      
          </BoxDepoimentos>
        </div>
        </div>       
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>     
        <Box style={{padding: "5px"}}>      
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
          Seguidores  ({seguidores.length})
          </h2>
          <ul>
          {seguidores.map((itemAtual) => {
            return (
                <li key={itemAtual.id}>
                <a href={itemAtual.html_url}>
                  <img src={itemAtual.avatar_url} />
                  <span>{itemAtual.login}</span>
                </a>
              </li>   
            );
          })}

        </ul>
          </ProfileRelationsBoxWrapper>
          </Box>
          <Box style={{padding: "5px"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          </Box>

          <Box style={{padding: "5px"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length + comunidadesJaInseridas.length})
            </h2>

            <ul style={{padding: "0px"}}>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                  
                )
              })}

              {comunidadesJaInseridas.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`${itemAtual.link}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          </Box>
          
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
}