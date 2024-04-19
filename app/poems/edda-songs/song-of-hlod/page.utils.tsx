const test = [
    {
        id: 2,
        number: '1.',
        class:'main_wrapper_text_stanza',

        contentON: <>Ár kváðu Humla<br />
        Húnum ráða,<br />
        Gizur Gautum,<br />
        Gotum Angantý,<br />
        Valdarr Dönum,<br />
        en Völum Kíarr,<br />
        Alrekr inn frækni<br />
        enskri þjóðu.</>,

        contentRU: <>Хумли, как слышно,<br />
        гуннами правил,<br />
        а гаутами — Гицур,<br />
        Ангантюр — готами,<br />
        данами — Вальдар,<br />
        а валами — Кьяр<br />
        и Альрек Храбрый —<br />
        англов народом.</>
    },
    {
        id: 3,
        number: '2.',
        class:'main_wrapper_text_stanza',

        contentON: <>Hlöðr var þar borinn<br />
        í Húnalandi<br />
        saxi ok með sverði,<br />
        síðri brynju,<br />
        hjalmi hringreifðum,<br />
        hvössum mæki,<br />
        mari vel tömum<br />
        á mörk inni helgu.</>,

        contentRU: <>Хлёд родился<br />
        в гуннской земле,<br />
        в священном лесу,<br />
        с ножом и мечом,<br />
        остро отточенным,<br />
        в шлеме украшенном,<br />
        в длинной кольчуге<br />
        и с резвым конем.</>
    },
    {
        id: 4,
        number: '3.',
        class:'main_wrapper_text_stanza',

        contentON: <>Hlöðr reið austan,<br />
        Heiðreks arfi;<br />
        kom hann at garði,<br />
        þar er Gotar byggja,<br />
        á Árheima,<br />
        arfs at kveðja;<br />
        þar drakk Angantýr<br />
        erfi Heiðreks.</>,

        contentRU: <>Хлёд с востока,<br />
        наследник Хейдрека,<br />
        в Архейм, к жилищу<br />
        готов приехал, —<br />
        наследье свое<br />
        собирался он требовать.<br />
        Тризну там Ангантюр<br />
        правил по Хейдреку.</>
    },
    {
        id: 5,
        number: '4.',
        class:'main_wrapper_text_stanza',

        contentON: <>Segg fann hann úti<br />
        fyr sal hávum<br />
        ok síðförlan<br />
        síðan kvaddi?<br />
        «Inn gakktu, seggr,<br />
        í sal hávan,<br />
        bið mér Angantý<br />
        andspjöll bera.»</>,

        contentRU: <>Человека он встретил<br />
        перед чертогом,<br />
        и поздно прибывшему<br />
        так он промолвил:<br />
        «Ступай, человек,<br />
        в палату высокую,<br />
        скажи, чтоб со мной<br />
        побеседовал Ангантюр!»</>
    },
    {
        id: 6,
        class:'main_wrapper_text_string',

        contentON: <><p>Sá gekk inn fyrir konungs borð ok kvaddi Angantý konung vel ok mælti síðan:</p></>,

        contentRU: <><p>Тот вошел, стал перед столом конунга, приветствовал Ангантюра и сказал:</p></>
    },
    {
        id: 7,
        number: '5.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Hér er Hlöðr kominn,<br />
        Heiðreks arfþegi,<br />
        bróðir þinn<br />
        inn böðskái;<br />
        mikill er sá maðr ungr<br />
        á mars baki,<br />
        vill nú, þjóðann,<br />
        við þik tala.»</>,

        contentRU: <>«Хлёд появился,<br />
        наследник Хейдрека,<br />
        смелый воитель,<br />
        брат он тебе,<br />
        он гордо в седле<br />
        сидит, возвышаясь;<br />
        с тобою он хочет,<br />
        конунг, беседовать».</>
    },
    {
        id: 8,
        number: '6.',
        class:'main_wrapper_text_stanza',

        contentON: <>Rymr varð í ranni,<br />
        risu með góðum;<br />
        vildi hverr heyra,<br />
        hvat Hlöðr mælti<br />
        ok þat, er Angantýr<br />
        andsvör veitti.</>,

        contentRU: <>Зашумели в палате,<br />
        встали сидевшие, —<br />
        всем знать хотелось,<br />
        что скажет Хлёд<br />
        и как отвечать<br />
        Ангантюр станет.</>
    },
    {
        id: 9,
        class:'main_wrapper_text_string',

        contentON: <></>,

        contentRU: <><p>Тогда Ангантюр сказал: «Добро пожаловать, брат мой Хлёд! Садись с нами за пир! Выпьем прежде всего меду в память нашего отца и к славе всех нас!» Хлёд ответил: «Мы приехали сюда не для того чтобы набивать животы». Затем он сказал:</p></>
    },
    {
        id: 10,
        number: '7.',
        class:'main_wrapper_text_stanza',

        contentON: <>Þá mælti Angantýr:<br />
        «Heill kom þú, Hlöðr,<br />
        Heiðreks arfi,<br />
        bróðir minn,<br />
        gakk á bekk sitja;<br />
        drekkum Heiðreks<br />
        hollar veigar<br />
        feðr okkrum<br />
        fyrstum manna,<br />
        vín eða mjöð,<br />
        hvárts þér vildra þykkir.»</>,

        contentRU: <>«Я хочу половину<br />
        наследия Хейдрека;<br />
        доспехов, мечей,<br />
        скота и приплода,<br />
        сокровищ казны,<br />
        жерновов скрипящих,<br />
        рабов и рабынь<br />
        с их ребятами вместе,</>
    },
    {
        id: 11,
        number: '8.',
        class:'main_wrapper_text_stanza',

        contentON: <>Þá kvað Hlöðr:<br />
        «Til annars vér<br />
        en öl at drekka<br />
        hingat fórum<br />
        af Húna landi<br />
        þigg-a-k, þjóðann,<br />
        þínar veigar.</>,

        contentRU: <>и лес знаменитый,<br />
        что Мюрквид зовется,<br />
        на готской земле<br />
        могилы священные,<br />
        камень чудесный<br />
        в излучинах Данпа,<br />
        кольчуг половину,<br />
        у Хейдрека бывших,<br />
        земель и людей<br />
        и блестящих колец».</>
    },
    {
        id: 12,
        number: '9.',
        class:'main_wrapper_text_stanza',

        contentON: <>Hafa vil ek halft allt,<br />
        þat er Heiðrekr átti,<br />
        al ok af oddi,<br />
        einum skatti,<br />
        kú ok af kalfi,<br />
        kvern þjótandi,<br />
        þý ok af þræli<br />
        ok þeira barni;</>,

        contentRU: <>Ангантюр сказал:<br />
        «Сначала расколется<br />
        щит сверкающий,<br />
        и с холодным копьем<br />
        столкнется копье,<br />
        и воинов много<br />
        падет на траву,<br />
        прежде чем Тюрвинг<br />
        начну я делить<br />
        или дам тебе, Хумлунг,<br />
        долю наследства.</>
    },
    {
        id: 13,
        number: '10.',
        class:'main_wrapper_text_stanza',

        contentON: <>Hrís þat it mæra,<br />
        er Myrkvið heita,<br />
        gröf þá ina helgu,<br />
        er stendr á Goðþjóðu,<br />
        stein þann inn fagra,<br />
        er stendr á stöðum Danpar,<br />
        halfar herborgir,<br />
        þær er Heiðrekr átti,<br />
        lönd ok lýða<br />
        ok ljósa bauga.»</>,

        contentRU: <>Родич, тебе я<br />
        кубки вручу,<br />
        и скот, и сокровища,<br />
        сколько захочешь;<br />
        по дюжине сотен<br />
        людей и коней<br />
        и столько же воинов<br />
        вооруженных.</>
    },
    {
        id: 14,
        number: '11.',
        class:'main_wrapper_text_stanza',

        contentON: <>Angantýr kvað:<br />
        «Bresta mun fyrr, bróðir,<br />
        in blikhvíta lind<br />
        ok kaldr geirr<br />
        koma við annan<br />
        ok margr gumi<br />
        í gras hníga,<br />
        áðr en Tyrfing<br />
        í tvau deilak<br />
        eða þér, Humlungr,<br />
        halfan arf látak.</>,

        contentRU: <>Дам я дары<br />
        каждому мужу, —<br />
        дороже у них<br />
        не бывало подарков;<br />
        каждому дева<br />
        достанется в жены,<br />
        деве же каждой<br />
        я дам ожерелье.</>
    },
    {
        id: 15,
        number: '12.',
        class:'main_wrapper_text_stanza',

        contentON: <>Ek mun bjóða þér<br />
        bjartar vigrar,<br />
        fé ok fjölð meiðma,<br />
        sem þik fremst tíðir;<br />
        tolf hundruð gef ek þér manna,<br />
        tolf huhdruð gef ek þér mara,<br />
        tolf hundruð gef ek þér skálka,<br />
        þeira er skjöld bera.</>,

        contentRU: <>Серебром я тебя<br />
        покрою, сидящего,<br />
        золотом звонким<br />
        осыплю идущего.<br />
        так что покатятся<br />
        кольца повсюду;<br />
        треть ты возьмешь<br />
        готской земли».</>
    },
    {
        id: 16,
        class:'main_wrapper_text_string',

        contentON: <></>,

        contentRU: <><p>При конунге Ангантюре был тогда Гицур Грютингалиди, воспитатель конунга Хейдрека. Он был тогда очень стар. Когда он услышал слова конунга Ангантюра, ему показалось, что тот предлагает слишком много, и он сказал:</p></>
    },
    {
        id: 17,
        number: '13.',
        class:'main_wrapper_text_stanza',

        contentON: <>Manni gef ek hverjum<br />
        margt at þiggja<br />
        annat æðra<br />
        en hann á at ráða;<br />
        mey gef ek hverjum<br />
        manni at þiggja,<br />
        men spenni ek hverri<br />
        meyju at halsi.</>,

        contentRU: <>«Щедро сулишь ты<br />
        рабыни отродью,<br />
        сыну рабыни,<br />
        от князя рожденному.<br />
        Этот ублюдок<br />
        сидел на кургане,<br />
        в то время как конунг<br />
        наследство делил».</>
    },
    {
        id: 18,
        class:'main_wrapper_text_string',

        contentON: <></>,

        contentRU: <><p>Хлёд очень рассердился на то, что его назвали сыном рабыни и ублюдком после посулов брата. Он сразу же уехал со всеми своими людьми и направился домой в гуннскую землю к конунгу Хумли, отцу его матери. И он рассказал Хумли, что его брат Ангантюр не дал ему равной доли наследства. Конунг Хумли спросил, что произошло между ними, и очень рассердился, узнав, что Хлёд, сын его дочери, был назван сыном рабыни. Он сказал:</p></>
    },
    {
        id: 19,
        number: '14.',
        class:'main_wrapper_text_stanza',

        contentON: <>Mun ek um þik sitjanda<br />
        silfri mæla,<br />
        en ganganda þik<br />
        gulli steypa,<br />
        svá at á vega alla<br />
        velti baugar;<br />
        þriðjung Goðþjóðar, —<br />
        því skaltu ráða.»</>,

        contentRU: <>«Мы проведем<br />
        эту зиму в довольстве,<br />
        станем беседовать,<br />
        мед распивая;<br />
        гуннов научим<br />
        оружье готовить<br />
        и смело его<br />
        в бой понесем.</>
    },
    {
        id: 20,
        class:'main_wrapper_text_string',

        contentON: <><p>Gizurr Grýtingaliði, fóstri Heiðreks konungs, var þá með Angantý konungi. Hann var þá ofrgamall. Ok er hann heyrði boð Angantýs, þótti honum hann of mikit bjóða ok kvað þá:</p></>,

        contentRU: <></>
    },
    {
        id: 21,
        number: '15.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Þetta er þiggjanda<br />
        þýjar barni,<br />
        barni þýjar,<br />
        þótt sé borinn konungi;<br />
        þá hornungr<br />
        á haugi sat,<br />
        er öðlingr<br />
        arfi skipti.»</>,

        contentRU: <>Славную, Хлёд,<br />
        соберем мы дружину,<br />
        доблестно будут<br />
        воины биться,<br />
        герои-юнцы<br />
        на двухлетках-конях,<br />
        войско такое<br />
        будет у гуннов».</>
    },
    {
        id: 22,
        class:'main_wrapper_text_string',

        contentON: <><p>Hlöðr reiddist nú mjök, er hann var þýbarn ok hornungr kallaðr, ef hann þægi boð bróður síns, ok sneri hann þá þegar í burt með alla sína menn, til þess er hann kom heim í Húnaland til Humla konungs, frænda síns, ok sagði honum, at Angantýr, bróðir hans, hefði synjat honum helmingaskiptis.</p>
        <p>Humli spyrr nú allt tal þeira. Varð hann þá reiðr mjök, ef Hlöðr, dóttursonr hans, skyldi ambáttarsonr heita, ok kvað þá:</p></>,

        contentRU: <><p>Эту зиму конунг Хумли и Хлёд пробыли дома. Но весной они собрали такое большое войско, что в гуннской земле совсем не осталось мужей, способных носить оружие... Пять тысяч было в каждом полку, и в каждой тысяче было тринадцать сотен, и в каждой сотне — четыре отряда по сорок воинов, и таких полков было тридцать три.</p>
        <p>Собрав это войско, они поехали в лес, который называется Мюрквид. Он отделяет гуннскую землю от земли готов. Когда они вышли из леса, перед ними оказались большие селения на широкой равнине, а посреди равнины стояла великолепная крепость. Там правила Хервёр, сестра Ангантюра и Хлёда, и с ней был Ормар, ее воспитатель. Они должны были оборонять границу от гуннских ратей, и у них было большое войско.</p>
        <p>Однажды утром Хервёр стояла на башне над городскими воротами. Она взглянула на юг в сторону леса и увидела большие клубы пыли от скачущих коней, и эта пыль надолго закрыла солнце. Затем она увидела, как в клубах пыли что-то сверкает, как золото, — великолепные щиты, окованные золотом, позолоченные шлемы и светлые кольчуги. Тогда она поняла, что это войско гуннов и что оно очень многочисленно. Она быстро спустилась, позвала своего трубача и велела ему трубить сбор. Затем Хервёр сказала: «Берите оружие и готовьтесь к битве! А ты, Ормар, поезжай навстречу гуннам и предложи им бой перед южными воротами крепости». Ормар сказал:</p></>
    },
    {
        id: 23,
        number: '16.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Sitja skulu vér í vetr<br />
        ok sælliga lifa,<br />
        drekka ok dæma<br />
        dýrar veigar,<br />
        kenna Húnum<br />
        hervápn búa,<br />
        þau er fræknliga<br />
        skulum fram bera.</>,

        contentRU: <>«Конечно, поеду<br />
        и щит понесу,<br />
        с готами вместе<br />
        буду сражаться!»</>
    },
    {
        id: 24,
        class:'main_wrapper_text_string',

        contentON: <></>,

        contentRU: <><p>Тогда Ормар выехал из крепости навстречу гуннам. Он громко закричал, зовя их к стенам крепости: «Я предлагаю вам битву на поле перед южными воротами!» ...Но так как гунны были гораздо многочисленнее, войско Хервёр стало нести большие потери. В конце концов Хервёр была убита и вокруг нее погибла большая часть ее войска.</p>
        <p>Когда Ормар увидел гибель Хервёр, он обратился в бегство, а с ним все, кто еще оставался в живых... Представ перед конунгом Ангантюром, он сказал:</p></>
    },
    {
        id: 25,
        number: '17.',
        class:'main_wrapper_text_stanza',

        contentON: <>Vel skulum þér, Hlöðr,<br />
        herlið búa<br />
        ok framliga<br />
        fylki týja;<br />
        með tolf vetra mengi<br />
        ok tvævetrum fola,<br />
        svá skal Húna<br />
        her of samna.»</>,

        contentRU: <>«С юга я прибыл<br />
        с такими вестями:<br />
        в пламени лес,<br />
        Мюрквида чаща,<br />
        залита кровью<br />
        готов земля.</>
    },
    {
        id: 26,
        class:'main_wrapper_text_string',

        contentON: <><p>Þenna vetr sátu þeir Humli ok Hlöðr um kyrrt. Um várit drógu þeir her saman svá mikinn, at aleyða var eftir vígra manna í Húnalandi....</p>
        <p>Sem þessi herr kom saman, riðu þeir skóg þann, er Myrkviðr heitir, er skilr Húnaland ok Gotaland. En sem þeir kómu af skóginum, þá váru byggðir stórar ok vellir sléttir, ok á völlunum stóð borg ein fögr, en þar réð fyrir Hervör, systir Angantýs konungs, ok Ormarr, fóstri hennar. Váru þau sett þar til landgæzlu fyrir her Húna, ok höfðu þau þar mikit lið.</p>
        <p>Þat var einn morgun í sólar upprás, at Hervör stóð upp á kastala einum yfir borgarhliði. Hon sá jóreyki stóra suðr til skógarins, svá at löngum fal sólina. Því næst sá hon glóa undir jóreyknum, sem á gull eitt liti, fagra skjöldu ok gulli lagða, gyllta hjalma ok hvítar brynjur. Sá hon þá, at þetta var herr Húna ok mikill fjölði. Hervör gekk ofan skyndiliga ok kallar lúðrsvein ok bað blása saman lið. Ok síðan mælti Hervör: «Takið vápn yður ok búizk til orrostu, en þú, Ormarr, ríð í mót Húnum ok bjóð þeim orrostu fyrir borgarhliði inu syðra.» Ormarr kvað:</p></>,

        contentRU: <></>
    },
    {
        id: 27,
        number: '18.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Skal ek víst ríða<br />
        ok rönd bera,<br />
        *********<br />
        Gota þjóðum<br />
        gunni at heyja.»</>,

        contentRU: <>Знаю, что в битве<br />
        Хейдрека дочь,<br />
        сестра твоя, пала,<br />
        сраженная насмерть,<br />
        гунны ее<br />
        убили и с нею<br />
        воинов многих<br />
        из готского войска.</>
    },
    {
        id: 28,
        class:'main_wrapper_text_string',

        contentON: <><p>Þá reið Ormarr af borginni ok í mót hernum. Hann kallaði hátt ok bað þá ríða til borgarinnar, — «ok úti fyrir borgarhliðinu suðr á völlinn — þar býð ek yðr til orrostu. Bíði þeir þar annarra, er fyrr koma.»</p>
        <p>Nú reið Ormarr aftr til borgarinnar, ok var Hervör þá albúin ok allr herr. Riðu þau nú út af borginni með hernum móti Húnum, ok hófsk þar allmikil orrosta. En með því at Húnar hafa lið miklu meira, sneri mannfallinu í lið þeira Hervarar, ok um síðir fell Hervör ok mikit lið umhverfis hana.</p>
        <p>En er Ormarr sá fall hennar, flýði hann ok allir þeir, er lífit þágu. Ormarr reið dag ok nótt, sem mest mátti hann, á fund Angantýs konungs í Árheima. ....</p>
        <p>Og sem Ormarr kom fyrir Angantý konung, þá kvað hann:</p></>,

        contentRU: <></>
    },
    {
        id: 29,
        number: '19.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Sunnan em ek kominn<br />
        at segja spjöll þessi:<br />
        Sviðin er öll in mæra<br />
        Myrkviðar heiðr,<br />
        drifin öll Goðþjóð<br />
        gumna blóði.</>,

        contentRU: <>Легче ей было<br />
        битву начать,<br />
        чем свадебный пир<br />
        или с милым беседу».</>
    },
    {
        id: 30,
        class:'main_wrapper_text_string',

        contentON: <></>,

        contentRU: <><p>Когда конунг Ангантюр услышал это, он сжал губы и долго молчал. Наконец он сказал: «Не по-братски поступил с тобой Хлёд, сестра моя благородная!» Затем он окинул взором свою дружину, которая была немногочисленна, и сказал:</p></>
    },
    {
        id: 31,
        number: '20.',
        class:'main_wrapper_text_stanza',

        contentON: <>Mey veit ek Heiðreks,<br />
        [fyr mækis eggjum],<br />
        systur þína,<br />
        svigna til jarðar;<br />
        hafa Húnar<br />
        hana fellda<br />
        ok marga aðra<br />
        yðra þegna.</>,

        contentRU: <>«Много нас было<br />
        за чашею меда,<br />
        да мало осталось<br />
        для ратного дела.</>
    },
    {
        id: 32,
        number: '21.',
        class:'main_wrapper_text_stanza',

        contentON: <>Léttari gerðisk hon at böð<br />
        en við biðil ræða<br />
        eða í bekk at fara<br />
        at brúðar gangi.»</>,

        contentRU: <>Нету в дружине<br />
        моей никого,<br />
        кто бы поехал<br />
        и щит бы понес,<br />
        чтобы вызвать на бой<br />
        гуннское войско.<br />
        хотя б я прибавил<br />
        к просьбам награду».</>
    },
    {
        id: 33,
        class:'main_wrapper_text_string',

        contentON: <><p>Angantýr konungr, þá er hann heyrði þetta, brá hann grönum ok varð seint til orða ok mælti þetta um síðir:</p></>,

        contentRU: <></>
    },
    {
        id: 34,
        number: '22.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Óbróðurliga vartu leikin,<br />
        in ágæta systir!»<br />
        <br />
        «Mjök várum vér margir,<br />
        er vér mjöð drukkum,<br />
        nú erum vér færi,<br />
        er vér fleiri skyldum.</>,

        contentRU: <>Гицур Старый сказал:<br />
        «Не стану просить<br />
        в награду себе<br />
        даже ничтожной<br />
        золота доли;<br />
        но я поеду<br />
        и щит понесу,<br />
        чтоб гуннам вручить<br />
        жезл войны».</>
    },
    {
        id: 35,
        class:'main_wrapper_text_string',

        contentON: <><p>Ok síðan leit hann yfir hirðina, ok var ekki margt liðs með honum. Hann kvað þá:</p></>,

        contentRU: <><p>Гицур надел хорошие доспехи и вскочил на своего коня, как юноша. Затем он сказал конунгу:</p></>
    },
    {
        id: 36,
        number: '23.',
        class:'main_wrapper_text_stanza',

        contentON: <>Sé ek eigi mann<br />
        í mínu liði,<br />
        þótt ek biðja<br />
        ok baugum kaupa,<br />
        er muni ríða<br />
        ok rönd bera<br />
        ok þeira Húna<br />
        herlið finna.»</>,

        contentRU: <>«Куда мне позвать<br />
        гуннов для схватки?»</>
    },
    {
        id: 37,
        number: '24.',
        class:'main_wrapper_text_stanza',

        contentON: <>Gizurr gamli sagði:<br />
        «Ek mun þik einkis<br />
        eyris krefja<br />
        né skjallanda<br />
        skarfs ór gulli;<br />
        þó mun ek ríða<br />
        ok rönd bera,<br />
        Húna þjóðum<br />
        herstaf bjóða.»</>,

        contentRU: <>«К Дюльгье зови их,<br />
        на Дунхейд зови,<br />
        зови их в пределы<br />
        Ёссурских гор;<br />
        там го́тов дружины<br />
        в битвах нередко<br />
        победу и славу<br />
        себе добывали».</>
    },
    {
        id: 38,
        class:'main_wrapper_text_string',

        contentON: <><p>...Gizurr herklæddist með góðum hervápnum ok hljóp á hest sinn, sem ungr væri. Þá mælti hann til konungs:</p></>,

        contentRU: <><p>И вот Гицур ускакал и ехал долго, пока не подъехал к войску гуннов. Он приблизился настолько, что его могли услышать, и крикнул громким голосом:</p></>
    },
    {
        id: 39,
        number: '25.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Hvar skal ek Húnum<br />
        hervíg kenna?»</>,

        contentRU: <>«Войску разгром<br />
        и гибель вождю!<br />
        Подняты стяги,<br />
        против вас Один!</>
    },
    {
        id: 40,
        number: '26.',
        class:'main_wrapper_text_stanza',

        contentON: <>Angantýr kvað:<br />
        «Kenndu at Dylgju<br />
        ok á Dúnheiði<br />
        ok á þeim öldnum<br />
        Jassarfjöllum;<br />
        þar oft Gotar<br />
        gunni háðu<br />
        ok fagran sigr<br />
        frægir vágu.»</>,

        contentRU: <>Зову я вас к Дюльгье,<br />
        на битву сзываю<br />
        на Дунхейд, в пределы<br />
        Ёссурских гор!<br />
        Усейте поля<br />
        своими телами,<br />
        пусть Один направит<br />
        копье, как сказал я!»</>
    },
    {
        id: 41,
        class:'main_wrapper_text_string',

        contentON: <><p>Nú reið Gizurr í brott ok þar til, er hann kom í her Húna. Hann reið eigi nær en svá, at hann mátti tala við þá. Þá kallar hann hári röddu ok kvað:</p></>,

        contentRU: <></>
    },
    {
        id: 42,
        number: '27.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Felmtr er yðru fylki,<br />
        feigr er yðvarr vísi,<br />
        gnæfar yðr gunnfani,<br />
        gramr er yðr Óðinn.</>,

        contentRU: <>Услышав слова Гицура, Хлёд сказал:<br />
        «Схватите скорее<br />
        Гицура Старого!»</>
    },
    {
        id: 43,
        number: '28.',
        class:'main_wrapper_text_stanza',

        contentON: <>Býð ek yðr at Dylgju<br />
        ok á Dúnheiði<br />
        orrostu undir<br />
        Jassarfjöllum,<br />
        hræsi yður<br />
        at há hverju,<br />
        ok láti svá Óðinn flein fljúga<br />
        sem ek fyrir mæli.»</>,

        contentRU: <>А конунг Хумли сказал:<br />
        «Посланца не троньте, —<br />
        один он приехал».</>
    },
    {
        id: 44,
        class:'main_wrapper_text_string',

        contentON: <><p>Þá er Hlöðr hafði heyrt orð Gizurar, þá kvað hann:</p></>,

        contentRU: <><p>Гицур пришпорил своего коня и поскакал к конунгу Ангантюру. Он предстал пред ним и приветствовал его. Конунг спросил, был ли он у гуннов. Гицур сказал: «Я говорил с ними и позвал их на поле битвы на Дунхейде и в долины Дюльгьи». Ангантюр спросил, как велико войско гуннов. Гицур сказал: «Их великое множество.</p></>
    },
    {
        id: 45,
        number: '29.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Taki þér Gizur<br />
        Grýtingaliða,<br />
        mann Angantýs,<br />
        kominn af Árheimum.»<br />
        <br />
        Humli konungr sagði:<br />
        «Eigi skulum<br />
        árum spilla,<br />
        þeim er fara<br />
        einir saman.»</>,

        contentRU: <>Шесть боевых<br />
        у гуннов полков,<br />
        в каждом пять тысяч,<br />
        а в тысяче — сотни<br />
        счетом тринадцать,<br />
        в каждой же сотне<br />
        вчетверо больше<br />
        воинов смелых».</>
    },
    {
        id: 46,
        class:'main_wrapper_text_string',

        contentON: <><p>Gizurr drap þá hest sinn með sporum ok reið á fund Angantýs konungs. .... Angantýr spyrr, hvat mikit lið Húnar hafa. Gizurr mælti: «Mikit er þeira mengi:</p></>,

        contentRU: <><p>На следующий день они начали битву. Они бились целый день и вечером вернулись в свои шатры. Так они сражались восемь дней... День и ночь к Ангантюру подходили подкрепления со всех сторон, так что у него было не меньше народу, чем вначале. Битва стала еще жарче, чем раньше... Готы защищали свою свободу и свою родину, сражаясь против гуннов, они поэтому стойко держались и подбадривали друг друга. К концу дня натиск готов стал так силен, что полки гуннов дрогнули. Увидев это, Ангантюр вышел из ограды щитов, стал во главе войска и, взяв Тюрвинг в руки, начал рубить людей и коней. Ограда щитов вокруг конунга гуннов была прорвана, и братья сошлись друг с другом. Тут Хлёд пал, и конунг Хумли пал, и гунны обратились в бегство, а готы убивали их, и убитых было так много, что реки оказались запружены и вышли из берегов, и долины были заполнены мертвыми лошадьми и людьми и залиты кровью. Ангантюр пошел тогда на поле боя посмотреть на убитых и нашел своего брата Хлёда. Тогда он сказал:</p></>
    },
    {
        id: 47,
        number: '30.',
        class:'main_wrapper_text_stanza',

        contentON: <>Sex ein eru<br />
        seggja fylki,<br />
        í fylki hverju<br />
        fimm þúsundir,<br />
        í þúsund hverri<br />
        þrettán hundruð,<br />
        í hundraði hverju<br />
        halir fjórtalðir.»</>,

        contentRU: <>«Сокровищ тебе<br />
        немало сулил я,<br />
        немало добра<br />
        мог бы ты выбрать;<br />
        битву начав,<br />
        не получил ты<br />
        ни светлых колец,<br />
        ни земель, ни богатства.</>
    },
    {
        id: 48,
        class:'main_wrapper_text_string',

        contentON: <><p>Angantýr spyrr nú til Húna hers. Þá sendi hann alla vegu menn frá sér ok stefndi hverjum manni til sín, er honum vildi lið veita ok vápnum mætti valda. Fór hann þá á Dúnheiði með lið sitt, ok var þat allmikill herr. Kom þá á móti honum herr Húna, ok höfðu þeir lið hálfu fleira.</p>
        <p>At öðrum degi hófu þeir sína orrostu ok börðust allan þann dag ok fóru at kveldi í herbúðir sínar. Þeir börðust svá átta daga, at höfðingjar váru enn heilir, en engi vissi manntal, hvat margt fell. En bæði dag ok nótt dreif lið til Angantýs af öllum vegum, ok þá kom svá, at hann hafði eigi færa fólk en í fyrstu. Varð nú orrostan enn ákafari. Váru Húnar allákafir ok sá þá sinn kost, at sú ein var lífs ván, ef þeir sigruðust, ok illt mundi Gota griða at biðja. Gotar vörðu frelsi sitt ok fóstrjörð fyrir Húnum, stóðu því fast, ok eggjaði hverr annan. Þá er á leið daginn, gerðu Gotar atgöngu svá harða, at fylkingar Húna svignuðu fyrir. Ok er Angantyýr sá þat, gekk hann fram ór skjaldborginni ok í öndverða fylking ok hafði í hendi Tyrfing ok hjó þá bæði menn ok hesta. Raufst þá skjaldborg fyrir Húna konungum, ok skiptust þeir bræðr höggum við. Þar fell Hlöðr ok Humli konungr, ok þá brast flótti á Húnum, en Gotar drápu þá. .... Angantýr konungr gekk þá at kanna valinn ok fann Hlöð, bróður sinn. Þá kvað hann:</p></>,

        contentRU: <></>
    },
    {
        id: 49,
        number: '31.',
        class:'main_wrapper_text_stanza',

        contentON: <>«Bauð ek þér, bróðir,<br />
        basmir óskerðar,<br />
        fé ok fjölð meiðma,<br />
        sem þik fremst tíddi;<br />
        nú hefir þú hvárki<br />
        hildar at gjöldum<br />
        ljósa bauga<br />
        né land ekki.</>,

        contentRU: <>Проклятье на нас:<br />
        тебя я убил!<br />
        То навеки запомнят;<br />
        зол норн приговор!»</>
    },
    {
        id: 50,
        class:'main_wrapper_text_string',

        contentON: <></>,

        contentRU: <><p>Ангантюр долго был конунгом в Хрейдготаланде. Он был могуч, щедр и воинствен, и от него произошли роды конунгов.</p></>
    },
    {
        id: 51,
        number: '32.',
        class:'main_wrapper_text_stanza',

        contentON: <>Bölvat er okkr, bróðir,<br />
        bani em ek þinn orðinn;<br />
        þat mun æ uppi;<br />
        illr er dómr norna.»</>,

        contentRU: <></>
    },
];

export {test};