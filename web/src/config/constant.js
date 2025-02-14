//  布局结构图片映射
export const layoutImgMap = {
  logicalStructure: require('../assets/img/structures/logicalStructure.png'),
  mindMap: require('../assets/img/structures/mindMap.png'),
  organizationStructure: require('../assets/img/structures/organizationStructure.png'),
  catalogOrganization: require('../assets/img/structures/catalogOrganization.png'),
  timeline: require('../assets/img/structures/timeline.png'),
  timeline2: require('../assets/img/structures/timeline2.png'),
  fishbone: require('../assets/img/structures/fishbone.png'),
  verticalTimeline: require('../assets/img/structures/verticalTimeline.png')
}

//  主题图片映射
export const themeMap = {
  default: require('../assets/img/themes/default.jpg'),
  classic: require('../assets/img/themes/classic.jpg'),
  minions: require('../assets/img/themes/minions.jpg'),
  pinkGrape: require('../assets/img/themes/pinkGrape.jpg'),
  mint: require('../assets/img/themes/mint.jpg'),
  gold: require('../assets/img/themes/gold.jpg'),
  vitalityOrange: require('../assets/img/themes/vitalityOrange.jpg'),
  greenLeaf: require('../assets/img/themes/greenLeaf.jpg'),
  dark2: require('../assets/img/themes/dark2.jpg'),
  skyGreen: require('../assets/img/themes/skyGreen.jpg'),
  classic2: require('../assets/img/themes/classic2.jpg'),
  classic3: require('../assets/img/themes/classic3.jpg'),
  classic4: require('../assets/img/themes/classic4.jpg'),
  classicGreen: require('../assets/img/themes/classicGreen.jpg'),
  classicBlue: require('../assets/img/themes/classicBlue.jpg'),
  blueSky: require('../assets/img/themes/blueSky.jpg'),
  brainImpairedPink: require('../assets/img/themes/brainImpairedPink.jpg'),
  dark: require('../assets/img/themes/dark.jpg'),
  earthYellow: require('../assets/img/themes/earthYellow.jpg'),
  freshGreen: require('../assets/img/themes/freshGreen.jpg'),
  freshRed: require('../assets/img/themes/freshRed.jpg'),
  romanticPurple: require('../assets/img/themes/romanticPurple.jpg'),
  simpleBlack: require('../assets/img/themes/simpleBlack.jpg'),
  courseGreen: require('../assets/img/themes/courseGreen.jpg'),
  coffee: require('../assets/img/themes/coffee.jpg'),
  redSpirit: require('../assets/img/themes/redSpirit.jpg'),
  blackHumour: require('../assets/img/themes/blackHumour.jpg'),
  lateNightOffice: require('../assets/img/themes/lateNightOffice.jpg'),
  blackGold: require('../assets/img/themes/blackGold.jpg'),
  autumn: require('../assets/img/themes/autumn.jpg'),
  avocado: require('../assets/img/themes/avocado.jpg'),
  orangeJuice: require('../assets/img/themes/orangeJuice.jpg'),
  oreo: require('../assets/img/themes/oreo.jpg'),
  shallowSea: require('../assets/img/themes/shallowSea.jpg'),
  lemonBubbles: require('../assets/img/themes/lemonBubbles.jpg'),
  rose: require('../assets/img/themes/rose.jpg'),
  seaBlueLine: require('../assets/img/themes/seaBlueLine.jpg'),
  neonLamp: require('../assets/img/themes/neonLamp.jpg'),
  darkNightLceBlade: require('../assets/img/themes/darkNightLceBlade.jpg'),
  morandi: require('../assets/img/themes/morandi.jpg'),
  classic5: require('../assets/img/themes/classic5.jpg'),
  dark3: require('../assets/img/themes/dark3.jpg'),
  dark4: require('../assets/img/themes/dark4.jpg'),
  cactus: require('../assets/img/themes/cactus.jpg')
}

// 公式列表
export const formulaList = [
  'a^2',
  'a_2',
  'a^{2+2}',
  'a_{i,j}',
  'x_2^3',
  '\\overbrace{1+2+\\cdots+100}',
  '\\sum_{k=1}^N k^2',
  '\\lim_{n \\to \\infty}x_n',
  '\\int_{-N}^{N} e^x\\, dx',
  '\\sqrt{3}',
  '\\sqrt[n]{3}',
  '\\sin\\theta',
  '\\log X',
  '\\log_{10}',
  '\\log_\\alpha X',
  '\\lim_{t\\to n}T',
  '\\frac{1}{2}=0.5',
  '\\binom{n}{k}',
  '\\begin{matrix}x & y \\\\z & v\\end{matrix}',
  '\\begin{cases}3x + 5y +  z \\\\7x - 2y + 4z \\\\-6x + 3y + 2z\\end{cases}'
]

export const supportLineStyleLayoutsMap = {
  curve: ['logicalStructure', 'mindMap', 'verticalTimeline'],
  direct: [
    'logicalStructure',
    'mindMap',
    'organizationStructure',
    'verticalTimeline'
  ]
}

export const supportLineRadiusLayouts = [
  'logicalStructure',
  'mindMap',
  'verticalTimeline'
]

export const supportNodeUseLineStyleLayouts = [
  'logicalStructure',
  'mindMap',
  'catalogOrganization',
  'organizationStructure'
]

export const supportRootLineKeepSameInCurveLayouts = [
  'logicalStructure',
  'mindMap'
]
