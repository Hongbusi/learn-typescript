// 通过 interface 来定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: 'HTML',
  1: 'CSS',
  2: 'JavaScript',
  3: 'Vue'
}
