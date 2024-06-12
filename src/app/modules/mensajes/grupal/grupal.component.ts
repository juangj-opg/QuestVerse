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
        '<br><br><b>¡¿QUE TE DA EL DERECHO A DAR LA CARA EN ESTE CEMENTERIO?! MI... CEMENTERIO....</b>',
    },
    {
      idMessage: 3,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message: '¿Qué?',
    },
    {
      idMessage: 4,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message: 'Ah, eres tú, Cott',
    },
    {
      idMessage: 5,
      idUser: 1,
      username: 'Kai',
      estaRoleando: true,
      characterName: 'Kyrox',
      urlCharacterImage: '/assets/iconCharacters/kyrox.png',
      colorCharacter: '#A80C0C',
      message: '¿Qué te cuentas?',
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
        '-La noche era oscura, ni la luna ni las estrellas se asomaban sobre el pueblo maldito fantasma. Las casas, alguna vez llenas de vida y color, estaban cerradas y opacas. La flores que alguna vez llenaron las calles de colores y felicidad, reposan tristemente sobre el suelo, oscuras y sus pétalos perdidos en el viento. La brisa fría envolvió el cuerpo del hombre encapuchado, un susurro de la muerte directo en su oído. De repente, El pueblo parece ponerse de un color aún más oscuro y tétrico. Un suspiró de muerte resonó sobre alguien ¿Pero quién susurro?...fácil. los fantasmas alguna vez olvidados...-' +
        '<br><br><b>¿Unas palabras al viento y crees que olvidaré lo que me hiciste?</b>' +
        '<br><br>-murmuro antes de que se pudiera terminar el susurró, una sombra se muestra sobre una cafetería totalmente destruida y quemada, una figura delgada, con ropas rotas y sucias de líquidos rojos ajenos. Un cabello alguna vez rosa pastel ahora era un fucsia oscuro y desordenado, un grito de fantasma se escuchaba por todo lake noff provocando que todos los cristales y ventanas se rompieran a la alta frecuencia, mientras los cristales caían la sombra desapareció,  abalanzarse sobre del encapuchado que tal vez fue un momento que un dolor punzante recorrió el brazo de kyro, unos lentes alguna vez redondos decoran el rostro pálido y herido de un ahora ahora adulto. Que un grito resonó otra vez. Pero tenía un pedazo de carne entre sus dientes, el fantasma caníbal arranco un pedazo de carne del brazo de kyrox, el muchacho escupió el pedazo a un lado asqueado de comer algo si quiera relacionado al esqueroso cuerpo de kyrox-' +
        '<br><br><b>¡¿QUE TE DA EL DERECHO A DAR LA CARA EN ESTE CEMENTERIO?! MI... CEMENTERIO....</b>',
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
        '-La noche era oscura, ni la luna ni las estrellas se asomaban sobre el pueblo maldito fantasma. Las casas, alguna vez llenas de vida y color, estaban cerradas y opacas. La flores que alguna vez llenaron las calles de colores y felicidad, reposan tristemente sobre el suelo, oscuras y sus pétalos perdidos en el viento. La brisa fría envolvió el cuerpo del hombre encapuchado, un susurro de la muerte directo en su oído. De repente, El pueblo parece ponerse de un color aún más oscuro y tétrico. Un suspiró de muerte resonó sobre alguien ¿Pero quién susurro?...fácil. los fantasmas alguna vez olvidados...-' +
        '<br><br><b>¿Unas palabras al viento y crees que olvidaré lo que me hiciste?</b>' +
        '<br><br>-murmuro antes de que se pudiera terminar el susurró, una sombra se muestra sobre una cafetería totalmente destruida y quemada, una figura delgada, con ropas rotas y sucias de líquidos rojos ajenos. Un cabello alguna vez rosa pastel ahora era un fucsia oscuro y desordenado, un grito de fantasma se escuchaba por todo lake noff provocando que todos los cristales y ventanas se rompieran a la alta frecuencia, mientras los cristales caían la sombra desapareció,  abalanzarse sobre del encapuchado que tal vez fue un momento que un dolor punzante recorrió el brazo de kyro, unos lentes alguna vez redondos decoran el rostro pálido y herido de un ahora ahora adulto. Que un grito resonó otra vez. Pero tenía un pedazo de carne entre sus dientes, el fantasma caníbal arranco un pedazo de carne del brazo de kyrox, el muchacho escupió el pedazo a un lado asqueado de comer algo si quiera relacionado al esqueroso cuerpo de kyrox-' +
        '<br><br><b>¡¿QUE TE DA EL DERECHO A DAR LA CARA EN ESTE CEMENTERIO?! MI... CEMENTERIO....</b>',
    },
  ];

  idLogged: number = 1;
  ngOnInit(): void {}
}
