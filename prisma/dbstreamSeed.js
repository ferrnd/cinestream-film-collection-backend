import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';

const filmesNovos = [
    {
        nome: "Seinfeld",
        descricao: "Considerada uma das maiores sitcoms de todos os tempos, a série acompanha a vida do comediante Jerry Seinfeld (interpretando uma versão fictícia de si mesmo) e seu trio de amigos neuróticos em Nova York: o azarado George Costanza, a confiante Elaine Benes, e o excêntrico Cosmo Kramer. A comédia se concentra em situações cotidianas, muitas vezes absurdas e hilárias, que a série popularizou como 'um show sobre nada'.",
        classificacao: "12 Anos",
        anoLancamento: 1989,
        cardCapa: "https://www.termometrooscar.com/uploads/1/4/8/8/1488234/published/unfrosted-the-poptart-story-xlg.jpg?1714828023",
        video: "hQXKyIG_NS4",
        logo: "https://www.vhv.rs/dpng/d/465-4655656_seinfeld-logo-png-download-seinfeld-logo-png-transparent.png",
        poster: "https://i.ebayimg.com/images/g/-WcAAOSwlcxmal-D/s-l1200.jpg",
        fundo: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14768779/seinfeldcast.0.1498614946.jpg?quality=90&strip=all&crop=0,5.4782608695652,100,89.04347826087",
    },

    {
        nome: "Parks and Recreation",
        descricao: "Parks and Recreation é uma série de comédia norte-americana criada por Greg Daniels e Michael Schur, exibida originalmente entre 2009 e 2015. Gravada no formato mockumentary (falso documentário), ela utiliza entrevistas diretas, câmeras que seguem os personagens e cortes rápidos para criar humor situacional, espontâneo e muitas vezes absurdo. A história acompanha a rotina do Departamento de Parques e Recreação da pequena, fictícia e muitas vezes problemática cidade de Pawnee, no estado de Indiana. A protagonista é Leslie Knope (interpretada por Amy Poehler), uma funcionária pública otimista, ambiciosa e dedicada, que sonha em melhorar sua comunidade através de projetos inovadores, apesar dos inúmeros obstáculos burocráticos e políticos que enfrenta. Ao longo das temporadas, a série explora as dinâmicas entre os diversos personagens do departamento, incluindo Ron Swanson (Nick Offerman), um libertário que despreza o governo; Tom Haverford (Aziz Ansari), um funcionário ambicioso e empreendedor; April Ludgate (Aubrey Plaza), uma estagiária sarcástica; e Ben Wyatt (Adam Scott), um político em ascensão que se torna interesse romântico de Leslie. Parks and Recreation é conhecida por seu humor inteligente, personagens memoráveis e comentários sociais sutis, conquistando uma base de fãs leal e crítica positiva ao longo dos anos.",
        classificacao: "12 Anos",
        anoLancamento: 2009,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/725a9c3b0c8a34d4341ae3524ef35388e9036c9b5d4b78b0fe3adf19ad60af0a.jpg",
        video: "5IZWeAwdJ-s",
        logo: "https://cdn.shopify.com/s/files/1/0813/8015/collections/Parks_Rec.jpg?v=1553863334",
        poster: "https://m.media-amazon.com/images/M/MV5BNDI3ODVmOTktYWQ3Zi00NjkyLThiODktMjU1ZjE3YzhhNWE3XkEyXkFqcGc@._V1_.jpg",
        fundo: "https://i.guim.co.uk/img/media/e3f0d7b60fa90bc5ed2df5c9ba74044db2fb4ff8/0_190_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=3057dde4b179a80cac39d8d10249e67d",
    },
    {
        nome: "It: A Coisa - Bem-Vindos a Derry",
        descricao: "a série serve como prelúdio para os eventos dos romances 'It: A Coisa' de Stephen King, explorando a origem do mal que assola a cidade de Derry, Maine. A trama acompanha um grupo de crianças que descobrem a existência de uma entidade malévola que desperta a cada 27 anos para aterrorizar a cidade. Conforme os jovens enfrentam seus próprios medos e traumas pessoais, eles se unem para confrontar essa força sombria, revelando segredos obscuros sobre Derry e suas próprias vidas. A série aprofunda o folclore da cidade e o impacto duradouro do mal que lá reside.",
        classificacao: "+18 Anos",
        anoLancamento: 2025,
        cardCapa: "https://rollingstone.com.br/wp-content/uploads/2025/10/Que-horas-estreia-It-Bem-Vindos-a-Derry-serie-preludio-de-It-A-Coisa.jpg",
        video: "hdCIZK2zcYw",
        logo: "https://img.odcdn.com.br/wp-content/uploads/2025/09/derry_trailer_4-1920x962.png",
        poster: "https://br.web.img3.acsta.net/pictures/23/07/05/05/01/0026101.jpg",
        fundo: "https://t.ctcdn.br/FcMPJcEKnBUAaOcWPycv0cmCVrA=/640x360/smart/i1055803.jpeg",
    },
    {
        nome: "O Senhor dos Anéis: Os Anéis de Poder",
        descricao: "Situada na Segunda Era da Terra-média, milhares de anos antes dos eventos de 'O Senhor dos Anéis', a série explora a ascensão do mal em forma de Sauron e a forja dos lendários Anéis de Poder. A trama acompanha personagens novos e conhecidos enquanto enfrentam ameaças crescentes, alianças políticas e batalhas épicas que moldarão o destino da Terra-média. Com visuais deslumbrantes e uma narrativa rica, a série mergulha profundamente na mitologia criada por J.R.R. Tolkien, revelando segredos antigos e histórias não contadas deste vasto universo.",
        classificacao: "14 Anos",
        anoLancamento: 2022,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/bb6167717c7a918c1db2bac52234f191024624dcdb41e382a2041959898d789c.jpg",
        video: "b_gKwV2ebJY",
        logo: "https://mir-s3-cdn-cf.behance.net/projects/404/7d3d1a163447187.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg",
        poster: "https://br.web.img3.acsta.net/pictures/22/10/05/09/42/3385930.jpg",
        fundo: "https://m.media-amazon.com/images/S/pv-target-images/bb6167717c7a918c1db2bac52234f191024624dcdb41e382a2041959898d789c.jpg",
    },
    {
        nome: "Fallout",
        descricao: "Baseada na icônica série de videogames da Bethesda, 'Fallout' transporta os espectadores para um futuro pós-apocalíptico devastado por uma guerra nuclear. A série explora as lutas de sobrevivência, a reconstrução da sociedade e os conflitos morais enfrentados pelos habitantes de um mundo transformado, onde facções rivais lutam pelo controle dos recursos escassos. Com uma narrativa rica em personagens complexos e dilemas éticos, 'Fallout' mergulha profundamente na mitologia do universo do jogo, trazendo à vida a atmosfera sombria e cheia de perigos que os fãs conhecem e amam.",
        classificacao: "+18 Anos",
        anoLancamento: 2024,
        cardCapa: "https://deadline.com/wp-content/uploads/2024/04/image001.jpg",
        video: "wl7x9PQdgy4",
        logo: "https://brandlogos.net/wp-content/uploads/2024/04/fallout_tv_show-logo_brandlogos.net_1qekd.png",
        poster: "https://image.tmdb.org/t/p/original/c15BtJxCXMrISLVmysdsnZUPQft.jpg",
        fundo: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/fallout-poster-prime-video-e1709830857457.jpg?w=1080&h=607&crop=1",
    },

    {
        nome: "Erased",
        descricao: "Em 2006, Satoru Fujinuma, um mangaka de 29 anos, possui uma habilidade involuntária conhecida como 'Revival' que envia sua consciência de volta no tempo momentos antes de um incidente fatal, permitindo-lhe evitá-lo. Quando sua mãe é assassinada por um agressor desconhecido, a habilidade de Satoru o envia de volta dezoito anos para o passado, dando-lhe a oportunidade de salvar não apenas sua mãe, mas também prevenir que um serial killer tire a vida de três de seus amigos de infância.",
        classificacao: "14 Anos", // Baseado na classificação Drama/Suspense e a temática do crime (AdoroCinema, Crunchyroll)
        anoLancamento: 2016, // Ano da série anime
        cardCapa: "https://miro.medium.com/1*zovMpSo2SuhoZE8wpj1fkg.jpeg",
        video: "D0UNRqtqtB8",
        logo: "https://i0.wp.com/katoon.com.br/wp-content/uploads/2018/07/Capa-Cast-08.png?resize=1140%2C641",
        poster: "https://br.web.img3.acsta.net/c_310_420/pictures/19/09/20/16/59/1993201.jpg",
        fundo: "https://i3.wp.com/ruidomanifesto.org/wp-content/uploads/2018/03/Boku-dake-ga-inai-machi-1920-1080-Ru%C3%ADdo-Manifesto.png?resize=1920%2C1080&ssl=1",
    },
    {
        nome: "Your Name",
        descricao: "A animação segue Taki, um estudante do ensino médio em Tóquio, e Mitsuha, uma jovem que vive em uma pequena cidade nas montanhas. Os dois descobrem que estão misteriosamente trocando de corpo em seus sonhos. Conforme a troca se torna frequente e eles tentam se comunicar através de mensagens, eles desenvolvem um forte laço emocional enquanto tentam descobrir o porquê desse fenômeno e, mais importante, se encontrar na vida real. Lançado internacionalmente em 2016, é uma produção japonesa que reergueu o cenário de filmes em anime.",
        classificacao: "12 Anos", // Comumente classificado como 12 anos
        anoLancamento: 2016,
        cardCapa: "https://i0.wp.com/katoon.com.br/wp-content/uploads/2018/11/Capa-Cast-12.png?resize=1140%2C641",
        video: "soQXM3XVvIU",
        logo: "https://images.alphacoders.com/765/thumb-1920-765707.png",
        poster: "https://br.web.img3.acsta.net/pictures/17/10/04/19/01/4966397.jpg",
        fundo: "https://lordedoslivros.com.br/wp-content/uploads/2019/02/your-name.png",
    },
    {
        nome: "A Voz do Silêncio",
        descricao: "O filme de drama e romance segue Shoya Ishida, um ex-valentão que atormentou Shoko Nishimiya, uma nova colega de classe surda, durante o ensino fundamental. Anos depois, Shoya, agora isolado e deprimido, decide procurar Shoko para se redimir por suas ações passadas. A história explora temas como bullying, perdão, auto-aceitação e a dificuldade de comunicação.",
        classificacao: "14 Anos", // Classificação do Filmow e temas sensíveis
        anoLancamento: 2016,
        cardCapa: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/12b497cf2d6f52e795862fed99769d6e.jpg",
        video: "nfK6UgLra7g",
        logo: "https://ih1.redbubble.net/image.1743220906.9209/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        poster: "https://m.media-amazon.com/images/M/MV5BYzQ2YTM2NmYtZjEzMS00M2NiLWI3NjQtNjIyMDEzMmQ1ZDkxXkEyXkFqcGc@._V1_.jpg",
        fundo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEini9M9k8DlOJ5rSh8VlmMNXuI5ydNKylrkxUOnrrDh4bgQhVdswKGZWhnnWfKyvarAEPjWcUuPS92npVC6HjOLZ7I0ipKJzAMMfR3sJti59y3YuMC8oMgeiZ2zjE3vJNpvTmhpZGRcjeN0/w1200-h630-p-k-no-nu/00+-+A+Voz+do+Sil%25C3%25AAncio+%2528Koe+no+Katachi%252C+2016%2529.png",
    },
    {
        nome: "Jojo's Bizarre Adventure: Stardust Crusaders",
        descricao: "Terceira parte da aclamada série. Chegamos a 1989, protagonizada por Jotaro Kujo, neto de Joseph Joestar. Jotaro é um jovem delinquente que descobre possuir um 'Stand', uma manifestação física de sua força vital. Quando o arqui-inimigo de sua família, DIO, retorna, a Stand de sua mãe a está matando aos poucos. Jotaro e um grupo de usuários de Stand embarcam em uma jornada de Tóquio ao Cairo para deter DIO e salvar a vida de sua mãe.",
        classificacao: "16 Anos", // Gênero Ação/Aventura/Shonen, com violência (comum para a franquia)
        anoLancamento: 2014, // Ano da estreia do anime Stardust Crusaders
        cardCapa: "https://proximonivel.pt/wp-content/uploads/2017/11/analise-jojos-bizarre-adventure-stardust-crusaders-header-pn-ana-review.png",
        video: "Rs2D0vL4stk",
        logo: "https://i.pinimg.com/736x/ba/67/d0/ba67d0126adb1cab0f03a5805bf9efba.jpg",
        poster: "https://m.media-amazon.com/images/I/71UsaBghEeL._AC_UF1000,1000_QL80_.jpg",
        fundo: "https://sm.ign.com/ign_br/screenshot/default/907918_jw85.jpg",
    },
    {
        nome: "Kino's Journey",
        descricao: "A série conta a história de Kino, uma jovem que viaja pelo mundo com Hermes, sua motocicleta falante. O princípio de sua jornada é nunca ficar em um país por mais de três dias, pois ela acredita que este é o tempo necessário para aprender o suficiente sobre o local. Cada episódio é uma reflexão sobre a natureza humana, explorando diferentes sociedades e suas regras, leis e costumes únicos, geralmente com uma mensagem filosófica ou sombria.",
        classificacao: "14 Anos", // Temas adultos, violência e drama (Crunchyroll)
        anoLancamento: 2017, // Ano da série animada mais recente (Kino no Tabi: The beautiful world - The Animated Series)
        cardCapa: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cb406f496c9aadafa86f6ac11f1a6543.jpe",
        video: "62rJHTP8JGQ",
        logo: "https://static.wikia.nocookie.net/vsbattles/images/9/9a/Kino%27s_Journey_Title.png/revision/latest?cb=20191214091301",
        poster: "https://m.media-amazon.com/images/I/81bGSdA1NgL._AC_UF1000,1000_QL80_.jpg",
        fundo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cb406f496c9aadafa86f6ac11f1a6543.jpe",
    },

    {
        nome: "Demon Slayer: Mugen Train",
        descricao: "A jornada de Tanjiro Kamado como exterminador de demônios continua. Ele e seus camaradas, Zenitsu e Inosuke, juntam-se a Kyojuro Rengoku, o Hashira das Chamas, para investigar uma série de desaparecimentos misteriosos a bordo do Mugen Train, onde enfrentarão o poderoso demônio Enmu e o Lua Superior Akaza.",
        classificacao: "14 Anos",
        anoLancamento: 2020,
        cardCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCR_CFooMzRQd49Its_Kg90ouO51qPCneXzFjgU5aV7BvXtvcav1B_OjvNmAV487gjEOvdJlpzsSkUtFqXVDVYp7E1lh1SK8VkBPXVqsaaSV42zg_bwjtuuaR6LnIsDOHX31_IxfKqROw/s16000/demon_slayer_filme2021_cineBR_Banner.jpg",
        video: "ATJYac_dORw",
        logo: "https://i.ytimg.com/vi/FpDdDZtgx_I/maxresdefault.jpg",
        poster: "https://a.storyblok.com/f/178900/851x1200/c698f4e773/6ae881544ae4573cc0e833b3a70832261603631133_main.jpg/m/filters:quality(95)format(webp)",
        fundo: "https://a.storyblok.com/f/178900/1127x634/19d24b2742/0bd87e87ea2f954c240522f2a7b79e0f1614105536_main.png/m/filters:quality(95)format(webp)",
    },
    {
        nome: "Made in Abyss",
        descricao: "A história acompanha Riko, uma garota que mora na beira de um gigantesco e misterioso sistema de túneis chamado 'Abyss', o último lugar inexplorado do mundo. Seu sonho é se tornar uma aventureira como sua mãe e explorar o local, cheio de relíquias e criaturas desconhecidas. Em sua jornada, ela encontra um garoto robô, Reg, e juntos, eles descem cada vez mais fundo na escuridão.",
        classificacao: "16 Anos",
        anoLancamento: 2017,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/6ac3898d047675f80868db84697109981cfcd90c919b0dc06942ee9bacce1108.jpg",
        video: "kqBNQEUI8dM",
        logo: "https://blacknerdproblems.com/wp-content/uploads/2019/02/MIALogo_BlkBackground.png",
        poster: "https://m.media-amazon.com/images/I/71swbQy7EzL._AC_UF894,1000_QL80_.jpg",
        fundo: "https://m.media-amazon.com/images/S/pv-target-images/acf77e7193251c237654b4ab7a3f83720d8703a416927e8d38a5c55ca0883898.jpg",
    },
    {
        nome: "Baccano!",
        descricao: "Ambientada majoritariamente nos Estados Unidos da década de 1930 (Lei Seca), a série narra múltiplas histórias interligadas envolvendo a máfia, ladrões e um grupo de alquimistas que acidentalmente bebem um elixir da imortalidade. A narrativa não linear acompanha eventos caóticos a bordo do trem Flying Pussyfoot e as consequências da imortalidade. ",
        classificacao: "16 Anos",
        anoLancamento: 2007,
        cardCapa: "https://i0.wp.com/katoon.com.br/wp-content/uploads/2020/03/Capa_Cast_33destaque.png?resize=1140%2C641&ssl=1",
        video: "MtuNdtfMlJ0",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Baccano_logo.png",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdkYjc2MmQtNTJlZS00ZDM4LWI0ZTYtZGNkZTgzZTg0YTNmXkEyXkFqcGc@._V1_.jpg",
        fundo: "https://gqcanimes.com.br/wp-content/uploads/2019/07/Baccano-Animes-Seinen.jpg",
    },
    {
        nome: "Psycho-Pass",
        descricao: "Em um Japão futurista, o sistema Sibyl monitora constantemente a mente dos cidadãos para prever e prevenir crimes, utilizando um valor chamado 'Coeficiente de Crime' (Psycho-Pass). A história segue a Inspetora Akane Tsunemori e seus 'Executores', criminosos latentes que realizam o trabalho de campo, confrontando a ética do sistema e a natureza da justiça em um mundo policiado pelo pensamento.",
        classificacao: "+18 Anos", // Devido a violência explícita e temas adultos.
        anoLancamento: 2012,
        cardCapa: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a89c322c22e288004cab9fa83ebb8f4e.jpg",
        video: "YzuJnyebc40",
        logo: "https://unpopularpoplar.wordpress.com/wp-content/uploads/2020/07/screenshot-358-1.png?w=1024",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ1OTNkZGYtODVlMC00NWI0LWJiYjItMzM4M2U4NjY0ZTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        fundo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR75253JY-backdrop_wide",
    },
    {
        nome: "Terror in Resonance",
        descricao: "Tóquio é abalada por um ataque terrorista, mas a única pista deixada pela polícia é um vídeo misterioso carregado na internet. Os terroristas, dois jovens que se chamam 'Sphinx', desafiam o público e a polícia a decifrar seus enigmas para evitar novas destruições em massa. A série explora as motivações por trás de seus atos e os traumas do passado.",
        classificacao: "14 Anos",
        anoLancamento: 2014,
        cardCapa: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/e0bc1639524e169511fbabc9fcb15970.jpg",
        video: "aiZrjeZvF8Y",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh53y6_mSpwwCr5FUfyg01YYtGYimbia_0mw&s",
        poster: "https://m.media-amazon.com/images/I/61JYFhxr0gL._AC_UF350,350_QL80_.jpg",
        fundo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/e0bc1639524e169511fbabc9fcb15970.jpg",
    },
    {
        nome: "Avatar: A Lenda de Aang",
        descricao: "Em um mundo dividido em quatro nações (Água, Terra, Fogo e Ar), Aang, o Avatar e o único capaz de dominar todos os quatro elementos, acorda de um sono de 100 anos para encontrar o mundo devastado pela guerra da Nação do Fogo. Ao lado de seus novos amigos Katara e Sokka, Aang deve dominar todos os elementos para restaurar o equilíbrio do mundo.",
        classificacao: "10 Anos",
        anoLancamento: 2005,
        cardCapa: "https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/05/01-3.jpg",
        video: "ooVvH2IYz0w",
        logo: "https://preview.redd.it/official-logo-for-the-legend-of-aang-the-last-airbender-v0-rrrh5rvaa71f1.jpeg?width=1080&crop=smart&auto=webp&s=59fb12bbbf70b12a13b68e03e980195c48978a3c",
        poster: "https://image.tmdb.org/t/p/original/msWDv3MzBC4cM5fk9B0HgbKiMQ1.jpg",
        fundo: "https://rollingstone.com.br/wp-content/uploads/avatar-a-lenda-de-aang-reproducao.jpg",
    },
    {
        nome: "She-Ra e as Princesas do Poder",
        descricao: "Adora, uma órfã que deixou seu lar na Horda do Mal, descobre uma espada mágica que a transforma em She-Ra, a lendária Princesa do Poder. Ao encontrar novas aliadas, ela lidera uma rebelião de princesas mágicas para lutar contra a Horda do Mal e seu ex-melhor amigo, que agora é um inimigo, o vilão Hordak.",
        classificacao: "Livre", // Classificação juvenil/Livre para o público-alvo
        anoLancamento: 2018,
        cardCapa: "https://miro.medium.com/v2/resize:fit:1400/0*m9vgsa_FikUlkj2I.jpg",
        video: "GsGMkAWB6lY",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/She-Ra_2018_logo.png",
        poster: "https://blogs.correio24h.com.br/mesalte/wp-content/uploads/2020/05/shera2jpg-1200x1855.jpg",
        fundo: "https://cdn.ome.lt/zCEjhZTM9otLkrrtqM3rexgO0xA=/1200x630/smart/filters:format(webp)/extras/conteudos/she-ra_zUQDQjT.jpg",
    },
    {
        nome: "Castlevania",
        descricao: "Após a Igreja matar sua esposa, Drácula jura vingança à humanidade, liberando um exército de criaturas das trevas sobre a Valáquia medieval. Trevor Belmont, o último descendente de um clã de caçadores de monstros, é forçado a intervir para salvar a Europa Oriental da extinção, com a ajuda da oradora Sypha Belnades e de Alucard, o filho de Drácula.",
        classificacao: "16 Anos",
        anoLancamento: 2017,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/3209030cfe5b88d20200ca80af4b4443026120f77d082fd87f591ecc5ca00318.jpg",
        video: "oF9PY2A8boQ",
        logo: "https://i.pinimg.com/736x/a9/13/25/a913258300ee858fbaad2791c8871801.jpg",
        poster: "https://br.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg",
        fundo: "https://rollingstone.com.br/wp-content/uploads/castlevania-netflix-2-temporada-capa-post-cosmonerd.jpg",
    },
    {
        nome: "Bob's Burgers",
        descricao: "A série acompanha Bob Belcher, um pai de terceira geração que administra uma lanchonete de hambúrgueres com sua otimista esposa Linda e seus três filhos: a desajeitada Tina, o musical Gene e a ardilosa Louise. A comédia de situação e animação foca nas desventuras diárias da família enquanto tentam manter o negócio funcionando, muitas vezes falhando de formas hilárias.",
        classificacao: "12 Anos",
        anoLancamento: 2011,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/448cb15769d3a7138dd0d834fe8aaea768d7df828a8a31fbebfb09d82a1c38e1.jpg",
        video: "hldGGWN9HcI",
        logo: "https://www.vhv.rs/dpng/d/110-1109948_bobs-burgers-pop-up-hd-png-download.png",
        poster: "https://img.elo7.com.br/product/zoom/26A8438/big-poster-serie-bobs-burgers-lo01-tamanho-90x60-cm-poster.jpg",
        fundo: "https://www.pluggedin.com/wp-content/uploads/2020/01/bobs-burgers-review-image-1024x587.jpg",
    },
    {
        nome: "Futurama",
        descricao: "Philip J. Fry, um entregador de pizza do século XX, é acidentalmente criogenicamente congelado e acorda em Nova York, no ano 3000. Ele consegue um emprego na Planet Express, uma empresa de entregas intergalácticas. A série segue Fry e seus novos colegas – a ciclope Leela, o robô Bender e o Professor Farnsworth – em aventuras de ficção científica que misturam comédia, sátira social e emoção inesperada.",
        classificacao: "12 Anos",
        anoLancamento: 1999,
        cardCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb8_7pVOJdRCjOiGIuCRjh7jLJG-i4q8UoxpoSOmOVFUtWBTWcSaE0HVK7oo1_pfquI9_D0yh5R-jS4WxP9EPaAnjCsqN7BBI1klwppBsvRjgUSjfKc5Ml8w4rxJ3hkBNVEjFyMsRQbsumRjz6PolUdZoLXod87CR47HT3hKkAd0p7E60f1bY65ty8ZdIm/s3840/te0tv8Rxcz4UGFn7563uIm7ozFp.jpg",
        video: "ZHN5Lg0SJyI",
        logo: "https://i.ytimg.com/vi/dSCN6ejrAZI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGjh2OKuN32gF4eB4fWF5KMCdQUA",
        poster: "https://m.media-amazon.com/images/M/MV5BNjYxNDgxM2MtYzNmNi00ODYwLWI0ZmEtZDM3M2QwZGQ3MWI3XkEyXkFqcGc@._V1_.jpg",
        fundo: "https://t.ctcdn.com.br/RJjTi93SuVLsxCly33h39UT7g6s=/1200x675/smart/i560212.jpeg",
    },
    {
        nome: "O Máskara: A Série Animada",
        descricao: "Baseada no filme de sucesso, a série segue o desajeitado e bondoso Stanley Ipkiss, que se transforma no Máskara, um super-herói amalucado e imprevisível. Usando a máscara mágica, ele ganha poderes cartunescos ilimitados e uma personalidade insana, usando-os para combater o crime e outros vilões peculiares em Edge City.",
        classificacao: "Livre",
        anoLancamento: 1995,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/15d7693ebd59ea07ffd911bcfd2e30f980e05fd5ba173365546829f02d38d5a4.jpg",
        video: "JQ4W8vK1iSs",
        logo: "https://image.tmdb.org/t/p/original/kq8OuvY9KVnyfwKrcmCnIkNvkPC.png",
        poster: "https://tse1.mm.bing.net/th/id/OIP.nrHhapmTLfRuoYfeOUiwRQHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        fundo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Vvm12pQouZ8X3R5UbuIA-caiTxyeXnzK7Q&s",
    },
    {
        nome: "A Vaca e o Frango",
        descricao: "A animação segue a dupla de irmãos surreais Vaca e Frango. Vaca, grande e ingênua, e Frango, pequeno e cínico, são constantemente perturbados por 'O Bumbum Descalço', um personagem diabólico que se disfarça em várias formas para tentar atormentá-los. A série é conhecida pelo seu humor bizarro e politicamente incorreto.",
        classificacao: "Livre",
        anoLancamento: 1997,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/8844d365b1b8750c2b03b76bddc14c444d7d7b11af23251c83b7e6f1012e5b16.jpg",
        video: "dcHpw3wKt0M",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cow_and_Chicken_logo.png",
        poster: "https://m.media-amazon.com/images/M/MV5BZmI3MjQ4MmYtMzlhZS00OTg0LThjMWYtOGJkZTczMWRmOTY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        fundo: "https://www.animativa.com/wp-content/uploads/2024/10/f32ee570b32858983c8ba62e453fb5b8db2da25f02e062c0ee1dadf264e4f12f_sx1080_fmjpg.jpg",
    },
    {
        nome: "Johnny Bravo",
        descricao: "O musculoso e excessivamente confiante Johnny Bravo mora com sua mãe e passa a maior parte do tempo tentando, sem sucesso, conquistar mulheres com frases de efeito e posturas de machão. Sua falta de inteligência e timing social resulta em inúmeras situações cômicas e embaraçosas.",
        classificacao: "Livre",
        anoLancamento: 1997,
        cardCapa: "https://i.ytimg.com/vi/Cy6I1Jhywhw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvulAx5xr89T8kRrETGZs7qbXdVg",
        video: "anMUn9d_1Qg",
        logo: "https://cdn.textstudio.com/output/sample/normal/1/1/3/9/johnny-bravo-logo-570-19311.png",
        poster: "https://image.tmdb.org/t/p/original/5TUFS5ltG0bNJXJzm8T42KEMriA.jpg",
        fundo: "https://aventurasnahistoria.com.br/wp-content/uploads/bravoamndma.jpg",
    },
    {
        nome: "As Aventuras de Tintim",
        descricao: "Baseada nos quadrinhos clássicos de Hergé, a série acompanha o destemido jovem repórter Tintim e seu esperto cão fox terrier Milu em viagens eletrizantes pelo mundo. Eles desvendam mistérios, combatem criminosos e se metem em diversas situações perigosas, muitas vezes auxiliados pelo impetuoso Capitão Haddock e os inseparáveis detetives Dupond e Dupont.",
        classificacao: "Livre",
        anoLancamento: 1991,
        cardCapa: "https://i.ytimg.com/vi/UfGrxw8uTCk/maxresdefault.jpg",
        video: "Nq5wKa0ihmM",
        logo: "https://upload.wikimedia.org/wikipedia/pt/8/8e/Tintim.png",
        poster: "https://m.media-amazon.com/images/M/MV5BNjA1OTZkYjEtMDViNS00NmIyLWI5OTAtZDQyYmJiMGZiMmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        fundo: "https://multiplotcinema.com.br/wp-content/uploads/2012/01/tintin.jpg",
    },
    {
        "nome": "Uma Mente Brilhante",
        "descricao": "Baseado na história real do matemático John Nash. Brilhante, Nash formulou um teorema revolucionário, mas foi diagnosticado com esquizofrenia. O filme acompanha sua luta para distinguir o real do imaginário e ter uma vida normal, sendo eventualmente premiado com o Nobel.",
        "classificacao": "12 Anos",
        "anoLancamento": 2001,
        "cardCapa": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAh9nA71Dl1qSNrJEoaIa-JXPhPYC0fnehAIUcZM3YZDPOcTehc9pF0bo7VwKfPP8zOypRMEXd9xxaZpkNUNaP0SAkDorbRPwBOgxstfM49tH_oV5FZU3sMOG5tMz9p4Hjcjc3F8Nmqvo1APatvb5f4UUw18YOYw_q-HpKdbxCswcMJ7v3-xC64cJfhw/s1280/Uma-Mente-Brilhante%20(1).jpg",
        "video": "q8vUMD1f0ss",
        "logo": "https://static.wikia.nocookie.net/logopedia/images/a/ab/A-beautiful-mind-2001.png/revision/latest?cb=20210306005348",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/744842cd790b7029dce32ee30a205e579e9cebe87a0c80eceeba68365a43a034.jpg",
        "fundo": "https://encenasaudemental.com/wp-content/uploads/2016/01/beautifulmind.jpg"
    },
    {
        "nome": "Na Natureza Selvagem",
        "descricao": "Início da década de 90. O jovem Christopher McCandless, recém-formado, decide abandonar tudo, doar suas economias e viajar sem rumo pelos Estados Unidos em busca de liberdade. Em sua jornada, ele cruza com várias pessoas que mudam sua vida, até partir para a aventura final rumo ao Alasca.",
        "classificacao": "12 Anos",
        "anoLancamento": 2007,
        "cardCapa": "https://mrbytesolutions.com/djangoapp_pvsm/uploads/posts/post_726_cover.png",
        "video": "0TVBnfniq-8",
        "logo": "https://gateway.prd.sky.ch/imageapi/fiction/logo?param=%7B%22movId%22%3A21942%2C%22format%22%3A%22webp%22%2C%22size%22%3A%22400x400%22%2C%22device%22%3A%22web%22%2C%22language%22%3A%22en%22%7D",
        "poster": "https://www.themoviedb.org/t/p/original/2MSGZEE6XZd2r4ODNziwAw7Hpw0.jpg",
        "fundo": "https://blog.thenorthface.com.br/wp-content/uploads/2017/09/into-the-wild-original.jpg"
    },
    {
        "nome": "O Artista",
        "descricao": "Hollywood, entre 1927 e 1932. George Valentin é um consagrado ator do cinema mudo que entra em declínio com a chegada dos filmes sonoros, enquanto a jovem figurante Peppy Miller ascende rapidamente ao estrelato.",
        "classificacao": "12 Anos",
        "anoLancamento": 2011,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/235940c0801e682265c1a6673955201e6f1ecf01a4b6ece88e016faa7d17b561.jpg",
        "video": "YB9Oq0hn5KY",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/The-Artist-Logo.svg/2560px-The-Artist-Logo.svg.png",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/519be838b3bb0a8ef29a6d97283da26dc2ff19ea8c6aebcf80ed8347c7447079.jpg",
        "fundo": "https://www.planocritico.com/wp-content/uploads/2012/02/o-artista-oscar-2011-plano-critico.jpg"
    },
    {
        "nome": "Seven: Os Sete Crimes Capitais",
        "descricao": "Dois detetives, o jovem e impetuoso David Mills e o experiente William Somerset, investigam um serial killer que baseia seus crimes nos sete pecados capitais: Gula, Cobiça, Preguiça, Luxúria, Vaidade, Inveja e Ira.",
        "classificacao": "16 Anos",
        "anoLancamento": 1995,
        "cardCapa": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/b2af0887-65de-4911-ba0d-b23d94dd37b7/89de68d7-86cd-4612-a50d-36fb3da782eb?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        "video": "dGzGUQ2CDzQ",
        "logo": "https://image.tmdb.org/t/p/original/zTUBFFOCyqj40RwdCMrVumXumTi.png",
        "poster": "https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg",
        "fundo": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/b2af0887-65de-4911-ba0d-b23d94dd37b7/89de68d7-86cd-4612-a50d-36fb3da782eb?host=wbd-images.prod-vod.h264.io&partner=beamcom"
    },
    {
        "nome": "O Suspeito",
        "descricao": "Após o desaparecimento de sua filha de seis anos e a amiga dela, Keller Dover, um pai desesperado, sequestra o principal suspeito, convencido de que a polícia (liderada pelo detetive Loki) desistiu da busca. Ele decide fazer justiça com as próprias mãos, custe o que custar.",
        "classificacao": "16 Anos",
        "anoLancamento": 2013,
        "cardCapa": "https://podounaopod.wordpress.com/wp-content/uploads/2018/04/b0cc99200ff3bc8a039d92c9cd4a634a.jpg?w=656&h=300&crop=1",
        "video": "bpXfcTF6iVk",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/6/6e/Prisoners_%28film%29_Logo.png",
        "poster": "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c4/Prisoners_p%C3%B4ster.jpg/250px-Prisoners_p%C3%B4ster.jpg",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/08b765b8534e4601382484553acb61d1773681d5ae89a06cb8958fb96a8a7afc.jpg"
    },
    {
        "nome": "O Grande Truque",
        "descricao": "Século XIX, Londres. Robert Angier e Alfred Borden são dois mágicos iniciantes que se tornam rivais obcecados após um trágico acidente. Eles embarcam em uma competição intensa e perigosa para criar o truque de mágica mais ousado de todos os tempos, custe o que custar.",
        "classificacao": "14 Anos",
        "anoLancamento": 2006,
        "cardCapa": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicFSCVV4Uv5ymJ1at2_92Bz8At8SzR4_p3qXmc9cyeSfy7F4PprhK86-Gwq13NvaK3jyRWTkw-n0LB0S_SjSzVN81FNhxQ1tyANkQjc3pBh5n0RLZsR0WYbceK7yB3PuODYU8rIb1zSa8/s1600/the+prestige.png",
        "video": "RLtaA9fFNXU",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/The_prestige.svg/1200px-The_prestige.svg.png",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/e67d8100125abb6e9c3b43ddef080d9eb748f94d3808f8547f554158320f6477.jpg",
        "fundo": "https://www.planocritico.com/wp-content/uploads/2017/07/O-Grande-Truque.jpg"
    },
    {
        "nome": "A Garota com a Tatuagem de Dragão",
        "descricao": "O jornalista Mikael Blomkvist é contratado para descobrir o que aconteceu com uma adolescente desaparecida há 40 anos. Ele conta com a ajuda de Lisbeth Salander, uma hacker de computador jovem, misteriosa e problemática. Juntos, eles desvendam uma imensa rede de corrupção.",
        "classificacao": "16 Anos",
        "anoLancamento": 2011,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/0d4dc03757d2284a63023361d79034f64206065e27b3956d87f938570a17b803.jpg",
        "video": "DqQe3OrsMKI",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a8/The_girl_with_the_dragon_tattoo_logo.png",
        "poster": "https://images.justwatch.com/poster/301733356/s718/the-girl-with-the-dragon-tattoo.jpg",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/0d4dc03757d2284a63023361d79034f64206065e27b3956d87f938570a17b803.jpg"
    },
    {
        "nome": "Los Angeles: Cidade Proibida",
        "descricao": "Los Angeles, início dos anos 50. Três detetives com métodos distintos de trabalho se defrontam com um caso de múltiplos homicídios e desvendam uma complexa trama de conspiração, corrupção policial e um esquema de prostituição de luxo envolvendo figuras de Hollywood.",
        "classificacao": "18 Anos",
        "anoLancamento": 1997,
        "cardCapa": "https://m.media-amazon.com/images/M/MV5BMDdjN2UyNmMtY2Q4Ny00ZmNiLWI3ZDktMGY3NTM1OWRlYjc0XkEyXkFqcGc@.V1.jpg",
        "video": "tXvGF8_zmxM",
        "logo": "https://static.wikia.nocookie.net/logopedia/images/a/af/La-confidential-movie-logo.png/revision/latest?cb=20170625135614",
        "poster": "https://m.media-amazon.com/images/M/MV5BYjc3ZWM4ODgtYzlkYi00YTY3LTgyNTYtMGY0ZGNjN2ZjMjE2XkEyXkFqcGc@.V1.jpg",
        "fundo": "https://i0.wp.com/cinegrandiose.com/wp-content/uploads/2015/03/conf-1.png?fit=960%2C540&ssl=1"
    },
    {
        "nome": "Moana",
        "descricao": "Moana Waialiki é uma adolescente polinésia, descendente de navegadores, que se aventura pelo Oceano Pacífico para desvendar o mistério que envolve seus ancestrais. Ela embarca em uma jornada épica com o poderoso semideus Maui para salvar sua família.",
        "classificacao": "Livre",
        "anoLancamento": 2016,
        "cardCapa": "https://wordpress-cms-revista-prod-assets.quero.space/uploads/2022/08/scale-3.webp",
        "video": "LKFuXETZUsI",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/1/16/Moana.svg",
        "poster": "https://play-lh.googleusercontent.com/C88BeuXq5N98WhNL2StZeSspSrRZihS4iB4FvYt4ro593636FMIjWQyJJD3CqKh8_4NIhmsEUy7LLJJyHw=w240-h480-rw",
        "fundo": "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/moana-ganha-teaser-de-continuacao.png?w=1200&h=675&crop=1"
    },
    {
        "nome": "O Fugitivo",
        "descricao": "O renomado cirurgião Richard Kimble é injustamente condenado pelo assassinato brutal de sua esposa. Após escapar durante o transporte, ele se torna um fugitivo, perseguido incansavelmente pelo obstinado detetive Samuel Gerard, enquanto corre para encontrar o verdadeiro assassino.",
        "classificacao": "14 Anos",
        "anoLancamento": 1993,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/bc847c3eb7abc50f5be14908651969ec52d9988452114838ef80f1fa64b78244.jpg",
        "video": "FKiR7SPy5DY",
        "logo": "https://upload.wikimedia.org/wikipedia/en/0/04/The_Fugitive_official_logo.png",
        "poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/07/20172668.jpg",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/201a1932b84bb14bc4c678bb7104d4c7aa578fcb8079403b6984956bc86d71af.SX1080_FMjpg.jpg"
    },
    {
        "nome": "O Poderoso Chefão II",
        "descricao": "A segunda parte da saga da família Corleone narra duas histórias paralelas: a ascensão do jovem Vito Corleone, que foge da Sicília para a América nos anos 1910 e constrói seu império; e a continuação da história de Michael Corleone nos anos 50, que tenta expandir e legitimar os negócios da família enquanto lida com conspirações.",
        "classificacao": "14 Anos",
        "anoLancamento": 1974,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/4b4a50e9dec1c62851dd91a3cc7f47e1d030baa8a71be53f72a02d2705250fe5.jpg",
        "video": "y4GCy_PK_Go",
        "logo": "https://i.pinimg.com/originals/6e/4d/65/6e4d65af6a3736ea17f981155c60c5f9.png",
        "poster": "https://m.media-amazon.com/images/M/MV5BZDNlYmVkMGUtNWZkYi00ZDQ1LWFmZTAtOTY1ZjUyNzE0ZDNmXkEyXkFqcGc@.V1.jpg",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/4b4a50e9dec1c62851dd91a3cc7f47e1d030baa8a71be53f72a02d2705250fe5.jpg"
    },
    {
        "nome": "Gente grande",
        "descricao": "A morte do treinador de basquete da infância reúne cinco velhos amigos no mesmo lugar onde celebraram um campeonato anos atrás. Juntos de suas esposas e filhos, eles passam o feriado de 4 de Julho em uma casa no lago, onde descobrem que envelhecer não significa necessariamente amadurecer.",
        "classificacao": "12 Anos",
        "anoLancamento": 2010,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/b71b06873fb90830776f41793940dddf06e5f38de22aa19e456d1aa3e1da483f.jpg",
        "video": "e01NVCveGkg",
        "logo": "https://static.wikia.nocookie.net/logopedia/images/8/8e/Grown_Ups.png/revision/latest?cb=20200317204643",
        "poster": "https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg",
        "fundo": "https://rollingstone.com.br/wp-content/uploads/cena-de-gente-grande_reproducao_twitter.jpg"
    },
    {
        "nome": "A Fuga das Galinhas",
        "descricao": "Na granja da Sra. Tweedy, a maioria das galinhas leva uma vida curta e monótona. A inteligente galinha Ginger tenta arquitetar um plano de fuga para o bando com a ajuda de Rocky, um galo que supostamente sabe voar. Juntos, eles tramam uma ousada tentativa para conquistar a liberdade.",
        "classificacao": "Livre",
        "anoLancamento": 2000,
        "cardCapa": "https://portaldogamer.com.br/wp-content/uploads/2023/11/A-Fuga-das-Galinhas.-Capa-do-DVD-do-filme-A-Fuga-das-Galinhas.jpg",
        "video": "MnlH4JXA-kU",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Chicken_Run_Logo.png",
        "poster": "https://upload.wikimedia.org/wikipedia/pt/3/33/A_Fuga_das_Galinhas.jpg",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/ac03fda077b471f78777d82546cdac97dddbd61334b01940bc5ba8560faa5c1a.SX1080_FMjpg.jpg"
    },
    {
        "nome": "Toy Story",
        "descricao": "Em um mundo onde os brinquedos são seres vivos, o boneco caubói Woody é o favorito de Andy. Seu posto é ameaçado com a chegada de Buzz Lightyear, um novo patrulheiro espacial. Os dois rivais acabam separados do seu dono e precisam unir forças para fugir do vizinho destruidor de brinquedos, Sid, e voltar para Andy.",
        "classificacao": "Livre",
        "anoLancamento": 1995,
        "cardCapa": "https://trecobox.com.br/wp-content/uploads/2024/07/trecobox.com.br-toy-story.jpg",
        "video": "v-PjgYDrg70",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Toy_Story_logo.svg/1280px-Toy_Story_logo.svg.png",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NTc5NTYyM15BMl5BanBnXkFtZTcwMzk0MjIyNw@@.V1.jpg",
        "fundo": "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/574/thumb_CURIOSIDADES-SOBRE-TOY-STORY-CAPA.jpg"
    },
    {
        "nome": "Zootopia",
        "descricao": "Na cidade de Zootopia, habitada apenas por animais, a coelha Judy Hopps se torna a primeira policial coelho. Para solucionar um caso, ela precisa formar uma parceria improvável com Nick Wilde, uma raposa malandra. Juntos, eles investigam uma conspiração envolvendo o desaparecimento de predadores.",
        "classificacao": "Livre",
        "anoLancamento": 2016,
        "cardCapa": "https://lumiere-a.akamaihd.net/v1/images/zootopia_7a25da70.jpeg",
        "video": "prct6AB5tR8",
        "logo": "https://www.imagenspng.com.br/wp-content/uploads/2016/04/zootopia-logo-01.png",
        "poster": "https://play-lh.googleusercontent.com/RKwnKXe8i53FA_O_bRPX9NDQYsetgo_G1K2Ks9fnBeIxRNYNEQD5CX4OOsQ5PLa8U_-QmCnMh0g8BOiMfA",
        "fundo": "https://assets.b9.com.br/wp-content/uploads/2016/03/zoo1.jpg"
    },
    {
        nome: "Valente",
        descricao: "Determinada em seguir o seu próprio caminho na vida, a princesa Merida desafia um antigo costume sagrado que coloca em perigo o reino e a vida de sua família. As ações de Mérida lançam inadvertidamente o caos e a fúria no reino. Ela recorre a uma velha e excêntrica Bruxa, mas a ajuda vem em forma de maldição. O perigo iminente força Merida a descobrir o significado da verdadeira coragem para que possa desfazer a terrível maldição antes que seja tarde demais.",
        classificacao: "Livre",
        anoLancamento: 2012,
        cardCapa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1vTYWB5tVMMI_wGPmKd50eZr_BP7fLi-VQ&s",
        video: "4a8Ut-mVRLc",
        logo: "https://i.pinimg.com/736x/a2/50/19/a2501994ae7c6fe96deb3f867679f3e0.jpg",
        poster: "https://4.bp.blogspot.com/-rxxojrV39Zk/UZ6A5HJuKWI/AAAAAAAAAIA/wB4Qb2zo8fE/s1600/valente_7.jpg",
        fundo: "https://historinhaspradormir.com.br/wp-content/uploads/2024/09/merida_valente.jpg",
    },
    {
        nome: "Monstros S.A.",
        descricao: "A maior fábrica de sustos do mundo, a Monstros S.A., emprega monstros para assustar crianças e gerar energia. O recordista de sustos é Sully, que tem como assistente e melhor amigo o monstrinho de um olho só, Mike Wazowski. A rotina da empresa é interrompida quando uma garotinha humana, Boo, entra acidentalmente no mundo dos monstros, desencadeando o caos e revelando um segredo sobre a verdadeira fonte de energia.",
        classificacao: "Livre",
        anoLancamento: 2001,
        cardCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgynmiqa8DDpm7jfvD1ouHXPNSi-2U1PivmLug_BgKF0PcBEIpTDSKNjN169nr-7qBVqvTx0DhjqE2UTVsxu1mvxN-UVYJwRjIS1iBR-3RlPPgzTSjS5LQUWI8ofPr_Abw0TlkuDu6jK4eN/s1600/monstros+sa+1.jpg",
        video: "iRh2kF-1X2E",
        logo: "https://i.pinimg.com/originals/b2/dd/82/b2dd82b2fba01eef1d24d056b6b72e59.png",
        poster: "https://tse4.mm.bing.net/th/id/OIP.d0Lua7eF6Qeyg0_rhYJsRgHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        fundo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho0EB3obJiPJGis3kVLzlCfD32BwxWUtgR6q4_XK2axWtzEzrj7yJuFru5DZ_Y-AGBolOLq-SiOCxPRgnuceo8eUy_6nRNZiSFU_kFmo0px7aerNWxghCXnGwxpQesctyq8pI_w1nliIM/s1600/monsters+inc-xlarge.jpg",
    },
    {
        nome: "Meu Malvado Favorito",
        descricao: "O supervilão Gru acredita que pode vencer qualquer um que cruzar o seu caminho, especialmente ao planejar o maior roubo da história: encolher e roubar a Lua. Isso até o dia em que conhece as garotinhas órfãs Margo, Edith e Agnes. Elas são as únicas que conseguem ver naquele homem o que ninguém jamais viu: um pai em potencial.",
        classificacao: "Livre",
        anoLancamento: 2010,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/736af4b4d3bff1202da819017482441122810f055be3630ca323f47e707fbcd2.jpg",
        video: "2K9bxQhPLRY",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5_DM_N_LFfk6z5pSPMKc9dW1_NnFsvQbxQ&s",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/c60fd3cb5bee84a2a2859239761c80656d029c9154e21e07774b6224f0ffe075.jpg",
        fundo: "https://i.pinimg.com/736x/d2/62/54/d26254391f8b14fd167cb274f342bc50.jpg",
    },
    {
        nome: "Ace Ventura: Um Detetive Diferente",
        descricao: "Ace Ventura (Jim Carrey) é o melhor detetive de animais de estimação que existe, e o único. Ele assume o caso para encontrar a mascote desaparecida do time dos Miami Dolphins e também seu principal jogador, Dan Marino. Em meio à investigação, ele se envolve em situações absurdas e tem que lidar com as figuras mais excêntricas para prender o culpado.",
        classificacao: "Livre",
        anoLancamento: 1994,
        cardCapa: "https://img20.tokyvideo.com/videos/676/676635/previews/previews_0012_custom_1741212255.8406.jpg",
        video: "W2JbouXAkyg",
        logo: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ac4d7d01-7deb-4ff1-b15a-f069ec02597d/307023c99b7ba899f3d18608929b7c76cec671a8.png?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/a8afdf1efd30b0a73cbeed35b8f585d9151ce9bc7cf1552257c0f66f35ed1f96.jpg",
        fundo: "https://m.media-amazon.com/images/S/pv-target-images/61cea7ca8a6b3b90566f12a564f6a6c9cf71a1a6c120eaceda7ae61802ef9831.SX1080_FMjpg.jpg",
    },
    {
        nome: "Quem Vai Ficar Com Mary?",
        descricao: "Após treze anos, Ted Stroehmann (Ben Stiller) ainda é obcecado por Mary (Cameron Diaz), sua paixão do colégio. Ele contrata um detetive particular (Matt Dillon) para encontrá-la. Só que, ao conhecê-la, o detetive também se apaixona e decide dar falsas informações a Ted para tentar conquistá-la, iniciando uma hilária e desesperada disputa entre vários pretendentes.",
        classificacao: "14 Anos",
        anoLancamento: 1998,
        cardCapa: "https://is1-ssl.mzstatic.com/image/thumb/Video1/v4/8c/b9/48/8cb9482e-7507-31b5-3340-5c07a7721383/mza_1176025731539032617.jpg/1200x675CA.TVA23C01.jpg",
        video: "kkyxnhT3-9c",
        logo: "https://static.wikia.nocookie.net/logopedia/images/c/cd/Theres-something-about-mary-movie-logo.png/revision/latest?cb=20180816101617",
        poster: "https://m.media-amazon.com/images/I/6190Nk0Ao4L.AC_UF1000,1000_QL80.jpg",
        fundo: "https://http2.mlstatic.com/D_NQ_NP_651145-MLA82840115383_032025-B.webp",
    },
    {
        nome: "Escola de Rock",
        descricao: "O roqueiro frustrado Dewey Finn (Jack Black) aceita dar aulas como professor substituto em uma escola particular de disciplina rígida para pagar suas dívidas. Sem saber o que fazer, ele descobre o talento musical de seus alunos e decide montar uma banda secreta para um concurso, transformando a vida dos jovens e a sua própria.",
        classificacao: "Livre",
        anoLancamento: 2003,
        cardCapa: "https://http2.mlstatic.com/D_NQ_NP_654495-MLA73830011528_012024-B.webp",
        video: "TExoc0MG4I4",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/SchoolOfRockLogo.png",
        poster: "https://media.fstatic.com/xGyasoLvLtsXXRC_XC1ZxnlTfDA=/322x478/smart/filters:format(webp)/media/movies/covers/2024/06/m4UIxSyqy4gtzfqSwijGAVD5qze.jpg",
        fundo: "https://igormiranda.com.br/wp-content/uploads/2023/01/escola-de-rock-school-of-rock-filme-jack-black.jpg",
    },
    {
        nome: "Superbad: É Hoje",
        descricao: "Os amigos Seth e Evan estão prestes a se formar no ensino médio e precisam enfrentar a iminente separação. Eles decidem que precisam de uma noite de diversão épica e, com a ajuda do amigo Fogell (McLovin) e sua identidade falsa, partem em uma desesperada e hilária missão para comprar bebidas para uma grande festa, enfrentando policiais incompetentes e o caos da juventude.",
        classificacao: "14 Anos",
        anoLancamento: 2007,
        cardCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc1xC6TurpT-7Pr_uPu5WQowu4JyEwqGh-gMqS5ZeiQmsKghFTsJYzNBeTdZN-FrJjoWNf_Dn1XQjQ1vHBil2zHSOSuq52AShFy6cQYX0xO4B6Az6xf6t84qf9u5l9KBDWHnGwOJAgYugE/w1200-h630-p-k-no-nu/superbad-movie.jpg",
        video: "4eaZ_48ZYog",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Superbad_Logo.png",
        poster: "https://image.tmdb.org/t/p/original/2pcIeB50XjM8x0V5Wv6r6VAvArM.jpg",
        fundo: "https://rollingstone.com.br/wp-content/uploads/2024/06/por-que-superbad-nunca-tera-uma-continuacao-criadores-respondem-foto-divulgacao.jpg",
    },
    {
        nome: "Todo Mundo Quase Morto",
        descricao: "A vida pacata do fracassado Shaun é virada de cabeça para baixo quando ele se vê repentinamente obrigado a liderar um grupo de desesperados sobreviventes em Londres, após a cidade ser invadida por um aterrorizador bando de mortos-vivos (zumbis). Entre sangue e caos, Shaun precisa proteger seus entes queridos e tentar resgatar sua vida.",
        classificacao: "18 Anos",
        anoLancamento: 2004,
        cardCapa: "https://wallpaper.forfun.com/fetch/7b/7be9163855790dc7163b9525bb05ce97.jpeg",
        video: "xuZt-WlTMpQ",
        logo: "https://static.wikia.nocookie.net/logopedia/images/8/8a/Shaunofthedead.png/revision/latest?cb=20140619222344",
        poster: "https://play-lh.googleusercontent.com/nZTVluVHCZ1WlPfIs1eO35sZ5WfKCw8PRBmTcibHHajWestAONEivcwXjXFEno5fqcgk=w240-h480-rw",
        fundo: "https://m.media-amazon.com/images/S/pv-target-images/b7a10381621033db2d4fde3573ae51c4b3a16d45f66334d96e2818c6f142f440._SX1080_FMjpg_.jpg",
    },
    {
        nome: "O Exorcista",
        descricao: "A adolescente Regan MacNeil (Linda Blair) começa a apresentar drásticas e aterradoras mudanças de comportamento inexplicáveis. Sem encontrar resposta no tratamento psiquiátrico, a mãe (Ellen Burstyn) recorre a um padre que, após concluir que a garota está possuída pelo demônio, solicita a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.",
        classificacao: "16 Anos",
        anoLancamento: 1973,
        cardCapa: "https://i.ytimg.com/vi/lLAUzNfG_30/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjnkQbOMhYOS_-9cZo5KcL6bGTUQ",
        video: "7b__Mdcz_fc",
        logo: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d7b0be9a-fc06-4144-a50c-51450c41370b/67cd829e8167478d122d78d239c69bffbd026dac.png?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320",
        poster: "https://br.web.img2.acsta.net/medias/nmedia/18/87/26/84/19873738.jpg",
        fundo: "https://nexo-uploads-beta.s3.amazonaws.com/wp-content/uploads/images/2023/12/13084012/o-exorcista_binary_176291.jpg",
    },
    {
        nome: "Alien, O Oitavo Passageiro",
        descricao: "A nave espacial rebocadora Nostromo, ocupada por sete tripulantes, atende a um chamado desconhecido de um planeta vizinho, local no qual acontece o primeiro contato com seres alienígenas. Ao voltar para a nave, a tripulação, liderada pela Tenente Ripley, é caçada por uma criatura alienígena mortal e claustrofóbica a bordo.",
        classificacao: "18 Anos",
        anoLancamento: 1979,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/d4779466880c41dbfe83a4852039995965fdcce206f0d50df8e094e088f51917.jpg",
        video: "wJgoed2eo5U",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Alien_logo.jpeg",
        poster: "https://br.web.img3.acsta.net/pictures/15/05/14/21/14/504650.jpg",
        fundo: "https://www.planoaberto.com.br/wp-content/uploads/2017/04/alien-postagem.jpg",
    },
    {
        nome: "Harry Potter e a Pedra Filosofal",
        descricao: "Harry Potter é um garoto órfão que vive infeliz com seus tios. Aos 11 anos, ele recebe um convite para ingressar na Escola de Magia e Bruxaria de Hogwarts, descobrindo um mundo mágico que jamais imaginara. Ao lado de seus novos amigos, Rony e Hermione, ele se aventura para desvendar o mistério que cerca a lendária Pedra Filosofal.",
        classificacao: "Livre",
        anoLancamento: 2001,
        cardCapa: "https://image.tmdb.org/t/p/w780/7Hyl3IiKsaskhBnbkBU9jpAj57F.jpg",
        video: "SFzft_2dcV0",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvKAb1ke8t3bH90m1oRSHsFQdb5kr0lbIXPOq0BJnAh19saOkyy_YbGTndSq-C_anNUGsLK7tWqyIHrwnrwEUGtXQ_Yzj2BjOWBZX4__DV2-uOiwkqPk9aJbuifjlbF2OLhz-NNBahskc/s1600/Harry+Potter+e+a+Pedra+Filosofal+Logo.jpg",
        poster: "https://i.pinimg.com/736x/16/fc/ef/16fcefb7a6af4c45e13020ab4ebfe344.jpg",
        fundo: "https://www.cinema7arte.com/wp-content/uploads/2021/11/1636043728095981-0.jpg",
    },
    {
        nome: "Harry Potter e a Câmara Secreta",
        descricao: "Em seu segundo ano na Escola de Magia e Bruxaria de Hogwarts, Harry Potter é alvo de avisos sinistros. Após seu retorno, eventos misteriosos começam a petrificar alunos e pessoas se transformam em pedra. Harry, Rony e Hermione precisam investigar o temido segredo da Câmara Secreta antes que seja tarde demais.",
        classificacao: "10 anos",
        anoLancamento: 2002,
        cardCapa: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/a9/a6/22/a9a622ae-964d-0039-eb8e-5e5ad3b5f8fe/HP2_H_DD_KA_TT_3840x2160_300dpi_MX.lsr/1200x675.jpg",
        video: "7ZBh_-Aa0Bk",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGwFJJaoPBFJVOUPoA_GZeQ2bO5DJCdoX8IRpouitOAATRxYhC-AdHL0yQzts2LNC8gHEZg3Xt_DpPMZlSdRnh4j0ZjwAPnutloI7dT2eHjSHSFnWu3O4qHpgZcdwbSOaeLmn4H713DMs/s1600/Harry+Potter+e+a+C%25C3%25A2mara+Secreta.jpg",
        poster: "https://cinemaweb.com.br/wp-content/uploads/2024/06/poster-harry-potter-e-a-camara-secreta-2002.jpg?x55736",
        fundo: "https://m.media-amazon.com/images/S/pv-target-images/86c2df4655613678a150efbf3e13ed4bdfbe17e5f0e006d3a75d09bdf8f7b29b._SX1080_FMjpg_.jpg",
    },
    {
        nome: "Harry Potter e o Prisioneiro de Azkaban",
        descricao: "O terceiro ano em Hogwarts de Harry Potter é marcado pela fuga do perigoso assassino Sirius Black da prisão de Azkaban, que, segundo boatos, está atrás de Harry. A escola é cercada por Dementadores, criaturas sombrias que sugam a alegria, enquanto Harry e seus amigos tentam desvendar a verdade por trás da fuga e dos laços de Black com sua família.",
        classificacao: "Livre",
        anoLancamento: 2004,
        cardCapa: "https://i.ytimg.com/vi/e02fwhC6DiQ/maxresdefault.jpg",
        video: "e02fwhC6DiQ",
        logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f993868-5417-4268-9c23-1c6f0fc60b91/dhgmbw8-288abcaa-7d2d-4695-bd17-525a5771cc6f.png/v1/fill/w_1074,h_744/harry_potter_and_the_prisoner_of_azkaban___logo_by_evilzgaruda_dhgmbw8-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwOCIsInBhdGgiOiIvZi81Zjk5Mzg2OC01NDE3LTQyNjgtOWMyMy0xYzZmMGZjNjBiOTEvZGhnbWJ3OC0yODhhYmNhYS03ZDJkLTQ2OTUtYmQxNy01MjVhNTc3MWNjNmYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NZaRS7-z6P12B0Z-GEcwYZyLN4fg3SAwZVO81X_ICVk",
        poster: "https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/9/2/928520211216-uau-posters-harry-potter-14.jpg",
        fundo: "https://personaunesp.com.br/wp-content/uploads/2024/12/Harry-potter-1-768x403.jpg",
    },
    {
        nome: "Harry Potter e o Cálice de Fogo",
        descricao: "No seu quarto ano, Harry Potter, agora com 14 anos, é misteriosamente escolhido para participar do perigoso Torneio Tribruxo, defendendo Hogwarts contra outras escolas de magia. Enquanto enfrenta dragões e sereianos, a ameaça da volta de Lord Voldemort se concretiza, levando a um confronto mortal.",
        classificacao: "12 anos",
        anoLancamento: 2005,
        cardCapa: "https://vipzinho.com.br/wp-content/uploads/2025/08/harry-potter-e-o-calice-de-fogo.jpeg",
        video: "RwJlOdtoHRE",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8YXn9YVnaF5jXBlahnt2ys82ORw9chuVwnryRshCMyhC2EvtxYPpEXLtiXbA_ow25dlYOdca3RlJ2MHHn2-CljKhuu_F1lrcqwuT24JmrHKUSI7g9hMlZtsYx0GCqFQuupmNWXgc33wY/s1600/Harry+Potter+e+o+C%25C3%25A1lice+de+Fogo+Logo.jpg",
        poster: "https://tse1.mm.bing.net/th/id/OIP.fACCt5k_DU1rx9XeCo1xgAHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        fundo: "https://media.themoviedb.org/t/p/w500_and_h282_face/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
    },
    {
        nome: "Harry Potter e a Ordem da Fênix",
        descricao: "O Ministério da Magia nega o retorno de Lord Voldemort, desacreditando Harry e Dumbledore. Em uma tentativa de monitorar Hogwarts, a Professora Dolores Umbridge assume o controle da escola. Em resposta, Harry e seus amigos criam a 'Armada de Dumbledore', uma organização secreta para treinar feitiços de defesa e se preparar para a guerra.",
        classificacao: "Livre",
        anoLancamento: 2007,
        cardCapa: "https://i.ytimg.com/vi/aBGt0GNWk_I/sddefault.jpg",
        video: "LLAaW1EgyY8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/3/33/HP5LogoPTBR.png/revision/latest?cb=20211008042612",
        poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg",
        fundo: "https://lh6.googleusercontent.com/proxy/GpwnX8KLW2jPRR9pRfSNPth2W47Qy4m1FyqXcUS-Mn9e5iZR36BJ7qFlAP46e7lC-kX5TDi52L63MQUwJy_M1nYs-uTO2ckgWoquwuF5GKFAYnu_GHbl0p3ZJYI",
    },
    {
        nome: "Harry Potter e o Enigma do Príncipe",
        descricao: "Com a volta de Voldemort, Dumbledore recruta Harry para uma missão crucial: investigar o passado do Lorde das Trevas através das memórias do Professor Horácio Slughorn. Enquanto o perigo aperta, Harry suspeita de Draco Malfoy e descobre um livro misterioso que pertenceu ao 'Príncipe Mestiço'.",
        classificacao: "Livre",
        anoLancamento: 2009,
        cardCapa: "https://i.ytimg.com/vi/sG-LDd5IUAk/maxresdefault.jpg",
        video: "wgkHfUaG1nI",
        logo: "https://www.ordemdafenixbrasileira.com/2008/08/site-brasileiro-de-enigma-do-prncipe.html",
        poster: "https://image.tmdb.org/t/p/original/zSKNXome5vmnBVQCmpWN8do7Bpa.jpg",
        fundo: "https://telinha.com.br/wp-content/uploads/2025/03/hp-enigma-principe.jpg",
    },
    {
        nome: "Harry Potter e as Relíquias da Morte: Parte 1",
        descricao: "Sem a proteção de Dumbledore, Harry, Rony e Hermione abandonam Hogwarts para embarcar em uma perigosa missão: encontrar e destruir as Horcruxes de Voldemort. Eles precisam confiar apenas um no outro, enquanto são caçados pelos Comensais da Morte e descobrem a lenda das Relíquias da Morte.",
        classificacao: "12 anos",
        anoLancamento: 2010,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/8c9ad29eb68938ab79dce06f09b8ffe17705575d5b05497d7e8b99b1385b8f10.jpg",
        video: "kmXjPbN-rYU",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOtCtv-IM-9zKC1yNgGU-kES9-1sguTiBPCNWRnyMNN9XC9qUvz-lcSR69RPUU0Ex6CofYbcO3pqmvfpKtZU4aZEmiLBH3A_K6LaEoTSnsNLrqzPAUsUGAVOU_Jyo0e-8regACMeZ5lbo/s1600/Harry+Potter+e+as+Reliquias+da+Morte+Parte+Um+Logo+Deathly+Hallows+Part+1+Brazilian+Portuguese+Logo.jpg",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/373bfbaf8847694fa37fbd77b4ead796f1aca9c4f34622b24045216ee145f9cd.jpg",
        fundo: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/2c394a2d-7d1d-481d-a420-76ee1bee01a7/16a6f93f-7783-4f71-bf54-ceea3d7812c4?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    },
    {
        nome: "Harry Potter e as Relíquias da Morte: Parte 2",
        descricao: "A intensa e épica conclusão da saga de Harry Potter. O trio retorna a Hogwarts para encontrar e destruir as Horcruxes restantes. A batalha final pelo castelo e pelo destino do mundo bruxo começa, culminando no confronto derradeiro entre Harry e Lord Voldemort.",
        classificacao: "14 anos",
        anoLancamento: 2011,
        cardCapa: "https://i.ytimg.com/vi/e3y40m1ohWw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjE7DEaBklB-rUhlBM5cwuHxpa_g",
        video: "E79fa8bLfPA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLufZJL5uCZAP384Sc9JgW44SSNcHN68If4w&s",
        poster: "https://uauposters.com.br/media/catalog/product/1/7/175820140528-uau-posters-filmes-harry-potter-8-e-as-reliquias-da-morte-parte-2-5.jpg",
        fundo: "https://www.rua.ufscar.br/wp-content/uploads/2023/11/Harry-Potter-1.png",
    },
    {
        nome: "O Vingador do Futuro (Total Recall - 1990)",
        descricao: "Em 2084, Douglas Quaid é um construtor que sonha com uma viagem a Marte e decide implantar memórias de férias na Rekall. Quando o processo dá errado, ele descobre ser um agente secreto procurado. Quaid foge e questiona se sua vida inteira é uma mentira, embarcando em uma aventura para descobrir sua verdadeira identidade e o segredo de Marte.",
        classificacao: "14 anos",
        anoLancamento: 1990,
        cardCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFX6uMptIZmM0NRP_3LvaT5LnT-vPDUZ672be7SHpYhPn4nJ80TwWyOowb7-ZdGIGLmSNAQE-E_Flb0G-Ty846OQrr0gfFYRDFxmUVPozgf_uqhtNubBre-t1oR49AiR-ZRT_x7LQLlZLLVh_iQgLtYiyv254NtpHvKIbgOTbQEb_fHEmGU7EPUSaz/s1920/O%20Vingador%20do%20Futuro%20(1990)-Repassando%20Oficial.jpg",
        video: "2DwNb-ZGVjE",
        logo: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/9a032ec0-42a2-43eb-84da-70e4f7212beb/1ad11d92-fff8-4116-b866-edb93a394b56?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320",
        poster: "https://preview.redd.it/total-recall-1990-v0-snby4dxi5tnf1.jpeg?auto=webp&s=7e0ca1e41ecb1713f45562c4edbde0025293e4b0",
        fundo: "https://www.papodecinema.com.br/wp-content/uploads/2012/09/20240510-o-vingador-do-futuro-1990-papo-de-cinema-banner.webp",
    },
    {
        nome: "Star Trek (2009)",
        descricao: "O destino da galáxia está nas mãos de dois rivais: o jovem rebelde James T. Kirk e o meio-humano Spock. O filme narra o início da tripulação da U.S.S. Enterprise, desde a Academia da Frota Estelar, enquanto eles se unem para enfrentar uma ameaça de vingança que pode destruir toda a Federação.",
        classificacao: "12 anos",
        anoLancamento: 2009,
        cardCapa: "https://images.prismic.io/star-trek-untold/MWJjNTVkNWYtNmYyMy00ZDUxLTk1MmEtMDBmNTE0YzZmZmM4_16026d60ff9b54410b3435b403afd226.jpg?auto=compress,format&rect=0,0,620,260&w=620&h=260",
        video: "pKFUZ10Wmbw",
        logo: "https://www.freepnglogos.com/uploads/star-trek-png-logo/world-brand-star-trek-png-logo-25.png",
        poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/69/66/20108900.jpg",
        fundo: "https://wallpapers.com/images/hd/star-trek-enterprise-bridge-jyrqn7bxh7secuj8.jpg",
    },
    {
        nome: "O Jogo de Ender",
        descricao: "Após a Terra quase ser destruída por uma raça alienígena conhecida como Formics, o governo militar recruta crianças prodígio para serem treinadas em uma avançada escola de combate no espaço. Ender Wiggin, um garoto tímido, mas estrategista brilhante, é selecionado para se tornar a esperança final da humanidade contra a ameaça alienígena.",
        classificacao: "12 anos",
        anoLancamento: 2013,
        cardCapa: "https://miro.medium.com/v2/resize:fit:300/0*Qc6ozkgCuGX3FtDS.jpg",
        video: "Ty18adoAI_E",
        logo: "https://images5.alphacoders.com/524/524209.jpg",
        poster: "https://br.web.img2.acsta.net/pictures/13/12/16/14/42/066012.jpg",
        fundo: "https://media.semprefamilia.com.br/semprefamilia/2015/08/enders-d1eeb90e.jpg",
    },
    {
        nome: "Minority Report",
        descricao: "Em Washington D.C., no ano de 2054, a polícia utiliza a tecnologia 'Pre-Crime', baseada em três videntes (Precogs), para prender assassinos antes que cometam o crime. O Chefe de Polícia John Anderton (Tom Cruise) tem sua fé no sistema abalada quando ele próprio é acusado de um assassinato futuro e precisa fugir para provar sua inocência.",
        classificacao: "14 anos",
        anoLancamento: 2002,
        cardCapa: "https://thesectorm.blog/wp-content/uploads/2013/10/minority-report-5150c09e8df97.jpg",
        video: "lG7DGMgfOb8",
        logo: "https://i.pathehome.com/product/fr/phf-bfywz1la7g/29d31c-minorityreport_tn_fr.png?w=3840&auto=format&crop=top%2Cleft&fit=fill&q=45",
        poster: "https://image.tmdb.org/t/p/original/ccqpHq5tk5W4ymbSbuoy4uYOxFI.jpg",
        fundo: "https://wallpaper.forfun.com/fetch/8d/8de840c596615be934e667c9b73d0af0.jpeg",
    },
    {
        nome: "O Quinto Elemento",
        descricao: "A cada 5.000 anos, o mal retorna para tentar destruir a Terra. No século XXIII, a única coisa que pode deter essa força maligna é o Quinto Elemento, que se manifesta na forma da jovem Leeloo. O taxista Korben Dallas (Bruce Willis) deve protegê-la e ajudá-la a reunir os quatro outros elementos para salvar o planeta.",
        classificacao: "12 anos",
        anoLancamento: 1997,
        cardCapa: "https://i.ytimg.com/vi/WMRp_-1Nt_A/maxresdefault.jpg",
        video: "9MfKVda6XDE",
        logo: "https://cdn.freebiesupply.com/logos/large/2x/the-fifth-element-logo-png-transparent.png",
        poster: "https://br.web.img2.acsta.net/pictures/14/02/07/20/09/270960.jpg",
        fundo: "https://images.adsttc.com/media/images/5359/6bea/c07a/8078/3a00/0004/large_jpg/07.jpg?1398369247",
    },
    {
        nome: "300",
        descricao: "Baseado na graphic novel de Frank Miller, este épico de ação narra a Batalha das Termópilas, onde o Rei Leônidas (Gerard Butler) e 300 guerreiros espartanos enfrentam o massivo exército persa de Xerxes. Uma luta pela paixão, coragem e liberdade que redefiniu o mundo.",
        classificacao: "16 anos",
        anoLancamento: 2006,
        cardCapa: "https://resenhandosonhos.com/wp-content/uploads/2014/03/300.jpg",
        video: "UrIbxk7idYA",
        logo: "https://upload.wikimedia.org/wikipedia/fr/2/27/300_%28film%29_Logo.png",
        poster: "https://img.elo7.com.br/product/zoom/264D655/big-poster-filme-300-lo001-tamanho-90x60-cm-presente-nerd.jpg",
        fundo: "https://cinepop.com.br/wp-content/uploads/2020/11/300-2.jpg",
    },
    {
        nome: "Kingsman: Serviço Secreto",
        descricao: "Gary 'Eggsy' Price, um jovem sem futuro, é recrutado por Harry Hart, um agente da supersecreta e independente organização de espionagem Kingsman. Eggsy passa por um rigoroso treinamento para se tornar um cavalheiro espião de elite e deve ajudar a impedir um gênio da tecnologia que ameaça a paz mundial.",
        classificacao: "12 anos",
        anoLancamento: 2015,
        cardCapa: "https://wallpapers.com/images/hd/kingsman-the-secret-service-poster-characters-a21c209kd6v28m1c.jpg",
        video: "ydox4Iy8pCY",
        logo: "https://image.tmdb.org/t/p/original/q9S9RXixczLY8POrtjhQ8TvZeIE.png",
        poster: "https://br.web.img3.acsta.net/pictures/15/01/08/15/02/290347.jpg",
        fundo: "https://cinemacomrapadura.com.br/imagens/2017/05/20170531-kingsman-servico-secreto-poster.jpg",
    },
    {
        "nome": "Sicario: Terra de Ninguém",
        "descricao": "Na crescente fronteira sem lei entre os Estados Unidos e o México, uma agente idealista do FBI (Emily Blunt) é exposta ao mundo brutal do tráfico internacional de drogas por membros de uma força-tarefa do governo (Josh Brolin, Benicio Del Toro) que a escalam em seu plano para derrotar o chefe de um cartel mexicano. A missão clandestina força a agente a questionar tudo o que ela acredita.",
        "classificacao": "16 Anos",
        "anoLancamento": 2015,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/ae6b31bca5fa9f138e0f84dcd6bbd12dee35df0e232425bfea58578b3edb1777.jpg",
        "video": "d_eClLFILT8",
        "logo": "https://i.ytimg.com/vi/d_eClLFILT8/mqdefault.jpg",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/e37433d77a7ae07f9d2c4d840b2a117db388030688e4aa57b3c204481d0791bc.jpg",
        "fundo": "https://i0.wp.com/cinegrandiose.com/wp-content/uploads/2016/02/Sicario-1.png?resize=960%2C540&ssl=1"
    },
    {
        "nome": "Fúria em Alto Mar (Under Siege)",
        "descricao": "Nas profundezas do Oceano Ártico, um submarino norte-americano está em perigo enquanto um golpe secreto ameaça a Rússia. O Comandante Joe Glass (Gerard Butler) deve liderar uma delicada missão para resgatar o presidente russo capturado e se unir a um grupo de elite da Marinha para impedir que uma Terceira Guerra Mundial se inicie.",
        "classificacao": "14 Anos",
        "anoLancamento": 2018,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/c96c5272139f75368bfc63eff746c7c4d83cdca83e2e768adeee9af908621e7a.png",
        "video": "N_Iw-s3wewY",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79LOxW84uB8tSuYnjDbGKwprMna080t-5KA&s",
        "poster": "https://br.web.img2.acsta.net/pictures/18/10/24/14/03/1874371.jpg",
        "fundo": "https://cineset.com.br/wp-content/uploads/2018/11/F%C3%BAria-em-Alto-Mar.jpg"
    },
    {
        "nome": "Velocidade Máxima (Speed)",
        "descricao": "Em Los Angeles, o psicopata Howard Payne (Dennis Hopper) coloca uma bomba em um ônibus, que explodirá caso a velocidade do veículo caia para menos de 80 km/h. O policial Jack Traven (Keanu Reeves) entra no ônibus em movimento e, com a ajuda de uma passageira (Sandra Bullock) que toma o volante, tenta evacuar os passageiros e impedir o desastre.",
        "classificacao": "14 Anos",
        "anoLancamento": 1994,
        "cardCapa": "https://i.ytimg.com/vi/d-wE4WuaG8Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDc3uojb98TXh2LzmnL9eMUphygg",
        "video": "d-wE4WuaG8Q",
        "logo": "https://image.tmdb.org/t/p/original/zmlGXa0DSA4nWLQQcNoFKbNhLZp.png",
        "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z-JviYDx1yTXN8AedgcUi-LLR_3fD3CCnQ&s",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/cca1b401c61db93aac4a4d901c961d169ec4f7db6dfd42ee230b5fd0fea6d6a0.jpg"
    },
    {
        "nome": "A Cor Púrpura",
        "descricao": "Versão musical do clássico de Steven Spielberg. A história acompanha Celie, uma sulista negra que luta para achar sua identidade e voz após sofrer abusos e violência de seu pai e marido durante quase quatro décadas no começo do século XX, encontrando força e comunidade com outras mulheres.",
        "classificacao": "14 Anos",
        "anoLancamento": 2023,
        "cardCapa": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0bbe998a-23b8-49a2-9729-976d53af74be/44dd10642aa9700a14d6fc70ce6d31bcc6753954.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        "video": "QySqnpU_Qlw",
        "logo": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0bbe998a-23b8-49a2-9729-976d53af74be/b2f440a96c0e66d27596d2bf5848d9d5b70178a1.png?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320",
        "poster": "https://cinemateca.org.br/wp-content/uploads/2024/08/cbs_a_cor_purpura_2023-scaled.jpg",
        "fundo": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2024/02/a-cor-purpura.jpg?quality=70&strip=info&w=1024"
    },
    {
        "nome": "O Menino do Pijama Listrado",
        "descricao": "Durante a Segunda Guerra Mundial, o inocente e ingênuo Bruno, um menino alemão de oito anos e filho de um oficial nazista de um campo de concentração, ignora as orientações de sua família e faz amizade com Shmuel, um garoto judeu da mesma idade que vive do outro lado da cerca. Uma história inesquecível sobre o poder do espírito humano em tempos de guerra.",
        "classificacao": "12 Anos",
        "anoLancamento": 2008,
        "cardCapa": "https://i.ytimg.com/vi/9U4NDpUw8dA/maxresdefault.jpg",
        "video": "FaWRN5zg0z8",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWdbUVn16bZXbqz-B-BCjJN9PVpLwEL4XjQ&s",
        "poster": "https://m.media-amazon.com/images/M/MV5BNWVlZDc3ODAtZWVjNi00MWI2LWIyZTktMmRkMWI1ZWM5YzczXkEyXkFqcGc@._V1_.jpg",
        "fundo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYdvOCNVzWx2cX9UaICZyvWdcSIvwH0aTTee9tEruws-SYxiLV1vvB3foJV8bUF0ItwAwu5xxri4hQuPjuWA5qBvn3EprTHYdsyKzeQBy6xOqdbVvbHRPG9HwJUrtoRwTAADHftaKvrYA/s1600/filme-o-menino-do-pijama-2.jpg"
    },
    {
        "nome": "Lion: Uma Jornada para Casa",
        "descricao": "Baseado em uma história real. Aos cinco anos, o indiano Saroo se perde de sua família em uma estação de trem e, após sobreviver sozinho nas ruas de Calcutá, é adotado por uma família australiana. Vinte e cinco anos depois, ele parte em uma jornada emocionante para reencontrar sua família biológica na Índia, usando apenas suas vagas memórias de infância e a tecnologia do Google Earth.",
        "classificacao": "12 Anos",
        "anoLancamento": 2016,
        "cardCapa": "https://escotilha.com.br/wp-content/uploads/2017/02/filme-lion-uma-jornada-para-casa-garth-davis-resenha-critica.jpeg",
        "video": "z2vGITYjPB8",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxZ7BSuf1LYB9JNNEA5PGaACW-erJKUGmNQ&s",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/65f032ebf88cf27713299506fdbcabdffc06a2fdf04ed269b5ceb72c2610e23b.jpg",
        "fundo": "https://escotilha.com.br/wp-content/uploads/2017/02/filme-lion-uma-jornada-para-casa-garth-davis-resenha-critica.jpeg"
    },
    {
        "nome": "A Teoria de Tudo",
        "descricao": "Cinebiografia do brilhante astrofísico Stephen Hawking (Eddie Redmayne), o filme acompanha sua juventude em Cambridge, seu romance com Jane Wilde (Felicity Jones) e a descoberta de sua grave doença motora degenerativa (ELA) aos 21 anos. Mesmo diante da adversidade, Stephen se torna um dos maiores cientistas do mundo.",
        "classificacao": "10 Anos",
        "anoLancamento": 2014,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/9200e6a441761b0b48468ae8b033b53b781e0bec50e2514f9776a6e615e9daa7.jpg",
        "video": "SbUVNHdPE4w",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHvFPCRBmtb_5VJ40m4aqCetQi7uvEqYo7Q&s",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/666b3fbe3b0e1cd721a053a7e16024931ce45b690391f779e29893756db7d2ec.jpg",
        "fundo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBodG5NGSN2Z8wk_xHEdHJoPMijVcTny77wQ&s"
    },
    {
        "nome": "O Pianista",
        "descricao": "Baseado em fatos reais, o filme acompanha Władysław Szpilman (Adrien Brody), um renomado pianista judeu polonês que lutava para sobreviver à perseguição nazista em Varsóvia durante a Segunda Guerra Mundial, buscando refúgio em prédios abandonados enquanto a cidade era destruída.",
        "classificacao": "14 Anos",
        "anoLancamento": 2002,
        "cardCapa": "https://devaneiosfilosoficos.com/wp-content/uploads/2017/12/21767939_1946946365564553_2186781136908674492_n.jpg",
        "video": "94kEZnTqjPQ",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_el_pianista.png",
        "poster": "https://image.tmdb.org/t/p/original/zgtCY3VshbIv3UfNkdvVEShGmlE.jpg",
        "fundo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbgvK8S3Pt0-1AnJ49a-jWtCMah00Vze7Qgj8NtCRGTYI96mSNzOEYesxTkLvnbW4BE2tbujwO853K9mPlnxovoQiO-rDCOHUYv9eb4v3X50pUcggzkwBWQHpyhja9mIOyQKarhenpU/s1600/o-pianista-piano.jpg"
    },
    {
        "nome": "Prenda-me Se For Capaz",
        "descricao": "Baseado em uma história real. Frank Abagnale Jr. (Leonardo DiCaprio) se torna um dos maiores falsificadores e impostores da história, enganando as pessoas e acumulando milhões de dólares ao se passar por piloto, médico e advogado. Em seu encalço está Carl Hanratty (Tom Hanks), um obstinado agente do FBI que está determinado a capturá-lo.",
        "classificacao": "14 Anos",
        "anoLancamento": 2002,
        "cardCapa": "https://www.imparcial.com.br/share/assets/images/galeria/1686079491.jpg?v=13012021",
        "video": "ebBIxkbUHHk",
        "logo": "https://image.tmdb.org/t/p/original/sZHiWAcHjEPEPuyjZna68FKipwn.png",
        "poster": "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/63/54/30/18693966.jpg",
        "fundo": "https://i0.wp.com/cinegrandiose.com/wp-content/uploads/Catch-Me-1.png?fit=960%2C540&ssl=1"
    },
    {
        "nome": "O Segredo dos Seus Olhos",
        "descricao": "Após se aposentar, o ex-oficial de justiça Benjamín Espósito decide escrever um livro sobre um caso de estupro e assassinato de uma jovem de 1974 que o assombrou por 25 anos. Ao reviver o passado, ele confronta seus traumas e o intenso romance não concretizado que teve com sua antiga chefe.",
        "classificacao": "16 Anos",
        "anoLancamento": 2009,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/c0389e5a972ddf0b8702749f6f8ef2b3d0be8184c473edf7851bb55c0a8fbe39.jpg",
        "video": "dY-WjN5n2Pc",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Secret_in_Their_Eyes_logo.svg/2560px-Secret_in-Their-Eyes-logo.svg.png",
        "poster": "https://upload.wikimedia.org/wikipedia/en/9/91/Cartel-nuevo-de-el-secreto-de-sus-ojos.jpg",
        "fundo": "https://m.media-amazon.com/images/S/pv-target-images/c8581f3b1ea676e02b5ea43784cfc75428c623dd91c33b837ebbe493ac50ca2d.jpg"
    },
    {
        nome: "O Chamado (The Ring)",
        descricao: "Após a morte de um parente, a repórter Reiko Asakawa investiga um vídeo amaldiçoado que mata quem o assiste em exatamente sete dias. Intrigada, ela acaba assistindo à fita com seu filho, e agora precisa descobrir um meio de impedir que a profecia de Sadako se realize.",
        classificacao: "14 anos",
        anoLancamento: 2002,
        cardCapa: "https://i.pinimg.com/1200x/f6/6e/39/f66e394a7f902cb8338271cce5745976.jpg",
        video: "yybjV3U68wc",
        logo: "https://wwwimage-us.pplusstatic.com/base/files/movie_asset/15/33/0/asset_0bd04454-e602-4701-8fb9-b5c9ca997599.png?format=webp",
        poster: "https://www.capitolio.org.br/wp-content/uploads/2023/01/O-Chamado-1.jpg",
        fundo: "https://i.pinimg.com/1200x/85/ae/de/85aede5e32ff946516376235eaa6157a.jpg",
    },
    {
        nome: "O Iluminado (The Shining)",
        descricao: "Um aspirante a escritor arruma um emprego como zelador em um hotel isolado, onde ficará com sua esposa e filho durante o inverno. O isolamento começa a lhe causar graves problemas mentais, tornando-o cada vez mais agressivo, enquanto seu filho tem visões aterrorizantes de acontecimentos passados do hotel.",
        classificacao: "14 anos",
        anoLancamento: 1980,
        cardCapa: "https://i.pinimg.com/736x/62/fe/ed/62feed04a9fbad113fbbd0f535657db6.jpg",
        video: "dSQ3yN5yJ0g",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Shining_movie_logo.png/1200px-The_Shining_movie_logo.png",
        poster: "https://i.pinimg.com/736x/78/06/d2/7806d2f2d523fb790ba49f45e72a2502.jpg",
        fundo: "https://i.pinimg.com/1200x/c5/d5/8c/c5d58c96cd6c02149b0a7d468a3eb2fb.jpg",
    },
    {
        nome: "Corrente do Mal (It Follows)",
        descricao: "A jovem Jay é contaminada por uma força sobrenatural após um encontro sexual. Ela passa a ser seguida por uma entidade que assume a forma de pessoas e caminha lentamente em sua direção, precisando passar a 'maldição' adiante para sobreviver.",
        classificacao: "14 anos",
        anoLancamento: 2014,
        cardCapa: "https://coolturalblog.wordpress.com/wp-content/uploads/2015/08/a-corrente-do-mal.jpg",
        video: "HkZYbOH0ujw",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/It_Follows_Title.png",
        poster: "https://i.pinimg.com/736x/c1/6d/04/c16d049d8eba707817abea3be2a48eac.jpg",
        fundo: "https://i.pinimg.com/736x/5b/01/78/5b017854e0be70b2ac27ebc3c7054508.jpg",
    },
    {
        nome: "A Entidade (Sinister)",
        descricao: "Um escritor de romances policiais se muda com a família para uma casa onde ocorreu um assassinato. No sótão, ele descobre rolos de filme que mostram assassinatos de outras famílias, revelando a existência de algo sobrenatural e perigoso naquele lugar.",
        classificacao: "12 anos",
        anoLancamento: 2012,
        cardCapa: "https://m.media-amazon.com/images/S/pv-target-images/cfe2def8633600abbf0d14d0283277933090591d5ba6039e8ee3d39a515f11dd.jpg",
        video: "yv9oGgGDBQE",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sinister_Movie_Logo.svg",
        poster: "https://i.pinimg.com/736x/b9/9b/01/b99b019520b27daf96ff8df45b595c66.jpg",
        fundo: "https://i.pinimg.com/736x/6e/8d/e6/6e8de69d59d2206a5a8efe6dc0b202b4.jpg",
    },
    {
        nome: "A Vila (The Village)",
        descricao: "Os moradores de uma isolada vila do século XIX vivem sob um acordo de trégua frágil com as misteriosas criaturas que habitam a floresta circundante. Quando o amor de um jovem coloca uma vida em perigo, ele decide enfrentar o desconhecido, e verdades chocantes sobre a comunidade vêm à tona.",
        classificacao: "14 anos",
        anoLancamento: 2004,
        cardCapa: "https://screamyell.com.br/site/wp-content/uploads/2017/03/avila-750x440.jpg",
        video: "PYKUkrqAjl0",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/The_Village_title.png",
        poster: "https://i.pinimg.com/736x/fe/f5/23/fef5239141353f67ea3897f96804f70e.jpg",
        fundo: "https://i.pinimg.com/736x/4a/93/fc/4a93fcc27cb619969681610ab1f75d5a.jpg",
    },
    {
        nome: "A Noite dos Mortos-Vivos (1968)",
        descricao: "Um grupo de sobreviventes se isola em uma casa de fazenda na Pensilvânia, tentando se defender dos ataques de uma horda crescente de zumbis canibais que voltaram à vida. Um marco do terror dirigido por George A. Romero.",
        classificacao: "16 anos",
        anoLancamento: 1968,
        cardCapa: "https://i.pinimg.com/1200x/02/e4/ab/02e4abe83c44b1eb27062ee26419793e.jpg",
        video: "zzpBj_nvd9o",
        logo: "https://images.seeklogo.com/logo-png/54/2/night-of-the-living-dead-logo-png_seeklogo-547424.png",
        poster: "https://i.pinimg.com/736x/95/d0/2f/95d02f655f394cc581ab446221f202f5.jpg",
        fundo: "https://i.pinimg.com/1200x/0d/f5/37/0df53799b2937af4f631e854f271f6fa.jpg",
    },
    {
        nome: "The Sopranos (Família Soprano)",
        descricao: "O chefe da máfia ítalo-americana Tony Soprano lida com os conflitos de sua família biológica e sua 'família' do crime, enquanto secretamente busca ajuda psicológica para seus ataques de pânico, enfrentando crises existenciais, investigações federais e a ameaça de traição interna.",
        classificacao: "18 anos",
        anoLancamento: 1999,
        cardCapa: "https://i.pinimg.com/1200x/7f/ae/78/7fae78a52b08eb9d7495b057001358ce.jpg",
        video: "KMx4iFcozK0",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/The_Sopranos_promotional_logo.svg/2560px-The_Sopranos_promotional_logo.svg.png",
        poster: "https://i.pinimg.com/1200x/08/3c/11/083c11f1e15f8c99acdfb39f494c8d88.jpg",
        fundo: "https://i.pinimg.com/736x/41/90/8d/41908dd4053aa3e9c35e61c936d01bc9.jpg",
    },
    {
        nome: "Succession",
        descricao: "A série acompanha a disfuncional família Roy, dona de um dos maiores impérios midiáticos e de entretenimento do mundo. Com a saúde do patriarca Logan Roy em declínio, seus quatro filhos adultos competem de forma implacável e conspiram para obter o controle da empresa em um jogo de poder.",
        classificacao: "16 anos",
        anoLancamento: 2018,
        cardCapa: "https://boomerangmusic.com.br/wp-content/uploads/2023/03/mini-KA-SUCCESSION_FINAL-SEASON-16x9-BRA_COBRANDED_LAUNCH.jpg",
        video: "OzYxJV_rmE8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Succession-logo.png",
        poster: "https://i.pinimg.com/1200x/c7/b4/19/c7b4194ae4a97b97151d44f0fd35fc12.jpg",
        fundo: "https://i.pinimg.com/736x/80/16/07/8016071cebb239da22a72b666b7d9049.jpg",
    },
    {
        nome: "Fargo (Série)",
        descricao: "Série de antologia inspirada no filme dos Irmãos Coen, onde cada temporada apresenta um novo elenco e uma nova história ambientada em diferentes épocas e cidades do meio-oeste americano, sempre envolvendo crimes, violência e o elemento de humor negro característico.",
        classificacao: "16 anos",
        anoLancamento: 2014,
        cardCapa: "https://i.ytimg.com/vi/U7XKKOTuJGE/maxresdefault.jpg",
        video: "ju75Sd4yAZw",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fargo_%28TV_logo%29.png",
        poster: "https://i.pinimg.com/736x/fe/99/08/fe9908a1a0414594a5781d219d8097ea.jpg",
        fundo: "https://i.pinimg.com/736x/d3/c9/7b/d3c97b4b9c423f39c59e44de114ec9fd.jpg",
    },
    {
        nome: "The Good Place",
        descricao: "Eleanor Shellstrop acorda na vida após a morte e é enviada para o 'Bom Lugar', uma utopia celestial. No entanto, ela rapidamente percebe que houve um erro e não pertence àquele local, e agora precisa esconder a verdade e aprender a ser uma boa pessoa para evitar ser enviada para o 'Lugar Ruim'.",
        classificacao: "14 anos",
        anoLancamento: 2016,
        cardCapa: "https://i.ytimg.com/vi/22PDaEUC120/sddefault.jpg",
        video: "22PDaEUC120",
        logo: "https://static.wikia.nocookie.net/fictionalcrossover/images/6/6d/Good_Place_logo.png/revision/latest?cb=20200225164253",
        poster: "https://i.pinimg.com/1200x/3a/e6/b4/3ae6b45677fbbdf2e78d6db9508c7727.jpg",
        fundo: "https://i.pinimg.com/1200x/7b/19/08/7b19082872594a29c7eb2a14b5a8602f.jpg",
    },
    {
        nome: "Fleabag",
        descricao: "Uma jovem mulher vivendo em Londres, Fleabag é direta e sem filtros, tentando se curar de uma dor profunda enquanto rejeita a ajuda de todos ao seu redor. A série de comédia dramática, aclamada pela crítica, quebra constantemente a quarta parede enquanto a protagonista lida com problemas de relacionamento, frustração profissional e conflitos familiares em meio ao luto pela perda de sua melhor amiga.",
        classificacao: "16 Anos",
        anoLancamento: 2016,
        cardCapa: "https://i.pinimg.com/736x/85/f9/3f/85f93f86ee729472778942b9176f4a90.jpg",
        video: "aX2ViKQFL_k",
        logo: "https://image.tmdb.org/t/p/original/5Tq9X4JF4U5wM75TrewcEAnIz7q.png",
        poster: "https://i.pinimg.com/1200x/ac/fe/62/acfe62a0a327ca64788dac58d7dca2ea.jpg",
        fundo: "https://i.pinimg.com/1200x/5c/21/45/5c21458e1c420d793e963fe04fad4be5.jpg",
    },
    {
        nome: "Yellowstone",
        descricao: "Ambientada nas paisagens rurais de Montana, a série dramática acompanha a família Dutton, liderada por John Dutton, proprietário do maior rancho dos Estados Unidos. Eles enfrentam constantes conflitos e invasões em suas terras, batendo de frente com especuladores imobiliários, uma reserva indígena e o primeiro Parque Nacional do país. A trama explora a moral ambígua, traição e violência na luta pela preservação de um legado.",
        classificacao: "18 Anos",
        anoLancamento: 2018,
        cardCapa: "https://http2.mlstatic.com/D_NQ_NP_799383-MLA87887599841_072025-B.webp",
        video: "pRrkYXQUJaE",
        logo: "https://logos-world.net/wp-content/uploads/2023/02/Yellowstone-Logo.png",
        poster: "https://i.pinimg.com/736x/97/f6/4b/97f64b85da0600d7bfe279cc54096388.jpg",
        fundo: "https://i.pinimg.com/736x/6d/74/bb/6d74bb77f53430670a2079aaa42b4c06.jpg",
    },
    {
        nome: "Severance",
        descricao: "Na misteriosa Lumon Industries, os funcionários passam pelo procedimento de 'ruptura', que divide suas memórias entre a vida profissional ('innie') e pessoal ('outie'). Ao sair do escritório, eles não se lembram de nada do trabalho e vice-versa. Mark, um dos empregados, começa a desvendar uma conspiração que o força a questionar a verdadeira natureza de seu emprego e sua própria identidade.",
        classificacao: "16 Anos",
        anoLancamento: 2022,
        cardCapa: "https://snworksceo.imgix.net/ttd/8fc59bc8-eb5d-401b-9da6-3ad5bd34cebf.sized-1000x1000.png?w=1000&dpr=2",
        video: "xEQP4VVuyrY",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Severance_logo.svg/1024px-Severance_logo.svg.png",
        poster: "https://i.pinimg.com/736x/ca/a2/44/caa2447537e0e1653448986635de0d9b.jpg",
        fundo: "https://i.pinimg.com/736x/97/91/fb/9791fba3ba90591f46d4f9666a931626.jpg",
    },
    {
        nome: "Only Murders in the Building",
        descricao: "Três vizinhos de Nova York - Charles, Oliver e Mabel - que compartilham uma obsessão por podcasts de true crime, se veem envolvidos em seu próprio mistério quando uma morte macabra ocorre no prédio luxuoso onde moram, o Arconia. O trio decide aplicar seus conhecimentos de investigação criminal e inicia sua própria apuração, gravando um podcast sobre o caso em tempo real.",
        classificacao: "14 Anos",
        anoLancamento: 2021,
        cardCapa: "https://bmcnews.com.br/wp-content/uploads/2024/10/scale-3.webp",
        video: "bL15iO-YC3A",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Only_Murders_in_the_Building_%2820th_Television%29_logo_%283%29.svg",
        poster: "https://i.pinimg.com/1200x/52/90/9a/52909a342dd2aa0809fa49411f9a6e78.jpg",
        fundo: "https://i.pinimg.com/1200x/fe/97/11/fe9711b91b6db4b1f6955c9e176a0366.jpg",
    },
    {
        nome: "Monster High",
        descricao: "A série de animação acompanha os filhos e filhas dos monstros mais famosos do mundo, como Frankie Stein (filha de Frankenstein), Draculaura (filha do Drácula) e Clawdeen Wolf (filha do Lobisomem), enquanto eles frequentam o colégio Monster High. O grupo navega pelos desafios, aulas incomuns e aventuras hilárias do ensino médio, aprendendo sobre amizade, aceitação e a importância de ser fiel a si mesmo.",
        classificacao: "Livre",
        anoLancamento: 2022,
        cardCapa: "https://i.pinimg.com/1200x/2f/5f/28/2f5f283054e67352bd2c0da0477973fa.jpg",
        video: "zRRT8QU2UBQ",
        logo: "https://logos-world.net/wp-content/uploads/2023/01/Monster-High-Logo.png",
        poster: "https://i.pinimg.com/736x/fc/49/86/fc498600b39767d07e31860926cab75d.jpg",
        fundo: "https://img.elo7.com.br/product/zoom/FACC6A/painel-monster-high-g-frete-gratis-decoracao-de-festa.jpg",
    },
    {
        "nome": "Mindhunter",
        "descricao": "Ambientada em 1977, a série acompanha os agentes do FBI, Holden Ford e Bill Tench, nos primórdios da psicologia criminal e do perfil de serial killers. Eles entrevistam assassinos em série presos para tentar entender como eles pensam e aplicar esse conhecimento na resolução de casos em andamento.",
        "classificacao": "16 Anos",
        "anoLancamento": 2017,
        "cardCapa": "https://i.pinimg.com/1200x/76/08/6a/76086a76f5ad1eefa34077c8ca88576d.jpg",
        "video": "J4LWdJHJxbs",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/3/30/Mindhunter_Logo.svg",
        "poster": "https://i.pinimg.com/736x/de/ab/24/deab2416998776e5fb591b1bf564698d.jpg",
        "fundo": "https://i.pinimg.com/1200x/fb/fc/c2/fbfcc2b1aef2effa0aa7aea31cde3dac.jpg"
    },
    {
        "nome": "Big Little Lies",
        "descricao": "Três mães (Madeline, Celeste e Jane) com vidas aparentemente perfeitas em uma cidade rica da Califórnia veem suas vidas abaladas quando um misterioso assassinato acontece na escola de seus filhos. Juntas, elas tentam desvendar o que houve, enquanto seus próprios segredos e a violência doméstica vêm à tona.",
        "classificacao": "16 Anos",
        "anoLancamento": 2017,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/6b084e9d279cd06f3eafd2b35187ae17baf20fa8aaa0793ae53658d1196ce78a.jpg",
        "video": "8XgMvMpvCFI",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Big_Little_Lies_Logo_%28cropped%29.png",
        "poster": "https://i.pinimg.com/1200x/3c/b2/eb/3cb2eb7b4f1f2e880edf65c2e931b3f0.jpg",
        "fundo": "https://i.pinimg.com/1200x/fa/ec/45/faec4552bf01d3324a7a008668c5bb73.jpg"
    },
    {
        "nome": "The Umbrella Academy",
        "descricao": "Sete crianças, nascidas simultaneamente e de forma misteriosa, são adotadas pelo excêntrico bilionário Sir Reginald Hargreeves e treinadas para serem super-heróis. Anos depois, os irmãos disfuncionais se reúnem para o funeral do pai, mas a volta de um deles do futuro revela que um apocalipse global é iminente.",
        "classificacao": "16 Anos",
        "anoLancamento": 2019,
        "cardCapa": "https://i.pinimg.com/1200x/2b/fa/78/2bfa784610d6229ffe68c67dc8cb775f.jpg",
        "video": "5_4SW8HHfUs",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/The_Umbrella_Academy_logo.svg",
        "poster": "https://i.pinimg.com/1200x/e9/4e/fd/e94efdf59e7096c3e761800bc8725dbf.jpg",
        "fundo": "https://i.pinimg.com/1200x/7f/19/bf/7f19bfb90091711c1235703deb95be01.jpg"
    },
    {
        "nome": "Homeland",
        "descricao": "A oficial de operações da CIA, Carrie Mathison, que sofre de transtorno bipolar, acredita que o sargento Nicholas Brody, resgatado após 8 anos como prisioneiro no Afeganistão, foi aliciado pela Al-Qaeda e está preparando um ataque terrorista nos EUA. Ela inicia uma obsessiva e controversa investigação.",
        "classificacao": "16 Anos",
        "anoLancamento": 2011,
        "cardCapa": "https://ntvb.tmsimg.com/assets/p17402060_b_h8_ab.jpg?w=960&h=540",
        "video": "KyFmS3wRPCQ",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/82/Homeland_Logo_frameless_2014-04-06_23-44.png",
        "poster": "https://i.pinimg.com/1200x/1d/66/66/1d6666e28aa0a71f9013f06e05fab189.jpg",
        "fundo": "https://i.pinimg.com/736x/01/ef/6c/01ef6c5877f6c10327804d9777a90c2a.jpg"
    },
    {
        "nome": "Oz (Série HBO)",
        "descricao": "A série retrata o cotidiano brutal e realista da Penitenciária Estadual Oswald, focando na Emerald City, uma unidade experimental. Detentos de diferentes gangues e grupos étnicos lutam por poder e sobrevivência em um ambiente de extrema violência, drogas e constantes conflitos.",
        "classificacao": "18 Anos",
        "anoLancamento": 1997,
        "cardCapa": "https://veja.abril.com.br/wp-content/uploads/2016/11/oz004.jpg?crop=1&resize=1212,909",
        "video": "h9_7kF-ctEo",
        "logo": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/b8e4e09b-a10b-4b6d-9e85-40efbe3fa81c/79c2bb70b4e5709e80629447e12e72c954ae894d.png?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320",
        "poster": "https://i.pinimg.com/736x/92/6f/7c/926f7c46140f2c29db7dd5f1480e9b62.jpg",
        "fundo": "https://i.pinimg.com/1200x/f1/01/89/f10189399ba97850d592dcde4321084b.jpg"
    },
    {
        "nome": "Billions",
        "descricao": "Um drama sobre as políticas de poder e o mundo da alta finança em Nova York, onde o Procurador de Justiça Chuck Rhodes trava um perigoso jogo de gato e rato com o brilhante e ambicioso magnata de fundos de investimento Bobby “Axe” Axelrod.",
        "classificacao": "16 Anos",
        "anoLancamento": 2016,
        "cardCapa": "https://m.media-amazon.com/images/S/pv-target-images/2732a483550b5b68f28f75c84b657c4768923db21f48417befa3100accf1063d.jpg",
        "video": "2dEmMUrQadc",
        "logo": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/4f03a242-5dfe-4c85-8752-556210162769/076b65ae-2f2e-4092-a302-a962dff65925?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320",
        "poster": "https://i.pinimg.com/736x/4e/84/e0/4e84e0b06560d0ec1c1af82bce5e54eb.jpg",
        "fundo": "https://i.pinimg.com/736x/a9/5b/40/a95b403643706a639e56bbcb0fbde734.jpg"
    },
    {
        "nome": "The Handmaid's Tale",
        "descricao": "Em um futuro distópico, com a taxa de natalidade em queda, um governo teocrático e totalitário (República de Gilead) assume o poder. June Osborne (Offred) é forçada a ser uma 'Aia' — uma incubadora humana — lutando para sobreviver e se reencontrar com sua família.",
        "classificacao": "16 Anos",
        "anoLancamento": 2017,
        "cardCapa": "https://i.pinimg.com/1200x/b2/9b/57/b29b575a6f9c66954887ee9e4f48646a.jpg",
        "video": "aDqxFl7LTxU",
        "logo": "https://upload.wikimedia.org/wikipedia/pt/1/1e/The-handmaids-tale-logo.png",
        "poster": "https://i.pinimg.com/736x/ac/ee/6e/acee6ea62a0ce3dd0f85ad09e46e2d39.jpg",
        "fundo": "https://i.pinimg.com/1200x/ed/78/3c/ed783c2560c16270435c890f8a9ad918.jpg"
    },
    {
        "nome": "The Mandalorian",
        "descricao": "Ambientada cinco anos após a queda do Império, a série acompanha um pistoleiro solitário e caçador de recompensas mandaloriano nos confins da galáxia. Ele aceita uma missão que o força a proteger 'A Criança' (Grogu), fugindo das forças imperiais remanescentes.",
        "classificacao": "14 Anos",
        "anoLancamento": 2019,
        "cardCapa": "https://cafecomnerd.com.br/wp-content/uploads/2019/10/mandalorian-disney-revela-poster.jpg",
        "video": "aOC8E8z_ifw",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Mandalorian.svg/1200px-The_Mandalorian.svg.png",
        "poster": "https://i.pinimg.com/736x/8b/09/a9/8b09a912c238b1a58bb378c4affae32a.jpg",
        "fundo": "https://i.pinimg.com/1200x/9d/e7/f0/9de7f0eb49d25c5f68d7384c5c80a149.jpg"
    },
    {
        "nome": "Reservation Dogs",
        "descricao": "Uma série de comédia e drama que acompanha quatro adolescentes indígenas na zona rural do Oklahoma. Eles cometem pequenos crimes para juntar dinheiro e realizar seu sonho de deixar sua comunidade e viajar para a Califórnia.",
        "classificacao": "16 Anos",
        "anoLancamento": 2021,
        "cardCapa": "https://www.colorado.edu/honors/sites/default/files/styles/large_image_style/public/article-image/reservationdogs.jpg?itok=XeYf0gPW",
        "video": "POkrsNVkGNk",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Reservoir_Dogs_Logo.png",
        "poster": "https://i.pinimg.com/736x/d2/f7/3a/d2f73aba3826f45c704aa1167f74696d.jpg",
        "fundo": "https://i.pinimg.com/1200x/d5/b7/98/d5b798f4e799e672b64a0197d98da401.jpg"
    },
    {
        "nome": "Better Call Saul",
        "descricao": "Série derivada de 'Breaking Bad', é ambientada seis anos antes de Jimmy McGill se tornar o inescrupuloso advogado Saul Goodman. Acompanha a transformação de Jimmy, um advogado de pequenas causas em busca do próprio destino, que acaba se envolvendo com o mundo do crime.",
        "classificacao": "16 Anos",
        "anoLancamento": 2015,
        "cardCapa": "https://img.odcdn.com.br/wp-content/uploads/2022/06/better-call-saul-cardiaco.jpg",
        "video": "FAdiEjeNRi0",
        "logo": "https://upload.wikimedia.org/wikipedia/pt/8/8a/Better_Call_Saul_logo.svg",
        "poster": "https://i.pinimg.com/1200x/ab/ec/88/abec885412a6a7ad18eddc1a2d4e3b1e.jpg",
        "fundo": "https://i.pinimg.com/1200x/6d/72/92/6d7292601848ac43bc9e1fb9b7701b62.jpg"
    },
    {
        "nome": "Dexter",
        "descricao": "Dexter Morgan é um técnico forense da polícia de Miami que leva uma vida dupla: ele é um serial killer que segue um código, criado por seu pai adotivo, para matar apenas outros assassinos que escaparam da justiça, tornando-se um vigilante sombrio.",
        "classificacao": "18 Anos",
        "anoLancamento": 2006,
        "cardCapa": "https://focus.telerama.fr/664x442/60/2021/03/31/cbac0f70-0a29-4847-b5a9-a665e8ea77bf.jpg",
        "video": "YQeUmSD1c3g",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dexter_Logo.svg/1352px-Dexter_Logo.svg.png",
        "poster": "https://i.pinimg.com/1200x/2f/c4/3a/2fc43afcbab73ff92c3e1b59c974b4b0.jpg",
        "fundo": "https://thumbnails.cbsig.net/_x/w400/CBS_Production_Entertainment_VMS/2019/11/09/1638859843719/Dexter_101_16x9_529417_1920x1080.jpg"
    }
 
];

// ----------------------------------------------------------------------
// 2. FUNÇÃO DE EXECUÇÃO (APENAS FILMES NOVOS)
// ----------------------------------------------------------------------

export async function seedStreamDB(prisma) {
    const client = prisma || new PrismaClient();
    const shouldDisconnect = !prisma;

    console.log(`Iniciando o Seeding de ${filmesNovos.length} novos filmes...`);

    // carregar gêneros existentes para vincular por nome
    const generos = await client.genero.findMany();
    const normalize = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9 ]+/g, '').trim();
    const generoMap = {};
    generos.forEach(g => generoMap[normalize(g.nome)] = g.id);

    // OVERRIDES: coloque aqui mapeamentos manuais caso queira garantir elenco ou genero específico
    // Chave: slug (nome normalizado). Exemplo: 'your_name'
    const ELENCO_OVERRIDES = {
'Harry Potter e a Pedra Filosofal': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e a Câmara Secreta': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e o Prisioneiro de Azkaban': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e o Cálice de Fogo': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e a Ordem da Fênix': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e o Enigma do Príncipe': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e as Relíquias da Morte: Parte 1': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'Harry Potter e as Relíquias da Morte: Parte 2': 'Daniel Radcliffe, Rupert Grint, Emma Watson',

'O Vingador do Futuro (Total Recall - 1990)': 'Arnold Schwarzenegger, Sharon Stone, Rachel Ticotin',

'Star Trek (2009)': 'Chris Pine, Zachary Quinto, Leonard Nimoy',

'O Jogo de Ender': 'Asa Butterfield, Harrison Ford, Hailee Steinfeld',

'Minority Report': 'Tom Cruise, Colin Farrell, Samantha Morton',

'O Quinto Elemento': 'Bruce Willis, Gary Oldman, Milla Jovovich',

'300': 'Gerard Butler, Lena Headey, David Wenham',

'Kingsman: Serviço Secreto': 'Colin Firth, Taron Egerton, Samuel L. Jackson',

'Sicario: Terra de Ninguém': 'Emily Blunt, Benicio del Toro, Josh Brolin',

'Fúria em Alto Mar (Under Siege)': 'Steven Seagal, Tommy Lee Jones, Gary Busey',

'Velocidade Máxima (Speed)': 'Keanu Reeves, Dennis Hopper, Sandra Bullock',

'A Cor Púrpura': 'Whoopi Goldberg, Oprah Winfrey, Danny Glover',

'O Menino do Pijama Listrado': 'Asa Butterfield, Jack Scanlon, David Thewlis',

'Lion: Uma Jornada para Casa': 'Dev Patel, Nicole Kidman, Rooney Mara',

'A Teoria de Tudo': 'Eddie Redmayne, Felicity Jones, Charlie Cox',

'O Pianista': 'Adrien Brody, Thomas Kretschmann, Frank Finlay',

'Prenda-me Se For Capaz': 'Leonardo DiCaprio, Tom Hanks, Christopher Walken',

'O Segredo dos Seus Olhos': 'Ricardo Darín, Soledad Villamil, Guillermo Francella',

'Uma Mente Brilhante': 'Russell Crowe, Ed Harris, Jennifer Connelly',

'Na Natureza Selvagem': 'Emile Hirsch, Marcia Gay Harden, William Hurt',

'O Artista': 'Jean Dujardin, Bérénice Bejo, John Goodman',

'Seven: Os Sete Crimes Capitais': 'Brad Pitt, Morgan Freeman, Gwyneth Paltrow',

'O Suspeito (Prisoners)': 'Hugh Jackman, Jake Gyllenhaal, Viola Davis',

'O Grande Truque (The Prestige)': 'Hugh Jackman, Christian Bale, Michael Caine',

'A Garota com a Tatuagem de Dragão': 'Daniel Craig, Rooney Mara, Christopher Plummer',

'Los Angeles: Cidade Proibida (L.A. Confidential)': 'Kevin Spacey, Russell Crowe, Guy Pearce',

'Instinto Selvagem': 'Michael Douglas, Sharon Stone, George Dzundza',

'O Fugitivo': 'Harrison Ford, Tommy Lee Jones, Sela Ward',

'O Poderoso Chefão II': 'Al Pacino, Robert De Niro, Robert Duvall',

'O Poderoso Chefão III': 'Al Pacino, Diane Keaton, Andy Garcia',

'A Fuga das Galinhas': 'Julia Sawalha, Mel Gibson, Tony Haygarth',

'Toy Story (1995)': 'Tom Hanks, Tim Allen, Don Rickles',

'Zootopia': 'Ginnifer Goodwin, Jason Bateman, Idris Elba',

'Valente': 'Kelly Macdonald, Billy Connolly, Emma Thompson',

'Monstros S.A.': 'John Goodman, Billy Crystal, Mary Gibbs',

'Meu Malvado Favorito': 'Steve Carell, Jason Segel, Russell Brand',

'Ace Ventura: Um Detetive Diferente': 'Jim Carrey, Courteney Cox, Sean Young',

'Quem Vai Ficar Com Mary?': 'Cameron Diaz, Ben Stiller, Matt Dillon',

'Escola de Rock': 'Jack Black, Joan Cusack, Mike White',

'Superbad: É Hoje': 'Jonah Hill, Michael Cera, Christopher Mintz-Plasse',

'Todo Mundo Quase Morto (Shaun of the Dead)': 'Simon Pegg, Kate Ashfield, Nick Frost',

'O Exorcista': 'Ellen Burstyn, Max von Sydow, Linda Blair',

'Alien, O Oitavo Passageiro': 'Sigourney Weaver, Tom Skerritt, Veronica Cartwright',

'O Chamado (The Ring)': 'Naomi Watts, Martin Henderson, David Dorfman',

'O Iluminado (The Shining)': 'Jack Nicholson, Shelley Duvall, Danny Lloyd',

'Corrente do Mal (It Follows)': 'Maika Monroe, Keir Gilchrist, Olivia Luccardi',

'A Entidade (Sinister)': 'Ethan Hawke, Juliet Rylance, James Ransone',

'A Vila (The Village)': 'Bryce Dallas Howard, Joaquin Phoenix, Adrien Brody',

'A Noite dos Mortos-Vivos (1968)': 'Duane Jones, Judith O Dea Karl Hardman',

'Demon Slayer: Mugen Train (Filme)': 'Natsuki Hanae, Akari Kitō, Hiro Shimono',

'Your Name. (Filme - Kimi no Na Wa)': 'Ryunosuke Kamiki, Mone Kamishiraishi, Ryo Narita',

'A Voz do Silêncio (Filme - A Silent Voice)': 'Miyu Irino, Saori Hayami, Aoi Yūki',
'The Sopranos': 'James Gandolfini, Lorraine Bracco, Edie Falco',

'Succession': 'Brian Cox, Jeremy Strong, Sarah Snook',

'Fargo': 'Billy Bob Thornton, Martin Freeman, Allison Tolman',

'The Good Place': 'Kristen Bell, Ted Danson, William Jackson Harper',

'Fleabag': 'Phoebe Waller-Bridge, Sian Clifford, Olivia Colman',

'Yellowstone': 'Kevin Costner, Luke Grimes, Kelly Reilly',

'Severance': 'Adam Scott, Zach Cherry, Britt Lower',

'Only Murders in the Building': 'Steve Martin, Martin Short, Selena Gomez',

'This Is Us': 'Milo Ventimiglia, Mandy Moore, Sterling K. Brown',

'Mindhunter': 'Jonathan Groff, Holt McCallany, Anna Torv',

'Big Little Lies': 'Reese Witherspoon, Nicole Kidman, Shailene Woodley',

'The Umbrella Academy': 'Elliot Page, Tom Hopper, David Castañeda',

'Homeland': 'Claire Danes, Mandy Patinkin, Damian Lewis',

'Oz (Série HBO)': 'Ernie Hudson, Terry Kinney, Harold Perrineau',

'Billions': 'Paul Giamatti, Damian Lewis, Maggie Siff',

'The Handmaid s Tale': 'Elisabeth Moss, Yvonne Strahovski, Ann Dowd',

'The Mandalorian': 'Pedro Pascal, Gina Carano, Giancarlo Esposito',

'Reservation Dogs': 'Devery Jacobs, D Pharaoh Woon-A-Tai, Lane Factor',

'Better Call Saul': 'Bob Odenkirk, Jonathan Banks, Rhea Seehorn',

'Grey s Anatomy': 'Ellen Pompeo, Patrick Dempsey, Sandra Oh',

'Seinfeld': 'Jerry Seinfeld, Julia Louis-Dreyfus, Michael Richards',

'Parks and Recreation': 'Amy Poehler, Aziz Ansari, Nick Offerman',

'It: A Coisa - Bem-Vindos a Derry (Série)': 'Jovan Adepo, Chris Chalk, Taylour Paige',

'O Senhor dos Anéis: Os Anéis de Poder (Série)': 'Morfydd Clark, Robert Aramayo, Ismael Cruz Córdova',

'Fallout (Série - 2024)': 'Ella Purnell, Aaron Moten, Walton Goggins',

'Erased (Série - Boku dake ga Inai Machi)': 'Shinnosuke Mitsushima, Aoi Yuuki, Takuma Nagatsuka',

'Jojo s Bizarre Adventure': 'Takehito Koyasu, Daisuke Ono, Yuichi Nakamura',

'Kino s Journey (Série - Kino no Tabi)': 'Ai Maeda, Ryuji Aigase',

'Made in Abyss (Série)': 'Miyu Tomita, Mariya Ise, Shiori Izawa',

'Baccano! (Série)': 'Daisuke Sakaguchi, Masaya Onosaka, Sanae Kobayashi',

'Psycho-Pass': 'Kana Hanazawa, Tomokazu Seki, Kenji Nojima',

'Terror in Resonance (Série - Zankyou no Terror)': 'Kaito Ishikawa, Soma Saito, Atsumi Tanezaki',

'Avatar: A Lenda de Aang': 'Zach Tyler Eisen, Mae Whitman, Jack DeSena',

'She-Ra e as Princesas do Poder (2018)': 'Aimee Carrero, Karen Fukuhara, AJ Michalka',

'Castlevania (Anime/Série Animada)': 'Richard Armitage, James Callis, Graham McTavish',

'Bob s Burgers': 'H. Jon Benjamin, Dan Mintz, Eugene Mirman',

'Futurama': 'Billy West, Katey Sagal, John DiMaggio',

'O Máskara: A Série Animada': 'Rob Paulsen, Jim Cummings, Tress MacNeille',

'A Vaca e o Frango': 'Charlie Adler, Candi Milo, Dee Bradley Baker',

'Johnny Bravo': 'Jeff Bennett, Brenda Vaccaro, Mae Whitman',

'As Aventuras de Tintim (Série Animada)': 'Colin O Meara, Thierry Wermuth, Susan Roman',
    };
    // Normalizar chaves das overrides para usar slugs (para lookup por slugData)
    const ELENCO_OVERRIDES_N = {};
    for (const k in ELENCO_OVERRIDES) {
        ELENCO_OVERRIDES_N[normalize(k)] = ELENCO_OVERRIDES[k];
    }
    const GENERO_OVERRIDES = {
     'Harry Potter e a Pedra Filosofal': 'Fantasia, Aventura',

'Harry Potter e a Câmara Secreta': 'Fantasia, Aventura',

'Harry Potter e o Prisioneiro de Azkaban': 'Fantasia, Aventura, Mistério',

'Harry Potter e o Cálice de Fogo': 'Fantasia, Aventura, Mistério',

'Harry Potter e a Ordem da Fênix': 'Fantasia, Aventura',

'Harry Potter e o Enigma do Príncipe': 'Fantasia, Aventura, Mistério',

'Harry Potter e as Relíquias da Morte: Parte 1': 'Fantasia, Aventura',

'Harry Potter e as Relíquias da Morte: Parte 2': 'Fantasia, Aventura',

'O Vingador do Futuro (Total Recall - 1990)': 'Ficção Científica, Ação, Aventura',

'Star Trek (2009)': 'Ficção Científica, Ação, Aventura',

'O Jogo de Ender': 'Ficção Científica, Ação, Drama',

'Minority Report': 'Ficção Científica, Ação, Mistério',

'O Quinto Elemento': 'Ficção Científica, Ação, Aventura',

'300': 'Ação, Drama, Fantasia',

'Kingsman: Serviço Secreto': 'Ação, Comédia, Aventura',

'Sicario: Terra de Ninguém': 'Ação, Suspense, Drama',

'Fúria em Alto Mar (Under Siege)': 'Ação, Suspense',

'Velocidade Máxima (Speed)': 'Ação, Suspense, Aventura',

'A Cor Púrpura': 'Drama',

'O Menino do Pijama Listrado': 'Drama',

'Lion: Uma Jornada para Casa': 'Drama',

'A Teoria de Tudo': 'Drama, Romance',

'O Pianista': 'Drama',

'Prenda-me Se For Capaz': 'Drama, Mistério',

'O Segredo dos Seus Olhos': 'Mistério, Suspense, Drama',

'Uma Mente Brilhante': 'Drama, Romance',

'Na Natureza Selvagem': 'Aventura, Drama',

'O Artista': 'Romance, Comédia, Drama',

'Seven: Os Sete Crimes Capitais': 'Mistério, Suspense, Drama',

'O Suspeito (Prisoners)': 'Suspense, Mistério, Drama',

'O Grande Truque (The Prestige)': 'Mistério, Suspense, Drama',

'A Garota com a Tatuagem de Dragão': 'Suspense, Mistério, Drama',

'Los Angeles: Cidade Proibida (L.A. Confidential)': 'Suspense, Mistério, Drama',

'Instinto Selvagem': 'Suspense, Mistério',

'O Fugitivo': 'Ação, Suspense, Drama',

'O Poderoso Chefão II': 'Drama, Suspense',

'O Poderoso Chefão III': 'Drama, Suspense',

'A Fuga das Galinhas': 'Animação, Comédia, Aventura',

'Toy Story (1995)': 'Animação, Comédia, Aventura',

'Zootopia': 'Animação, Comédia, Mistério',

'Valente': 'Animação, Aventura, Fantasia',

'Monstros S.A.': 'Animação, Comédia, Aventura',

'Meu Malvado Favorito': 'Animação, Comédia, Aventura',

'Ace Ventura: Um Detetive Diferente': 'Comédia',

'Quem Vai Ficar Com Mary?': 'Comédia, Romance',

'Escola de Rock': 'Comédia',

'Superbad: É Hoje': 'Comédia',

'Todo Mundo Quase Morto (Shaun of the Dead)': 'Terror, Comédia, Ação',

'O Exorcista': 'Terror, Suspense',

'Alien, O Oitavo Passageiro': 'Ficção Científica, Terror, Suspense',

'O Chamado (The Ring)': 'Terror, Mistério',

'O Iluminado (The Shining)': 'Terror, Drama',

'Corrente do Mal (It Follows)': 'Terror, Mistério',

'A Entidade (Sinister)': 'Terror, Mistério',

'A Vila (The Village)': 'Mistério, Drama, Suspense',

'A Noite dos Mortos-Vivos (1968)': 'Terror, Drama',

'Demon Slayer: Mugen Train (Filme)': 'Animação, Ação, Fantasia',

'Your Name. (Filme - Kimi no Na Wa)': 'Animação, Romance, Drama',

'A Voz do Silêncio (Filme - A Silent Voice)': 'Animação, Drama, Romance',
'The Sopranos': 'Drama',

'Succession': 'Drama',

'Fargo': 'Suspense, Drama, Comédia',

'The Good Place': 'Comédia, Fantasia',

'Fleabag': 'Comédia, Drama',

'Yellowstone': 'Drama',

'Severance': 'Ficção Científica, Drama, Suspense',

'Only Murders in the Building': 'Comédia, Mistério',

'This Is Us': 'Drama, Romance',

'Mindhunter': 'Suspense, Drama',

'Big Little Lies': 'Drama, Mistério, Suspense',

'The Umbrella Academy': 'Ação, Aventura, Fantasia',

'Homeland': 'Drama, Suspense',

'Oz (Série HBO)': 'Drama, Suspense',

'Billions': 'Drama',

'The Handmaid s Tale': 'Ficção Científica, Drama',

'The Mandalorian': 'Ficção Científica, Ação, Aventura',

'Reservation Dogs': 'Comédia, Drama',

'Better Call Saul': 'Drama, Suspense',

'Grey s Anatomy': 'Drama, Romance',

'Seinfeld': 'Comédia',

'Parks and Recreation': 'Comédia',

'It: A Coisa - Bem-Vindos a Derry (Série)': 'Terror, Mistério, Suspense',

'O Senhor dos Anéis: Os Anéis de Poder (Série)': 'Fantasia, Aventura, Drama',

'Fallout (Série - 2024)': 'Ficção Científica, Ação, Aventura',

'Erased (Série - Boku dake ga Inai Machi)': 'Animação, Mistério, Suspense',

'Jojo s Bizarre Adventure': 'Animação, Ação, Aventura, Fantasia',

'Kino s Journey (Série - Kino no Tabi)': 'Animação, Aventura, Fantasia',

'Made in Abyss (Série)': 'Animação, Aventura, Fantasia',

'Baccano! (Série)': 'Animação, Ação, Mistério, Fantasia',

'Psycho-Pass': 'Animação, Ficção Científica, Ação',

'Terror in Resonance (Série - Zankyou no Terror)': 'Animação, Suspense, Drama',

'Avatar: A Lenda de Aang': 'Animação, Aventura, Fantasia',

'She-Ra e as Princesas do Poder (2018)': 'Animação, Aventura, Fantasia',

'Castlevania (Anime/Série Animada)': 'Animação, Ação, Fantasia',

'Bob s Burgers': 'Animação, Comédia',

'Futurama': 'Animação, Comédia, Ficção Científica',

'O Máskara: A Série Animada': 'Animação, Comédia, Fantasia',

'A Vaca e o Frango': 'Animação, Comédia',

'Johnny Bravo': 'Animação, Comédia',

'As Aventuras de Tintim (Série Animada)': 'Animação, Aventura, Mistério',
    };

    // normalizar GENERO_OVERRIDES após a declaração
    const GENERO_OVERRIDES_N = {};
    for (const k in GENERO_OVERRIDES) {
        GENERO_OVERRIDES_N[normalize(k)] = GENERO_OVERRIDES[k];
    }

    // listas simples para gerar elenco sem dependência do faker
    const FIRST = ['Ana','Bruno','Carlos','Daniela','Eduardo','Fernanda','Guilherme','Helena','Igor','Julia','Lucas','Mariana','Nathalia','Otavio','Paula','Rafael','Sofia','Thiago','Vitoria','Wagner'];
    const LAST = ['Silva','Souza','Oliveira','Costa','Pereira','Rodrigues','Alves','Ferreira','Gomes','Martins','Rocha','Lima','Carvalho','Ramos','Moreira'];
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    for (const data of filmesNovos) {
        if (!data.nome) continue;

        // tentar detectar gênero por palavras na descrição/nome/classificacao
        let matchedGeneroId = null;
        const textForMatch = normalize(`${data.nome} ${data.descricao || ''} ${data.classificacao || ''}`);
        for (const gnome in generoMap) {
            if (textForMatch.includes(gnome) || (data.classificacao && normalize(data.classificacao).includes(gnome))) {
                matchedGeneroId = generoMap[gnome];
                break;
            }
        }
        // se não encontrou, tenta por palavras chaves simples (fallback)
        if (!matchedGeneroId) {
            const keywordMap = {
                'Terror': ['terror','assomb','horror','susto','demon'],
                'Animação': ['anime','anima','ghibli','cartoon','animation','pikachu','pokemon'],
                'Ação': ['ação','guerra','batalha','luta','aventura','ação e aventura','superheroi','vingador','gladiador'],
                'Drama': ['drama','emocion','romance','história','historia','vida'],
                'Suspense': ['suspense','mistério','misterio','thriller','crime','serial'],
                'Ficção Científica': ['ficção','ficcao','science','espacial','nolan','interestelar','matrix']
            };
            for (const [gname, keys] of Object.entries(keywordMap)) {
                for (const k of keys) {
                    if (textForMatch.includes(k)) {
                        const keynorm = normalize(gname);
                        if (generoMap[keynorm]) matchedGeneroId = generoMap[keynorm];
                        break;
                    }
                }
                if (matchedGeneroId) break;
            }
        }

        // aplicar override de elenco se o slug estiver presente
        const slugData = normalize(data.nome);
        if (ELENCO_OVERRIDES_N[slugData]) {
            data.elenco = ELENCO_OVERRIDES_N[slugData];
        }

        // aplicar override de genero (nome do genero) se existir
        if (GENERO_OVERRIDES_N[slugData]) {
            // valor pode conter múltiplos gêneros separados por vírgula; verificar cada um
            const overrideVal = String(GENERO_OVERRIDES_N[slugData] || '');
            const candidates = overrideVal.split(',').map(s => normalize(s));
            for (const cand of candidates) {
                if (!cand) continue;
                if (generoMap[cand]) {
                    matchedGeneroId = generoMap[cand];
                    break;
                }
            }
        }

        // montar elenco simples como string "Nome Sobrenome, Nome Sobrenome, ..."
        if (!data.elenco) {
            const castCount = Math.min(5, Math.max(2, Math.floor(Math.random() * 4) + 2));
            const cast = [];
            for (let i = 0; i < castCount; i++) {
                cast.push(`${pick(FIRST)} ${pick(LAST)}`);
            }
            data.elenco = cast.join(', ');
        }

        // enriquecer descrição com uma frase adicional para maior detalhe
        if (data.descricao && data.descricao.length < 500) {
            const extras = [
                'A produção se destaca pela atmosfera e direção de arte, criando cenas memoráveis.',
                'O roteiro apresenta reviravoltas que mantêm a tensão e aprofundam os personagens.',
                'A trilha sonora complementa o tom do filme, reforçando momentos emocionantes.',
                'As atuações são convincentes e trazem profundidade aos conflitos centrais.'
            ];
            data.descricao = `${data.descricao} ${pick(extras)}`;
        }

        // associar generoId se encontrado
        if (matchedGeneroId) data.generoId = matchedGeneroId;

        await client.streamDB.upsert({
            where: { nome: data.nome },
            update: data,
            create: data,
        });
    }

    console.log(`🎬 Seeding concluído. Total de ${filmesNovos.length} entradas inseridas/atualizadas.`);

    if (shouldDisconnect) {
        await client.$disconnect();
    }
}

// Permite executar o arquivo diretamente com `node prisma/dbstreamSeed.js`
const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
    const prisma = new PrismaClient();
    seedStreamDB(prisma)
        .catch((e) => {
            console.error('ERRO NO SEEDING:', e);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
}