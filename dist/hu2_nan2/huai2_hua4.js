(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('怀化', {"type":"FeatureCollection","features":[{"type":"Feature","id":"431202","properties":{"name":"鹤城区","cp":[110.040315,27.578926],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AI@CECAACCECEECG@CCCAACACAI@CBABCLABCBCA@AAE@A@@AAICKIGACCE@C@KBSBAHCDAFAFGNABBDABCDCBC@E@CACACAC@AB@BBFBBBDBD@D@H@BFB@B@H@D@D@@AB@J@@@BB@DAHABABB@BEFC@EBCDAB@@@BBFBBFDBBB@D@B@D@D@D@BB@BHFBB@DBB@BBBHBDBD@BADA@CAECK@C@ABA@AB@D@@BFBBB@B@B@JBH@DBDBDBBHHBBF@F@BBDFBB@HBH@D@HAJEHEDIDEDGDABKHIHCHAB@BHJHR@FCHCFCBCHEFAB@@CDINCDKJKJG@C@A@ACAEAGAGAEGMEICE@@IEAAA@C@KAODKBEDCBEHIJGJAD@LH@FBJHFNDNBFEF@DBBBDABCB@B@FBD@LADABABCDABADAFGBADAB@B@DDFDDBBBN@HBBCD@B@BBB@BJFBBD@B@BADBB@B@HFB@DBB@@BAD@B@DBB@DDD@D@D@DD@BAD@D@DABADCBAB@@@@BB@FAFAP@B@DBDB@@@BAD@BFDD@JAD@DDAFDBB@DCDADDBB@FAHCDAB@DBDDBHLBFADADCBCDA@@B@BBDD@DDDBDDBDDHD@B@DCBBD@DBBBBBDBJ@BBBBBDB@B@DADAHABAHA@CB@@EBCDA@ECEACACBCBCBAD@DADOBCDADA@AACBABADCDABKFKBEDCD@DBLAD@D@D@BBBBBD@BBD@@B@DADAD@F@DFDDHDHDD@FADAB@DADABCDC@AB@@@D@D@DB@@DBDBBDBDDBB@B@D@F@DADAD@DCDC@ABAB@@D@FBBBDD@D@DB@@DKBCD@L@L@FI@EB@ACACEAEAAC@E@EDEFEBCCGCICCW]IEIGGQAAEI@@GGKE_ICEAC@CDEFIDAFAD@D@HBZJPD@@HAHCJGBABCDCDCFGEI@C@ADCBE@E@EFGHGHKJCDADKDEDAH@JBDADCBE@E@EAEEKCOAK@GJKJO@I@EKICC@ABADAFA@A@ACACAABCBAB@@CAAAAABAF@D@BCFBBAHDBADDBCDC@EACBE@@FAFBBCB@BAEEBAFFDCCCBCBBHA@AAEFCAA@AEICAAAAA@C@ADC@AA@E@C@CC@@@AD@DAD@D@B@DBBA@ACAAA@ABADABA@A@AEACAKGCACCCAAAAAAAG@KCKEEC@CDCKMCC@@ECCAGAAAGG@EACAACBGHC@CBEAC@@CAA@AAECGCEACG@@D@BBB@BDB@BBB@BCBA@@DBB@B@DAD@@BB@B@B@D@@ABCBC@@DC@C@BAC@AD@BABCBABBDF@JBHFHAHAFHHBDDD@BD@@CAC@BBFDADBFCAGAEBA@@ACA@DCCGBNBJDJB@@@BCBA@AB@D@B@BBD@BC@@@A@AABAA@@ACAABB@DD@B@@@BA@AA@B@@@B@@@BB@DABABB@B@BADDA@DABCAA@CAAA@AAAAAAAAAA@AA@@A@ADAD@@@BBBA@CBEFABA@ER_DGBEAG@A@CEIHKBABEB@AA@CBG@G@CAA@CBABCACACAA@@@A@C@"],"encodeOffsets":[[112593,28135]]}},{"type":"Feature","id":"431221","properties":{"name":"中方县","cp":[109.944711,27.440138],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@CC@C@CBAD@D@@@@CAAA@@AC@A@MFC@C@AACB@B@BAB@@A@AAAAAC@@A@GFCBABC@CAA@C@AC@@A@ABCBEFGBA@EBCB@@@BAB@BELCFAH@BCJAB@BA@AAC@EFGD@BABC@C@CACEECCACC@ACAA@@CF@@ABAA@@AC@CBCBC@C@CCA@@ACA@@E@@@AAAAEG@FADFLC@A@GACAA@AA@BC@GBA@A@AB@FADA@E@E@GACDBF@D@BDDHDHFBDBH@D@BBJBFDFBBFDFDDDDBHLDFDBDDJFJFFDRHBBBB@DABADA@@B@@BDF@FBBBLBFBF@LBD@B@@A@A@A@ADAHAFADABEBEFCDAB@D@D@DBBB@H@FBFBDFBBBB@FDBFBH@D@FA@CB@DAHCFIP@B@BBDDB@FBJDRBF@D@@@BTALAD@F@DDHBLJJDBB@@@BBF@BDBDABADKBADAJ@DBDBBBDD@DDHFFFDDDBBFD@DBJD@B@@@B@DBDBDBBADAB@DBH@H@DAB@@BFABALAJGDFB@H@FBHA`CFQB@BAFEDAB@AA@A@@BCBCB@@@BBB@BBBBBBBB@BBBDBB@DBBA@CCBBC@A@AAAABCBA@@A@@@A@@@ABBB@@A@@@ACCA@BADB@BB@ABBBB@@@D@@AAC@A@A@CBAB@DA@A@@IAICMAHADD@CDB@BB@FAHBDBAEBCECAAD@DB@@ACC@CCGAEGGBGBGEIAE@ACBADABA@ABCD@ABD@D@@CD@DABA@@@C@A@AAA@@BC@C@AAA@CB@DA@AAA@ACA@AAA@A@CH@BA@CBCBCDCFCBC@@@@@ECCAC@ACG@@@ABCBADADABI@A@ICCBCAA@AAAC@CFABC@A@CCC@C@C@AAAA@AA@CAA@CCAACCB@@A@AA@AAEEA@AAGAECACAAACBE@AA@C@CAC@CAEEAAC@AAB@DCBA@AC@ABADABA@@A@C@ACCB@LEFAD@F@B@BA@A@C@ABABA@GACBC@A@A@@@@AAGACAA@@C@AAA@AC@A@AAAAECCC@@A@GDCBAAGAG@C@GCA@AB@BABCAAAA@AAA@CFCBA@CBC@A@ABA@AD@BADABG@ABAB@BA@C@A@AAA@AAA@AB@BADMDEBAAAAECC@KA"],["@@AA@ABAAAAAA@@B@B@@C@C@C@IAC@A@C@A@AAAAACCAAAAAAAAAE@A@AB@B@FBJ@@CBAD@@BBB@B@BB@BC@A@CCA@A@@B@B@BFDFDB@BH@DADAD@H@B@BADAD@BCBCBA@CBADABCDE@CCC@C@EB@BABF@BB@BGBC@@@A@@B@B@BBBB@DBB@BB@B@D@BDBH@@B@B@B@BABEACB@D@DBDBBADGHGFE@C@AA@ABADCBA@CA@AC@AAAC@I@E@EDABBBB@D@JABB@BABABADCBE@C@EDBF@BGBAAADDDCDEEABFFABA@ADEAEB@@AFBD@FCDADCCABGCABEAADC@E@ABBBBBDB@@BADABADBDB@B@BEBCBAB@BDDLJ@F@JIPIL@HBLDPFLBF@F@FAFCDCBIAG@CBCFCLCBIDGLGHEH@F@FAFCD@B@DFJEHCDCDADABIHGDGB@@OCYIGAC@C@EBCBEJCF@DBDDF`JLFHH@@FJBBHRJHJFX^DDDJDHADEFCF@F@FBDFBFBBDBDA@@FEJPBD@DBDD@BDDFB@@FBD@FEB@BEDEBCJAPCJAPAJAD@D@V@LANBB@H@JBPAXG@@NCJAZINGFC@@TKXKNIPEHEBA@CFAD@HBHDFDDBHBPBF@D@JBTALB@@BCBAD@FADBB@DBD@FDD@DBFAHEHEFADCBC@ECGGCAEAE@@@@@E@I@A@@@G@@@_@ABABABA@CBABAD@FCDABA@GBEBA@ABA@@BA@A@AAACAEACACA@CBAHGDABC@AA@CA@@AEAGACAC@C@@F@FBFAHCHADABBDHBD@DD@F@DAB@BBB@F@BABCBCB@BBBBBBBADCBA@ABBD@BABADCDAFBD@DBB@B@B@BAF@N@D@BBDF@@BH@DDFFDF@H@@ABABA@@AAAA@A@GBAB@F@B@DBD@HEB@BBBB@DDFBDBBFDJLBFFCD@DAB@@A@ABAFABAAAIKAC@ABABALEDA@A@AD@BBB@@BAB@B@BB@B@BBBB@DCD@BB@@@B@@AD@DAD@BB@@B@AC@IAAC@A@C@@A@ABCDCDEBABC@EAEAAAC@AACBC@GACAICMIKGMKK@@AAIEGG@@EGCKCIAM@CBK@M@C@CDKDK@AFQBA@@DK@EAC@A@GACAEEIIGICEAKEECIFC@CAA@GHEFGLCD@BEHIFI@CC@IAI@A@EAC@AEACAEAGAKAA@SEEBGBA@EDKDIAA@EAG@E@G@EBEDAB@@@B@@CHAFAHAD@BEBE@E@E@A@A@CDCB@BADEDABA@A@AE@AAA@@ACAC@A@AB@BA@AAAAA@@@AC@A@EB@B@BAB@BC@C@E@@D@BABA@A@AAEICAAB@BADABA@C@CAAAACBKAACAG@C@CAAAA@ABADABC@GAAAA@A@ADABABABCDCFA@A@AA@CAACG@AAB@BABC@G@AA@C@A@@AAE@A@AA@CBAAA@AAA@ABACGAAA@CA@B@B@BABA@CCA@@B@BA@@@AC@A"]],"encodeOffsets":[[[112540,27939]],[[112845,28065]]]}},{"type":"Feature","id":"431223","properties":{"name":"辰溪县","cp":[110.183917,28.006336],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@@CACCGAACBGBGDEBEAE@@@@DBDBDBHBF@@DBB@@BADCBGHAB@DDBDBFBDBBB@B@BAB@@AB@BABAF@HABCBEDC@ABAB@DABABAB@B@`@@@H@@@B@J@F@@@@BFBFHDDH@FADCDEBGFGFEBCAC@ECC@CAA@CAEBC@ABAD@@KASBIAC@E@OAGACAECGCGAC@EB@DABGFOFMJWLSL@@EDMHYJIBMD@@WHOBIAG@A@MAKBU@C@C@IBOBIBODIBADCFAFA@EFC@EA@@EACC@ACCCAC@OAK@K@C@ADCL@@CAC@C@ACAA@E@CA@AB@BCDCDC@CBCBE@C@A@A@CAACACCACA@@CAC@C@@@A@@BCDADCBCBA@CBEBC@GCGCCCCEE@C@CBCBA@@@AC@AACAAAAC@C@C@KBCAC@CDAFELALCBCDABABBD@BCBCBADCPCBC@ABADADBDBDDF@FCBAD@FA@@DAHAH@BBHBDALCJA@NH@L@BB@@@ABADAF@BDFDBB@@@DABA@C@E@C@IACACBA@CBCBABAD@D@FDD@L@FBD@FDHFH@BAD@B@D@HBBBDBNHF@L@@@NDHDDBVFDBLBF@PDDBFD@@HFNRFFJNBF@DADAFAJ@BBDBBFBF@FBF@D@DCFCD@FCFAHAD@DBBDBFAFAHBBDBFDDB@D@DAF@@@@ADABEJED@@CDCBEPFHABEJBD@BBDDDBBBBBF@D@DADEBABIHGJ@@@HBHABEDHBD@DBDAB@B@BB@DBDB@B@D@F@F@JDBBDDBDDDBDDBDBBD@D@B@B@HBL@FDDDFBB@B@DBB@BB@B@B@F@DBBBDBBD@BBBADAFCFCHCDABBD@@B@B@F@H@BB@B@D@BBBBBB@DA@@BB@B@BAD@B@DDB@DADEDSLCDEHEHCDCN@BAF@B@DBBDBF@@@L@H@B@B@XAJ@B@F@DBNFBBDBBBHHBB@BBDADADMHOLADAD@B@DFDDBRD^DFBDDBD@HCFGFKJEDAD@D@BLJVHRHJFBFBFBLAFEFKDAB@FBDBBD@D@Z@LDB@B@@AFEFEHAH@F@DBDDHLBDDLDAF@FFJFJAJEHAAAACCAECCCAA@C@AB@BBPHNDD@FBF@B@D@DEFCDAFAHCDABCDGDADADAFADI@GAIAKAMBKDEHCDH@L@NDFBFHFFCLEDCFCTGDC@C@CCK@ABABALGHGBA@E@C@@CAAACAEAG@KAC@@AAG@KBEBMNMTC@@A@@GDCHAJBH@H@JDHDHCFGHE@@HEJ@L@JCHCHEHAH@HDBDHHDDDDHBFEJAHBPDLBLBLBL@H@ACCCCICGAEAEAGCICKEICECCCGCEACCICMAK@I@MAIAGCSHKHGFEHEBECMEKCEAC@ADCDE@AAACCEC@@A@G@@AA@@A@EBC@AACAABA@A@A@@AAC@@@AA@ABA@A@A@@CC@@CAA@CAA@AAEGAE@CA@@@C@A@CACAA@@BABA@AAA@A@GBED@ACBGD@BCD@DBBBBDJ@B@BABA@CCCCAAC@I@CAA@CCAAC@ICAA@ABCFABACGAC@AIEA@EAI@C@KFEFEHEHIFKD@@SBOBI@KCMCOIIEACAEFGBCBCAG@EBA@@@C@AHCDAD@BA@@@@AC@CAAAAA@CBA@AA@A@CBGBCBC@C@CAIACCCCCE@EACBEDCBEBCBC@C@C@AC@CBABALABC@A@A@EACA@C@EFGFCFABC@AAAA@CCECA@EACA@AB@D@BA@AAAE@IBABADC@ABC@AB@D@BBDDB@F@JEDAACCKBABABAB@D@BBBBHFBBDBB@D@FEBG@@FEDADEJGLBJ@PHB@LF@@DBNFPFF@HCHADABADCDEBCAECEA@EGIEAE@GCGFEHA@@LAPAF@LBLDJHFB@@FDHFFFJHFFHHB@FF@@JD@BLFJDFBB@B@HCHAHC@@BAJGNMJKJKLIFGBADCDEBADIBC@E@CCECGCE@G@CFIDGBCDGJEFEDAFCFCBAD@DAFC@A@@BCDIAEGIKGEE@@CACAIGEGACEI@@GOGO@EACAGEKGKAAKMKOMOEKAGA@AG@C@A@AAEIKECAAACCE@CAAAAA@GFC@CAA@E@A@AB@H@BBBBB@@ABAB@BG@E@ECCE@CAG@@CEAAC@M@E@ABA@A@A@CAC@EACBCDABABC@AA@BABCDABAAAAAAA@ADADABE@A@AAA@CBE@"],"encodeOffsets":[[113017,28253]]}},{"type":"Feature","id":"431222","properties":{"name":"沅陵县","cp":[110.393844,28.452686],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GACCCCGGACGCG@GBGFGDIDK@I@GF@@GFEHGDGCICG@G@IAGBCD@HB@@@SDMNANAF@LBH@BD@LBH@FBDBBBDB@@@D@FABGHKHABAB@BDL@D@DCDSHEDCDKFEDGEAECE@M@KCGGDCFALBNBLBJ@HCJEBCBCBCBCHADCBGDEBCBEDCFC@A@E@EAC@MCOGAAA@@B@DBBDDFDDBBDBBGBIFIBIEEEE@CBAJGLCH@B@@DBBBABADGFEBKFA@C@AAC@ADCBA@ABCAA@C@CB@BCJ@DAB@@A@A@C@EBEBMFEDADCDAB@B@BB@BB@B@@ABEHEFADAF@D@BDBB@F@B@D@B@@BBD@DCHEHEJ@N@N@DD@BBBB@@BDBLBLFFHBHBD@@@B@B@B@DBFFLJBD@B@DEDAD@FADCDC@EAE@E@IBEJGHCHABE@GBEBA@ABEFCDCDIHEBCBCACCACAGAAA@EBCFGHADMRA@ADEBEDGHGLAH@L@DDJBFBF@DAFCFCDEFGD@@@@DFBNFBF@FAHAFBDAD@BABA@ABA@CCIAABAB@PCFBBD@DBFDDDBHBJDJBDDFFBBADABGBEDEHADCH@B@TBLBfBLAHDFFDRBFB@PC^@NBJBLDHDHBDFBB@B@HAJCFOB@LBJAF@DBDADEDIBCXCHFLDFL@DGPEH@DBD@DABEH@@@@@@ALCL@DFBFBBB@BABGDGDMDCBAD@BBDBFFNBLBDBBFJFBF@DAFGDCHCD@DB@B@HAFBF@DDBBAFBDBLZFBDAHAD@D@BD@HDPBHAF@@@@@FALDPBNDBBBBD@J@FDDDDDLBNCNAH@JBHDDFDD@DALGJEHCH@N@LBNDFDNPBNBJ@JAJ@HALBHDHBJ@BBLHHVZJNBDDBH@B@BBHDLNNFJBBF@BCHGL@BBDAB@FBLBFDDHFDBJBF@HBHDFDD@FAFGJIDADAN@J@D@DA@A@C@C@ADAHAPAD@D@BBBDDHBBDBJ@D@BDBBAB@DCDEBABABBBBBDDBHDBBDDBB@D@B@FCLEFELILGJELKHKFKLHJHFNARCNEHGJKNGLGN@DBHLHLFJFNDLFDDBHAHGLGJCJCFJJFFFFLFJDLFH@LONYDAFG@@FKJCRCPBLAFENMLKPILINILMHIHM@KFCJEL@HBFBBJ@LALDBFCHAHILEPAFDFDHHFJJ@JCNMRKFEJENALBNHLHFJHJBPBBBH@P@J@NFFJAJCLGLEPGLENDLFFJ@JALALGLCFCHENBJNFRFJ@P@TGVCB@FBBB@B@B@B@BDDBB@@B@B@@A@ABE@AB@@@B@B@@@D@@@BBB@@DBDBFD@DBFF@BGHMJCH@JBN@DDBF@L@@A@@@CAC@@@AB@BCDA@A@A@@@ABAB@BA@@B@@@BABADAB@B@B@BABADADABABAB@DAB@B@B@@@D@BABA@@@AB@BA@ADAB@@AB@@BB@@@@ABABA@@BA@@A@@AABA@A@AA@@@@AA@CAA@A@@B@@@@A@@BB@@@@@B@@BB@@B@@@B@B@BA@@B@@@B@B@B@@@B@@B@@B@@@B@BA@@BA@@@AB@@A@A@@@@B@B@B@B@B@@@@A@@@@@A@@AA@@@@AAA@C@@AA@@@B@@A@@B@@@B@BBD@BBB@B@B@B@B@@@BA@A@@B@@@@@@@@B@D@@@@BB@@BAB@@@BA@A@@BAB@B@@@B@B@@BB@@A@@@@A@@AA@@A@@@A@ABAAACC@AACA@E@E@C@EGGICEIACAA@AACC@ABEBC@C@C@CCCCECCAE@CDCBCBADC@A@C@ADCDABA@@@ADG@AEGCC@CBCFCFAJ@H@JA@@BAFAFADADABABC@EDGBCDC@@@ADEFEDC@ABCACAAAA@A@@B@D@@@BABC@@BABEBCFEBABE@AB@BABAB@B@DAB@BAB@DCDCBABADCBA@C@CBEBEDCDCBADAD@BBJDH@NAJAHGFEDMBAFAFCBC@CACCEBC@CFEDCFEDCHCNCDABA@A@@CEAAAC@CBA@ABABCDADCBAB@@CBCBI@A@@BADC@ADABA@A@@ACA@EC@@CCECAAAAAABA@ADEBA@AA@EE@CAE@ABCACECCC@@@E@I@@@AAAAAGAICEEAAC@G@GFC@EBABC@CAEAEAICEC@ACE@A@@BA@ABABCBABAHGDCD@DEBA@A@E@AFA@@@AB@@AAACAIEMGIAO@KBK@A@IAKAGEAAACCAAAA@@@EAEAECA@AA@C@C@E@EACAC@CACA@CAC@C@EBCBC@C@EACBE@EBABC@A@A@CCCAA@A@A@C@CBCBC@C@A@EA@@EAAAAA@CBC@CBADADAB@DEBCBE@CACAE@E@CBCBCBEDCBC@A@C@E@CBC@AB@F@DBDBFFDDHDDDHBDFBBDDFBFBD@D@B@H@H@HADADABADBBBBBBB@FAFAD@D@BBBHBD@BAAEBCDEBABAB@B@D@B@BBBBB@BD@BB@B@B@B@@ABA@AB@@@@@BB@@@B@D@BB@@BB@@@BA@@DC@@@@B@@B@@@@@BAB@B@BBBBBBB@BB@@@B@BADCB@B@@@BB@@@B@BA@AB@B@B@B@B@@@@BBB@B@B@F@@AB@@A@AAAAE@CBA@ABA@A@A@@A@A@AA@@@@@A@A@AB@@ABADCFCDADC@ECEACCAECCAAC@CBCDAD@@@DEBCFGHE@@@ABCFEFGDEDC@AAEACCCC@C@G@GDEDABEAA@A@CBCDA@A@C@EAEA@DADABC@CBEBABCBC@A@EACACBCBCBCBA@A@ECAACCAA@@A@AAAACCAEACACAAAAAC@AAA@AAACAECCACACA@@@A@A@A@@C@G@G@C@A@CAACACAE@CAC@CCEACAACCECCACCAACCACACCACBE@CBCDCBABCBC@AACA@C@ACE@E@AAACAA@CCAACCCEGGCEAACCEACAEAEAAAEA@CAA@A@CBC@@@@AAAAACEACCGCECCCAA@CAACAC@CACAAC@A@@AC@C@C@C@C@A@AAA@@@@CEAAACC@CAABE@C@ECIAECCGAE@G@ECGII[QcQWGYICACAMACAGEA@@GACAAMGECCGCC@C@A@A@CCACCEAEAEEEIA@EAEAECA@A@C@GBGDCAC@KCEAA@ABCBC@K@A@CAGGACAAAC@OAI@AACCC@A@A@CACACAA@ABCAAAE@IBCBAFEH@D@DADABABE@ACGAEKGMICECEEGKGGESKMGOGEAMIMKKGMKG@KCIBMCEEEEIMEIIKGKCGGGICGGA@SOCCGGIKIIEGG@K@KAKAKAOCGAIBEF"],"encodeOffsets":[[113105,28769]]}},{"type":"Feature","id":"431224","properties":{"name":"溆浦县","cp":[110.594879,27.908267],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CC@AGGA@AA@CAAAA@@GGAAAAA@@@MECA@ABCBEDEBC@ACECEBA@A@@BA@@DE@@@E@A@CAC@@A@CA@@@AMIKCG@GAM@IDEHADEJIJEFEF@D@BCFG@ICC@EAIEKGCCGEBJCHAJAJ@HDHFJDR@NABGLGHA@MB[FA@M@K@ICA@CACAE@@@@@E@KBIBID@BEBA@CBCAEA@@CGCG@AEKACCGECECE@CBCDCJANAPBRANDNDH@@DHDFBHNTFFBF@PJEFDLFFBJDJHFJBFBD@H@BBD@FCL@@ABER@BCLCL@D@D@NAL@DBNDJDLFH@@HHJFBB@@LLHNJLDNBJBD@HADBD@BBDBBBF@FADABCFCDAD@B@BD@B@D@BB@JBDA@@@AAC@CBC@@BA@@@A@@ADC@CAAAAA@A@@A@ABA@AA@AAC@@B@BCBKFABAB@BBDJLBBABEBAB@B@BA@CBC@ED@B@B@DBHB@BHFLNPLPLNBBHLFLBHBD@FHPHP@@FJBDFHJHDBDB@@FFLHHJBFCJAD@@@BEDCBC@ABEDEDCBEFIFCHADCHEJ@D@HDFDHDF@D@FADCJABCFCDABEHKJILILMNIHAB@@GDGBGDA@A@EAICKE@AIC@@EEA@GGEEIGEEGEEC@@EAIGKCKAE@OBKB@@GBEFDH@HBFJFFHB@DFBFADCFCDABCBGBGDE@OEMECA@@KEA@OGI@KAIHCFCBEF@@AHEFC@A@CAAAGEAAAAC@A@ABABABDLBDCBIFE@A@CCAAC@A@@BAD@BCDABAB@JBFBBB@@A@CBAB@BD@FDBDF@DBBBBD@BADEHEFED@B@BD@F@B@BADKBABAB@DBDD@D@D@DAFADAFCDAFBF@DDDDBDBJ@D@DADADAH@D@BBBB@DAB@BBBB@DBD@@@@ABC@CBGD@B@D@@AB@FBHADADEHBFBDJFPJNDLDJ@PATA@@LCJEFGFGFELED@J@FBB@JF@BBDDHABEBAD@BBBJDD@BBDDB@DBJ@D@BBDDDDB@BA@A@ACIAAAA@CDC@AHCDA@BFCHAB@B@BBB@BA@AB@DBDBB@D@@@B@@DBFFHBBB@DBB@DB@@DD@@@B@BAB@BBB@@D@BB@@@B@BABBBBD@BAD@F@BB@@BH@B@@@FDDDBB@BCFCD@BBDDFFLDNAFGFEFGHGLDTBHBJ@N@JBLDNDJBDDFDHDDDFFJDLDJBHBFBFDHDJDDBDFHJJJLHHDDTPB@HHJDHHDHHLJLFJJNFFFFNDJALDH@NLLHNLNJFBPHNHTLHFLHFHDFDFNJLHBFDH@BAFABCBCBC@G@EFABAD@JBFBBAD@BBBBDBD@D@B@BDDBD@BBJ@PBDBBBDHHDBB@L@D@DABAB@FBLDD@DBHCHAD@B@B@FDFBFBB@NQFCBC@CDABCFADADAH@F@B@RGHCD@BAFBB@B@BABAB@D@FDFDFBDBD@FAFCHKFEDEDA@C@AAABCDE@A@A@AAACACEQQGGAC@ABABAFAPI@ABCBE@CBABAFAFABADCDA@AB@D@D@BABADA@@B@@BBDBD@BD@B@D@D@D@BBBBFFBBB@D@FABA@A@AACA@@C@ADABAD@F@D@FBBAB@BA@AAC@CAAEEACCC@@AEAG@CCEAC@A@C@A@AACGGCCIKAACCECCCOQCCAA@C@@DEHCDCDEBABAD@BAB@@A@AAEAABA@@D@JBB@B@BCBA@AAAOSGIMSAC@A@@BADBD@D@F@FAHCFAVKFAB@B@B@D@FBD@BBHHB@D@DAZ[LMBC@AAAAACAC@AACACAAAAA@CACOOAAAAIOAEAA@ABA@A@@@A@CAE@A@ABABABAB@D@B@BBDBB@B@B@JIFEFG@@@@BAD@BAB@BAB@D@B@DBB@B@B@DAD@B@B@D@D@HBBAB@B@@@BBBB@@IJABBB@@B@DAFC@@B@B@@B@@ABADAJ@B@@@BB@D@DB@@BB@@ABABA@@D@@D@JAFADA@@B@@@@BBD@D@B@B@B@D@@@DBBBDBB@B@FBB@@NLJJBB@B@BCBABAB@@BB@BB@B@FAD@BBD@@BBB@D@B@BBBFDBBB@B@@@BA@E@I@C@ABA@@DAF@N@J@DBB@D@DADEFCPEDALCJA@@B@@A@@@@EAACGGAE@CIBO@I@E@E@CAK@C@A@AA@CAOAGACAAECAAACAABABABATGB@JGFA@@BAHBH@B@B@@A@@ACCACA@A@ACGCCCEAEACEE@@ACAAECCAEEACCCCCCCACACBE@ABGDE@C@A@A@C@A@C@@AC@A@ADA@@D@DAD@B@DA@ABAAA@CAAAA@CACECQGAAAAA@GA@@AA@AACAAAACAA@C@C@EAAA@@CC@AA@@AB@@AAACACAGG@AAAA@AAAABG@@BAB@B@@@@AC@C@CAEAAA@CBC@CAAA@@@A@CBCBC@A@AAAAAE@@CCKEAAC@CBAA@A@AACAAA@C@@DA@AAAAA@A@E@C@A@A@@@AAGEA@C@C@CBABEAG@EDK@C@K@O@SHEDGFCBMHKBKAICGICQ@EGWGSIUEGKO@IDEHENCJIHOBODKFEJCLDH@BAFADCDG@A@KFMFIDKDGFMDUBOBKDIBIJENCF@J@FBJAHEBIDM@ECEAEMCGCCCAC@CA@@A@CBCAI@EACA@@AD@FAFADA@@@AAAA@AAC@A@ABC@CBABI@@@@ADA@A@@C@AAB@@CBA@E@C@ABA@@BCBAFCBCDC@E@EAA@AACECGAGAAACCEAC@@@AAKEECIGAAKIGKEACAICCD@AA@@@@@A@@BCAAB@DAB@BBBA@@B@AA@A@@DA@@B@@AB@BEABAA@A@@@BAAAAAKPSPCDGLKPMLA@ABG@CACCA@A@@B@H@DBDFFBBDH@BCD@D@BAD@BC@CBCCAAAA@C@C@ABABAA@C@I@GAKBC@AA@AAGEGCAEACAC@@@A@CAI@O@K@KEIMA@C@@ACCACAA@CA@AAEAAE@CBABCDABA@@@AC@EBABAB@@A@ACAGBC@A@AKGCCC@AA@@AA@@AAA@@AA@@AAA@AAA@A@@@@@A@@@@A@@@@A@@@@@@@@A@@A@@@@@@@@AA@@@@@@@@@A@@@AA@@A@@@@@A@@@@@A@@AA@ABID@BAFADAPEHGDA@ADADEDC@ANKLIHGHKBABEB@BI@C@I@GBC@A@KFIFGDG@E@CAEGGKGGE@@GC@AMOGKEOAQ@MCK@CCKAECECECA@C@EAA@EEEGGIGCIAC@CACAAAA@@"],"encodeOffsets":[[113286,27998]]}},{"type":"Feature","id":"431225","properties":{"name":"会同县","cp":[109.735661,26.887238],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@LFB@@@BABAEGAACACCC@G@C@EAA@ABADBB@@BBD@D@FDHB"],["@@LJFFFH@DBD@BAHCLAJ@B@JFLBFCDEDIAIBGBCDED@BENAHIDEAA@A@CAAA@A@A@@AA@A@@@A@@@A@A@@@A@A@@AA@@A@@@A@@A@@A@AA@@ACA@@A@@A@@A@@A@@AA@@@AAA@@@A@@AA@A@@AA@@A@@A@@CBE@E@CGAAAEACAG@@@G@C@CB@BBBFDDFDB@BBDCDGHABAD@FAH@B@D@D@BFBF@DBBBBDBDJFD@DAB@D@B@BB@@FBDBHD@BDDBDBBF@HBF@B@DBJHDDBBPJPFDBFB@@FABA@ADAB@FAF@FBFFADBHBFDBFDL@@@FBD@BBFBDDAH@DAFABAFAB@HAD@FAJCF@BCBOGAAA@@BA@EBAB@@A@AA@B@@@@@DBBBD@@BBAFAF@B@DDB@@BBDAH@B@DBDF@FCFAFFH@DAB@BEDCBCDCDEDCDCF@D@B@B@D@FADABIHABAH@D@DBB@BBDBHABIHEBAFF@D@F@D@DBAD@BEBC@EBE@CAE@@@AB@BA@@@A@@@@B@@@@AB@@@B@BA@@@A@@BA@A@A@AA@@A@@@A@@@C@A@@@A@GM@C@A@AB@@@@AB@@@BA@@B@@@BA@@@@B@@@B@@AB@@@@@B@@@BA@@BA@@@@AA@@@@@AA@A@@@CA@@A@@A@@AA@@@@@AAA@@@A@@A@@@A@@@A@@BA@@@AB@@A@@BA@@BA@@@AB@@A@@BA@AB@@A@@@AB@@A@@@EB@@AB@@A@@BA@A@@@A@A@A@@@@@A@@@A@E@EBA@@@AD@DDBJ@@@D@@@@@B@BAFA@@B@@@@@@B@@BAB@@@B@@@@@B@@@@@B@@@@@B@@@@@D@B@@@B@@@B@@@B@@@@@BB@@@@B@@B@B@@BB@@BB@@@@@BB@@@@BB@@B@@@@@BBB@@@B@@@@@BB@@B@@@B@@@B@@@DB@@B@B@@BH@DLPVGB@ZsRCB@HLBD@DBFBF@F@FAFCN@B@BAFJAHBFBJAD@@@FAHAD@D@D@JAD@D@B@BABA@@D@J@N@HGHEFGFGaOII@@@@W[UM@GHEDCF@FAHDHBH@JEFGHCB@B@@@HBL@JFLDHBJCB@DAF@LBFB@@LBBBD@DDBHBF@HDDB@DFDFDFFDPLFFBDBD@@DAJEL@LDJBHDHFDHB@DDJA@@HEJGHCFAH@HBFDFDFFJDJBDBD@R@PGLDH@HBJNNJDBTD@@DBFFDFBB@BDLBFBDJLDDJF^NDBNHLIGSI[DG@AJC@@DAPBTJFDD@XFZ@P@FA@@J@DCBAHIFIDMBC@C@ABA@@BKBA@C@EAKBAHEJ@F@D@F@RDH@D@J@F@FABAHEFIHCHIHCJAD@B@FDDDDJFJBBHL@@FJDJBFF@FIJGJAD@FEFEDADCFGFKBIFMHIHCJABAHEHGFGBIAEACACEEGEACACBEFCH@LBH@HBB@BBF@FAFIHAHEBADC@@B@ACAACE@AF@D@H@F@JBDAAAACA@EBC@C@A@CCA@CBA@GACAA@AAAACACACCAAIMEQEM@CACCEEAGBM@KEOGCGCKDGHINELIJKDEBE@IAECCCEGCGEGCECGAC@G@IBCAEAACCCEKGOAC@EAKAK@GCEACAA@A@@BEBCDCDGDAD@HAB@BA@A@A@CACAC@C@A@CDGDC@@BC@E@GBADEBCDABABCAACGAGAE@E@ABAFC@ABCBCAAAA@@ABCBA@A@A@@ADG@A@C@EAACA@@CAC@E@GDAA@ABAHGDA@C@A@@CAC@AAAAAEAC@A@C@@AEDADABADCB@JC@AB@D@@@@BBB@BB@@@DA@ABG@C@ADADA@@BC@C@CAE@AC@AAA@CC@AA@AAC@CBCBABA@A@A@CAA@A@EBA@A@A@A@AAAA@EAC@@AGAC@@ACAAAACCIGGGCCAAAC@AAA@C@@A@A@C@A@CBABA@C@G@A@@BCB@DFBDD@B@BA@C@CAC@CBAB@B@B@BADABGDEDABCBA@C@G@C@@FCBC@E@ABKBIAGAIAGECFEDIFEFEH@@BD@DBDBD@DAB@B@BAH@BC@E@EEGGCAIBC@CBEDCFAFABCDE@CAA@CBEBCDA@A@C@CAEAIEKC@ABC@CC@C@C@E@AB@BCBE@ABCDA@C@EAA@A@@BBFBB@BKDA@@B@D@F@DBB@BBBHDBBABABIFIHEBADCDABAH@BADAJ@FCDABAB@DFH@@ABA@ICC@CBCBEFCBCBA@@@KA@CAC@G@@@@SAAB@@AF@BABABA@CAA@ACACIICCAAAA@C@@EGIICEEAE@GFIDKDMFMFQJGBEBCBIBGDSAO@SACA@@IAIIGI@@CCAG@CEICGEK@GDE@A@ADCJK@@LG@@DADE@IAEGEKCG@EAECCAAAAACCEDIDA@I@E@GEEE@CDEBEAAA@C@@@GFABC@EAC@EBA@A@EE@AIDKFIFIJOJOJGB@@EBQDID@@C@GAI@IBIDABADBDHDB@PHB@BDBFADBF@F@BBA@@B@@@BA@@HE@@B@@@@@@CBA@@B@@@@@B@@@@@BAB@B@B@B@B@@@B@@ABA@@@@@AB@@@@ADA@@@@@@AAA@@@A@@@ABA@AB@A@@@@AA@@B@@@@ABA@@@C@@AA@@@A@@BABABAB@@BB@BBB@BB@B@@@BBBB@@@@@B@BBD@@@B@D@DBDB@@B@F@@@@@@B@@A@BB@@BA@@@BDD@@BBB@@BB@@BB@@@D@@@B@@D@@@@@B@B@BAB@@@BA@B@@BBBFDDB@@@@DD@@@B@@AB@BBBBB@@FBB@@@DBFBB@B@@@BB@B@@@B@B@BA@@B@@A@@@C@A@@@ABABA@EBA@AB@@AB@B@B@@A@@BAB@@@@C@A@@@@@AD@@@@@@A@@@@@@A@@@A@CAA@@A@AC@@A@AA@@@ABABCB@@ABCBA@C@@@@@@A@@AA@@@BA@@@@B@@@@@A@AAA@A@A@@A@@AAAAA@@@@@CB@BA@A@A@@B@@C@A@@BA@ABAD@@@@A@@@@@@A@A@C@@@A@AB@@AAAA@@@@A@@BABAB@@AB@@@D@BA@@BB@@BA@@@@B@@@B@@@@A@@A@AAA@AAA@@AAA@AA@CAA@A@@B@@A@@@A@@@@@A@AA@@ABA@A@@BA@@@@@A@@@@@@@B@@@@B@@A@@BA@@BA@@@A@@BA@@@@@@@@A@@A@@@A@@AAB@@A@@@@@A@@BA@ABAB@@@B@@AB@@A@IAA@@B@@A@@@ABA@@B@@A@ADC@@BB@@D@FABABC@C@@B@D@@@BBB@J@F@HANEPELGPEHCFINAJBFDHDD"]],"encodeOffsets":[[[112102,27480]],[[112130,27473]]]}},{"type":"Feature","id":"431226","properties":{"name":"麻阳苗族自治县","cp":[109.81701,27.857569],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MIMIA@OGIACAKCUEQAQAA@KDK@QAKAGGGEECECICMEOCMGMGIIGGAKJKHKBG@AACGEGCIAO@IBC@CBQDGDABABUNCBEFA@CB@@C@A@ABABA@@BAD@@AD@@A@@@CBC@A@@@C@CBA@EBC@@BA@@BAD@@A@CACA@@A@A@@BA@@BA@@BA@@@A@A@@@A@A@A@@AA@@B@@@B@@ABAB@@@B@@AB@BAB@BA@@BAD@@@BAB@B@BAB@BABA@@B@@@B@@@@BB@@@B@@BB@@@B@@BB@B@@BB@@@B@@@@BB@@@B@@@@BB@@@DB@@@BB@@BBB@@@@@@B@@DLFNFL@B@FBH@FCD@HCJAJAJCHENENAD@B@@BBDBHDHBD@@@BBBB@BABGFILGHQFKDC@CBEFG@ABAFCHABEBC@CBAB@D@JFHDFBFBJ@DBBDDFBDD@BHBBBJFBDBFDJDFDFHFJHDB@F@DADAJCFCDCB@BBFDFBDDDBBBBDBJ@J@DBFABC@ECIAGBCBAFAF@DBDDDDFHJFFDNFBABCB@D@BBBBBJDFFDBBDADA@AD@B@DDB@D@BE@I@AAI@EFADADGBEFCD@HDJFHLDHBBB@D@D@BB@FBBBBJFB@FADCB@B@BBDABA@ABABAB@DBBDD@D@BABABEDCD@B@FDDD@BFLBFBDBD@@B@B@DEDADBHFBB@B@BCBEBAB@DDDBBD@XBTPBF@JCHGFAFAFBDBFBB@DADEFABAB@B@F@DC@A@GBK@CBADBH@P@BBB@DBF@BB@BBB@@@B@@D@FDHBBFABAFADAB@D@D@FCDAF@D@BB@@@DAF@DFHDFDBHBHBB@DDBDFFFBBDBFBDBBB@FBD@D@D@DAB@B@DDBFDBD@FDDBDFBBDBHBDBBD@DADADEJCD@DBD@FDFDBBFBB@@D@B@B@B@HDFDBD@@@@@D@DCL@H@BABBDDDDFBB@BADABEBAB@B@@@DBDBDD@BB@@DAFADAB@BBB@D@D@FABA@BLBXF@@J@H@F@FBFDFBD@ACECCCA@AEAG@IBE@EEEGECAAKF@D@BADCFKHKBGBAB@DBDFDBF@LBJ@HBFBHFH@NBJ@HABCCEGI@ADAD@L@L@HCHGFELEJEDCLSHAL@DCFEJCFADAF@BBBF@FDDD@BB@BADA@@DBBDDFDHAD@D@FDFDF@JCDAF@@@B@B@BC@E@C@AD@D@DDDBBD@DCDBDBDFBDABCBADAFABCBEAO@E@A@ABAD@JHJHFBDAFEFGHAFCBCBECC@ACI@CBCD@JGJGBAFCFAH@LFXLHDBDBBDD@D@DBDFFDB@B@DAB@BCF@D@FCDCD@B@BBDDBBBD@H@FDDDFHFHDBFCBAAG@G@@HIJGBAFABC@C@CAEAAAACCAC@AACFIBAEGFODADC@@FCFIBABC@@@@BE@C@CCAECCAAABGBEAEACCAC@GBEBEDC@EDCDC@E@EAE@EAAAAC@ABIBEBC@CAEIMEEMQGE@@ECCAOCE@KACAUECAGCMC@@K@E@MGCAAAGAC@A@C@ABG@GEECC@EAK@C@ECC@C@ABABAD@DABBDBD@J@D@F@DABCB@@A@CACE@ABEBCBA@@A@@A@KMGB@DIBKACAG@ABGBGGBABGBCBCBA@A@ACAAAAI@CAAAAACAC@AACDA@C@CGACCCCACCC@AC@A@AB@DCDABCBCAEGKCAAC@CBADCBG@EAACCCBCDA@CABECCC@IBC@EC@ABC@A@@CACAA@O@EBEBA@@A@@A@ABCDABCBC@C@ABC@@C@C@CCC@CAA@C@ABC@AA@CAA@GEA@A@CAABA@C@AAIE@AAA@A@ADCAA@GAMAACCCE@C@ABABCHABEBCBADCBABABC@KAC@E@ADABAACAA@CFEAECMEMIGEAG@@K@@OAKFCDGHMJIBGAEAIEMCK@SCKCE@IEMC"],"encodeOffsets":[[112337,28283]]}},{"type":"Feature","id":"431227","properties":{"name":"新晃侗族自治县","cp":[109.174932,27.352673],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MO@AOOIIKG@@G@ABA@A@ABADAB@@@@AAAACGEG@AAA@A@A@A@CAA@AACAA@@A@C@A@C@A@@@AB@@A@AB@B@@@B@B@@@B@@A@@@A@CAA@A@GDEBA@AACAAAA@CAC@AB@CBADAAAA@CA@@C@ABA@A@A@A@ABA@A@ABC@C@EBCBA@AAA@CACBA@C@@D@BBF@BDD@@@BBBBBBDBDBD@D@B@B@B@BDD@@BBBDDD@@BDDFBB@@DBD@@@BBBBJBDBBH@DB@BDCDADEBE@EBM@@@E@A@CCAAAAC@EBAAECCC@@C@GBCBA@C@KAAAAA@AAACAA@CACCGGAAAAABAFAD@DCCAGACCAACACC@AA@@@@A@A@CAA@A@A@A@@BC@A@A@C@CB@BA@@DADABA@C@EACACCAACCAA@ABA@A@@AACA@@AA@C@CAAECIE@@OEA@GAIEGCGEA@GEGEGECECCAAEAKCCACBAACA@@EC@@ABA@AACAACDC@EBCBAF@DBDA@@@A@@BA@@A@@A@@AA@@@@@A@A@@@ABA@@@AB@@A@@@@@@BA@@@@@A@@@A@A@A@A@@@@@A@@@AA@@@AA@@@@A@@@@AA@@@A@@@AA@@A@@AA@@@A@@@A@@AA@@@@@@BBB@BB@A@CAC@AA@A@AAACAABC@@@A@@@@@AA@@A@@@@@A@@@@@AAA@@@@@A@A@@@@@A@@@A@@AA@@@AB@@AB@B@@@@@BB@@B@@@B@BBB@BBDB@@B@D@B@DADAB@BAACACACABABABABC@CAAAAC@@@ABAB@BC@AACAAA@@@@A@@@A@@@A@@@@@A@A@A@A@@@AA@@@@AA@@AA@@@@@@AA@@AA@AA@@@@AAA@@@AA@@@AA@@AA@@A@@@AA@@A@@A@@A@@AA@@AA@@@@@A@@AA@@@A@@@A@@@AA@@A@@@A@@AA@@@A@@@@@A@A@@@A@@D@BBBBBBBD@BB@D@H@B@@AB@B@@@@@B@@@BA@@BAB@@@BA@@@@D@D@B@BBD@@@@A@@@AAAE@@@@@@@@GN@BA@@@@@AABABABG@A@AA@A@@@A@@B@@A@@@@@@B@@@BB@@@@B@@@B@@@@@B@@@B@@@@A@@B@@A@@@@@A@@BA@@@A@@@@@AB@@A@@@CAC@A@@B@DA@@@ABCBCFADAB@DBBAB@@CBAB@@DBBB@@@D@B@@@B@@AB@@@B@@@B@@@@AB@@@@@B@@ABAB@@@BA@@@@@A@@B@@@@CC@AAAAAA@C@C@@@A@@@A@@@AB@@@BA@@@BD@BBBA@C@CA@@A@A@CBABAD@@A@AB@@@@A@@@@@AB@@@@A@@@AB@@@@AB@@@@AB@@@@A@@B@@A@@BA@@@@@A@A@A@AB@B@D@@@@@BA@@@A@@@@BA@@@A@@@CB@@@@A@AB@@A@@@ABA@@@A@@@ABA@@@ABB@@BBB@@@BB@@@B@@@BB@@@@B@@@B@@BB@B@@BB@@@@BB@@@@@BB@@BB@@BB@@@@B@@B@@@@BB@@@@@@BD@@B@DAD@B@D@B@BA@ABC@CB@@AF@BAD@D@B@@@BB@@DBB@BBD@D@@@@@BBDB@@@BBBBB@@B@@@BBB@B@B@B@B@@@BA@@DAB@B@B@B@BBB@@BABAB@BAB@B@B@@BB@BBBBF@@BDBDBBBB@@B@B@@@@@D@@@@@DBB@B@B@BADABABA@@@@@AB@@@BA@@BA@A@@@@@AB@@A@@@@@AB@@@B@@BB@@@@@@@B@@@@B@@B@@@B@@@BB@@@@@B@@BB@@@BB@@@@B@@B@@B@@@B@@@B@@AB@@@B@@@B@@@B@@@B@B@@B@@@@B@@B@@@@B@@@@B@@B@@@@@@BB@@B@@@@@BB@@@@B@@@B@@BB@@@BB@@B@@@@BB@@@@@B@@B@@B@@B@@B@@@@B@@B@@B@@B@@BBB@@BB@@@B@@@@BB@BB@@B@@@B@BB@AB@@BB@B@@@BB@@B@@@BD@BBB@BD@B@B@BCD@@@BB@@B@@DADAB@B@@@BBBB@@BBB@B@@@B@@@B@@B@B@@B@@B@@@B@@@BAB@B@@@@@B@B@@@B@B@@@B@B@@@B@B@B@@@B@@DDBDBBABA@ABCBAB@BAB@@@BA@@@@BA@@B@@ABAB@B@B@@@BB@DBBB@BBDB@@BABCAC@C@@B@@AB@@@@AB@@A@@@@@C@A@@BA@@@A@A@AB@@A@@B@@AB@@BB@@@@BB@@@@@@BB@@F@B@B@@@@B@@@@@@@B@@BB@@AD@B@@B@@@BB@@DB@@DBBBB@@@BBB@B@@BB@B@@@BB@@B@B@BBD@B@BBB@B@B@@@BB@@B@BBDBB@B@BB@@@@B@@@BBBB@@@@@B@@BB@@@BB@@B@@@BBB@@@@BBB@JAF@D@B@DB@@DD@B@B@@@B@B@B@B@BDBDDDBDDFB@@B@B@@BB@@@BBB@@B@@BB@@@B@@@B@@@B@B@@@@@B@@AB@@@B@@@B@@AB@B@BB@@@@B@@B@@B@@@@@BB@@@BBB@@@B@@@@@B@B@@@B@BA@@B@@@@@BABC@A@ABABA@@B@BB@B@DBB@@B@@@B@B@@@B@@@B@@BB@@@B@@@@BD@@@B@@BB@@@@BB@@@@BB@@B@@@@@@BBFDFBB@B@@@BB@@@@@B@D@@B@@BB@BA@@@@B@@@B@@@@AB@@@B@@@BA@@@@B@B@B@BA@@@@B@@@@@B@B@@AB@@@@@BA@@@@B@@A@@BBBFB@@B@BBB@D@@@@BHB@@B@@@@DBBBBBB@@@@@B@B@@BBB@B@F@BAF@@@DBB@@@BCDCLEJ@FAFCN@DB@BBDBDBB@B@B@DCBEBEDCHAHCDAF@@B@@@B@FBDBDB@BDDBB@D@D@@ABABAD@@ABBB@B@@@FDBDB@DBB@H@B@B@B@@@@B@@@@AB@D@B@B@BA@@B@@@B@@@B@@@@AB@@@B@B@@@B@@@B@@@@BB@@@B@@B@@B@@BB@@BB@@@@@@B@@@@@BAB@@@@AB@@@BA@@B@@@@AB@@@B@@@@@B@@@BB@@@BB@@B@BB@@@@B@@@BB@@BBB@B@@@BAB@@@BA@A@@BA@@B@@AB@@@B@B@@@B@@BB@B@@@@@BBB@B@BB@@@@DB@@B@BB@@B@@B@@B@@BB@B@@@@B@@BB@@B@@@@BB@@B@@B@@@B@B@@@@AB@@@@A@@@@@A@@@@BA@@B@@@B@B@@@BA@@@@BAB@@AB@@@@AB@@@@@@AB@@BB@@BBB@@@B@@@B@BB@@B@@@B@BB@@B@@@@@DB@@@@BB@B@@@@@BB@@B@@@@@BB@@@@@@BB@@@@BB@@@@@@@BB@@@@B@@@B@@B@@B@@@B@@@@BB@@@@@BBB@@BB@@BB@@@@B@@@B@@@DBB@B@@@BAB@@@@A@@@AB@@AB@D@@ABA@A@A@AA@@ACAAC@AA@@AA@@@A@@@A@@@@@A@AA@@A@A@@AAAA@AA@@AA@@@AAA@AA@@A@@@A@@@A@@@A@A@@@@@A@A@@@CB@@ABAB@@@BA@@B@B@@DFBD@@@@@@BB@@B@@BB@BAFIBA@@DAB@BB@@AB@B@BBF@B@D@B@@@BBBBB@@F@B@@DBDBDHDBD@@@BBBBB@BB@@B@@BB@@BB@@@@B@@@BB@@B@@@@@B@@@B@@@B@@@B@B@B@@@B@B@@@BBB@@@@A@A@CBABA@AF@@@BAA@@@@A@ABE@C@GCEEM@EBC@@H@JBF@HJHFNJPNHJJJFFLBL@DCDEDEFGBAHCJCHAH@BABADC@C@E@EDEHA@@F@FBDDFBHDDAJBD@FBJALBHAH@@@PCLCFALCPGRIHEDEBABEDKAOBMBKBEBABCBCJIB@@@@@LELGDCFCFCJEFANEJAH@D@NDD@@@F@FC@EAGCCACBE@@DAJ@JBJAJAJE@AFEAEAGGEIEKGKEAGBGHIJKJKDCDAJGHCBEBI@GGGKCKEEGEMBIBE@AB@@@@CFODKDEDIBG@ADI@A@C@@AA@CCIA@@AAA@@A@AA@@CA@@AA@@A@AA@@A@@@@AA@A@@AA@A@@@@@A@@@A@C@A@@@A@A@AA@@A@A@A@A@AA@@AA@@AA@AA@@@@AAA@@@A@A@@BA@@@A@@@ABA@@@@@A@@@A@A@@@A@A@@@A@BB@@@@@B@B@GC@@E@C@CB@BBD@H@@A@A@@@A@@AA@A@@@A@@@@AA@@@@@@@AA@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@A@@@A@@A@@ABC@AA@ABEAG@AB@BBD@BADABCBA@AB@D@@AA@@@@AA@@@@@A@A@@@@AA@A@@@AA@@AA@@@@@A@@@@@A@A@@@A@@@A@@BA@A@@BA@@@A@@B@@A@@@A@AB@@A@A@@BA@A@A@@@A@@@@@A@@@A@A@@@AA@@@@A@@@@@A@@@@AA@@@A@@@A@@@@@AA@@A@A@@@A@@@C@A@A@@@A@@@A@A@A@@@A@@AA@@A@A@@@A@@@A@@@AB@@A@@@A@@@@@A@A@@@@BAKC@@G@A@M@KAM@IA@@A@OGUGO@IDGFADABCHAL@@CLIDGBKEGCGICGGKCKGK@@IKAA@AAAAAA@@AA@@A@AAACA"],"encodeOffsets":[[111832,27759]]}},{"type":"Feature","id":"431228","properties":{"name":"芷江侗族自治县","cp":[109.684629,27.443499],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@UHKO@CAG@@@A@AA@@C@@@A@@@A@@@AA@@A@@@@@A@@AA@A@@@@@AA@@A@@A@@A@@@@AA@@AA@@@A@AA@@@@@AA@@@@A@@@A@@@A@@@A@C@@@@@A@@@@@A@@@@@A@@@@@A@@@A@ABB@@@BB@@@@B@@@@@B@@@@@B@@@@@B@@@B@B@B@@AB@B@@@BB@@@@@@BB@@@@@B@@@B@@@B@@@@@B@@BB@@@B@@@B@B@@@BAB@@@@A@A@@@A@A@@@A@@@C@@@A@A@@@A@@@@@AAA@@@C@C@A@@@A@AB@@A@@@A@@@ABAD@@@B@B@@BB@@@BBB@@BB@@B@FABBBDAFA@E@@@GCABADBDBDB@F@@@@@@@@B@@@BABABCH@B@BB@BBFBBBFDBB@@@@@@@BBHDF@BBD@J@HKBKAGCGGEICGICE@EBGDKH@BEFAJADCHELAB@@@B@D@B@@@@AB@@AB@B@@A@@@A@@@A@@@A@@@A@A@A@@@@@A@@A@B@@@B@B@@@B@B@@@B@@@@AB@B@@@B@@AB@@@B@B@@BB@B@@B@@BBB@@BB@@BBB@B@B@B@@@BBB@B@@@B@D@B@@@B@@@@@B@B@@BB@B@@B@@B@@@BBB@@@BB@@DB@@BBB@@@BB@BB@DJ@DBB@@@D@BCJ@BAHCJCFCLEP@D@@A@@BAFAJFNFHLFLDHH@HAJAFGDIHCBCDILILGJAHBHLFLHJFHFBHBFEF@BIFIBIBIAI@CB@@AFBDDDBH@FEDE@@@C@MCC@G@IBMFEBIFEDEDCDKHKF@@@@A@IJADADABAFALANBPCLAFABCFGFQJOHKDEBKDODLBFDFHBHAL@J@D@JAFAJABAJ@NBHBDDD@BLJNHDBDDFDLJLJLFJHDDPLJFNNJFJHHDJHJDFDHDJFJBLBBAD@HCLCLBBDDDFFFFFHB@@@B@B@@@B@B@BAB@@@B@B@B@BAB@B@B@@@@@@BB@@B@@@BB@@B@B@@@@BBA@B@@BB@B@B@@@B@B@@@B@@AB@@AB@@AB@B@@@DBDBB@@@BC@AB@@AD@FAB@DAD@@@B@D@DA@@B@@@BC@@BC@AB@BABAB@D@@@DAB@FEDAVMBABAHCRCDAD@JAP@JBHDHFBD@BAHGLILBLHHJJNHNHPDNFJDFDFDHFHHLBRBL@LCB@RBRBVFLDDBJBPHB@NJNJNDJFF@LDTDL@NDJFFBHBJANIHGDCLEPB@@BCHIJIFGDAFCLAPCLBD@B@BBJF@@DFFJHNBFBHBHBFBDB@D@H@LILIDCJMDC@@BAFEDGDADEDG@EGQGI@ABADGJGLGBAHCFCJCFCFGBI@G@CAG@GAACEAAE@E@AAGGAAACAC@CAG@I@A@AAAEA@AC@A@@BAB@B@DDLBF@DCBABC@CAGAAA@AAA@CAAGE@AAAC@C@C@A@C@A@AAECAAAE@A@@BADCFAD@FE@AAAABGBCBA@@A@@@IBA@@@C@C@G@AEA@A@G@CACACAAAE@ABAD@DBDBDBF@D@DADCBAACBAHMBEBEDCBG@A@@@CAECQAI@ECAAC@A@AJODEBG@CDAB@@E@CAGAEECA@AAEAACAE@E@GAACAC@C@A@CBEDAFAFCBEBGBCB@B@B@B@BA@C@KAE@EAKAAAEAE@AC@@@AB@BCBA@CAAAAQGECIEIECCCACEGKCACCECECAACEAEAI@A@CAGACGEGCCC@A@CAEDCHBF@F@B@BC@EBAB@B@HAD@@ABBB@DBHBB@D@EKBC@EB@B@ACCI@@AACBC@ABCDADAAGCCCGCEAAAECCBMB@BABEBMFO@MAGCEIAA@A@AA@ACEIAACAIAEAI@CAAEFEFCFIDOBG@@@CBCCOGMEEACGEKCC@CAEAK@ABA@EBABCBBD@F@DC@GECCCA@ADE@CAEAC@@CE@@@@AA@ACCAA@CBC@A@@A@A@AD@F@D@F@D@BAB@BCBCACACAAEFEBEBEDABABEB@@CACC@EAGCCCAEBA@ABCDCBC@C@E@A@@AA@CBCAA@AABABC@ABC@ABAABC@AA@A@@BC@A@EEE@CA@A@AACEBE@AC@ADE@C@AA@@@@@EFCDCBABABA@@@AAAC@AAA@BA@ABGBA@A@@A@A@ABABABAB@AAAC@CACA@A@A@AAA@CB@AAAA@CBCD@@ABADCBCBAAACCABACAC@CBE@CCAC@@A@AAE@EBEBCBABCCC@GAG@CA@ADCB@H@DABA@A@K@@@A@@AA@@EA@@C@A@A@C@@@EAAC@C@A@A@ABE@A@ADMBE@E@EAEAE@CACGKA@QDYtA@"],"encodeOffsets":[[112136,27748]]}},{"type":"Feature","id":"431229","properties":{"name":"靖州苗族侗族自治县","cp":[109.696273,26.575107],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@DEDADAF@FBHDLBJBT@BAH@DANCPEJCHBB@DBFBFJJHLF@@JBFHCDAJCHA@BHFBH@DEJAHAB@NEF@F@BD@DBF@NBD@@BBBFLJLFBBFFJHJFB@DBD@LDPBLAHAH@P@@@H@J@@@L@FADCBG@IBE@AHADBBB@@BBDBD@D@DBDB@AD@BCB@@@@AB@BA@@@@A@@@@@BE@@@AB@@@@@@A@EAEBCAEACA@OGA@GCACBCBAJCJAJ@HBD@@@JCRCFA@@HAPIPIJIJELEJC@BFFB@B@FAD@FBD@BAHE@@D@B@BBAFCF@DFFHFF@J@B@JCFCDDBBBBDBFDFBH@LDHFBF@JCFCB@@KH@@ILCD@B@BCF@HFLDHFJ@DBHDD@@HJJJJB@@DBTBP@TBHCJADAFAHARINENELCJCHEF@FBDFJJFH@@@DBBBBDDJJBDBDB@DBB@BABA@ABE@@BATB@@@@@HBD@DLB@@B@DADAFEDADAD@JDB@BA@@EG@CBABADC@EBIBC@ABGBADCBCFAJGJEBABAAAGCAA@AAA@C@E@C@AB@LC@AAAAE@AB@B@FBD@B@DCBAF@DA@ABAF@D@D@D@@DAD@BLDJFFBDBD@B@B@DCFADAB@DBF@DCBABEDEFCDAD@JADBHHFFF@D@@ABG@A@ABA@CACAC@CAC@@FGFEJEFCDECEAEACCCCAA@ECKD@@ABO@K@GCIEGEAG@I@CACCAA@EAO@QEMEOCAAECEOAE@GCG@CAAGCE@GFK@GAEIAI@G@@@A@@@A@@BA@@JKPIFELIPK@BDBBBB@B@@@BA@CDCDCDCDCBA@ABAAA@ACCCAEC@CAE@C@CACAA@EBE@C@C@C@AD@BAB@D@@@B@BBB@B@BADCDAB@B@DCDADAF@DBBABG@A@AI@EA@A@CACGC@@@@@ABABAB@BA@A@A@AAACA@AACAA@A@ABC@C@CABA@@AA@AEGAICECACEKCIAG@EAE@AAAIAIAG@ABAACG@C@EAGA@A@E@CDIAEBC@AEGGAAC@E@EAC@@@@DBBABCBCAEA@@IGGWAAICA@EGCCIEA@EBCFCDAB@JBJBJALCJGNEHGFCDG@MCIGEGCECIAKEGEIEGKGKIMGKMOBI@@@C@EGCE@A@@@ABCHCFCBAAAECCC@A@ABAHAD@@A@@@EACAA@AGGCAAAIC@BA@A@GFCB@@@BDDJF@B@@@B@BCDA@CD@@@DBB@B@@ABADC@I@G@G@EBCDGDEBEBC@CFEHC@GAAAK@@C@AAE@CCAE@IBGDEBCAECAIBGFKFEDE@E@GACEMKKEKGGEEICICGEIKECCEGEKGKI@CCIAM@IEIIGAAAAEEEECEACICEDG@G@IACCCAEGA@CAEAA@C@IFIDI@ICMCAFBHBDBB@@ADBB@B@B@D@@DBDDBBDB@DDD@BBBDDDBBBD@DBABABABAFAB@@ABABADAB@B@@@@@BABA@@@EBCAA@CA@@@ACAC@CC@@AA@@A@@AAAA@@@A@@A@@A@@A@@A@@@AA@@@@A@@A@@@@AA@@@@BA@A@@B@@AFA@AA@@AC@A@A@@@AACA@A@AD@B@@A@AI@C@CACAAAA@C@ABE@ABC@@@A@@@@@A@@AA@@@A@@@A@A@@@@@AA@@A@E@IAGCECIEECE@I@KBG@GAAA@@@@A@@A@@A@@@AA@@@@@@AA@@A@@AA@@@CA@@A@AA@@A@AA@@@AA@@@@AA@@A@@@@@AA@C@@@@AA@@@AB@@@@AA@@@@A@@@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@@@A@@@@@A@A@@@@B@B@@@@@@@B@@@B@B@@A@@B@BA@@B@B@@@@@BA@@B@@ABAB@@@@@@AB@@A@@@@@AB@@A@@@AB@@A@@@A@@B@@A@@@@@A@@@@BA@@@A@@@@BA@@BB@@B@@@@BB@@@@B@@B@@@@@B@B@B@@@B@@A@@@A@@@@@A@@@A@@@A@C@@@A@@@A@@@C@@@A@E@@@A@@@A@@@A@@@@@A@A@@@@BA@@@A@@BA@@B@@A@@BA@@BA@AB@@@@A@@@@BA@@@@@@@A@@@@@@@A@@@@AA@@@@@A@@@@@A@@@@@AA@@A@@@AA@@A@@BA@@@A@@@@@A@CHKRENERAHBLDFFHJBHBFBB@FDDFBDBH@HDNBHBFBBFHFJBHBDDHDH@BBBFRBNDLFJFHBBFDDBHFLHPJLFJDBBB@P@HBHDHFBD@DAD@BGBEBG@EAEBCF@F@FBF@BLJNJJJHFDHAF@DAFADADCJ@HDHH@FBLFJBFFFFDHAR@BCRCJEHEDEBDBBDBB@BC@@@A@@BA@A@@@@AA@@@@@A@@@@A@@A@@@A@A@@@A@@@A@@@A@A@@@DHDD@FBD@@@B@@@BA@ABAH@@BBBDB@@B@BBL@B@BA@EDED@BAF@DADA@@@ADAB@HAFAFGHGDIDGJAF@F@JCLAFCBGAEGGCCEECIA@@GDGBGDIFED@@GDIFCFADCBCHGLIRGJCLAFLFD@"],"encodeOffsets":[[111915,27343]]}},{"type":"Feature","id":"431230","properties":{"name":"通道侗族自治县","cp":[109.784412,26.158054],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HCHBHDFDD@F@DA@@HCNGFCL@LDNJB@FHBBBBHFHBJBHADGBIAI@E@ABCJEJALAFEBC@CEGAGDEHAHCNEJ@LBRFB@BCCIGQGQAO@KBKFEFAPEBAXENIAODOFIDIAG@EGIAKAMAK@OAE@@@@@CCCAAGCCACACAAAAEGICEAACCAAACBA@CDABAB@DA@ABC@C@AACBADABABC@@@CAAACEGAC@CACBE@@FGEEEGCAEEEGIKAIAICICGCGEEECEGGG@AEGMKACGECAKIKCKEICEIII@ACQAG@AAICOCQBI@KAECCC@GEECCICGCG@@@I@ICQAC@@CIEQGOACAAIE@@OCODIBE@MFOHKHA@GBKAECGEGKAEKQESEIEI@K@EDELID@FALEJE@ABE@EAIBC@KDGBIJMBAFEFIFMDMAIAGCGCEISCOAGCCIEMEC@QGEAKA@@IJIHC@CBAB@@@BBH@HBD@DBB@BA@A@CAC@KAA@C@G@C@GAGAK@AAGAMCEBMFC@ECKEC@G@A@GC@@C@G@@B@BB@AHBBD@BBCBKJABBBDFDDD@FADCB@@BBBA@@HBB@BBB@BABABCBEBEDABAFADED@DBBBHBD@D@@@B@BFDF@BBBB@D@DAB@BDDFF@HAD@FBDB@D@DCDCH@DAD@DABB@B@J@BDBBBBDDFBFDBFFBBBDAD@DJLBD@DED@BCD@B@D@D@BA@ABCBC@C@CBADADCFABC@C@CCCAAC@A@C@ABAACAAAACAC@CAEBC@@@@DBJ@D@BCBC@C@C@CDABCDCBC@C@CAEAC@E@A@G@CBE@EFAF@L@F@B@B@NCHKHIDQCEAGCMKGIIIECECSEK@I@C@SBK@QCGGCACMEMCCGAKCI@KB@@IDEFBFAFADIFEDEJCHKHGDGBAH@DAJAHAF@@@@@BA@@@C@@@@@A@A@A@@@@@A@@@@@A@@@A@@@A@A@@@@@A@A@@@AB@@A@@@A@A@@@AB@@A@@@A@@BA@@@A@@@@@@@AB@@A@@B@@A@@@@@@BA@@@@@@B@@A@@B@@@B@@@@@B@B@B@B@@@@@B@@@B@@@B@@AB@B@@@@A@@B@@@@@BA@@@@B@@A@@B@@AB@@@B@B@@@BB@@@@@BB@@@@BB@@@@@B@@@B@@@B@@@B@@@@ADBB@@@B@@@B@B@@@D@@@BAB@@@B@@@B@@@B@@@B@B@@@B@@@B@@@B@@@B@@@@@B@B@@@B@@@B@@B@BADCDCDCDCDADADABBADAB@BBB@@B@B@@A@@B@@@B@@@@@B@@@@@BB@@@@BBB@@B@@@@B@@BB@B@@@B@@@B@D@B@@@B@@@B@B@@@B@@@B@@@D@@@BA@@B@B@@@@@B@@A@@BB@@@@B@B@@@F@@@D@@@B@@@B@B@BAB@@B@BBDBD@D@B@DBB@BBDDBBBDD@B@F@DBF@D@B@BABABCBEBCB@BAB@@AB@@AB@@@@AB@B@@AB@@@B@@@B@B@BA@@B@B@@@@@BA@@@@@@BA@@@@B@@AB@@@B@BA@@@@B@@AC@A@AA@@ABA@A@A@@A@@@@A@@A@@@@@@@@@@@AB@@@@AB@@@@A@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@AB@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@AB@@@@@@@@@B@@@@@@@@@@@@AA@@@@C@AA@ACAABA@ABA@AB@F@@AD@@@B@@@@AB@BA@@B@@@@@@@BA@@@@@AB@@@@AB@@@@A@@B@@A@@B@@@@AB@@@BBDBBB@BB@B@BBBAB@FAFCFABA@@BCBABADAD@D@DABAB@B@@@@BBB@B@B@B@B@JB@HCFE@MFKFEHCHCLEPEP@JFHFFFJDDFNFFNDJDJ@JCJED@B@FBDBB@FHDBDDJBH@H@FCJDBDDFFFFFBBBBJHFJ@JBNDJ@DLJLHHFDFFDJLHFJDJDFFHHFLLLFNBD@H@FCFEFELAHBJFDDBFAHCJAF@DB@DBF@B@DL@BBHBD@FGDED@FAFAHCDCFAH@H@J@D@BCBA@@@AAA@C@@DCB@DC@A@A@@@AIECC@A@@DAHEB@B@@AJDBBDBHH@BBBBD@F@@@BC@GBAB@B@BDDFDBBABEDGDAD@B@@@BDFFHD@@@J@PALNNHLJLHFHFJFHBLDJDFFHJHNDH@DCHEFGHMDIBKAIAI@IBADCDEFAB@JFDDFHB@JDBBHXJH@@FBDBDABAAA@C@@D@FBF@D@BBHHBFD@FAJBDCF@B@B@BH@F@DDHBBBAH@JBJBBB"],"encodeOffsets":[[112493,27101]]}},{"type":"Feature","id":"431281","properties":{"name":"洪江市","cp":[109.836669,27.208609],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CC@GAEAGCCC@AAKA@@EAKAE@CBA@IDGAKCIEK@GA@@A@A@GDEHIFG@GAGCEBE@CDGF@HVNX\\@@@@JJbPEHEHGFGHM@I@C@@@ABABA@C@C@IBC@C@C@GBEB@@C@IBEAGAIB@B@B@B@DBDFB@@D@B@B@D@@@FB@@BB@@@B@@@L@BABCBG@A@CD@BDBH@HBD@DDBADAFAFAF@BBB@@@BDDDF@DAD@DBABDBBDBBDADABCBA@@DCDAB@BB@BDAB@BBB@B@B@BD@DBDBBA@ABABAB@B@B@BB@B@HABAB@@ABB@BBDBB@@B@BABADADCFE@@@@B@@B@DCF@BBDF@FABD@B@BDBF@FFB@D@@AB@B@@BADBBBAD@BAD@BABA@BBBAD@DBB@@@B@F@DADCDAD@BABBFDDHDFBD@BD@DA@AFABCBAFAFEFBFDBDBDBDA@ABA@A@C@E@C@EBCB@B@@@@BAD@DBBDD@BBB@@@@DF@@BDBF@DCF@BDBDDHFD@@C@EACDABAFAB@BAL@FBDBD@LDHFBDFFHNDPAD@D@@AHCPEJEDEFBFDBJ@FBJBDBBBFJBDB@@B@BBBFJHDNBP@NEFABA@ANADAFDBBFBHDDDHDBBBCDCBAD@DABB@@DJBDA@A@FHBBBB@@F@@@DB@BB@DDD@D@DADAD@@BB@AB@BE@@DB@DB@BDDDBFDDFDBD@D@BA@AHCFED@BBB@@ABADI@ABGDEFK@ABA@A@@DAFAB@HAFEDABAB@@@BDD@B@DBD@BADAHEB@@@BDBBBBB@@@BA@A@ADABBD@D@NEB@D@@BB@BB@D@@C@C@AB@D@DDD@@LBD@FDBBBBFANCBC@ABAB@BBB@BBB@D@B@@ABABAH@BABC@ABCB@BAB@D@DAB@DADEB@BBB@BBDBBA@ABAB@HDD@H@HBBBDAHCB@@@DDFDBBBBB@D@@BBB@B@DB@DBHBBB@@@@@B@BADBD@HABAB@B@D@BABA@E@C@EBKFA@DD@B@D@BB@BABCBAD@@BABCDA@BBD@BBFFDBD@DBD@B@@BAFBDBBBDFDHBBBB@FFBBB@@B@BA@DDBBDDB@DBB@@BBBBBD@D@D@DDB@D@BADED@BB@BBBADDD@J@BAJCBCBABAD@B@@DH@BBDDD@F@@@@ADEDCDADAD@DABBDDFDHBF@BBB@DD@FBDAD@HGDABBBD@FHHBBHBDBFD@@DDLNCD@DFDLFLDH@BBBBBBDBDDDBLHDBFB@B@BABCBAB@BBBDB@BABCAA@C@C@CBC@@B@@DDD@F@B@@BCD@B@DBBBBDBFJ@BBBD@F@DABCBABA@AAAIBC@A@AABAFCF@J@D@BB@BBDB@@DABCDAB@BBBD@F@HEHGBCAAAC@C@CDAFBBA@A@A@A@AG@CA@A@C@AAAA@CAA@AA@A@A@AB@@@D@HA@AAAE@BA@AFAD@D@DDF@DCBABCDAB@DADA@ABCBC@A@A@GBCBC@CAGA@ECEC@A@A@AB@B@DDB@D@@AAAA@A@AA@@BCDA@@AI@E@ABAB@F@BBBBBBBBDBBDBBBBB@D@B@D@JBD@D@D@@@@A@AB@BBBBAB@BBB@BBD@@B@@A@AB@DDB@BA@A@A@ADBB@BBDHAB@BBB@BBBAB@DBBB@F@BB@@@B@DBBH@D@BA@ABA@BDHBB@DBBB@B@DEDCBABABABCB@B@BBHBD@BABCBAB@BBDBD@H@DBBBALBDBBDBD@B@BABC@ABADBFJBBB@B@BA@A@CF@D@D@@ABA@A@AFAB@D@@B@@BBBB@BABA@@B@BBDBD@@BB@BBFB@B@BAFCBC@ADADCB@B@F@F@F@FA@ABCBGBEDG@@@A@@BAFCFAH@F@H@FBB@JBLCFCB@HAFATFB@LBHBFBDBFB@BBD@F@BBJ@JDDJ@JEFG@ADCHKFEHGB@DBD@@OAEEEMSAGCECG@@CGCMBMAQBOBMDIDCDAF@FDFDDHBDFL@BDHDH@@FBDBDAB@FA@AJCJALAF@@@@@F@DBDBB@JDL@N@B@\\ENAB@HGHKBA@MCQEICG@GBIBIDGAIFGEEEGGIKGMGUGSGOGQKIIEO@M@GAOCO@@GGCEOIIC@@E@@@U@OFOHGDIFEBIDABCB@@CFGDCBABC@C@A@AAECAACAAAACAAAEAA@@AAC@EACAACCEAG@EBGFOBE@EAC@A@AEE@AACCCGK@C@C@CAAACCAAAC@OD@@@B@B@B@BABABCBC@K@CAG@CDA@ADABCDAB@BAB@@AACCGEA@A@A@ABABA@CAECGAKCGCMCMAE@A@CAGAA@GECEGICAAA@@KGAAGEOGWGKGEKCEEKFKHCDCFCDIDKAA@ACICMCKGEOCMCOEWKACECAAAAEE@@AECGAG@GA@@GBEDGBE@E@K@CACA@ACACAA@CCBIAE@G@C@E@@BDFBBBDA@@@CDABGFGBEJEBE@AAA@GAG@KAG@EDAFBDBDHFFFBDBDBFAJEHGHGFABIBGDGJENAJELEHCDCBEFEFC@IBIHEJE@AECIEI@@GKAAEICICCECA@C@IBGDGJGDEJGFABEBE@I@C@G@QCE@C@E@I@GFABBL@F@DABAL@@AB@B@DADCNEJGJABCDI@@@EBO@Y@WEC@ECSIOACB@@ID@BCHJ\\HTKJMGCA]MIECCIKACAECK@AAACEEECA@@SCCAMIIMGAG@KCOHQ@C@CAIAICEEECECGAG@EBGDIHGF@@IBCCA@CGGEGCIAKCK@IFCB@@ACACEEOKECCECECEA@"],"encodeOffsets":[[112288,27710]]}}],"UTF8Encoding":true});}));