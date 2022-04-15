/**
 * /project/test
 * |--src
 * | |-test1.ts
 * | |-test2.ts
 * |--typing.d.ts
 * |-- tsconfig.json
 */
/**
 * 3.声明文件
 * @desc:声明文件必须以.d.ts为 后缀。一般来说，Typescript会解析项目中所有的*.ts文件，因此也包含以.d.ts结尾的声明文件。
 * 只要tsconfig.json中配置包含typing.d.ts文件，那么其他所有*.ts文件就都可以获得声明文件中类型定义。
 */ 
