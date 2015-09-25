﻿/*
 ***** ACTIVE SUBDOMAINS
 * ***********************
 *
 * for the moment the following subdomains are active
 * file a pull request to add your own GitHub Page
 *
 *
 **** README
 * ***********
 *
 * KEY:         The subdomain you request (e.g.: "foo" would give the custom domain "foo.js.org" ).
 *
 * VALUE:       The regular domain provided by GitHub (e.g.: "foo.github.io" for a User-/Organisation Page
 *              or "foo.github.io/bar" for a Project Page).
 *
 * CLOUDFLARE:  JS.ORG uses CloudFlare as its DNS. By default CloudFlare redirects all requests directly to
 *              GitHub. But as an opt-in you can make CloudFlare proxy requests to your subdomain
 *              to get SSL support (https://foo.js.org). Just add '//CF' in the line of your requested
 *              subdomain to give me a hint. (CloudFlares caching as a CDN is bypassed by default)
 *              This isn´t widely tested and may have some unforeseen drawbacks!
 *
 * IMPORTANT:   To authorise yourself as the owner of the GitHub Page you must have added a valid CNAME file
 *              (with the requested domain, e.g: "foo.js.org") to your repository before the pull request.
 *              The requested subdomain must match either your GitHub username or the name of your project
 *              repository. Execeptions are possible for the sake of clarity (e.g. if your project has the
 *              name "foojs" you can request "foo").
 *              Before you start a request for your personal fork of "jquery" or "angular" you should read
 *              the section "naming conflicts" in the wiki!
 *
 * NOTICE:      It would be nice if you could keep the alphabetical order.
 *
 *              Because of the risk of abuse I´m not accepting requests for pages without reasonable content!
 *
 */

var cnames_active = {
    "": "js-org.github.io" //CF
    ,"7anshuai": "7anshuai.github.io"
    ,"8art": "erayarslan.github.io/8art"
    ,"akase": "cedmax.github.io/akase"
    ,"akashacms": "akashacms.github.io"
    ,"algebra": "nicolewhite.github.io/algebra.js"
    ,"alt": "goatslacker.github.io/alt"
    ,"anenth": "anenth.github.io"
    ,"anggao": "anggao.github.io"
    ,"angularstompdk": "davinkevin.github.io/AngularStompDK"
    ,"annotate": "taitems.github.io/web-pdf-annotation"
    ,"annoyingmouse": "annoyingmouse.github.io"
    ,"argo": "albertosantini.github.io/argo"
    ,"astral": "espinielli.github.io/astraljs"
    ,"astrobench": "kupriyanenko.github.io/astrobench"
    ,"autodocs": "bguiz.github.io/autodocs"
    ,"avi": "avinassh.github.io/avi"
    ,"avner": "avnerus.github.io"
    ,"awal": "awalGarg.github.io"
    ,"badrudeen": "badrudeen.github.io"
    ,"barcelona": "barcelona-js.github.io/website"
    ,"begin": "advanced-webapps-class.github.io/begin"
    ,"biu": "aprilorange.github.io/biu"
    ,"brandonmerritt": "brandonmerritt.github.io"
    ,"brum": "brumjs.github.io"
    ,"bub": "dar5hak.github.io/bub"
    ,"burst": "hugeen.github.io/burst"
    ,"cable": "whatgoodisaroad.github.io/cablejs"
    ,"calcy": "odevlord.github.io/Calcy"
    ,"campinas": "jscampinas.github.io/campinas"
    ,"cartodb-demo": "opensas.github.io/cartodb-demo"
    ,"chrislaughlin": "chrislaughlin.github.io"
    ,"chrismendis": "chrismendis.github.io"
    ,"chronos": "espinielli.github.io/chronos"
    ,"clockwork": "arcadiogarcia.github.io/Clockwork.js"
    ,"codemade": "codemade.github.io"
    ,"collegequest": "schoolhouserock.github.io/CollegeQuest"
    ,"comixngn": "seun40.github.io/comix-ngn"
    ,"concursos": "mteyss.github.io/concursos"
    ,"construyendotrabajo": "mteyss.github.io/construyendotrabajo"
    ,"cordova-multiplatform-template": "ckgrafico.github.io/Cordova-Multiplatform-Template"
    ,"cote": "dashersw.github.io/cote"
    ,"country": "growmies.github.io/countryjs"
    ,"cqrs": "adrai.github.io/cqrs"
    ,"crunch": "vukicevic.github.io/crunch"
    ,"cucumber-mink": "adezandee.github.io/cucumber-mink"
    ,"cycle": "cyclejs.github.io"
    ,"date": "matthewmueller.github.io/date"
    ,"daysfromnow": "pedrokost.github.io/daysfromnow"
    ,"dbo": "z3ta.github.io/dbo"
    ,"deck-of-cards": "pakastin.github.io/deck-of-cards" //CF
    ,"delegacias-fortaleza": "juliosampaio.github.io/delegacias-fortaleza"
    ,"dgelong": "alexeyraspopov.github.io/dgelong"
    ,"dinesh": "dineshondev.github.io/dinesh"
    ,"distillery": "achannarasappa.github.io/distillery"
    ,"dns": "js-org.github.io/dns.js.org" //CF
    ,"documentation": "documentationjs.github.io"
    ,"domtastic": "webpro.github.io/DOMtastic" //CF
    ,"du": "ruanyl.github.io/du"
    ,"dutchakdev": "dutchakdev.github.io"
    ,"elf": "elfjs.github.io"
    ,"elliot": "elliotboney.github.io"
    ,"ember-cli-page-object": "san650.github.io/ember-cli-page-object"
    ,"emeraldcraftmc": "emeraldcraftmc.github.io"
    ,"emulisp": "grahack.github.io/EmuLisp"
    ,"eray": "erayarslan.github.io"
    ,"euclid": "anandthakker.github.io/euclid"
    ,"eventstore": "adrai.github.io/node-eventstore"
    ,"fcbosque": "cronopio.github.io/fcbosque"
    ,"festercluck": "festercluck.github.io"
    ,"finder": "applait.github.io/finderjs"
    ,"fis": "fex-team.github.io/fis-site"
    ,"flowchart": "adrai.github.io/flowchart.js"
    ,"fluxoff": "kingscott.github.io/flux-off"
    ,"freemarker": "ijse.github.io/freemarker.js"
    ,"fromdenisvieira": "fromdenisvieira.github.io"
    ,"frzr": "frzrjs.github.io/frzr"
    ,"gamedevcontestal": "fromdenisvieira.github.io/gamedevcontestal"
    ,"geekr": "ruanyl.github.io/geekr"
    ,"goodseller": "goodseller.github.io"
    ,"graphics2d": "keyten.github.io/Graphics2D"
    ,"grapnel": "engineeringmode.github.io/Grapnel.js"
    ,"greg": "gregorydgarcia.github.io"
    ,"gridsplit": "assetinfo.github.io"
    ,"gruft": "nikola.github.io/gruft"
    ,"guillotine": "matiasgagliano.github.io/guillotine"
    ,"gully": "nmabhinandan.github.io/gully"
    ,"gun": "amark.github.io/gun"
    ,"halil" : "hibrahimsafak.github.io"
    ,"happy": "e24.github.io/happy"
    ,"hask": "janbiasi.github.io/hask"
    ,"hello": "hello-js-org.github.io"
    ,"hooloo": "hooloo.github.io"
    ,"humanreadable": "matt-sanders.github.io/humanreadable"
    ,"hyde": "gheek.github.io/hyde"
    ,"iio": "iioinc.github.io/iio.js"
    ,"ip-address": "beaugunderson.github.io/ip-address"
    ,"is": "arasatasaygin.github.io/is.js"
    ,"italia": "milano-js.github.io/italia-js"
    ,"itsashis4u": "itsashis4u.github.io"
    ,"ivml": "influencetech.github.io/ivml"
    ,"immense": "immense.github.io"
    ,"immybox": "immense.github.io/immybox"
    ,"j2p": "j2p.github.io"
    ,"jakarta": "jakartajs.github.io/jakartajs"
    ,"jakejarrett": "jakejarrett.github.io"
    ,"jalbertbowden": "jalbertbowden.github.io"
    ,"james": "jamesrowen.github.io/james"
    ,"jbone": "kupriyanenko.github.io/jbone"
    ,"jjlc": "k-yak.github.io/JJLC"
    ,"json-schema-faker": "pateketrueke.github.io/json-schema-faker"
    ,"juancarlosqr": "juancarlosqr.github.io"
    ,"julien": "julien.github.io"
    ,"juno-106": "stevengoldberg.github.io/juno-106"
    ,"karl": "karlcoelho.github.io/portfolio"
    ,"labelauty": "fntneves.github.io/jquery-labelauty"
    ,"lambda": "lambdajs.github.io"
    ,"laubstein": "laubstein.github.io"
    ,"lean-stack": "lean-stack.github.io"
    ,"leandro": "leandrowd.github.io"
    ,"learnGitBranching": "pcottle.github.io/learnGitBranching"
    ,"leipzig": "leipzigjs.github.io"
    ,"leoj": "leoaj.github.io"
    ,"liguori": "liguori.github.io"
    ,"logo": "js-org.github.io/logo"
    ,"markmsmith": "markmsmith.github.io" //CF
    ,"martin": "martinbutler.github.io"
    ,"martingollogly": "martingollogly.github.io"
    ,"matthias-schuetz": "matthias-schuetz.github.io"
    ,"maxnachlinger": "maxnachlinger.github.io"
    ,"maxtracking": "maxtracking.github.io"
    ,"mdast": "wooorm.github.io/mdast"
    ,"medium-header": "danielfeelfine.github.io/medium-header"
    ,"miguelsr": "miguelsr.github.io"
    ,"mithril": "lhorie.github.io/mithril"
    ,"mithril-ja": "shibukawa.github.io/mithril-ja"
    ,"mmcq": "nikola.github.io/MMCQ"
    ,"modalizer": "dungo.github.io/modalizer"
    ,"mom": "momjs.github.io/mom"
    ,"momentum": "wemakeweb.github.io/momentum"
    ,"motapc": "motapc97.github.io"
    ,"murder": "rolandpoulter.github.io/murder"
    ,"mvidalgarcia": "mvidalgarcia.github.io"
    ,"n-j-m": "n-j-m.github.io"
    ,"nanimation": "imthenachoman.github.io/nAnimation"
    ,"ncub8": "ncub8.github.io"
    ,"nearley": "hardmath123.github.io/nearley"
    ,"nemo": "paypal.github.io/nemo"
    ,"ng-wig": "stevermeister.github.io/ngWig"
    ,"ngn": "nodengn.github.io/NGN"
    ,"nikolay": "nikolay.github.io"
    ,"nsptiles": "imthenachoman.github.io/nSPTiles"
    ,"nvanthao": "nvanthao.github.io"
    ,"objectmodel": "sylvainpolletvillard.github.io/ObjectModel"
    ,"omega": "jczimm.github.io/omega"
    ,"opentype": "nodebox.github.io/opentype.js"
    ,"opsigor": "opsigor.github.io"
    ,"os": "andersevenrud.github.io/OS.js-v2"
    ,"paraiba": "paraibajs.github.io"
    ,"parametric-svg": "parametric-svg.github.io"
    ,"pathtrace": "kovacsv.github.io/WebGLPathTrace"
    ,"paul": "paul-brown.github.io"
    ,"pdfutils": "gottox.github.io/node-pdfutils"
    ,"pdp-elements": "go4cas.github.io/pdp_elements"
    ,"pentris": "justinjc.github.io/pentris2"
    ,"pitermarx": "pitermarx.github.io"
    ,"pixelart": "meriadec.github.io/PixelartJS"
    ,"pliers": "pliersjs.github.io"
    ,"polythene": "arthurclemens.github.io/Polythene"
    ,"querybuilder": "mistic100.github.io/jQuery-QueryBuilder"
    ,"quiz-revamped": "abhisekp.github.io/Quiz-Revamped"
    ,"rad": "rapid-application-development-js.github.io/RAD.JS"
    ,"radial": "ckgrafico.github.io/radial.js"
    ,"rafaelmangolin": "rafaelMangolin.github.io"
    ,"rahul": "rahulsukla.github.io/rahul"
    ,"react-autosuggest": "moroshko.github.io/react-autosuggest"
    ,"react-autowhatever": "moroshko.github.io/react-autowhatever"
    ,"react-shared": "rvikmanis.github.io/react-shared"
    ,"reader": "ruanyl.github.io/js-reader"
    ,"realtime": "datamcfly.github.io/realtimejs"
    ,"redis": "noderedis.github.io/node_redis"
    ,"relate": "jakelazaroff.github.io/relate"
    ,"riotgear": "riotgear.github.io" //CF
    ,"rp": "rpocklin.github.io"
    ,"saulosantiago": "saulosilva.github.io"
    ,"savingthrow": "pdistefano.github.io/SavingThrow.js"
    ,"schisma": "schisma.github.io/opensource"
    ,"scrolledin": "manuelromeroramos.github.io/scrolledIn.js"
    ,"sdk-design": "huei90.github.io/javascript-sdk-design"
    ,"sean": "seancallinan.github.io"
    ,"segoe-mdl2-css": "ckgrafico.github.io/Segoe-mdl2-assets-css"
    ,"select_io": "selaromi.github.io/select_io"
    ,"selectric": "lcdsantos.github.io/jQuery-Selectric"
    ,"serginator": "serginator.github.io"
    ,"shedali": "shedali.github.io"
    ,"shorttompkins": "shorttompkins.github.io"
    ,"skate": "skatejs.github.io"
    ,"skx": "skx.github.io"
    ,"sn0w": "greensn0w.github.io"
    ,"sox": "sox-team.github.io/sox"
    ,"spectragram,": "adrianengine.github.io/jquery-spectragram"
    ,"spin": "fgnass.github.io/spin.js"
    ,"spirare": "waldenn.github.io/spirare"
    ,"spiritual": "spiritual-js.github.io"
    ,"spritesheet": "arcadiogarcia.github.io/Spritesheet.js"
    ,"stats": "js-org.github.io/stats.js.org" //CF
    ,"stepan": "stevermeister.github.io"
    ,"stephenmccall": "stephenmccall.github.io"
    ,"sugarshin": "sugarshin.github.io/sugarshin.js.org"
    ,"sulky": "shingle.github.io/sulky"
    ,"supernova": "janbiasi.github.io/supernova"
    ,"tagster": "goschevski.github.io/tagster"
    ,"talker": "secondstreet.github.io/talker.js"
    ,"tap-flux": "technologyadvice.github.io/tap-flux"
    ,"tart": "tart.github.io/tartJS"
    ,"temple": "beneaththeink.github.io/Temple"
    ,"terminal": "gottox.github.io/terminal.js"
    ,"textillate": "jschr.github.io/textillate"
    ,"themoviedb": "chrisenytc.github.io/themoviedb"
    ,"thundercats": "thundercatsjs.github.io/thundercats"
    ,"timerizer": "callumacrae.github.io/timerizerJS"
    ,"tint": "tintjs.github.io"
    ,"tinylinux": "e8johan.github.io/tiny-js"
    ,"torino": "torinojs.github.io"
    ,"trevorgk": "trevorgk.github.io"
    ,"ts2jsdoc": "spatools.github.io/ts2jsdoc"
    ,"ultcombo": "ultcombo.github.io"
    ,"unexpected": "unexpectedjs.github.io"
    ,"upresent": "bobbybee.github.io/uPresent"
    ,"uvcharts": "imaginea.github.io/uvCharts"
    ,"vaguilar": "vaguilar.github.io"
    ,"validator": "ppoffice.github.io/validator.js"
    ,"vinimdocarmo": "vinimdocarmo.github.com"
    ,"visualnovel": "selcher.github.io/visualnoveljs"
    ,"vk-x": "vk-x.github.io" //CF
    ,"vncz": "xvincentx.github.io/vncz"
    ,"voloshins": "voloshins.github.io"
    ,"vuongdothanhhuy": "vuongdothanhhuy.github.io"
    ,"waterline": "waterlinejs.github.io"
    ,"weaver": "maxkfranz.github.io/weaver"
    ,"wwb": "eqielb.github.io/wwb"
    ,"xprmntl": "xprmntl.github.io"
    ,"xto6": "mohebifar.github.io/xto6"
    ,"xtype": "lucono.github.io/xtypejs"
    ,"yah": "thassiov.github.io/yah"
    ,"yargs": "bcoe.github.io/yargs"
    ,"youtim": "mortonfox.github.io/YouTim"
    ,"youtube-box": "lucasmonteverde.github.io/youtube-box"
    ,"zodiac": "indus.github.io/Zodiac"
    ,"zombie": "assaf.github.io/zombie"
    ,"danmol": "dan12mol.github.io"
    ,"mis101bird": "mis101bird.github.io"
    ,"saadmir": "saadmir.github.io"
}
