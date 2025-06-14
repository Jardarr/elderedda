const alvissspeeches = [
	{
		id: 1,
		class: "flex justify-center m-2",
		number: "1.",

		contentON: (
			<span className="w-40 sm:w-60">
				<span className="font-Eileen text-3xl/4">
                    A
                </span>
				lvíss kvað:
				<br />
				«Bekki breiða,
				<br />
				nú skal brúðr með mér
				<br />
				heim í sinni snúask;
				<br />
				hratat um mægi
				<br />
				mun hverjum þykkja,
				<br />
				heima skal-at hvíld nema.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Скамьи готовят,
				<br />
				домой собираться
				<br />
				не время ль невесте?
				<br />
				Всякий решит —<br />
				сватовство торопил я;
				<br />
				вернуться пора нам!»
			</span>
		),
	},
	{
		id: 2,
		class: "flex justify-center m-2",
		number: "2.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Hvat er þat fira?
				<br />
				Hví ertu svá fölr um nasar?
				<br />
				Vartu í nótt með ná?
				<br />
				Þursa líki
				<br />
				þykki mér á þér vera;
				<br />
				ert-at-tu til brúðar borinn.»{" "}
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Что за пришелец?
				<br />
				Что бледен твой лик?
				<br />
				Не спал ли ты с трупом?
				<br />
				Ты с великанами
				<br />
				сходен обличьем, —<br />в мужья не годишься!»
			</span>
		),
	},
	{
		id: 3,
		class: "flex justify-center m-2",
		number: "3.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Alvíss ek heiti,
				<br />
				bý ek fyr jörð neðan,
				<br />
				á ek undir steini stað;
				<br />
				vagna vers
				<br />
				ek em á vit kominn;
				<br />
				bregði engi föstu heiti fira.»{" "}
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Альвис зовусь,
				<br />
				под землей я живу,
				<br />
				и дом мой под камнем:
				<br />
				к Возничему ныне
				<br />
				я в гости пришел;
				<br />
				надо слово держать!»
			</span>
		),
	},
	{
		id: 4,
		class: "flex justify-center m-2",
		number: "4.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Ek mun bregða
				<br />
				því at ek brúðar á<br />
				flest of ráð sem faðir;
				<br />
				vark-a ek heima,
				<br />
				þá er þér heitit var,
				<br />
				at sá einn, er gjöf er, með goðum.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Не соблюдешь ты
				<br />
				слово свое, —<br />
				отец я невесты.
				<br />
				Не был я в пору
				<br />
				сговора дома
				<br />и не дал согласья».
			</span>
		),
	},
	{
		id: 5,
		class: "flex justify-center m-2",
		number: "5.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Hvat er þat rekka,
				<br />
				er í ráðum telsk
				<br />
				fljóðs ins fagrglóa?
				<br />
				Fjarrafleina
				<br />
				þik munu fáir kunna;
				<br />
				hverr hefr þik baugum borit?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Кто этот воин,
				<br />
				который невесте
				<br />
				запретом грозит?
				<br />
				Кто здесь, бродяга,
				<br />
				знает тебя?
				<br />
				Кто твой дурень-отец?»
			</span>
		),
	},
	{
		id: 6,
		class: "flex justify-center m-2",
		number: "6.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Vingþórr ek heiti,
				<br />
				ek hef víða ratat,
				<br />
				sonr em ek Síðgrana;
				<br />
				at ósátt minni skal-at-tu
				<br />
				þat it unga man hafa
				<br />
				ok þat gjaforð geta.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Винг-Тор зовусь я,
				<br />
				пришел издалека,
				<br />
				я Сидграни сын.
				<br />
				Против воли моей
				<br />
				деву возьмешь ты
				<br />и в брак с нею вступишь».
			</span>
		),
	},
	{
		id: 7,
		class: "flex justify-center m-2",
		number: "7.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Sáttir þínar
				<br />
				er ek vil snemma hafa
				<br />
				ok þat gjaforð geta;
				<br />
				eiga vilja
				<br />
				heldr en án vera
				<br />
				þat it mjallhvíta man.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Хочу обещанье
				<br />
				твое получить
				<br />
				и согласье на свадьбу;
				<br />
				белоснежную деву
				<br />
				в жены возьму,
				<br />
				или жизнь не нужна мне».
			</span>
		),
	},
	{
		id: 8,
		class: "flex justify-center m-2",
		number: "8. ",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Meyjar ástum
				<br />
				mun-a þér verða,
				<br />
				vísi gestr, of varit,
				<br />
				ef þú ór heimi kannt
				<br />
				hverjum at segja
				<br />
				allt þat, er ek vil vita.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Девы любовь
				<br />
				будет с тобой,
				<br />
				мой гость многомудрый,
				<br />
				если ты сможешь
				<br />
				о каждом мире
				<br />
				поведать мне правду.
			</span>
		),
	},
	{
		id: 9,
		class: "flex justify-center m-2",
		number: "9.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé sú jörð heitir,
				<br />
				er liggr fyr alda sonum
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				названьем каким
				<br />
				зовется земля
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 10,
		class: "flex justify-center m-2",
		number: "10.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Jörð heitir með mönnum,
				<br />
				en með ásum fold,
				<br />
				kalla vega vanir,
				<br />
				ígræn jötnar,
				<br />
				alfar gróandi,
				<br />
				kalla aur uppregin.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Землей — у людей
				<br />
				и Долом — у асов,
				<br />
				Путями — у ванов,
				<br />
				Зеленой — у турсов,
				<br />
				Родящей — у альвов,
				<br />у богов она — Влажная».
			</span>
		),
	},
	{
		id: 11,
		class: "flex justify-center m-2",
		number: "11.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé sá himinn heitir,
				<br />
				erakendi,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				названьем каким
				<br />
				небо зовется
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 12,
		class: "flex justify-center m-2",
		number: "12.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Himinn heitir með mönnum,
				<br />
				en hlýrnir með goðum,
				<br />
				kalla vindófni vanir,
				<br />
				uppheim jötnar,
				<br />
				alfar fagraræfr,
				<br />
				dvergar drjúpansal.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«У людей это — Небо,
				<br />
				а Твердь — у богов,
				<br />
				Ткач Ветра — у ванов,
				<br />
				Верх Мира — у турсов
				<br />
				и Кровля — у альвов,
				<br />
				Дом Влажный — у карликов».
			</span>
		),
	},
	{
		id: 13,
		class: "flex justify-center m-2",
		number: "13.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Avlíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hversu máni heitir,
				<br />
				sá er menn séa,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как месяц зовется,
				<br />
				что люди видят,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 14,
		class: "flex justify-center m-2",
		number: "14.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Máni heitir með mönnum,
				<br />
				en mylinn með goðum,
				<br />
				kalla hverfanda hvél helju í,
				<br />
				skyndi jötnar,
				<br />
				en skin dvergar,
				<br />
				kalla alfar ártala.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Месяц он у людей,
				<br />
				Луна — у богов,
				<br />
				а в Хель — Колесо,
				<br />
				у карликов — Светоч,
				<br />
				Спешащий — у турсов,
				<br />у альвов — Счет Лет».
			</span>
		),
	},
	{
		id: 15,
		class: "flex justify-center m-2",
		number: "15.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé sú sól heitir,
				<br />
				er séa alda synir,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как солнце зовется,
				<br />
				что люди видят,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 16,
		class: "flex justify-center m-2",
		number: "16.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Sól heitir með mönnum,
				<br />
				en sunna með goðum,
				<br />
				kalla dvergar Dvalins leika,
				<br />
				eygló jötnar,
				<br />
				alfar fagrahvél,
				<br />
				alskír ása synir.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Солнцем люди зовут,
				<br />
				а боги — Светилом,
				<br />
				Друг Двалина — карлики,
				<br />
				турсы — Пылающим,
				<br />
				Ободом — альвы
				<br />и асы — Пресветлым».
			</span>
		),
	},
	{
		id: 17,
		class: "flex justify-center m-2",
		number: "17.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé þau ský heita,
				<br />
				er skúrum blandask,
				<br />
				heimi hverjum í?
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как тучу зовут,
				<br />
				что дождь проливает,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 18,
		class: "flex justify-center m-2",
		number: "18.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Ský heita með mönnum,
				<br />
				en skúrván með goðum,
				<br />
				kalla vindflot vanir,
				<br />
				úrván jötnar,
				<br />
				alfar veðrmegin,
				<br />
				kalla í helju hjalm huliðs.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Тучей — люди, а боги —<br />
				Надеждой на Дождь,
				<br />
				ваны — Ветром Гонимой,
				<br />
				альвы — Мощь Ветра,
				<br />
				Влажною — турсы,
				<br />в Хель — Шлем-Невидимка».
			</span>
		),
	},
	{
		id: 19,
		class: "flex justify-center m-2",
		number: "19.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé sá vindr heitir,
				<br />
				er víðast ferr,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как ветер зовут,
				<br />
				что дальше всех носится,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 20,
		class: "flex justify-center m-2",
		number: "20.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Vindr heitir með mönnum,
				<br />
				en váfuðr með goðum,
				<br />
				kalla gneggjuð ginnregin,
				<br />
				æpi jötnar,
				<br />
				alfar dynfara,
				<br />
				kalla í helju hviðuð.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Люди Ветром зовут,
				<br />
				а боги — Летящим,
				<br />
				он Ржущий у асов,
				<br />
				Ревущий — у турсов,
				<br />
				Шумящий — у альвов,
				<br />а в Хель он Порывистый».
			</span>
		),
	},
	{
		id: 21,
		class: "flex justify-center m-2",
		number: "21.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé þat logn heitir,
				<br />
				er liggja skal,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как называть
				<br />
				привыкли затишье
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 22,
		class: "flex justify-center m-2",
		number: "22.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Logn heitir með mönnum,
				<br />
				en lægi með goðum,
				<br />
				kalla vindlot vanir,
				<br />
				ofhlý jötnar,
				<br />
				alfar dagsefa,
				<br />
				kalla dvergar dags veru.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Люди — Затишьем,
				<br />
				Спокойствием — боги,
				<br />
				ваны — Безветрием,
				<br />
				етуны — Зноем,
				<br />
				Тишью Дня — альвы,
				<br />
				Покоем Дня — карлики».
			</span>
		),
	},
	{
		id: 23,
		class: "flex justify-center m-2",
		number: "23.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé sá marr heitir,
				<br />
				er menn róa,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как море зовут,
				<br />
				струги несущее,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 24,
		class: "flex justify-center m-2",
		number: "24.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Sær heitir með mönnum,
				<br />
				en sílægja með goðum,
				<br />
				kalla vág vanir,
				<br />
				álheim jötnar,
				<br />
				alfar lagastaf,
				<br />
				kalla dvergar djúpan mar.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Люди Морем зовут,
				<br />
				а Водами — боги,
				<br />
				Волнами — ваны,
				<br />
				Влагою — альвы,
				<br />
				Дом Угря — великаны,
				<br />а карлики — Глубью».
			</span>
		),
	},
	{
		id: 25,
		class: "flex justify-center m-2",
		number: "25.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé sá eldr heitir,
				<br />
				er brennr fyr alda sonum,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как зовется огонь,
				<br />
				что горит пред людьми,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 26,
		class: "flex justify-center m-2",
		number: "26.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Eldr heitir með mönnum,
				<br />
				en með ásum funi,
				<br />
				kalla vág vanir,
				<br />
				frekan jötnar,
				<br />
				en forbrenni dvergar,
				<br />
				kalla í helju hröðuð.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Огнем — у людей,
				<br />
				Жаром — у асов,
				<br />
				у ванов — Бушующим,
				<br />
				Жадным — у турсов,
				<br />
				Жгущим — у карликов,
				<br />в Хель он Стремительный».
			</span>
		),
	},
	{
		id: 27,
		class: "flex justify-center m-2",
		number: "27.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé viðr heitir,
				<br />
				er vex fyr alda sonum,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как лес зовется,
				<br />
				что вырастает,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 28,
		class: "flex justify-center m-2",
		number: "28.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Viðr heitir með mönnum,
				<br />
				en vallarfax með goðum,
				<br />
				kalla hlíðþang halir,
				<br />
				eldi jötnar
				<br />
				alfar fagrlima,
				<br />
				kalla vönd vanir.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Он Лес у людей,
				<br />
				у богов — Грива Поля,
				<br />
				в Хель — Поросль Склонов,
				<br />
				Дрова он у турсов,
				<br />
				у альвов — Ветвистый,
				<br />у ванов он Прутья».
			</span>
		),
	},
	{
		id: 29,
		class: "flex justify-center m-2",
		number: "29.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr,at vitir,
				<br />
				hvé sú nótt heitir,
				<br />
				in Nörvi kennda,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как имя ночи,
				<br />
				дочери Нера,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 30,
		class: "flex justify-center m-2",
		number: "30.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Nótt heitir með mönnum,
				<br />
				en njól með goðum,
				<br />
				kalla grímu ginnregin,
				<br />
				óljós jötnar,
				<br />
				alfar svefngaman,
				<br />
				kalla dvergar draumnjörun.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Ночь — у людей,
				<br />
				Мгла — у богов,
				<br />
				Покров — у божеств,
				<br />
				у етунов — Тьма,
				<br />
				у альвов — Сна Радость,
				<br />
				Грезы Ньерун — у карликов».
			</span>
		),
	},
	{
		id: 31,
		class: "flex justify-center m-2",
		number: "31.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé þat sáð heitir,
				<br />
				er sá alda synir,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как нивы зовутся,
				<br />
				где зерна посеяны,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 32,
		class: "flex justify-center m-2",
		number: "32.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Bygg heitir með mönnum,
				<br />
				en barr með goðum,
				<br />
				kalla vöxt vanir,
				<br />
				æti jötnar,
				<br />
				alfar lagastaf,
				<br />
				kalla í helju hnipin.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Ячмень — у людей,
				<br />
				Злак — у богов,
				<br />
				Всходы — у ванов,
				<br />
				у етунов — Хлеб,
				<br />
				и Солод — у альвов,
				<br />а в Хель то — Поникшее».
			</span>
		),
	},
	{
		id: 33,
		class: "flex justify-center m-2",
		number: "33.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Segðu mér þat, Alvíss,
				<br />
				— öll of rök fira
				<br />
				vörumk, dvergr, at vitir —:
				<br />
				hvé þat öl heitir,
				<br />
				er drekka alda synir,
				<br />
				heimi hverjum í?»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Альвис, скажи мне, —<br />
				про все, что есть в мире,
				<br />
				наверно, ты знаешь, —<br />
				как пиво зовется,
				<br />
				напиток людей,
				<br />в разных мирах».
			</span>
		),
	},
	{
		id: 34,
		class: "flex justify-center m-2",
		number: "34.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Alvíss kvað:
				<br />
				«Öl heitir með mönnum,
				<br />
				en með ásum bjórr,
				<br />
				kalla veig vanir,
				<br />
				hreinalög jötnar,
				<br />
				en í helju mjöð,
				<br />
				kalla sumbl Suttungs synir.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Альвис сказал:
				<br />
				«Пивом люди зовут,
				<br />
				а Брагою — асы,
				<br />
				ваны — Пьянящим,
				<br />
				в Хель Медом зовут,
				<br />
				Чистой Влагою — турсы,
				<br />
				Питьем — сыны Суттунга».
			</span>
		),
	},
	{
		id: 35,
		class: "flex justify-center m-2",
		number: "35.",

		contentON: (
			<span className="flex w-40 sm:w-60">
				Þórr kvað:
				<br />
				«Í einu brjósti
				<br />
				ek sák aldrigi
				<br />
				fleiri forna stafi;
				<br />
				miklum tálum
				<br />
				kveð ek tældan þik:
				<br />
				Uppi ertu, dvergr, of dagaðr,
				<br />
				nú skínn sól í sali.»
			</span>
		),

		contentRU: (
			<span className="flex w-40 sm:w-60">
				Тор сказал:
				<br />
				«Чья еще грудь
				<br />
				вместила бы столько
				<br />
				сведений древних!
				<br />
				Но хитростью мощной
				<br />
				тебя обманул я:
				<br />
				ты в доме застигнут
				<br />
				солнечным светом!»
			</span>
		),
	},
];

export { alvissspeeches };
