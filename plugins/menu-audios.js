const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
 *γβ¨ π·πΎπ»π° _${name}_ πε½‘*

   *ππππ πΏπ πΌππΏπππ*
   
ββββββββββββββββββ
β *π΅π ππ πππππππππ ππ πππππππ*
β *π·ππππ ππππ ππππππππ ππ*
β *π·ππππππ π π­ππππ.*
ββββββββββββββββββ
ββ«π _Noche de paz_
ββ«π _Buenos dias_
ββ«π _Audio hentai_
ββ«π _Fiesta del admin_
ββ«π _Fiesta del admin 2_
ββ«π _Fiesta del administrador_ 
ββ«π _Viernes_
ββ«π _Mierda de Bot_
ββ«π _Me olvidΓ©_
ββ«π _Baneado_
ββ«π _Feliz navidad_
ββ«π _A nadie le importa_
ββ«π _Sexo_
ββ«π _Vete a la vrg_
ββ«π _Ara ara_
ββ«π _Hola_
ββ«π _Un pato_
ββ«π _Nyanpasu_
ββ«π _Te amo_
ββ«π _Yamete_
ββ«π _Te diagnostico con gay_
ββ«π _Quien es tu sempai botsito 7w7_
ββ«π _BaΓ±ate_
ββ«π _Vivan los novios_
ββ«π _Marica quien_
ββ«π _Es puto_
ββ«π _La biblia_
ββ«π _Onichan_
ββ«π _Bot puto_
ββ«π _Feliz cumpleaΓ±os_
ββ«π _Pasa pack Bot_
ββ«π _Atencion grupo_
ββ«π _Homero chino_
ββ«π _Oh me vengo_
ββ«π _Murio el grupo_
ββ«π _Siuuu_
ββ«π _Rawr_
ββ«π _UwU_
ββ«π _:c_
ββ«π _a_
ββ«π _Hey_
ββ«π _Enojado_
ββ«π _Enojada_
ββ«π _Chao_
ββ«π _Hentai_
ββ«π _Triste_
ββ«π _Estoy triste_
ββ«π _Me pican los cocos_
ββ«π _Contexto_
ββ«π _Me voy_
ββ«π _Tengo los calzones del admin_
ββ«π _Entrada Γ©pica_ 
ββ«π _Esto va ser Γ©pico papus_
ββ«π _Ingresa Γ©picamente_
ββ«π _Bv_
ββ«π _Yoshi_
ββ«π _No digas eso papu_
ββ«π _Ma ma masivo_
ββ«π _Masivo_
ββ«π _Basado_
ββ«π _Basada_
ββ«π _Fino seΓ±ores_
ββ«π _Verdad que te engaΓ±e_
ββ«π _Sus_
ββ«π _Ohayo_
ββ«π _La voz de hombre_
ββ«π _Pero esto_
ββ«π _Bien pensado Woody_
ββ«π _Jesucristo_
ββ«π _Wtf_
ββ«π _Una pregunta_
ββ«π _Que sucede_
ββ«π _Hablame_
ββ«π _Pikachu_
ββ«π _Niconico_
ββ«π _Yokese_
ββ«π _Omaiga_
ββ«π _Nadie te preguntΓ³_
ββ«π _Bueno si_
ββ«π _Usted estΓ‘ detenido_
ββ«π _No me hables_
ββ«π _No chu_
ββ«π _El pepe_
ββ«π _PokΓ©mon_
ββ«π _No me hagas usar esto_
ββ«π _Esto va para ti_
ββ«π _Abduzcan_
ββ«π _Joder_
ββ«π _Hablar primos_
ββ«π _Mmm_
ββ«π _Orale_
ββ«π _Me anda buscando anonymous_
ββ«π _Blackpink in your area_
ββ«π _Cambiate a Movistar_
ββ«π _Momento equisde | Momento XD_
ββ«π _Todo bien | π_
ββ«π _Te gusta el Pepino | π₯_
ββ«π _El tΓ³xico_
ββ«π _Moshi moshi_
ββ«π _Calla Fan de BTS_
ββ«π _Que tal grupo_
ββ«π _Muchachos_
ββ«π _EstΓ‘ Zzzz | π΄_
ββ«π _Goku Pervertido_
ββ«π _Potaxio | π₯_
ββ«π _Nico nico_
ββ«π _El rap de Fernanfloo_
ββ«π _Tal vez_
ββ«π _Corte corte_
ββ«π _Buenas noches_
ββ«π _Porque ta tite_
ββ«π _Eres Fuerte_
ββ«π _Bueno Master | π«_
ββ«π _No Rompas mΓ‘s | π_
ββ«π _Traiganle una falda_
ββ«π _Se estΓ‘n riendo de mΓ­_
ββ«π _Su nivel de pendejo_
ββ«π _Bienvenido/a | π₯³ | π€ | π_
ββ«π _Elmo sabe donde vives_
ββ«π _tunometecabrasaramambiche_
ββ«π _Y este quien es_
ββ«π _MotivaciΓ³n_
ββ«π _En caso de una investigaciΓ³n_
ββ«π _Buen dΓ­a grupo | π_
ββ«π _mi bebito fiu fiu
ββ«π _sabosito
ββ«π _Freefire 
ββ«π _Aguanta
ββ«π _Es viernes
ββ«π _Que quede vos
ββ«π _Feriado 
ββ«π _Me emociono | borracho
ββ«π _Delivery 
ββ«π _Tarado | putos
ββ«π _Bardo
ββ«π _Saliste del grupo
ββ«π _No agreguΓ© 
ββ«π _Quiere tener internet gratis
ββ«π _Donde esta?
ββ«π _Q onda | π€ͺ
ββ«π _La tΓ³xica
ββ«π _Bebesita
ββ«π _Tka 
ββ«π _No la pienso 
ββ«π _Taka Taka 
ββ«π _Bot canta 
ββ«π _Loli conmigo | Loli venir
ββ«π _Grap | trap 
ββ«π _Bruno
ββ«π _Bot dj
ββ«π _Soy guapo
ββ«π _Dragon ball 
ββ«π _Las reglas del grupo_
β PequeΓ±a canciones 
ββ«π _Quevedo 
ββ«π _QuΓ©date 
ββ«π _Fernet 
ββ«π _Emilia 
ββ«π _cuantros veintes
ββ«π _Turrito
ββ«π _AllΓ‘ 
ββ«π _cumbia 420
ββ«π _lgante
ββ«π _esaa |π
ββ«π _bar 
ββ«π _Le mando fui  
πΊπ πππ ππππππππ πππ πππππ ππ ππππ,
πΊπ ππππππ πππππππ πππππ πππππ πππππ, π ππππ πππππ πππππ πππ πππππ πππ πππ πππ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
