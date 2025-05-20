
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Fleet
 * 
 */
export type Fleet = $Result.DefaultSelection<Prisma.$FleetPayload>
/**
 * Model Truck
 * 
 */
export type Truck = $Result.DefaultSelection<Prisma.$TruckPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OperationalStatus: {
  FULLY_OPERATIONAL: 'FULLY_OPERATIONAL',
  PARTIALLY_OPERATIONAL: 'PARTIALLY_OPERATIONAL',
  UNDER_MAINTENANCE: 'UNDER_MAINTENANCE'
};

export type OperationalStatus = (typeof OperationalStatus)[keyof typeof OperationalStatus]


export const DriverStatus: {
  ASSIGNED: 'ASSIGNED',
  AVAILABLE: 'AVAILABLE',
  ON_LEAVE: 'ON_LEAVE'
};

export type DriverStatus = (typeof DriverStatus)[keyof typeof DriverStatus]


export const TruckStatus: {
  AVAILABLE: 'AVAILABLE',
  UNDER_MAINTENANCE: 'UNDER_MAINTENANCE',
  OUT_OF_SERVICE: 'OUT_OF_SERVICE',
  IN_TRANSIT: 'IN_TRANSIT',
  LOADING: 'LOADING',
  UNLOADING: 'UNLOADING',
  WAITING_FOR_ASSIGNMENT: 'WAITING_FOR_ASSIGNMENT',
  IDLE: 'IDLE',
  ON_SALE: 'ON_SALE'
};

export type TruckStatus = (typeof TruckStatus)[keyof typeof TruckStatus]

}

export type OperationalStatus = $Enums.OperationalStatus

export const OperationalStatus: typeof $Enums.OperationalStatus

export type DriverStatus = $Enums.DriverStatus

export const DriverStatus: typeof $Enums.DriverStatus

export type TruckStatus = $Enums.TruckStatus

export const TruckStatus: typeof $Enums.TruckStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fleet`: Exposes CRUD operations for the **Fleet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fleets
    * const fleets = await prisma.fleet.findMany()
    * ```
    */
  get fleet(): Prisma.FleetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.truck`: Exposes CRUD operations for the **Truck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trucks
    * const trucks = await prisma.truck.findMany()
    * ```
    */
  get truck(): Prisma.TruckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Fleet: 'Fleet',
    Truck: 'Truck',
    Driver: 'Driver'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "fleet" | "truck" | "driver"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Fleet: {
        payload: Prisma.$FleetPayload<ExtArgs>
        fields: Prisma.FleetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FleetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FleetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          findFirst: {
            args: Prisma.FleetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FleetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          findMany: {
            args: Prisma.FleetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>[]
          }
          create: {
            args: Prisma.FleetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          createMany: {
            args: Prisma.FleetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FleetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>[]
          }
          delete: {
            args: Prisma.FleetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          update: {
            args: Prisma.FleetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          deleteMany: {
            args: Prisma.FleetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FleetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FleetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>[]
          }
          upsert: {
            args: Prisma.FleetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          aggregate: {
            args: Prisma.FleetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFleet>
          }
          groupBy: {
            args: Prisma.FleetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FleetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FleetCountArgs<ExtArgs>
            result: $Utils.Optional<FleetCountAggregateOutputType> | number
          }
        }
      }
      Truck: {
        payload: Prisma.$TruckPayload<ExtArgs>
        fields: Prisma.TruckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TruckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TruckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          findFirst: {
            args: Prisma.TruckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TruckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          findMany: {
            args: Prisma.TruckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          create: {
            args: Prisma.TruckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          createMany: {
            args: Prisma.TruckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TruckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          delete: {
            args: Prisma.TruckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          update: {
            args: Prisma.TruckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          deleteMany: {
            args: Prisma.TruckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TruckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TruckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          upsert: {
            args: Prisma.TruckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          aggregate: {
            args: Prisma.TruckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTruck>
          }
          groupBy: {
            args: Prisma.TruckGroupByArgs<ExtArgs>
            result: $Utils.Optional<TruckGroupByOutputType>[]
          }
          count: {
            args: Prisma.TruckCountArgs<ExtArgs>
            result: $Utils.Optional<TruckCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    fleet?: FleetOmit
    truck?: TruckOmit
    driver?: DriverOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FleetCountOutputType
   */

  export type FleetCountOutputType = {
    trucks: number
    drivers: number
    users: number
  }

  export type FleetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trucks?: boolean | FleetCountOutputTypeCountTrucksArgs
    drivers?: boolean | FleetCountOutputTypeCountDriversArgs
    users?: boolean | FleetCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * FleetCountOutputType without action
   */
  export type FleetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FleetCountOutputType
     */
    select?: FleetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FleetCountOutputType without action
   */
  export type FleetCountOutputTypeCountTrucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
  }

  /**
   * FleetCountOutputType without action
   */
  export type FleetCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }

  /**
   * FleetCountOutputType without action
   */
  export type FleetCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    trucks: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trucks?: boolean | DriverCountOutputTypeCountTrucksArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTrucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    role: string | null
    userName: string | null
    createdAt: Date | null
    fleetId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    role: string | null
    userName: string | null
    createdAt: Date | null
    fleetId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    role: number
    userName: number
    createdAt: number
    fleetId: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    role?: true
    userName?: true
    createdAt?: true
    fleetId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    role?: true
    userName?: true
    createdAt?: true
    fleetId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    role?: true
    userName?: true
    createdAt?: true
    fleetId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt: Date
    fleetId: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    role?: boolean
    userName?: boolean
    createdAt?: boolean
    fleetId?: boolean
    fleet?: boolean | Users$fleetArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    role?: boolean
    userName?: boolean
    createdAt?: boolean
    fleetId?: boolean
    fleet?: boolean | Users$fleetArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    role?: boolean
    userName?: boolean
    createdAt?: boolean
    fleetId?: boolean
    fleet?: boolean | Users$fleetArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    role?: boolean
    userName?: boolean
    createdAt?: boolean
    fleetId?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phoneNumber" | "role" | "userName" | "createdAt" | "fleetId", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | Users$fleetArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | Users$fleetArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | Users$fleetArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      fleet: Prisma.$FleetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phoneNumber: string
      role: string
      userName: string
      createdAt: Date
      fleetId: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fleet<T extends Users$fleetArgs<ExtArgs> = {}>(args?: Subset<T, Users$fleetArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly firstName: FieldRef<"Users", 'String'>
    readonly lastName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phoneNumber: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly userName: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly fleetId: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.fleet
   */
  export type Users$fleetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    where?: FleetWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Fleet
   */

  export type AggregateFleet = {
    _count: FleetCountAggregateOutputType | null
    _min: FleetMinAggregateOutputType | null
    _max: FleetMaxAggregateOutputType | null
  }

  export type FleetMinAggregateOutputType = {
    id: string | null
    fleetName: string | null
    fleetBaseLocation: string | null
    operationalStatus: $Enums.OperationalStatus | null
    createdAt: Date | null
  }

  export type FleetMaxAggregateOutputType = {
    id: string | null
    fleetName: string | null
    fleetBaseLocation: string | null
    operationalStatus: $Enums.OperationalStatus | null
    createdAt: Date | null
  }

  export type FleetCountAggregateOutputType = {
    id: number
    fleetName: number
    fleetBaseLocation: number
    operationalStatus: number
    createdAt: number
    _all: number
  }


  export type FleetMinAggregateInputType = {
    id?: true
    fleetName?: true
    fleetBaseLocation?: true
    operationalStatus?: true
    createdAt?: true
  }

  export type FleetMaxAggregateInputType = {
    id?: true
    fleetName?: true
    fleetBaseLocation?: true
    operationalStatus?: true
    createdAt?: true
  }

  export type FleetCountAggregateInputType = {
    id?: true
    fleetName?: true
    fleetBaseLocation?: true
    operationalStatus?: true
    createdAt?: true
    _all?: true
  }

  export type FleetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fleet to aggregate.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fleets
    **/
    _count?: true | FleetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FleetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FleetMaxAggregateInputType
  }

  export type GetFleetAggregateType<T extends FleetAggregateArgs> = {
        [P in keyof T & keyof AggregateFleet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFleet[P]>
      : GetScalarType<T[P], AggregateFleet[P]>
  }




  export type FleetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FleetWhereInput
    orderBy?: FleetOrderByWithAggregationInput | FleetOrderByWithAggregationInput[]
    by: FleetScalarFieldEnum[] | FleetScalarFieldEnum
    having?: FleetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FleetCountAggregateInputType | true
    _min?: FleetMinAggregateInputType
    _max?: FleetMaxAggregateInputType
  }

  export type FleetGroupByOutputType = {
    id: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus: $Enums.OperationalStatus
    createdAt: Date
    _count: FleetCountAggregateOutputType | null
    _min: FleetMinAggregateOutputType | null
    _max: FleetMaxAggregateOutputType | null
  }

  type GetFleetGroupByPayload<T extends FleetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FleetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FleetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FleetGroupByOutputType[P]>
            : GetScalarType<T[P], FleetGroupByOutputType[P]>
        }
      >
    >


  export type FleetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fleetName?: boolean
    fleetBaseLocation?: boolean
    operationalStatus?: boolean
    createdAt?: boolean
    trucks?: boolean | Fleet$trucksArgs<ExtArgs>
    drivers?: boolean | Fleet$driversArgs<ExtArgs>
    users?: boolean | Fleet$usersArgs<ExtArgs>
    _count?: boolean | FleetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fleet"]>

  export type FleetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fleetName?: boolean
    fleetBaseLocation?: boolean
    operationalStatus?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fleet"]>

  export type FleetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fleetName?: boolean
    fleetBaseLocation?: boolean
    operationalStatus?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fleet"]>

  export type FleetSelectScalar = {
    id?: boolean
    fleetName?: boolean
    fleetBaseLocation?: boolean
    operationalStatus?: boolean
    createdAt?: boolean
  }

  export type FleetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fleetName" | "fleetBaseLocation" | "operationalStatus" | "createdAt", ExtArgs["result"]["fleet"]>
  export type FleetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trucks?: boolean | Fleet$trucksArgs<ExtArgs>
    drivers?: boolean | Fleet$driversArgs<ExtArgs>
    users?: boolean | Fleet$usersArgs<ExtArgs>
    _count?: boolean | FleetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FleetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FleetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FleetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fleet"
    objects: {
      trucks: Prisma.$TruckPayload<ExtArgs>[]
      drivers: Prisma.$DriverPayload<ExtArgs>[]
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fleetName: string
      fleetBaseLocation: string
      operationalStatus: $Enums.OperationalStatus
      createdAt: Date
    }, ExtArgs["result"]["fleet"]>
    composites: {}
  }

  type FleetGetPayload<S extends boolean | null | undefined | FleetDefaultArgs> = $Result.GetResult<Prisma.$FleetPayload, S>

  type FleetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FleetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FleetCountAggregateInputType | true
    }

  export interface FleetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fleet'], meta: { name: 'Fleet' } }
    /**
     * Find zero or one Fleet that matches the filter.
     * @param {FleetFindUniqueArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FleetFindUniqueArgs>(args: SelectSubset<T, FleetFindUniqueArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fleet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FleetFindUniqueOrThrowArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FleetFindUniqueOrThrowArgs>(args: SelectSubset<T, FleetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fleet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetFindFirstArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FleetFindFirstArgs>(args?: SelectSubset<T, FleetFindFirstArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fleet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetFindFirstOrThrowArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FleetFindFirstOrThrowArgs>(args?: SelectSubset<T, FleetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fleets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fleets
     * const fleets = await prisma.fleet.findMany()
     * 
     * // Get first 10 Fleets
     * const fleets = await prisma.fleet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fleetWithIdOnly = await prisma.fleet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FleetFindManyArgs>(args?: SelectSubset<T, FleetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fleet.
     * @param {FleetCreateArgs} args - Arguments to create a Fleet.
     * @example
     * // Create one Fleet
     * const Fleet = await prisma.fleet.create({
     *   data: {
     *     // ... data to create a Fleet
     *   }
     * })
     * 
     */
    create<T extends FleetCreateArgs>(args: SelectSubset<T, FleetCreateArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fleets.
     * @param {FleetCreateManyArgs} args - Arguments to create many Fleets.
     * @example
     * // Create many Fleets
     * const fleet = await prisma.fleet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FleetCreateManyArgs>(args?: SelectSubset<T, FleetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fleets and returns the data saved in the database.
     * @param {FleetCreateManyAndReturnArgs} args - Arguments to create many Fleets.
     * @example
     * // Create many Fleets
     * const fleet = await prisma.fleet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fleets and only return the `id`
     * const fleetWithIdOnly = await prisma.fleet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FleetCreateManyAndReturnArgs>(args?: SelectSubset<T, FleetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fleet.
     * @param {FleetDeleteArgs} args - Arguments to delete one Fleet.
     * @example
     * // Delete one Fleet
     * const Fleet = await prisma.fleet.delete({
     *   where: {
     *     // ... filter to delete one Fleet
     *   }
     * })
     * 
     */
    delete<T extends FleetDeleteArgs>(args: SelectSubset<T, FleetDeleteArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fleet.
     * @param {FleetUpdateArgs} args - Arguments to update one Fleet.
     * @example
     * // Update one Fleet
     * const fleet = await prisma.fleet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FleetUpdateArgs>(args: SelectSubset<T, FleetUpdateArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fleets.
     * @param {FleetDeleteManyArgs} args - Arguments to filter Fleets to delete.
     * @example
     * // Delete a few Fleets
     * const { count } = await prisma.fleet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FleetDeleteManyArgs>(args?: SelectSubset<T, FleetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fleets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fleets
     * const fleet = await prisma.fleet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FleetUpdateManyArgs>(args: SelectSubset<T, FleetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fleets and returns the data updated in the database.
     * @param {FleetUpdateManyAndReturnArgs} args - Arguments to update many Fleets.
     * @example
     * // Update many Fleets
     * const fleet = await prisma.fleet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fleets and only return the `id`
     * const fleetWithIdOnly = await prisma.fleet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FleetUpdateManyAndReturnArgs>(args: SelectSubset<T, FleetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fleet.
     * @param {FleetUpsertArgs} args - Arguments to update or create a Fleet.
     * @example
     * // Update or create a Fleet
     * const fleet = await prisma.fleet.upsert({
     *   create: {
     *     // ... data to create a Fleet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fleet we want to update
     *   }
     * })
     */
    upsert<T extends FleetUpsertArgs>(args: SelectSubset<T, FleetUpsertArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fleets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetCountArgs} args - Arguments to filter Fleets to count.
     * @example
     * // Count the number of Fleets
     * const count = await prisma.fleet.count({
     *   where: {
     *     // ... the filter for the Fleets we want to count
     *   }
     * })
    **/
    count<T extends FleetCountArgs>(
      args?: Subset<T, FleetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FleetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fleet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FleetAggregateArgs>(args: Subset<T, FleetAggregateArgs>): Prisma.PrismaPromise<GetFleetAggregateType<T>>

    /**
     * Group by Fleet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FleetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FleetGroupByArgs['orderBy'] }
        : { orderBy?: FleetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FleetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFleetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fleet model
   */
  readonly fields: FleetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fleet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FleetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trucks<T extends Fleet$trucksArgs<ExtArgs> = {}>(args?: Subset<T, Fleet$trucksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drivers<T extends Fleet$driversArgs<ExtArgs> = {}>(args?: Subset<T, Fleet$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Fleet$usersArgs<ExtArgs> = {}>(args?: Subset<T, Fleet$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fleet model
   */
  interface FleetFieldRefs {
    readonly id: FieldRef<"Fleet", 'String'>
    readonly fleetName: FieldRef<"Fleet", 'String'>
    readonly fleetBaseLocation: FieldRef<"Fleet", 'String'>
    readonly operationalStatus: FieldRef<"Fleet", 'OperationalStatus'>
    readonly createdAt: FieldRef<"Fleet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fleet findUnique
   */
  export type FleetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet findUniqueOrThrow
   */
  export type FleetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet findFirst
   */
  export type FleetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fleets.
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fleets.
     */
    distinct?: FleetScalarFieldEnum | FleetScalarFieldEnum[]
  }

  /**
   * Fleet findFirstOrThrow
   */
  export type FleetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fleets.
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fleets.
     */
    distinct?: FleetScalarFieldEnum | FleetScalarFieldEnum[]
  }

  /**
   * Fleet findMany
   */
  export type FleetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleets to fetch.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fleets.
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    distinct?: FleetScalarFieldEnum | FleetScalarFieldEnum[]
  }

  /**
   * Fleet create
   */
  export type FleetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * The data needed to create a Fleet.
     */
    data: XOR<FleetCreateInput, FleetUncheckedCreateInput>
  }

  /**
   * Fleet createMany
   */
  export type FleetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fleets.
     */
    data: FleetCreateManyInput | FleetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fleet createManyAndReturn
   */
  export type FleetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * The data used to create many Fleets.
     */
    data: FleetCreateManyInput | FleetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fleet update
   */
  export type FleetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * The data needed to update a Fleet.
     */
    data: XOR<FleetUpdateInput, FleetUncheckedUpdateInput>
    /**
     * Choose, which Fleet to update.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet updateMany
   */
  export type FleetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fleets.
     */
    data: XOR<FleetUpdateManyMutationInput, FleetUncheckedUpdateManyInput>
    /**
     * Filter which Fleets to update
     */
    where?: FleetWhereInput
    /**
     * Limit how many Fleets to update.
     */
    limit?: number
  }

  /**
   * Fleet updateManyAndReturn
   */
  export type FleetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * The data used to update Fleets.
     */
    data: XOR<FleetUpdateManyMutationInput, FleetUncheckedUpdateManyInput>
    /**
     * Filter which Fleets to update
     */
    where?: FleetWhereInput
    /**
     * Limit how many Fleets to update.
     */
    limit?: number
  }

  /**
   * Fleet upsert
   */
  export type FleetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * The filter to search for the Fleet to update in case it exists.
     */
    where: FleetWhereUniqueInput
    /**
     * In case the Fleet found by the `where` argument doesn't exist, create a new Fleet with this data.
     */
    create: XOR<FleetCreateInput, FleetUncheckedCreateInput>
    /**
     * In case the Fleet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FleetUpdateInput, FleetUncheckedUpdateInput>
  }

  /**
   * Fleet delete
   */
  export type FleetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter which Fleet to delete.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet deleteMany
   */
  export type FleetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fleets to delete
     */
    where?: FleetWhereInput
    /**
     * Limit how many Fleets to delete.
     */
    limit?: number
  }

  /**
   * Fleet.trucks
   */
  export type Fleet$trucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    cursor?: TruckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Fleet.drivers
   */
  export type Fleet$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Fleet.users
   */
  export type Fleet$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Fleet without action
   */
  export type FleetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
  }


  /**
   * Model Truck
   */

  export type AggregateTruck = {
    _count: TruckCountAggregateOutputType | null
    _min: TruckMinAggregateOutputType | null
    _max: TruckMaxAggregateOutputType | null
  }

  export type TruckMinAggregateOutputType = {
    id: string | null
    truckModel: string | null
    registrationNumber: string | null
    manufacturer: string | null
    yearOfManufacture: string | null
    capacity: string | null
    dimensions: string | null
    fuelType: string | null
    mileage: string | null
    status: $Enums.TruckStatus | null
    fleetId: string | null
    driverId: string | null
  }

  export type TruckMaxAggregateOutputType = {
    id: string | null
    truckModel: string | null
    registrationNumber: string | null
    manufacturer: string | null
    yearOfManufacture: string | null
    capacity: string | null
    dimensions: string | null
    fuelType: string | null
    mileage: string | null
    status: $Enums.TruckStatus | null
    fleetId: string | null
    driverId: string | null
  }

  export type TruckCountAggregateOutputType = {
    id: number
    truckModel: number
    registrationNumber: number
    manufacturer: number
    yearOfManufacture: number
    capacity: number
    dimensions: number
    fuelType: number
    mileage: number
    status: number
    fleetId: number
    driverId: number
    _all: number
  }


  export type TruckMinAggregateInputType = {
    id?: true
    truckModel?: true
    registrationNumber?: true
    manufacturer?: true
    yearOfManufacture?: true
    capacity?: true
    dimensions?: true
    fuelType?: true
    mileage?: true
    status?: true
    fleetId?: true
    driverId?: true
  }

  export type TruckMaxAggregateInputType = {
    id?: true
    truckModel?: true
    registrationNumber?: true
    manufacturer?: true
    yearOfManufacture?: true
    capacity?: true
    dimensions?: true
    fuelType?: true
    mileage?: true
    status?: true
    fleetId?: true
    driverId?: true
  }

  export type TruckCountAggregateInputType = {
    id?: true
    truckModel?: true
    registrationNumber?: true
    manufacturer?: true
    yearOfManufacture?: true
    capacity?: true
    dimensions?: true
    fuelType?: true
    mileage?: true
    status?: true
    fleetId?: true
    driverId?: true
    _all?: true
  }

  export type TruckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Truck to aggregate.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trucks
    **/
    _count?: true | TruckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TruckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TruckMaxAggregateInputType
  }

  export type GetTruckAggregateType<T extends TruckAggregateArgs> = {
        [P in keyof T & keyof AggregateTruck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTruck[P]>
      : GetScalarType<T[P], AggregateTruck[P]>
  }




  export type TruckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithAggregationInput | TruckOrderByWithAggregationInput[]
    by: TruckScalarFieldEnum[] | TruckScalarFieldEnum
    having?: TruckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TruckCountAggregateInputType | true
    _min?: TruckMinAggregateInputType
    _max?: TruckMaxAggregateInputType
  }

  export type TruckGroupByOutputType = {
    id: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions: string | null
    fuelType: string
    mileage: string | null
    status: $Enums.TruckStatus
    fleetId: string
    driverId: string | null
    _count: TruckCountAggregateOutputType | null
    _min: TruckMinAggregateOutputType | null
    _max: TruckMaxAggregateOutputType | null
  }

  type GetTruckGroupByPayload<T extends TruckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TruckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TruckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TruckGroupByOutputType[P]>
            : GetScalarType<T[P], TruckGroupByOutputType[P]>
        }
      >
    >


  export type TruckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truckModel?: boolean
    registrationNumber?: boolean
    manufacturer?: boolean
    yearOfManufacture?: boolean
    capacity?: boolean
    dimensions?: boolean
    fuelType?: boolean
    mileage?: boolean
    status?: boolean
    fleetId?: boolean
    driverId?: boolean
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    driver?: boolean | Truck$driverArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>

  export type TruckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truckModel?: boolean
    registrationNumber?: boolean
    manufacturer?: boolean
    yearOfManufacture?: boolean
    capacity?: boolean
    dimensions?: boolean
    fuelType?: boolean
    mileage?: boolean
    status?: boolean
    fleetId?: boolean
    driverId?: boolean
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    driver?: boolean | Truck$driverArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>

  export type TruckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truckModel?: boolean
    registrationNumber?: boolean
    manufacturer?: boolean
    yearOfManufacture?: boolean
    capacity?: boolean
    dimensions?: boolean
    fuelType?: boolean
    mileage?: boolean
    status?: boolean
    fleetId?: boolean
    driverId?: boolean
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    driver?: boolean | Truck$driverArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>

  export type TruckSelectScalar = {
    id?: boolean
    truckModel?: boolean
    registrationNumber?: boolean
    manufacturer?: boolean
    yearOfManufacture?: boolean
    capacity?: boolean
    dimensions?: boolean
    fuelType?: boolean
    mileage?: boolean
    status?: boolean
    fleetId?: boolean
    driverId?: boolean
  }

  export type TruckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "truckModel" | "registrationNumber" | "manufacturer" | "yearOfManufacture" | "capacity" | "dimensions" | "fuelType" | "mileage" | "status" | "fleetId" | "driverId", ExtArgs["result"]["truck"]>
  export type TruckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    driver?: boolean | Truck$driverArgs<ExtArgs>
  }
  export type TruckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    driver?: boolean | Truck$driverArgs<ExtArgs>
  }
  export type TruckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    driver?: boolean | Truck$driverArgs<ExtArgs>
  }

  export type $TruckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Truck"
    objects: {
      fleet: Prisma.$FleetPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      truckModel: string
      registrationNumber: string
      manufacturer: string
      yearOfManufacture: string
      capacity: string
      dimensions: string | null
      fuelType: string
      mileage: string | null
      status: $Enums.TruckStatus
      fleetId: string
      driverId: string | null
    }, ExtArgs["result"]["truck"]>
    composites: {}
  }

  type TruckGetPayload<S extends boolean | null | undefined | TruckDefaultArgs> = $Result.GetResult<Prisma.$TruckPayload, S>

  type TruckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TruckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TruckCountAggregateInputType | true
    }

  export interface TruckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Truck'], meta: { name: 'Truck' } }
    /**
     * Find zero or one Truck that matches the filter.
     * @param {TruckFindUniqueArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TruckFindUniqueArgs>(args: SelectSubset<T, TruckFindUniqueArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Truck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TruckFindUniqueOrThrowArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TruckFindUniqueOrThrowArgs>(args: SelectSubset<T, TruckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Truck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindFirstArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TruckFindFirstArgs>(args?: SelectSubset<T, TruckFindFirstArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Truck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindFirstOrThrowArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TruckFindFirstOrThrowArgs>(args?: SelectSubset<T, TruckFindFirstOrThrowArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trucks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trucks
     * const trucks = await prisma.truck.findMany()
     * 
     * // Get first 10 Trucks
     * const trucks = await prisma.truck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const truckWithIdOnly = await prisma.truck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TruckFindManyArgs>(args?: SelectSubset<T, TruckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Truck.
     * @param {TruckCreateArgs} args - Arguments to create a Truck.
     * @example
     * // Create one Truck
     * const Truck = await prisma.truck.create({
     *   data: {
     *     // ... data to create a Truck
     *   }
     * })
     * 
     */
    create<T extends TruckCreateArgs>(args: SelectSubset<T, TruckCreateArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trucks.
     * @param {TruckCreateManyArgs} args - Arguments to create many Trucks.
     * @example
     * // Create many Trucks
     * const truck = await prisma.truck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TruckCreateManyArgs>(args?: SelectSubset<T, TruckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trucks and returns the data saved in the database.
     * @param {TruckCreateManyAndReturnArgs} args - Arguments to create many Trucks.
     * @example
     * // Create many Trucks
     * const truck = await prisma.truck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trucks and only return the `id`
     * const truckWithIdOnly = await prisma.truck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TruckCreateManyAndReturnArgs>(args?: SelectSubset<T, TruckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Truck.
     * @param {TruckDeleteArgs} args - Arguments to delete one Truck.
     * @example
     * // Delete one Truck
     * const Truck = await prisma.truck.delete({
     *   where: {
     *     // ... filter to delete one Truck
     *   }
     * })
     * 
     */
    delete<T extends TruckDeleteArgs>(args: SelectSubset<T, TruckDeleteArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Truck.
     * @param {TruckUpdateArgs} args - Arguments to update one Truck.
     * @example
     * // Update one Truck
     * const truck = await prisma.truck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TruckUpdateArgs>(args: SelectSubset<T, TruckUpdateArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trucks.
     * @param {TruckDeleteManyArgs} args - Arguments to filter Trucks to delete.
     * @example
     * // Delete a few Trucks
     * const { count } = await prisma.truck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TruckDeleteManyArgs>(args?: SelectSubset<T, TruckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trucks
     * const truck = await prisma.truck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TruckUpdateManyArgs>(args: SelectSubset<T, TruckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trucks and returns the data updated in the database.
     * @param {TruckUpdateManyAndReturnArgs} args - Arguments to update many Trucks.
     * @example
     * // Update many Trucks
     * const truck = await prisma.truck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trucks and only return the `id`
     * const truckWithIdOnly = await prisma.truck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TruckUpdateManyAndReturnArgs>(args: SelectSubset<T, TruckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Truck.
     * @param {TruckUpsertArgs} args - Arguments to update or create a Truck.
     * @example
     * // Update or create a Truck
     * const truck = await prisma.truck.upsert({
     *   create: {
     *     // ... data to create a Truck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Truck we want to update
     *   }
     * })
     */
    upsert<T extends TruckUpsertArgs>(args: SelectSubset<T, TruckUpsertArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckCountArgs} args - Arguments to filter Trucks to count.
     * @example
     * // Count the number of Trucks
     * const count = await prisma.truck.count({
     *   where: {
     *     // ... the filter for the Trucks we want to count
     *   }
     * })
    **/
    count<T extends TruckCountArgs>(
      args?: Subset<T, TruckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TruckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Truck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TruckAggregateArgs>(args: Subset<T, TruckAggregateArgs>): Prisma.PrismaPromise<GetTruckAggregateType<T>>

    /**
     * Group by Truck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TruckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TruckGroupByArgs['orderBy'] }
        : { orderBy?: TruckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TruckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTruckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Truck model
   */
  readonly fields: TruckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Truck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TruckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fleet<T extends FleetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FleetDefaultArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends Truck$driverArgs<ExtArgs> = {}>(args?: Subset<T, Truck$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Truck model
   */
  interface TruckFieldRefs {
    readonly id: FieldRef<"Truck", 'String'>
    readonly truckModel: FieldRef<"Truck", 'String'>
    readonly registrationNumber: FieldRef<"Truck", 'String'>
    readonly manufacturer: FieldRef<"Truck", 'String'>
    readonly yearOfManufacture: FieldRef<"Truck", 'String'>
    readonly capacity: FieldRef<"Truck", 'String'>
    readonly dimensions: FieldRef<"Truck", 'String'>
    readonly fuelType: FieldRef<"Truck", 'String'>
    readonly mileage: FieldRef<"Truck", 'String'>
    readonly status: FieldRef<"Truck", 'TruckStatus'>
    readonly fleetId: FieldRef<"Truck", 'String'>
    readonly driverId: FieldRef<"Truck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Truck findUnique
   */
  export type TruckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck findUniqueOrThrow
   */
  export type TruckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck findFirst
   */
  export type TruckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trucks.
     */
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck findFirstOrThrow
   */
  export type TruckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trucks.
     */
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck findMany
   */
  export type TruckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Trucks to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck create
   */
  export type TruckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The data needed to create a Truck.
     */
    data: XOR<TruckCreateInput, TruckUncheckedCreateInput>
  }

  /**
   * Truck createMany
   */
  export type TruckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trucks.
     */
    data: TruckCreateManyInput | TruckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Truck createManyAndReturn
   */
  export type TruckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * The data used to create many Trucks.
     */
    data: TruckCreateManyInput | TruckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Truck update
   */
  export type TruckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The data needed to update a Truck.
     */
    data: XOR<TruckUpdateInput, TruckUncheckedUpdateInput>
    /**
     * Choose, which Truck to update.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck updateMany
   */
  export type TruckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trucks.
     */
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyInput>
    /**
     * Filter which Trucks to update
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to update.
     */
    limit?: number
  }

  /**
   * Truck updateManyAndReturn
   */
  export type TruckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * The data used to update Trucks.
     */
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyInput>
    /**
     * Filter which Trucks to update
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Truck upsert
   */
  export type TruckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The filter to search for the Truck to update in case it exists.
     */
    where: TruckWhereUniqueInput
    /**
     * In case the Truck found by the `where` argument doesn't exist, create a new Truck with this data.
     */
    create: XOR<TruckCreateInput, TruckUncheckedCreateInput>
    /**
     * In case the Truck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TruckUpdateInput, TruckUncheckedUpdateInput>
  }

  /**
   * Truck delete
   */
  export type TruckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter which Truck to delete.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck deleteMany
   */
  export type TruckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trucks to delete
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to delete.
     */
    limit?: number
  }

  /**
   * Truck.driver
   */
  export type Truck$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Truck without action
   */
  export type TruckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    registerId: string | null
    phone: string | null
    license: string | null
    experience: string | null
    status: $Enums.DriverStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    fleetId: string | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    registerId: string | null
    phone: string | null
    license: string | null
    experience: string | null
    status: $Enums.DriverStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    fleetId: string | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    email: number
    registerId: number
    phone: number
    license: number
    experience: number
    status: number
    createdAt: number
    updatedAt: number
    fleetId: number
    _all: number
  }


  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registerId?: true
    phone?: true
    license?: true
    experience?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    fleetId?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registerId?: true
    phone?: true
    license?: true
    experience?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    fleetId?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registerId?: true
    phone?: true
    license?: true
    experience?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    fleetId?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status: $Enums.DriverStatus
    createdAt: Date
    updatedAt: Date
    fleetId: string | null
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registerId?: boolean
    phone?: boolean
    license?: boolean
    experience?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fleetId?: boolean
    fleet?: boolean | Driver$fleetArgs<ExtArgs>
    trucks?: boolean | Driver$trucksArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registerId?: boolean
    phone?: boolean
    license?: boolean
    experience?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fleetId?: boolean
    fleet?: boolean | Driver$fleetArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registerId?: boolean
    phone?: boolean
    license?: boolean
    experience?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fleetId?: boolean
    fleet?: boolean | Driver$fleetArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    registerId?: boolean
    phone?: boolean
    license?: boolean
    experience?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fleetId?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "registerId" | "phone" | "license" | "experience" | "status" | "createdAt" | "updatedAt" | "fleetId", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | Driver$fleetArgs<ExtArgs>
    trucks?: boolean | Driver$trucksArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | Driver$fleetArgs<ExtArgs>
  }
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fleet?: boolean | Driver$fleetArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      fleet: Prisma.$FleetPayload<ExtArgs> | null
      trucks: Prisma.$TruckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      registerId: string
      phone: string
      license: string
      experience: string
      status: $Enums.DriverStatus
      createdAt: Date
      updatedAt: Date
      fleetId: string | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fleet<T extends Driver$fleetArgs<ExtArgs> = {}>(args?: Subset<T, Driver$fleetArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trucks<T extends Driver$trucksArgs<ExtArgs> = {}>(args?: Subset<T, Driver$trucksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly registerId: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly license: FieldRef<"Driver", 'String'>
    readonly experience: FieldRef<"Driver", 'String'>
    readonly status: FieldRef<"Driver", 'DriverStatus'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
    readonly fleetId: FieldRef<"Driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.fleet
   */
  export type Driver$fleetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    where?: FleetWhereInput
  }

  /**
   * Driver.trucks
   */
  export type Driver$trucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    cursor?: TruckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    role: 'role',
    userName: 'userName',
    createdAt: 'createdAt',
    fleetId: 'fleetId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FleetScalarFieldEnum: {
    id: 'id',
    fleetName: 'fleetName',
    fleetBaseLocation: 'fleetBaseLocation',
    operationalStatus: 'operationalStatus',
    createdAt: 'createdAt'
  };

  export type FleetScalarFieldEnum = (typeof FleetScalarFieldEnum)[keyof typeof FleetScalarFieldEnum]


  export const TruckScalarFieldEnum: {
    id: 'id',
    truckModel: 'truckModel',
    registrationNumber: 'registrationNumber',
    manufacturer: 'manufacturer',
    yearOfManufacture: 'yearOfManufacture',
    capacity: 'capacity',
    dimensions: 'dimensions',
    fuelType: 'fuelType',
    mileage: 'mileage',
    status: 'status',
    fleetId: 'fleetId',
    driverId: 'driverId'
  };

  export type TruckScalarFieldEnum = (typeof TruckScalarFieldEnum)[keyof typeof TruckScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    registerId: 'registerId',
    phone: 'phone',
    license: 'license',
    experience: 'experience',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fleetId: 'fleetId'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OperationalStatus'
   */
  export type EnumOperationalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationalStatus'>
    


  /**
   * Reference to a field of type 'OperationalStatus[]'
   */
  export type ListEnumOperationalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationalStatus[]'>
    


  /**
   * Reference to a field of type 'TruckStatus'
   */
  export type EnumTruckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TruckStatus'>
    


  /**
   * Reference to a field of type 'TruckStatus[]'
   */
  export type ListEnumTruckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TruckStatus[]'>
    


  /**
   * Reference to a field of type 'DriverStatus'
   */
  export type EnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus'>
    


  /**
   * Reference to a field of type 'DriverStatus[]'
   */
  export type ListEnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phoneNumber?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    userName?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    fleetId?: StringNullableFilter<"Users"> | string | null
    fleet?: XOR<FleetNullableScalarRelationFilter, FleetWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    fleetId?: SortOrderInput | SortOrder
    fleet?: FleetOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userName?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    phoneNumber?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    fleetId?: StringNullableFilter<"Users"> | string | null
    fleet?: XOR<FleetNullableScalarRelationFilter, FleetWhereInput> | null
  }, "id" | "email" | "userName">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    fleetId?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    firstName?: StringWithAggregatesFilter<"Users"> | string
    lastName?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phoneNumber?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    userName?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    fleetId?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type FleetWhereInput = {
    AND?: FleetWhereInput | FleetWhereInput[]
    OR?: FleetWhereInput[]
    NOT?: FleetWhereInput | FleetWhereInput[]
    id?: StringFilter<"Fleet"> | string
    fleetName?: StringFilter<"Fleet"> | string
    fleetBaseLocation?: StringFilter<"Fleet"> | string
    operationalStatus?: EnumOperationalStatusFilter<"Fleet"> | $Enums.OperationalStatus
    createdAt?: DateTimeFilter<"Fleet"> | Date | string
    trucks?: TruckListRelationFilter
    drivers?: DriverListRelationFilter
    users?: UsersListRelationFilter
  }

  export type FleetOrderByWithRelationInput = {
    id?: SortOrder
    fleetName?: SortOrder
    fleetBaseLocation?: SortOrder
    operationalStatus?: SortOrder
    createdAt?: SortOrder
    trucks?: TruckOrderByRelationAggregateInput
    drivers?: DriverOrderByRelationAggregateInput
    users?: UsersOrderByRelationAggregateInput
  }

  export type FleetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FleetWhereInput | FleetWhereInput[]
    OR?: FleetWhereInput[]
    NOT?: FleetWhereInput | FleetWhereInput[]
    fleetName?: StringFilter<"Fleet"> | string
    fleetBaseLocation?: StringFilter<"Fleet"> | string
    operationalStatus?: EnumOperationalStatusFilter<"Fleet"> | $Enums.OperationalStatus
    createdAt?: DateTimeFilter<"Fleet"> | Date | string
    trucks?: TruckListRelationFilter
    drivers?: DriverListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type FleetOrderByWithAggregationInput = {
    id?: SortOrder
    fleetName?: SortOrder
    fleetBaseLocation?: SortOrder
    operationalStatus?: SortOrder
    createdAt?: SortOrder
    _count?: FleetCountOrderByAggregateInput
    _max?: FleetMaxOrderByAggregateInput
    _min?: FleetMinOrderByAggregateInput
  }

  export type FleetScalarWhereWithAggregatesInput = {
    AND?: FleetScalarWhereWithAggregatesInput | FleetScalarWhereWithAggregatesInput[]
    OR?: FleetScalarWhereWithAggregatesInput[]
    NOT?: FleetScalarWhereWithAggregatesInput | FleetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fleet"> | string
    fleetName?: StringWithAggregatesFilter<"Fleet"> | string
    fleetBaseLocation?: StringWithAggregatesFilter<"Fleet"> | string
    operationalStatus?: EnumOperationalStatusWithAggregatesFilter<"Fleet"> | $Enums.OperationalStatus
    createdAt?: DateTimeWithAggregatesFilter<"Fleet"> | Date | string
  }

  export type TruckWhereInput = {
    AND?: TruckWhereInput | TruckWhereInput[]
    OR?: TruckWhereInput[]
    NOT?: TruckWhereInput | TruckWhereInput[]
    id?: StringFilter<"Truck"> | string
    truckModel?: StringFilter<"Truck"> | string
    registrationNumber?: StringFilter<"Truck"> | string
    manufacturer?: StringFilter<"Truck"> | string
    yearOfManufacture?: StringFilter<"Truck"> | string
    capacity?: StringFilter<"Truck"> | string
    dimensions?: StringNullableFilter<"Truck"> | string | null
    fuelType?: StringFilter<"Truck"> | string
    mileage?: StringNullableFilter<"Truck"> | string | null
    status?: EnumTruckStatusFilter<"Truck"> | $Enums.TruckStatus
    fleetId?: StringFilter<"Truck"> | string
    driverId?: StringNullableFilter<"Truck"> | string | null
    fleet?: XOR<FleetScalarRelationFilter, FleetWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }

  export type TruckOrderByWithRelationInput = {
    id?: SortOrder
    truckModel?: SortOrder
    registrationNumber?: SortOrder
    manufacturer?: SortOrder
    yearOfManufacture?: SortOrder
    capacity?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    fuelType?: SortOrder
    mileage?: SortOrderInput | SortOrder
    status?: SortOrder
    fleetId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    fleet?: FleetOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type TruckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registrationNumber?: string
    AND?: TruckWhereInput | TruckWhereInput[]
    OR?: TruckWhereInput[]
    NOT?: TruckWhereInput | TruckWhereInput[]
    truckModel?: StringFilter<"Truck"> | string
    manufacturer?: StringFilter<"Truck"> | string
    yearOfManufacture?: StringFilter<"Truck"> | string
    capacity?: StringFilter<"Truck"> | string
    dimensions?: StringNullableFilter<"Truck"> | string | null
    fuelType?: StringFilter<"Truck"> | string
    mileage?: StringNullableFilter<"Truck"> | string | null
    status?: EnumTruckStatusFilter<"Truck"> | $Enums.TruckStatus
    fleetId?: StringFilter<"Truck"> | string
    driverId?: StringNullableFilter<"Truck"> | string | null
    fleet?: XOR<FleetScalarRelationFilter, FleetWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }, "id" | "registrationNumber">

  export type TruckOrderByWithAggregationInput = {
    id?: SortOrder
    truckModel?: SortOrder
    registrationNumber?: SortOrder
    manufacturer?: SortOrder
    yearOfManufacture?: SortOrder
    capacity?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    fuelType?: SortOrder
    mileage?: SortOrderInput | SortOrder
    status?: SortOrder
    fleetId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    _count?: TruckCountOrderByAggregateInput
    _max?: TruckMaxOrderByAggregateInput
    _min?: TruckMinOrderByAggregateInput
  }

  export type TruckScalarWhereWithAggregatesInput = {
    AND?: TruckScalarWhereWithAggregatesInput | TruckScalarWhereWithAggregatesInput[]
    OR?: TruckScalarWhereWithAggregatesInput[]
    NOT?: TruckScalarWhereWithAggregatesInput | TruckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Truck"> | string
    truckModel?: StringWithAggregatesFilter<"Truck"> | string
    registrationNumber?: StringWithAggregatesFilter<"Truck"> | string
    manufacturer?: StringWithAggregatesFilter<"Truck"> | string
    yearOfManufacture?: StringWithAggregatesFilter<"Truck"> | string
    capacity?: StringWithAggregatesFilter<"Truck"> | string
    dimensions?: StringNullableWithAggregatesFilter<"Truck"> | string | null
    fuelType?: StringWithAggregatesFilter<"Truck"> | string
    mileage?: StringNullableWithAggregatesFilter<"Truck"> | string | null
    status?: EnumTruckStatusWithAggregatesFilter<"Truck"> | $Enums.TruckStatus
    fleetId?: StringWithAggregatesFilter<"Truck"> | string
    driverId?: StringNullableWithAggregatesFilter<"Truck"> | string | null
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    registerId?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    license?: StringFilter<"Driver"> | string
    experience?: StringFilter<"Driver"> | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    fleetId?: StringNullableFilter<"Driver"> | string | null
    fleet?: XOR<FleetNullableScalarRelationFilter, FleetWhereInput> | null
    trucks?: TruckListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerId?: SortOrder
    phone?: SortOrder
    license?: SortOrder
    experience?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fleetId?: SortOrderInput | SortOrder
    fleet?: FleetOrderByWithRelationInput
    trucks?: TruckOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    registerId?: string
    license?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    experience?: StringFilter<"Driver"> | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    fleetId?: StringNullableFilter<"Driver"> | string | null
    fleet?: XOR<FleetNullableScalarRelationFilter, FleetWhereInput> | null
    trucks?: TruckListRelationFilter
  }, "id" | "email" | "registerId" | "license">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerId?: SortOrder
    phone?: SortOrder
    license?: SortOrder
    experience?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fleetId?: SortOrderInput | SortOrder
    _count?: DriverCountOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    name?: StringWithAggregatesFilter<"Driver"> | string
    email?: StringWithAggregatesFilter<"Driver"> | string
    registerId?: StringWithAggregatesFilter<"Driver"> | string
    phone?: StringWithAggregatesFilter<"Driver"> | string
    license?: StringWithAggregatesFilter<"Driver"> | string
    experience?: StringWithAggregatesFilter<"Driver"> | string
    status?: EnumDriverStatusWithAggregatesFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    fleetId?: StringNullableWithAggregatesFilter<"Driver"> | string | null
  }

  export type UsersCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt?: Date | string
    fleet?: FleetCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt?: Date | string
    fleetId?: string | null
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleet?: FleetUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt?: Date | string
    fleetId?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FleetCreateInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    trucks?: TruckCreateNestedManyWithoutFleetInput
    drivers?: DriverCreateNestedManyWithoutFleetInput
    users?: UsersCreateNestedManyWithoutFleetInput
  }

  export type FleetUncheckedCreateInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    trucks?: TruckUncheckedCreateNestedManyWithoutFleetInput
    drivers?: DriverUncheckedCreateNestedManyWithoutFleetInput
    users?: UsersUncheckedCreateNestedManyWithoutFleetInput
  }

  export type FleetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUpdateManyWithoutFleetNestedInput
    drivers?: DriverUpdateManyWithoutFleetNestedInput
    users?: UsersUpdateManyWithoutFleetNestedInput
  }

  export type FleetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUncheckedUpdateManyWithoutFleetNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutFleetNestedInput
    users?: UsersUncheckedUpdateManyWithoutFleetNestedInput
  }

  export type FleetCreateManyInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
  }

  export type FleetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FleetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TruckCreateInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    fleet: FleetCreateNestedOneWithoutTrucksInput
    driver?: DriverCreateNestedOneWithoutTrucksInput
  }

  export type TruckUncheckedCreateInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    fleetId: string
    driverId?: string | null
  }

  export type TruckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    fleet?: FleetUpdateOneRequiredWithoutTrucksNestedInput
    driver?: DriverUpdateOneWithoutTrucksNestedInput
  }

  export type TruckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    fleetId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TruckCreateManyInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    fleetId: string
    driverId?: string | null
  }

  export type TruckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
  }

  export type TruckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    fleetId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverCreateInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fleet?: FleetCreateNestedOneWithoutDriversInput
    trucks?: TruckCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fleetId?: string | null
    trucks?: TruckUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleet?: FleetUpdateOneWithoutDriversNestedInput
    trucks?: TruckUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleetId?: NullableStringFieldUpdateOperationsInput | string | null
    trucks?: TruckUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fleetId?: string | null
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FleetNullableScalarRelationFilter = {
    is?: FleetWhereInput | null
    isNot?: FleetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    fleetId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    fleetId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    fleetId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumOperationalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationalStatus | EnumOperationalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationalStatusFilter<$PrismaModel> | $Enums.OperationalStatus
  }

  export type TruckListRelationFilter = {
    every?: TruckWhereInput
    some?: TruckWhereInput
    none?: TruckWhereInput
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type TruckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FleetCountOrderByAggregateInput = {
    id?: SortOrder
    fleetName?: SortOrder
    fleetBaseLocation?: SortOrder
    operationalStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type FleetMaxOrderByAggregateInput = {
    id?: SortOrder
    fleetName?: SortOrder
    fleetBaseLocation?: SortOrder
    operationalStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type FleetMinOrderByAggregateInput = {
    id?: SortOrder
    fleetName?: SortOrder
    fleetBaseLocation?: SortOrder
    operationalStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOperationalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationalStatus | EnumOperationalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationalStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationalStatusFilter<$PrismaModel>
    _max?: NestedEnumOperationalStatusFilter<$PrismaModel>
  }

  export type EnumTruckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckStatus | EnumTruckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckStatusFilter<$PrismaModel> | $Enums.TruckStatus
  }

  export type FleetScalarRelationFilter = {
    is?: FleetWhereInput
    isNot?: FleetWhereInput
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type TruckCountOrderByAggregateInput = {
    id?: SortOrder
    truckModel?: SortOrder
    registrationNumber?: SortOrder
    manufacturer?: SortOrder
    yearOfManufacture?: SortOrder
    capacity?: SortOrder
    dimensions?: SortOrder
    fuelType?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    fleetId?: SortOrder
    driverId?: SortOrder
  }

  export type TruckMaxOrderByAggregateInput = {
    id?: SortOrder
    truckModel?: SortOrder
    registrationNumber?: SortOrder
    manufacturer?: SortOrder
    yearOfManufacture?: SortOrder
    capacity?: SortOrder
    dimensions?: SortOrder
    fuelType?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    fleetId?: SortOrder
    driverId?: SortOrder
  }

  export type TruckMinOrderByAggregateInput = {
    id?: SortOrder
    truckModel?: SortOrder
    registrationNumber?: SortOrder
    manufacturer?: SortOrder
    yearOfManufacture?: SortOrder
    capacity?: SortOrder
    dimensions?: SortOrder
    fuelType?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    fleetId?: SortOrder
    driverId?: SortOrder
  }

  export type EnumTruckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckStatus | EnumTruckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckStatusWithAggregatesFilter<$PrismaModel> | $Enums.TruckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTruckStatusFilter<$PrismaModel>
    _max?: NestedEnumTruckStatusFilter<$PrismaModel>
  }

  export type EnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerId?: SortOrder
    phone?: SortOrder
    license?: SortOrder
    experience?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fleetId?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerId?: SortOrder
    phone?: SortOrder
    license?: SortOrder
    experience?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fleetId?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerId?: SortOrder
    phone?: SortOrder
    license?: SortOrder
    experience?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fleetId?: SortOrder
  }

  export type EnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type FleetCreateNestedOneWithoutUsersInput = {
    create?: XOR<FleetCreateWithoutUsersInput, FleetUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FleetCreateOrConnectWithoutUsersInput
    connect?: FleetWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FleetUpdateOneWithoutUsersNestedInput = {
    create?: XOR<FleetCreateWithoutUsersInput, FleetUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FleetCreateOrConnectWithoutUsersInput
    upsert?: FleetUpsertWithoutUsersInput
    disconnect?: FleetWhereInput | boolean
    delete?: FleetWhereInput | boolean
    connect?: FleetWhereUniqueInput
    update?: XOR<XOR<FleetUpdateToOneWithWhereWithoutUsersInput, FleetUpdateWithoutUsersInput>, FleetUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TruckCreateNestedManyWithoutFleetInput = {
    create?: XOR<TruckCreateWithoutFleetInput, TruckUncheckedCreateWithoutFleetInput> | TruckCreateWithoutFleetInput[] | TruckUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutFleetInput | TruckCreateOrConnectWithoutFleetInput[]
    createMany?: TruckCreateManyFleetInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type DriverCreateNestedManyWithoutFleetInput = {
    create?: XOR<DriverCreateWithoutFleetInput, DriverUncheckedCreateWithoutFleetInput> | DriverCreateWithoutFleetInput[] | DriverUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutFleetInput | DriverCreateOrConnectWithoutFleetInput[]
    createMany?: DriverCreateManyFleetInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutFleetInput = {
    create?: XOR<UsersCreateWithoutFleetInput, UsersUncheckedCreateWithoutFleetInput> | UsersCreateWithoutFleetInput[] | UsersUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFleetInput | UsersCreateOrConnectWithoutFleetInput[]
    createMany?: UsersCreateManyFleetInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type TruckUncheckedCreateNestedManyWithoutFleetInput = {
    create?: XOR<TruckCreateWithoutFleetInput, TruckUncheckedCreateWithoutFleetInput> | TruckCreateWithoutFleetInput[] | TruckUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutFleetInput | TruckCreateOrConnectWithoutFleetInput[]
    createMany?: TruckCreateManyFleetInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutFleetInput = {
    create?: XOR<DriverCreateWithoutFleetInput, DriverUncheckedCreateWithoutFleetInput> | DriverCreateWithoutFleetInput[] | DriverUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutFleetInput | DriverCreateOrConnectWithoutFleetInput[]
    createMany?: DriverCreateManyFleetInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutFleetInput = {
    create?: XOR<UsersCreateWithoutFleetInput, UsersUncheckedCreateWithoutFleetInput> | UsersCreateWithoutFleetInput[] | UsersUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFleetInput | UsersCreateOrConnectWithoutFleetInput[]
    createMany?: UsersCreateManyFleetInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type EnumOperationalStatusFieldUpdateOperationsInput = {
    set?: $Enums.OperationalStatus
  }

  export type TruckUpdateManyWithoutFleetNestedInput = {
    create?: XOR<TruckCreateWithoutFleetInput, TruckUncheckedCreateWithoutFleetInput> | TruckCreateWithoutFleetInput[] | TruckUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutFleetInput | TruckCreateOrConnectWithoutFleetInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutFleetInput | TruckUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: TruckCreateManyFleetInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutFleetInput | TruckUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutFleetInput | TruckUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type DriverUpdateManyWithoutFleetNestedInput = {
    create?: XOR<DriverCreateWithoutFleetInput, DriverUncheckedCreateWithoutFleetInput> | DriverCreateWithoutFleetInput[] | DriverUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutFleetInput | DriverCreateOrConnectWithoutFleetInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutFleetInput | DriverUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: DriverCreateManyFleetInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutFleetInput | DriverUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutFleetInput | DriverUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutFleetNestedInput = {
    create?: XOR<UsersCreateWithoutFleetInput, UsersUncheckedCreateWithoutFleetInput> | UsersCreateWithoutFleetInput[] | UsersUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFleetInput | UsersCreateOrConnectWithoutFleetInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFleetInput | UsersUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: UsersCreateManyFleetInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFleetInput | UsersUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFleetInput | UsersUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type TruckUncheckedUpdateManyWithoutFleetNestedInput = {
    create?: XOR<TruckCreateWithoutFleetInput, TruckUncheckedCreateWithoutFleetInput> | TruckCreateWithoutFleetInput[] | TruckUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutFleetInput | TruckCreateOrConnectWithoutFleetInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutFleetInput | TruckUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: TruckCreateManyFleetInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutFleetInput | TruckUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutFleetInput | TruckUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutFleetNestedInput = {
    create?: XOR<DriverCreateWithoutFleetInput, DriverUncheckedCreateWithoutFleetInput> | DriverCreateWithoutFleetInput[] | DriverUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutFleetInput | DriverCreateOrConnectWithoutFleetInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutFleetInput | DriverUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: DriverCreateManyFleetInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutFleetInput | DriverUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutFleetInput | DriverUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutFleetNestedInput = {
    create?: XOR<UsersCreateWithoutFleetInput, UsersUncheckedCreateWithoutFleetInput> | UsersCreateWithoutFleetInput[] | UsersUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFleetInput | UsersCreateOrConnectWithoutFleetInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFleetInput | UsersUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: UsersCreateManyFleetInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFleetInput | UsersUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFleetInput | UsersUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FleetCreateNestedOneWithoutTrucksInput = {
    create?: XOR<FleetCreateWithoutTrucksInput, FleetUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: FleetCreateOrConnectWithoutTrucksInput
    connect?: FleetWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutTrucksInput = {
    create?: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTrucksInput
    connect?: DriverWhereUniqueInput
  }

  export type EnumTruckStatusFieldUpdateOperationsInput = {
    set?: $Enums.TruckStatus
  }

  export type FleetUpdateOneRequiredWithoutTrucksNestedInput = {
    create?: XOR<FleetCreateWithoutTrucksInput, FleetUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: FleetCreateOrConnectWithoutTrucksInput
    upsert?: FleetUpsertWithoutTrucksInput
    connect?: FleetWhereUniqueInput
    update?: XOR<XOR<FleetUpdateToOneWithWhereWithoutTrucksInput, FleetUpdateWithoutTrucksInput>, FleetUncheckedUpdateWithoutTrucksInput>
  }

  export type DriverUpdateOneWithoutTrucksNestedInput = {
    create?: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTrucksInput
    upsert?: DriverUpsertWithoutTrucksInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutTrucksInput, DriverUpdateWithoutTrucksInput>, DriverUncheckedUpdateWithoutTrucksInput>
  }

  export type FleetCreateNestedOneWithoutDriversInput = {
    create?: XOR<FleetCreateWithoutDriversInput, FleetUncheckedCreateWithoutDriversInput>
    connectOrCreate?: FleetCreateOrConnectWithoutDriversInput
    connect?: FleetWhereUniqueInput
  }

  export type TruckCreateNestedManyWithoutDriverInput = {
    create?: XOR<TruckCreateWithoutDriverInput, TruckUncheckedCreateWithoutDriverInput> | TruckCreateWithoutDriverInput[] | TruckUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriverInput | TruckCreateOrConnectWithoutDriverInput[]
    createMany?: TruckCreateManyDriverInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type TruckUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TruckCreateWithoutDriverInput, TruckUncheckedCreateWithoutDriverInput> | TruckCreateWithoutDriverInput[] | TruckUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriverInput | TruckCreateOrConnectWithoutDriverInput[]
    createMany?: TruckCreateManyDriverInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type EnumDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriverStatus
  }

  export type FleetUpdateOneWithoutDriversNestedInput = {
    create?: XOR<FleetCreateWithoutDriversInput, FleetUncheckedCreateWithoutDriversInput>
    connectOrCreate?: FleetCreateOrConnectWithoutDriversInput
    upsert?: FleetUpsertWithoutDriversInput
    disconnect?: FleetWhereInput | boolean
    delete?: FleetWhereInput | boolean
    connect?: FleetWhereUniqueInput
    update?: XOR<XOR<FleetUpdateToOneWithWhereWithoutDriversInput, FleetUpdateWithoutDriversInput>, FleetUncheckedUpdateWithoutDriversInput>
  }

  export type TruckUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TruckCreateWithoutDriverInput, TruckUncheckedCreateWithoutDriverInput> | TruckCreateWithoutDriverInput[] | TruckUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriverInput | TruckCreateOrConnectWithoutDriverInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutDriverInput | TruckUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TruckCreateManyDriverInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutDriverInput | TruckUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutDriverInput | TruckUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type TruckUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TruckCreateWithoutDriverInput, TruckUncheckedCreateWithoutDriverInput> | TruckCreateWithoutDriverInput[] | TruckUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriverInput | TruckCreateOrConnectWithoutDriverInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutDriverInput | TruckUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TruckCreateManyDriverInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutDriverInput | TruckUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutDriverInput | TruckUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOperationalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationalStatus | EnumOperationalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationalStatusFilter<$PrismaModel> | $Enums.OperationalStatus
  }

  export type NestedEnumOperationalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationalStatus | EnumOperationalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationalStatus[] | ListEnumOperationalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationalStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationalStatusFilter<$PrismaModel>
    _max?: NestedEnumOperationalStatusFilter<$PrismaModel>
  }

  export type NestedEnumTruckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckStatus | EnumTruckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckStatusFilter<$PrismaModel> | $Enums.TruckStatus
  }

  export type NestedEnumTruckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckStatus | EnumTruckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TruckStatus[] | ListEnumTruckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTruckStatusWithAggregatesFilter<$PrismaModel> | $Enums.TruckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTruckStatusFilter<$PrismaModel>
    _max?: NestedEnumTruckStatusFilter<$PrismaModel>
  }

  export type NestedEnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type FleetCreateWithoutUsersInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    trucks?: TruckCreateNestedManyWithoutFleetInput
    drivers?: DriverCreateNestedManyWithoutFleetInput
  }

  export type FleetUncheckedCreateWithoutUsersInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    trucks?: TruckUncheckedCreateNestedManyWithoutFleetInput
    drivers?: DriverUncheckedCreateNestedManyWithoutFleetInput
  }

  export type FleetCreateOrConnectWithoutUsersInput = {
    where: FleetWhereUniqueInput
    create: XOR<FleetCreateWithoutUsersInput, FleetUncheckedCreateWithoutUsersInput>
  }

  export type FleetUpsertWithoutUsersInput = {
    update: XOR<FleetUpdateWithoutUsersInput, FleetUncheckedUpdateWithoutUsersInput>
    create: XOR<FleetCreateWithoutUsersInput, FleetUncheckedCreateWithoutUsersInput>
    where?: FleetWhereInput
  }

  export type FleetUpdateToOneWithWhereWithoutUsersInput = {
    where?: FleetWhereInput
    data: XOR<FleetUpdateWithoutUsersInput, FleetUncheckedUpdateWithoutUsersInput>
  }

  export type FleetUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUpdateManyWithoutFleetNestedInput
    drivers?: DriverUpdateManyWithoutFleetNestedInput
  }

  export type FleetUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUncheckedUpdateManyWithoutFleetNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutFleetNestedInput
  }

  export type TruckCreateWithoutFleetInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    driver?: DriverCreateNestedOneWithoutTrucksInput
  }

  export type TruckUncheckedCreateWithoutFleetInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    driverId?: string | null
  }

  export type TruckCreateOrConnectWithoutFleetInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutFleetInput, TruckUncheckedCreateWithoutFleetInput>
  }

  export type TruckCreateManyFleetInputEnvelope = {
    data: TruckCreateManyFleetInput | TruckCreateManyFleetInput[]
    skipDuplicates?: boolean
  }

  export type DriverCreateWithoutFleetInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trucks?: TruckCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutFleetInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trucks?: TruckUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutFleetInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutFleetInput, DriverUncheckedCreateWithoutFleetInput>
  }

  export type DriverCreateManyFleetInputEnvelope = {
    data: DriverCreateManyFleetInput | DriverCreateManyFleetInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutFleetInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutFleetInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutFleetInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFleetInput, UsersUncheckedCreateWithoutFleetInput>
  }

  export type UsersCreateManyFleetInputEnvelope = {
    data: UsersCreateManyFleetInput | UsersCreateManyFleetInput[]
    skipDuplicates?: boolean
  }

  export type TruckUpsertWithWhereUniqueWithoutFleetInput = {
    where: TruckWhereUniqueInput
    update: XOR<TruckUpdateWithoutFleetInput, TruckUncheckedUpdateWithoutFleetInput>
    create: XOR<TruckCreateWithoutFleetInput, TruckUncheckedCreateWithoutFleetInput>
  }

  export type TruckUpdateWithWhereUniqueWithoutFleetInput = {
    where: TruckWhereUniqueInput
    data: XOR<TruckUpdateWithoutFleetInput, TruckUncheckedUpdateWithoutFleetInput>
  }

  export type TruckUpdateManyWithWhereWithoutFleetInput = {
    where: TruckScalarWhereInput
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyWithoutFleetInput>
  }

  export type TruckScalarWhereInput = {
    AND?: TruckScalarWhereInput | TruckScalarWhereInput[]
    OR?: TruckScalarWhereInput[]
    NOT?: TruckScalarWhereInput | TruckScalarWhereInput[]
    id?: StringFilter<"Truck"> | string
    truckModel?: StringFilter<"Truck"> | string
    registrationNumber?: StringFilter<"Truck"> | string
    manufacturer?: StringFilter<"Truck"> | string
    yearOfManufacture?: StringFilter<"Truck"> | string
    capacity?: StringFilter<"Truck"> | string
    dimensions?: StringNullableFilter<"Truck"> | string | null
    fuelType?: StringFilter<"Truck"> | string
    mileage?: StringNullableFilter<"Truck"> | string | null
    status?: EnumTruckStatusFilter<"Truck"> | $Enums.TruckStatus
    fleetId?: StringFilter<"Truck"> | string
    driverId?: StringNullableFilter<"Truck"> | string | null
  }

  export type DriverUpsertWithWhereUniqueWithoutFleetInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutFleetInput, DriverUncheckedUpdateWithoutFleetInput>
    create: XOR<DriverCreateWithoutFleetInput, DriverUncheckedCreateWithoutFleetInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutFleetInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutFleetInput, DriverUncheckedUpdateWithoutFleetInput>
  }

  export type DriverUpdateManyWithWhereWithoutFleetInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutFleetInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    registerId?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    license?: StringFilter<"Driver"> | string
    experience?: StringFilter<"Driver"> | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    fleetId?: StringNullableFilter<"Driver"> | string | null
  }

  export type UsersUpsertWithWhereUniqueWithoutFleetInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutFleetInput, UsersUncheckedUpdateWithoutFleetInput>
    create: XOR<UsersCreateWithoutFleetInput, UsersUncheckedCreateWithoutFleetInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutFleetInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutFleetInput, UsersUncheckedUpdateWithoutFleetInput>
  }

  export type UsersUpdateManyWithWhereWithoutFleetInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutFleetInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phoneNumber?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    userName?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    fleetId?: StringNullableFilter<"Users"> | string | null
  }

  export type FleetCreateWithoutTrucksInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    drivers?: DriverCreateNestedManyWithoutFleetInput
    users?: UsersCreateNestedManyWithoutFleetInput
  }

  export type FleetUncheckedCreateWithoutTrucksInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    drivers?: DriverUncheckedCreateNestedManyWithoutFleetInput
    users?: UsersUncheckedCreateNestedManyWithoutFleetInput
  }

  export type FleetCreateOrConnectWithoutTrucksInput = {
    where: FleetWhereUniqueInput
    create: XOR<FleetCreateWithoutTrucksInput, FleetUncheckedCreateWithoutTrucksInput>
  }

  export type DriverCreateWithoutTrucksInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fleet?: FleetCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutTrucksInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fleetId?: string | null
  }

  export type DriverCreateOrConnectWithoutTrucksInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
  }

  export type FleetUpsertWithoutTrucksInput = {
    update: XOR<FleetUpdateWithoutTrucksInput, FleetUncheckedUpdateWithoutTrucksInput>
    create: XOR<FleetCreateWithoutTrucksInput, FleetUncheckedCreateWithoutTrucksInput>
    where?: FleetWhereInput
  }

  export type FleetUpdateToOneWithWhereWithoutTrucksInput = {
    where?: FleetWhereInput
    data: XOR<FleetUpdateWithoutTrucksInput, FleetUncheckedUpdateWithoutTrucksInput>
  }

  export type FleetUpdateWithoutTrucksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUpdateManyWithoutFleetNestedInput
    users?: UsersUpdateManyWithoutFleetNestedInput
  }

  export type FleetUncheckedUpdateWithoutTrucksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUncheckedUpdateManyWithoutFleetNestedInput
    users?: UsersUncheckedUpdateManyWithoutFleetNestedInput
  }

  export type DriverUpsertWithoutTrucksInput = {
    update: XOR<DriverUpdateWithoutTrucksInput, DriverUncheckedUpdateWithoutTrucksInput>
    create: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutTrucksInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutTrucksInput, DriverUncheckedUpdateWithoutTrucksInput>
  }

  export type DriverUpdateWithoutTrucksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleet?: FleetUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutTrucksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FleetCreateWithoutDriversInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    trucks?: TruckCreateNestedManyWithoutFleetInput
    users?: UsersCreateNestedManyWithoutFleetInput
  }

  export type FleetUncheckedCreateWithoutDriversInput = {
    id?: string
    fleetName: string
    fleetBaseLocation: string
    operationalStatus?: $Enums.OperationalStatus
    createdAt?: Date | string
    trucks?: TruckUncheckedCreateNestedManyWithoutFleetInput
    users?: UsersUncheckedCreateNestedManyWithoutFleetInput
  }

  export type FleetCreateOrConnectWithoutDriversInput = {
    where: FleetWhereUniqueInput
    create: XOR<FleetCreateWithoutDriversInput, FleetUncheckedCreateWithoutDriversInput>
  }

  export type TruckCreateWithoutDriverInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    fleet: FleetCreateNestedOneWithoutTrucksInput
  }

  export type TruckUncheckedCreateWithoutDriverInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    fleetId: string
  }

  export type TruckCreateOrConnectWithoutDriverInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutDriverInput, TruckUncheckedCreateWithoutDriverInput>
  }

  export type TruckCreateManyDriverInputEnvelope = {
    data: TruckCreateManyDriverInput | TruckCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type FleetUpsertWithoutDriversInput = {
    update: XOR<FleetUpdateWithoutDriversInput, FleetUncheckedUpdateWithoutDriversInput>
    create: XOR<FleetCreateWithoutDriversInput, FleetUncheckedCreateWithoutDriversInput>
    where?: FleetWhereInput
  }

  export type FleetUpdateToOneWithWhereWithoutDriversInput = {
    where?: FleetWhereInput
    data: XOR<FleetUpdateWithoutDriversInput, FleetUncheckedUpdateWithoutDriversInput>
  }

  export type FleetUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUpdateManyWithoutFleetNestedInput
    users?: UsersUpdateManyWithoutFleetNestedInput
  }

  export type FleetUncheckedUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    fleetBaseLocation?: StringFieldUpdateOperationsInput | string
    operationalStatus?: EnumOperationalStatusFieldUpdateOperationsInput | $Enums.OperationalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUncheckedUpdateManyWithoutFleetNestedInput
    users?: UsersUncheckedUpdateManyWithoutFleetNestedInput
  }

  export type TruckUpsertWithWhereUniqueWithoutDriverInput = {
    where: TruckWhereUniqueInput
    update: XOR<TruckUpdateWithoutDriverInput, TruckUncheckedUpdateWithoutDriverInput>
    create: XOR<TruckCreateWithoutDriverInput, TruckUncheckedCreateWithoutDriverInput>
  }

  export type TruckUpdateWithWhereUniqueWithoutDriverInput = {
    where: TruckWhereUniqueInput
    data: XOR<TruckUpdateWithoutDriverInput, TruckUncheckedUpdateWithoutDriverInput>
  }

  export type TruckUpdateManyWithWhereWithoutDriverInput = {
    where: TruckScalarWhereInput
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyWithoutDriverInput>
  }

  export type TruckCreateManyFleetInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    driverId?: string | null
  }

  export type DriverCreateManyFleetInput = {
    id?: string
    name: string
    email: string
    registerId: string
    phone: string
    license: string
    experience: string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateManyFleetInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: string
    userName: string
    createdAt?: Date | string
  }

  export type TruckUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    driver?: DriverUpdateOneWithoutTrucksNestedInput
  }

  export type TruckUncheckedUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TruckUncheckedUpdateManyWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trucks?: TruckUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TruckCreateManyDriverInput = {
    id?: string
    truckModel: string
    registrationNumber: string
    manufacturer: string
    yearOfManufacture: string
    capacity: string
    dimensions?: string | null
    fuelType: string
    mileage?: string | null
    status?: $Enums.TruckStatus
    fleetId: string
  }

  export type TruckUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    fleet?: FleetUpdateOneRequiredWithoutTrucksNestedInput
  }

  export type TruckUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    fleetId?: StringFieldUpdateOperationsInput | string
  }

  export type TruckUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    truckModel?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    yearOfManufacture?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: StringFieldUpdateOperationsInput | string
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTruckStatusFieldUpdateOperationsInput | $Enums.TruckStatus
    fleetId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}