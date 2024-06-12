import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupal',
  templateUrl: './grupal.component.html',
  styleUrl: './grupal.component.css',
})
export class GrupalComponent implements OnInit {
  test: any[] = [
    {
      idMessage: 1,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message:
        '<b>Kyrox, tras pasado unos largos meses, consiguió volver a aquel pueblo que en su día consiguió reparar con sus propias manos y que, lentamente, fue habitándose con personas de todos lados, Lake Noff. Solo que, a diferencia de esos meses, actualmente el pueblo volvía a estar totalmente abandonado, no parecía haber ninguna sola alma con vida por ahí, al menos que él llegase a notar con facilidad.</b>' +
        '<br><br><b>Andó por las calles, recordando todo tipo de momento que había pasado en aquel pueblo, la aparición de Darki, aquel grupo de músicos que tuvo la suerte de escucharlos en la playa del lago, la aparición de portales por todo el lugar creando caos... Pero hay una que dejó una cicatriz mentalmente en él. Los secuestros, especialmente, de alguien que llegó a forjar una pequeña amistad, Cotton.</b>' +
        '<br><br><b>Llegó hasta la última vez que le vio, recordando que perdió el control en aquel momento y que, a pesar de eso, no consiguió rescatarle y no supo más de su paradero ni de la persona quien le secuestró. Hasta se podría apreciar a día de hoy algunos escombros y daños de la batalla que tuvo contra el secuestrador del chico.</b>' +
        '<br><br><i>-...Es.. una pena. No queda... nadie.. y... él... tsk... Ha pasado tiempo ya... Lo más probable es que.. sea uno más de sus amigos fantasmas... ¿tal vez? Aunque... no siento ni siquiera un solo fantasma.. ni aunque sean invisibles... ¿Se habrán ido al más allá? ¿A otro pueblo? ¿Al bosque?.. A saber..</i>' +
        '<br><br><b>Daba un suspiro ligeramente cabizbajo, aún con sus brazos  y su cuerpo escondido bajo esa capa que siempre llevaba puesta, mirando a sus alrededores</b>' +
        '<br><br><i>-Ojalá... poder haber vuelto antes y.. haberle ayudado... Lo siento, Cott...</i>',
    },
    {
      idMessage: 2,
      idUser: 2,
      username: 'Pan',
      estaRoleando: true,
      characterName: 'Cotton',
      urlCharacterImage: '/assets/iconCharacters/cotton.png',
      colorCharacter: '#781042',
      message:
        '-La noche era oscura, ni la luna ni las estrellas se asomaban sobre el pueblo maldito fantasma. Las casas, alguna vez llenas de vida y color, estaban cerradas y opacas. La flores que alguna vez llenaron las calles de colores y felicidad, reposan tristemente sobre el suelo, oscuras y sus pétalos perdidos en el viento. La brisa fría envolvió el cuerpo del hombre encapuchado, un susurro de la muerte directo en su oído. De repente, El pueblo parece ponerse de un color aún más oscuro y tétrico. Un suspiró de muerte resonó sobre alguien ¿Pero quién susurro?...fácil. los fantasmas alguna vez olvidados...-' +
        '<br><br><b>¿Unas palabras al viento y crees que olvidaré lo que me hiciste?</b>' +
        '<br><br>-murmuro antes de que se pudiera terminar el susurró, una sombra se muestra sobre una cafetería totalmente destruida y quemada, una figura delgada, con ropas rotas y sucias de líquidos rojos ajenos. Un cabello alguna vez rosa pastel ahora era un fucsia oscuro y desordenado, un grito de fantasma se escuchaba por todo lake noff provocando que todos los cristales y ventanas se rompieran a la alta frecuencia, mientras los cristales caían la sombra desapareció,  abalanzarse sobre del encapuchado que tal vez fue un momento que un dolor punzante recorrió el brazo de kyro, unos lentes alguna vez redondos decoran el rostro pálido y herido de un ahora ahora adulto. Que un grito resonó otra vez. Pero tenía un pedazo de carne entre sus dientes, el fantasma caníbal arranco un pedazo de carne del brazo de kyrox, el muchacho escupió el pedazo a un lado asqueado de comer algo si quiera relacionado al esqueroso cuerpo de kyrox-' +
        '<br><br><b>¡¿QUE TE DA EL DERECHO A DAR LA CARA EN ESTE CEMENTERIO?! MI... CEMENTERIO....</b>' +
        '<br><br>-reclamo cotton, su voz ya no era callada y sensible, si no horrible y fuerte. Sus cuerdas vocales están desgastadas y desgarradas de tanto gritar. Levantó su mano apuntando hacia él con un odio que brillaba de sus pupilas quemando la pena del alma de kyrox, fingiendo un tono amable y tierno como tenía antes-' +
        '<br><br>¿Me recuerdas? Soy yo cotton! te conocí en la cafetería cuando era feliz antes de conocerte tu- <b>MALDITO DEVUÉLVEME LA VIDA</b>' +
        '<br><br>-grito antes de abalanzarse sobre kyrox otra vez sometiendo al mayor y golpear el rostro del contrario sin mostrar piedad alguna sobre él-' +
        '<br><br><br><b>TU ME QUITASTE MI LIBERTAD! TU ME VISTE MORIR! ¿Y QUE HICISTE? ¡¡¡¡ME ABANDONASTE DE CUALQUIER MODO!!!!</b>' +
        '<br><br>-grito otra vez usando una fuerza sobre humana para su cuerpo débil para levantar a kyrox y tirarlo contra la cafetería. Entro otra vez aterrizando sobre el abdomen de este para aplastar sus intestinos podridos, quiero que sientas lo que sentí. Pisaba sus intestinos mirando como se retorcía en el suelo otra vez-' +
        '<br><br><b>Un año 8 meses y 14 días...¿Y AHORA VUELVES? QUERÍAS VER MI MALDITO CADÁVER ¿CIERTO? pues no te daré el placer.... TODOS SE FUERON. Ling murió, la perra de Ivanna me abandono para irse a sus malditos universos alternos, y el vampiro albino?! JA! DIOS SABRÁ SI NO SE QUEMÓ AL SOL!</b>' +
        '<br><br>-agarro un vaso cercano para romperlo entre sus dedos ignorando el dolor para ver los trozos entre sus dedos para golpear el rostro de kyrox haciéndole retroceder-' +
        '<br><br>Pudiste haberme salvado....pudiste haberme perdonado...<b>PERO ME DEJASTE A MORIR POR ESTAR PELEANDO CON TU ESTÚPIDA PERRA NOVIA!</b>....yo nunca te importe...tuve que sobrevivir solo...tu fuiste mi última oportunidad y la desaprovechaste...pero cambiaré eso...mereces esto...y mucho más de lo que te voy a dar...te haré sentir el infierno que yo sentí durante 14944 horas.',
    },
    {
      idMessage: 3,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message:
        '<b>Miró hacía aquel cielo oscuro, escuchando cierto grito que no conseguía reconocer del todo y poniendo mala cara, mientras los cristales de su alrededor, cada vez se iban rompiendo más y más, hasta que esa cadena de cristales rotos llegó hasta él y notando como todo a su alrededor de oscurecía de más. Miró a los lados alertados, pero, sin llegarse a dar cuenta, ya tenía un agujero en la capa y una mordida considerable en su brazo de alguien que llegó rápidamente hasta él</b>' +
        '<br><br><b>Dentro de la capa, se puso su mano imbuida en un aura negra donde le había mordido, mientras le escuchaba, sin conseguir reconocer aún que era Cotton, hasta que, él mismamente dijo su nombre, llegando a poner una cara de sorpresa y dejando de intentar regenerarse la mordida que le hizo</b>'+
        '<br><br>¿C-cotton? ¿Eres t-..!'+
        '<br><br><b>Notó como se abalanzaba sobre él, dejándose caer e intentando cubrirse la cara, mientras que Cotton, sin piedad alguna, seguía golpeandole y gritándole. Kyrox intentaba argumentar con él mientras aguantaba los golpes de él, pero, a la vez que sentía que realmente se lo merecía por no haber llegado a tiempo. Sabía que había llegado tarde y cada vez iba bajando más los brazos y recibiendo más golpes</b>'+
        '<br><br>C-cotton.. y-yo no quería.. quise venir y ayud-'+
        '<br><br>Mira, que me he cansado de copiar y pegar.',
    },
    {
      idMessage: 4,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message: 'Yo lo siento Cott por no haber venido y todo eso.',
    },
    {
      idMessage: 5,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message: 'Al menos mírate, no estás taan mal de aspecto, más o menos.',
    },
    {
      idMessage: 6,
      idUser: 2,
      username: 'Pan',
      estaRoleando: true,
      characterName: 'Cotton',
      urlCharacterImage: '/assets/iconCharacters/cotton.png',
      colorCharacter: '#781042',
      message:
        '...¿Qué?',
    },
    {
      idMessage: 7,
      idUser: 2,
      username: 'Pan',
      estaRoleando: true,
      characterName: 'Cotton',
      urlCharacterImage: '/assets/iconCharacters/cotton.png',
      colorCharacter: '#781042',
      message:
        '¿Lo vas a dejar así y ya?',
    },
  ];

  idLogged: number = 1;
  ngOnInit(): void {}
}
