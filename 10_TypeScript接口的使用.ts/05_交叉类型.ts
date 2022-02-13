// 一种组合类型的方式：联合类型
type HbsType = number | string
type Direction = 'left' | 'right'

// 另一种组合类型的方式：交叉类型
type HType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  swimming() {

  }
}

const obj2: MyType2 = {
  swimming() {

  },

  flying() {

  }
}
