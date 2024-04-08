# TypeScript

## type 和 interface 的区别

1. 声明方式：

   - `type` 是使用 `type` 关键字定义类型别名，可以为基本类型、联合类型、交叉类型等复杂类型提供一个名称。例如：

     ```typescript
     type Point = {
       x: number;
       y: number;
     };
     ```

   - `interface` 是使用 `interface` 关键字定义接口，主要用于描述对象的结构。例如：

     ```typescript
     interface Point {
       x: number;
       y: number;
     }
     ```

2. 扩展：

   - `type` 可以使用交叉类型 `&` 进行扩展。例如：

     ```typescript
     type Name = {
       name: string;
     };

     type Age = {
       age: number;
     };

     type Person = Name & Age;
     ```

   - `interface` 可以使用 `extends` 关键字进行扩展。例如：

     ```typescript
     interface Name {
       name: string;
     }

     interface Age {
       age: number;
     }

     interface Person extends Name, Age {}
     ```

3. 合并声明：

   - `type` 不能进行合并声明，同名的 `type` 会导致错误。
   - `interface` 可以进行合并声明，同名的 `interface` 会自动合并，合并后的接口包含所有声明的属性。

4. 类型映射：

   - `type` 可以使用映射类型创建新类型，例如：

     ```typescript
     type ReadonlyPoint = Readonly<Point>;
     ```

   - `interface` 不能直接使用映射类型，但可以通过交叉类型和映射类型创建新接口：

     ```typescript
     interface ReadonlyPoint extends Readonly<Point> {}
     ```

5. 其他类型表示：

   - `type` 支持联合类型、元组类型、映射类型等更多类型表示。例如：

     ```typescript
     type Coordinate = [number, number];
     type Shape = "circle" | "square" | "rectangle";
     ```

- `interface` 主要用于描述对象的结构，不支持其他类型表示。

总结一下，`type` 和 `interface` 在 TypeScript 中都可以用于定义复杂类型，但它们在声明方式、扩展、合并声明和类型表示等方面有所不同。`type` 更灵活，支持更多类型表示，而 `interface` 更适用于描述对象结构，可以进行合并声明。

## object 类型和 Object 类型的区别

在 TypeScript 中，`object`类型是指非原始类型，即除了 `number`、`string`、`boolean`、`symbol`、`null` 和 `undefined` 之外的类型。而 `Object` 类型是 JavaScript 中的全局对象类型，包含了一些内置方法和属性（如 `toString()` 和 `valueOf()`），可以进行类型转换。

一个实例化的 JavaScript 对象的类型是 `Object`，而一个非原始类型的值的类型是 `object`。例如：

```typescript
const obj1: object = {}; // OK
const obj2: Object = {}; // OK

const num1: object = 42; // Error
const num2: Object = 42; // OK, 但不推荐，因为 42 为原始类型
```

总之，`object`表示任何非原始类型的值，而 `Object`表示 JavaScript 的全局对象类型。

## 谈谈你对 Enum 枚举类型的理解

在 TypeScript 中，枚举（Enum）是一种特殊的数据类型，它允许为一组相关的值赋予有意义的名字。枚举类型可以帮助提高代码的可读性和可维护性。以下是关于 TypeScript 中枚举类型的一些关键点：

1. 声明枚举：

   使用 `enum` 关键字定义一个枚举类型。例如：

   ```typescript
   enum Color {
     Red,
     Green,
     Blue,
   }
   ```

2. 使用枚举：

   可以通过枚举类型名字访问枚举值。例如：

   ```typescript
   let myColor: Color = Color.Red;
   ```

3. 数字枚举：

   默认情况下，枚举值是从 0 开始自增的数字。你也可以为某个成员显式指定一个数字，后续成员将从该数字开始自增。例如：

   ```typescript
   enum Direction {
     Up = 1,
     Down, // 2
     Left, // 3
     Right, // 4
   }
   ```

4. 字符串枚举：

   除了数字枚举，TypeScript 还支持字符串枚举。在字符串枚举中，每个成员都需要显式地赋予一个字符串值。例如：

   ```typescript
   enum HttpMethod {
     GET = "GET",
     POST = "POST",
     PUT = "PUT",
     DELETE = "DELETE",
   }
   ```

5. 反向映射：

   数字枚举具有反向映射的特性，这意味着可以通过枚举值得到枚举名。例如：

   ```typescript
   enum Status {
     OK = 200,
     NotFound = 404,
   }

   console.log(Status[200]); // 输出 "OK"
   ```

   字符串枚举没有反向映射特性。

6. 常量枚举：

   使用 `const` 关键字声明常量枚举。常量枚举在编译时会被计算，**不会在编译后的代码中生成实际的枚举对象**，可以减少生成的代码体积。例如：

   ```typescript
   const enum Weekday {
     Sunday,
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
   }
   ```

总之，TypeScript 中的枚举类型提供了一种为一组相关值赋予有意义名字的方法，增强了代码的可读性和可维护性。枚举类型包括数字枚举、字符串枚举和常量枚举，可以根据不同的需求选择使用。

## 谈谈你对泛型的理解

泛型是一种在定义函数、接口或类时不预先指定具体的类型，而是在使用时指定的一种特性。在 TypeScript 中，泛型被广泛应用以增加代码的重用性和可维护性。

以下是我对 TypeScript 中泛型的理解：

1. **类型安全**：泛型可以帮助我们在编译时检查类型信息。这种特性可以有效地减少运行时的错误，因为我们可以在代码编写阶段就捕获潜在的类型错误。
2. **代码重用**：我们可以编写一个适用于多种类型的函数，而不是针对每一种类型都写一个函数。泛型可以提高代码的复用性，减少不必要的代码重复。
3. **灵活性**：泛型提供了高度的灵活性，我们可以在编写函数或类时不必预先指定具体的类型，而是在使用这些函数或类时指定类型。这样就使得我们的函数或类可以适应更广泛的情况。
4. **类型推断**：在许多情况下，TypeScript 编译器可以自动推断出泛型的类型，这大大减少了我们编写和阅读代码时的工作量。

## any 和 unknown 的区别？

在 TypeScript 中，`any` 和 `unknown` 都可以代表任何类型的值。但是它们在类型安全性和如何使用上有显著的差异。

1. **类型检查**：

   - `any`：当你将一个值标记为 `any` 类型时，TypeScript 将不会对这个值进行任何类型检查。这意味着，你可以在该值上进行任何操作，而不会得到编译时的错误。
   - `unknown`：它表示一个未知的值的类型。你不能直接对 `unknown` 类型的值进行操作，也不能将它分配给除 `unknown` 和 `any` 类型之外的其他类型的变量，除非你先进行类型检查或类型断言。

2. **安全性**：

   - `any`：使用 `any` 会绕过 TypeScript 的类型系统，可能导致运行时错误。它提供了最大的灵活性，但也损失了类型安全性。
   - `unknown`：要操作 `unknown` 类型的值，你必须先确保这个值是你期望的类型。这迫使你更加谨慎地处理这些值，增加了类型安全性。

3. **使用场景**：
   - `any`：当你确实不关心类型或从老的 JavaScript 代码迁移到 TypeScript 时，可能会使用 `any` 作为临时解决方案。
   - `unknown`：当你想表示一个可以是任何类型的值，但仍然想保持类型安全性时，可以使用 `unknown`。

**示例**：

考虑以下代码片段：

```typescript
let a: any = "hello";
let b: number = a; // 这里不会有错误，因为 a 是 any 类型

let x: unknown = "hello";
let y: number = x; // 错误！不能将类型 "unknown" 分配给类型 "number"

if (typeof x === "number") {
  let z: number = x; // 在这里没问题，因为我们已经检查了 x 的类型
}
```

总之，`unknown` 提供了一种在不完全确定类型时保持类型安全性的方式，而 `any` 则完全关闭了 TypeScript 的类型检查。在可能的情况下，推荐使用 `unknown` 而不是 `any`，以保持代码的类型安全性。

## ts 文件和 d.ts 文件的区别是什么

在 TypeScript 开发中，`.ts` 文件和 `.d.ts` 文件有着不同的用途和特点：

1. **`.ts` 文件**:
   - 这是 TypeScript 的主要文件类型。
   - `.ts` 文件包含 TypeScript 代码，这些代码包括类型注解、接口定义、类、函数等。
   - 这些文件会被 TypeScript 编译器编译成 JavaScript 文件，以便在浏览器或 Node.js 环境中运行。
   - `.ts` 文件通常用于编写应用程序或库的实际逻辑。
2. **`.d.ts` 文件**:
   - `.d.ts` 文件是 TypeScript 的声明文件。
   - 这些文件只包含类型声明，而不包含实际的可执行代码。
   - 它们的主要作用是为已存在的 JavaScript 代码提供类型信息。这使得 TypeScript 开发者可以在不改变现有代码的情况下，利用 TypeScript 的类型检查和自动补全特性。
   - 常见的用途包括为第三方库（如 jQuery 或 Lodash）提供类型定义，这些库本身可能是用 JavaScript 编写的。
   - 通过使用 `.d.ts` 文件，可以在 TypeScript 项目中安全地使用这些 JavaScript 库，同时享受到类型系统带来的好处。

简而言之，`.ts` 文件包含 TypeScript 代码的实际实现，而 `.d.ts` 文件则为这些实现或其他 JavaScript 代码提供类型定义。这种区分使得 TypeScript 能够与现有的 JavaScript 代码和库更好地集成，同时为开发者提供类型安全和其他 TypeScript 特性的优势。

<hr />
