interface User {
    name: string
    age: number | null
    gender: 'male' | 'female' | 'other'
    birthplace?: string
}

// ReadOnly型
// Obejct型のプロパティを、全てreadonlyに変換し、新しい方を生成する型
type ReadOnlyWrapUser = Readonly<User>
//推論結果
type ReadOnlyWrapUser = {
    readonly name: string
    readonly age: number | null
    readonly gender: 'male' | 'female' | 'other'
    readonly birthplace?: string | undefined
}

//Partical型
// Object型のプロパティを、全てopticalに変換し、新しい方を生成する
type ParticalWrapUser = Partial<User>
//推論結果
type ParticalWrapUser = {
    name?: string
    age?: number | null
    gender?: 'male' | 'female' | 'other'
    birthplace?: string
}

// Required型
// Object型のプロパティから、全てopticalを取り除き、新しい方を生成する
type RequiredWrapUser = Required<User>

// Record型
// 第一Genericsに指定したプロパティ名称で、新しいObaject型を生成する
type UserRecord = Record<'user', User>
//推論結果
type UserRecord = {
    user: User
}

// Pick型
// 第二Genericsに指定した名称のプロパティ型を、第一Genricsに指定した型から抽出し、新しいObject型を生成する型です。
type UserGender = Pick<User, 'gender'>
// 推論結果
type UserGender = {
    gender: 'male' | 'female' | 'other'
}

// Exclude型
// `Exclude<T ,U>`は、T型からU型と互換性のある型を除き、新しい型を生成します
type X = Exclude<"a" | "b", "b">  // "a"
type Y = Exclude<"a" | (() => void), Function> // "a"

// Extract型
// `Extract<T, U>`は、T型からU型と互換性のある型を残し、新しいかたを生成します。
type X = Exclude<"a" | "b", "b"> // "b"
type Y = Exclude<"a" | (() => void), Function> // () => void

// NonNullable型
// NonNullable<T> は、T型からnullおよびundefinedを除いた、新しい型を生成します
type X = NonNullable<string | null | undefined> // string

