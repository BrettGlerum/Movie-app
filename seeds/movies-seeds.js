/* eslint-disable max-len */
const {Movies} = require('../models');

const moviesData = [
  {
    filename: 'Batman.jpg',
    title: 'The Batman',
    genre_id: 1,
    description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator\'s plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.',
    run_time: '2H 56M',
  },
  {
    filename: 'Everything_everywhere.jpg',
    title: 'Everything Everywhere All at Once',
    genre_id: 1,
    description: 'When an inter-dimensional rupture unravels reality, an unlikely hero must channel her newfund powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.',
    run_time: '2H 19M',
  },
  {
    filename: 'Violent_night.jpg',
    title: 'Violent Night',
    genre_id: 1,
    description: 'An elite team of mercenaries breaks into a family compound on Christmas Eve, taking everyone hostage inside. However, they aren\'t prepared for a surprise combatant: Santa Claus is on the grounds, and he\'s about to show why this Nick is no saint ',
    run_time: '1H 52M',

  },
  {
    filename: 'The_northman.jpg',
    title: 'The Northman',
    genre_id: 1,
    description: 'Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy\'s mother. Two decades later, Amleth is now a Viking who raids Slavic villages. He soon meets a seeress who reminds him of his vow -- save his mother, kill his uncle, avenge his father.',
    run_time: '2H 17M',
  },
  {
    filename: 'Spirited.jpg',
    title: 'Spirited',
    genre_id: 2,
    description: 'A musical version of Charles Dickens\' story of a miserly misanthrope who\'s taken on a magical journey.',
    run_time: '2H 7M',
  },
  {
    filename: 'Amsterdam.jpg',
    title: 'Amsterdam',
    genre_id: 2,
    description: 'Set in the \'30s, it follows three friends who witness a murder, become suspects themselves, and uncover one of the most outrageous plots in American history.',
    run_time: '2H 14',
  },
  {
    filename: 'Banshees.jpg',
    title: 'Banshees of Inishierin',
    genre_id: 2,
    description: 'On a remote island off the coast of Ireland, Pádraic is devastated when his buddy Colm suddenly puts an end to their lifelong friendship. With help from his sister and a troubled young islander, Pádraic sets out to repair the damaged relationship by any means necessary. However, as Colm\'s resolve only strengthens, he soon delivers an ultimatum that leads to shocking consequences.',
    run_time: '1H 54M',
  },
  {
    filename: 'Once_upon.jpg',
    title: 'Once Upon a Time... in Hollywood',
    genre_id: 2,
    description: 'Actor Rick Dalton gained fame and fortune by starring in a 1950s television Western, but is now struggling to find meaningful work in a Hollywood that he doesn\'t recognize anymore. He spends most of his time drinking and palling around with Cliff Booth, his easygoing best friend and longtime stunt double. Rick also happens to live next door to Roman Polanski and Sharon Tate -- the filmmaker and budding actress whose futures will forever be altered by members of the Manson Family.',
    run_time: '2H 40M',
  },
  {
    filename: 'smile.jpg',
    title: 'Smile',
    genre_id: 3,
    description: 'After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can\'t explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.',
    run_time: '1H 55M',
  },
  {
    filename: 'Prey_for.jpg',
    title: 'Prey for the Devil',
    genre_id: 3,
    description: 'The Roman Catholic Church combats a global rise in demonic possessions by reopening schools to train priests to perform exorcisms. Although nuns are forbidden to perform this ritual, a professor recognizes Sister Ann\'s gifts and agrees to train her. Thrust onto the spiritual frontline, she soon finds herself in a battle for the soul of a young girl who\'s possessed by the same demon that tormented her own mother years earlier.',
    run_time: '1H 33M',
  },
  {
    filename: 'x.jpg',
    title: 'X',
    genre_id: 3,
    description: 'A group of actors sets out to make an adult film in rural Texas under the noses of their reclusive hosts, but when the elderly couple catches their young guests in the act, the cast finds themselves in a desperate fight for their lives.',
    run_time: '1H 45M',
  },
  {
    filename: 'Hereditary.jpg',
    title: 'Hereditary',
    genre_id: 3,
    description: 'When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.',
    run_time: '2H 7M',
  },
  {
    filename: 'Knives_out.jpg',
    title: 'Knives Out',
    genre_id: 4,
    description: 'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there\'s one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. Now, Blanc must sift through a web of lies and red herrings to uncover the truth.',
    run_time: '2H 10M',
  },
  {
    filename: 'Nope.jpg',
    title: 'Nope',
    genre_id: 4,
    description: 'A man and his sister discover something sinister in the skies above their California horse ranch, while the owner of a nearby theme park tries to profit from the mysterious, otherworldly phenomenon.',
    run_time: '2H 10M',
  },
  {
    filename: 'where_the.jpg',
    title: 'Where the Crawdads Sing',
    genre_id: 4,
    description: 'Abandoned as a girl, Kya raised herself in the dangerous marshlands of North Carolina. For years, rumors of the marsh girl haunted Barkley Cove, isolating the sharp and resilient Kya from her community. Drawn to two young men from town, she opens herself to a new and startling world. However, when one of them is found dead, Kya immediately becomes the main suspect. As the case unfolds, the verdict as to what happened becomes increasingly unclear, threatening to reveal many secrets',
    run_time: '2H 5M',
  },
  {
    filename: 'Prisoners.jpg',
    title: 'Prisoners',
    genre_id: 4,
    description: 'Keller Dover (Hugh Jackman) faces a parent\'s worst nightmare when his 6-year-old daughter, Anna, and her friend go missing. The only lead is an old motorhome that had been parked on their street. The head of the investigation, Detective Loki (Jake Gyllenhaal), arrests the driver (Paul Dano), but a lack of evidence forces Loki to release his only suspect. Dover, knowing that his daughter\'s life is at stake, decides that he has no choice but to take matters into his own hands.',
    run_time: '2H 33M',
  },
];

const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = seedMovies;