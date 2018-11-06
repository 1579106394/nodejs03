// 在Node中，都有一个对象module
// 在module中，有个成员叫exports
// 也就是说如果你需要对外导出成员，只需要把导出的成员挂在到module上
// var module = {
//     exports: {

//     }
// }
// 谁来require我，谁就得到module.exports
// 默认在代码的最后一句
// return module.exports

exports.foo = 'bar'

module.exports.add = function(x, y) {
    return x + y
}