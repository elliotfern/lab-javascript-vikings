// Lab sobre OOP en JavaScript. Clases

// 1 iteración: modificar la clase Soldier y añadir dos metodos

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// comprobaciones en console
let newSoldier1 = new Soldier(100, 10); // creamos soldado 1
let newSoldier2 = new Soldier(50, 1); // creamos soldado 2

console.log("Soldado 1: => ataque // fuerza: " + newSoldier1.attack());
console.log("soldado 1 despues del ataque " + JSON.stringify(newSoldier1));
console.log("soldado 2 " + JSON.stringify(newSoldier2));

newSoldier2.receiveDamage(30); // este método no devuelve nada, asi que si hacemos un console.log aparece como undefined
console.log(
  "soldado 2: cambios despues de receiveDamage: " + JSON.stringify(newSoldier2)
);

// 2 iteración. La clase Viking tiene diferentes propiedades y métodos.

// Vikingo es una subclase de Soldier

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    // propiedad exclusiva
    this.name = name;
  }

  // el método attack lo hereta de la clase padre Soldier

  receiveDamage = (damage) => {
    this.health -= damage;

    if (this.health >= 1) {
      return `${this.name} has received ${damage} points of damage.`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat.`;
    }
  };

  battleCry = () => {
    return `Odin Owns You All!`;
  };
}

// comprobaciones en console
let newViking1 = new Viking("Thor", 50, 5); // creamos
let newViking2 = new Viking("Okze", 40, 4); // creamos Vikingo 2
let newViking3 = new Viking("Otzi", 70, 7); // creamos Vikingo 3

console.log(
  `Vikingo 1 name: ${
    newViking1.name
  }, características del objeto: ${JSON.stringify(newViking1)}`
);
console.log(
  `Vikingo 1 ${newViking1.name} recibe ataque ${JSON.stringify(
    newViking1.receiveDamage(5)
  )}`
);

console.log(
  `Vikingo 1 ${newViking1.name} recibe ataque ${JSON.stringify(
    newViking1.battleCry()
  )}`
);

// iteracion 3 : es una subclase de Soldier.
// Saxon
class Saxon extends Soldier {
  // No se debería añadir el constructor porque hereda de la clase padre Soldier.

  // el método attack lo hereda de la clase Soldier

  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 1) {
      console.log("estado de salud " + this.health); // comprobacion del valor health
      return `A Saxon has received ${damage} points of damage.`;
    } else if (this.health <= 0) {
      console.log("estado de salud " + this.health); // comprobacion del valor health
      return `Saxon has died in combat.`;
    }
  };
}

// comprobaciones en console
let newSaxon1 = new Saxon(70, 2); // creamos Sajon 1
let newSaxon2 = new Saxon(20, 9); // creamos Sajon 1
let newSaxon3 = new Saxon(90, 8); // creamos Sajon 1

console.log(
  `Sajón 1, características del objeto: ${JSON.stringify(newSaxon1)}` // quiero mostrar los valores del objeto saxon
);

console.log(
  `Sajón 1, recibe ataque: ${JSON.stringify(newSaxon1.receiveDamage(70))}`
);

// Bonus iteracion 4.  Añadir 5 métodos a la clase WAR y 2 arrays vacias

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking = (viking) => {
    this.vikingArmy.push(viking);
  };

  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  };

  vikingAttack = () => {
    // elegir aleatoriamente un Sajon. Primero calculamos un indice aleatorio, y luego ese indice selecciona un sajon en la array
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // hacemos lo mismo con un vikingo.
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const randomViking = this.vikingArmy[randomVikingIndex];

    // ahora el sajon recibe un ataque que equivale a la fuerza del vikingo

    const damageReceived = randomSaxon.receiveDamage(randomViking.strength);

    // ahora eliminamos los sajones muertos del ejercito saxonArmy

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    // el return deberia devolver la const damageReceived de la linea 145.

    return damageReceived;
  };

  saxonAttack = () => {
    // elegir aleatoriamente un Sajon. Primero calculamos un indice aleatorio, y luego ese indice selecciona un sajon en la array
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // y ahora con el vikingo
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    // ahora el vikingo recibe un ataque que equivale a la fuerza del sajon
    const damageReceived = randomViking.receiveDamage(randomSaxon.strength);

    // ahora eliminamos los vikingos muertos del ejercito vikingArmy

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    // el return deberia devolver la const damageReceived
    return damageReceived;
  };

  showStatus = () => {
    // hay que devolver el estado actual de la guerra en basa a:

    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}

// apartado para las comprobaciones en console.log

// 1. creamos una clase war con el primer método
let war1 = new War();
war1.addViking(newViking1);
war1.addViking(newViking2);
war1.addViking(newViking3);

// console
console.log(`War 1 , add viking : ${JSON.stringify(war1)}`);

// 2. segundo metodo
war1.addSaxon(newSaxon1);
war1.addSaxon(newSaxon2);
war1.addSaxon(newSaxon2);

console.log(`War 1 , add saxon check : ${JSON.stringify(war1)}`);

// 3. probamos el método vikingAttack
war1.vikingAttack();
console.log(`War 1 , vikingAttack : ${JSON.stringify(war1)}`);

// 4. probamos el método saxonAttack
war1.saxonAttack();
console.log(`War 1 , saxonAttack : ${JSON.stringify(war1)}`);

// 5. probamos el método showStatus - final
war1.showStatus();
console.log(`War 1 , showStatus : ${JSON.stringify(war1)}`);
