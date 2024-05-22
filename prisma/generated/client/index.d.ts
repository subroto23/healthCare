
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Specialties
 * 
 */
export type Specialties = $Result.DefaultSelection<Prisma.$SpecialtiesPayload>
/**
 * Model DoctorSpecialties
 * 
 */
export type DoctorSpecialties = $Result.DefaultSelection<Prisma.$DoctorSpecialtiesPayload>
/**
 * Model PatientHealthData
 * 
 */
export type PatientHealthData = $Result.DefaultSelection<Prisma.$PatientHealthDataPayload>
/**
 * Model MedicalReport
 * 
 */
export type MedicalReport = $Result.DefaultSelection<Prisma.$MedicalReportPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model DoctorSchedules
 * 
 */
export type DoctorSchedules = $Result.DefaultSelection<Prisma.$DoctorSchedulesPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const BloodGroup: {
  A_POSITIVE: 'A_POSITIVE',
  B_POSITIVE: 'B_POSITIVE',
  O_POSITIVE: 'O_POSITIVE',
  AB_POSITIVE: 'AB_POSITIVE',
  A_NEGATIVE: 'A_NEGATIVE',
  B_NEGATIVE: 'B_NEGATIVE',
  O_NEGATIVE: 'O_NEGATIVE',
  AB_NEGATIVE: 'AB_NEGATIVE'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const MaritalStatus: {
  MARRIED: 'MARRIED',
  UNMARRIED: 'UNMARRIED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  INPROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PaymentStatus: {
  PAID: 'PAID',
  UNPAID: 'UNPAID'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.specialties`: Exposes CRUD operations for the **Specialties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialties.findMany()
    * ```
    */
  get specialties(): Prisma.SpecialtiesDelegate<ExtArgs>;

  /**
   * `prisma.doctorSpecialties`: Exposes CRUD operations for the **DoctorSpecialties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecialties
    * const doctorSpecialties = await prisma.doctorSpecialties.findMany()
    * ```
    */
  get doctorSpecialties(): Prisma.DoctorSpecialtiesDelegate<ExtArgs>;

  /**
   * `prisma.patientHealthData`: Exposes CRUD operations for the **PatientHealthData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientHealthData
    * const patientHealthData = await prisma.patientHealthData.findMany()
    * ```
    */
  get patientHealthData(): Prisma.PatientHealthDataDelegate<ExtArgs>;

  /**
   * `prisma.medicalReport`: Exposes CRUD operations for the **MedicalReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalReports
    * const medicalReports = await prisma.medicalReport.findMany()
    * ```
    */
  get medicalReport(): Prisma.MedicalReportDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs>;

  /**
   * `prisma.doctorSchedules`: Exposes CRUD operations for the **DoctorSchedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSchedules
    * const doctorSchedules = await prisma.doctorSchedules.findMany()
    * ```
    */
  get doctorSchedules(): Prisma.DoctorSchedulesDelegate<ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Admin: 'Admin',
    Doctor: 'Doctor',
    Patient: 'Patient',
    Specialties: 'Specialties',
    DoctorSpecialties: 'DoctorSpecialties',
    PatientHealthData: 'PatientHealthData',
    MedicalReport: 'MedicalReport',
    Schedule: 'Schedule',
    DoctorSchedules: 'DoctorSchedules',
    Appointment: 'Appointment',
    Payment: 'Payment',
    Review: 'Review',
    Prescription: 'Prescription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'admin' | 'doctor' | 'patient' | 'specialties' | 'doctorSpecialties' | 'patientHealthData' | 'medicalReport' | 'schedule' | 'doctorSchedules' | 'appointment' | 'payment' | 'review' | 'prescription'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>,
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>,
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Specialties: {
        payload: Prisma.$SpecialtiesPayload<ExtArgs>
        fields: Prisma.SpecialtiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          findFirst: {
            args: Prisma.SpecialtiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          findMany: {
            args: Prisma.SpecialtiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          create: {
            args: Prisma.SpecialtiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          createMany: {
            args: Prisma.SpecialtiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SpecialtiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          update: {
            args: Prisma.SpecialtiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SpecialtiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          aggregate: {
            args: Prisma.SpecialtiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpecialties>
          }
          groupBy: {
            args: Prisma.SpecialtiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SpecialtiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtiesCountArgs<ExtArgs>,
            result: $Utils.Optional<SpecialtiesCountAggregateOutputType> | number
          }
        }
      }
      DoctorSpecialties: {
        payload: Prisma.$DoctorSpecialtiesPayload<ExtArgs>
        fields: Prisma.DoctorSpecialtiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecialtiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecialtiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecialtiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecialtiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecialtiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DoctorSpecialtiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          update: {
            args: Prisma.DoctorSpecialtiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecialtiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecialtiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DoctorSpecialtiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecialtiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoctorSpecialties>
          }
          groupBy: {
            args: Prisma.DoctorSpecialtiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DoctorSpecialtiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecialtiesCountArgs<ExtArgs>,
            result: $Utils.Optional<DoctorSpecialtiesCountAggregateOutputType> | number
          }
        }
      }
      PatientHealthData: {
        payload: Prisma.$PatientHealthDataPayload<ExtArgs>
        fields: Prisma.PatientHealthDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientHealthDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          findFirst: {
            args: Prisma.PatientHealthDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientHealthDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          findMany: {
            args: Prisma.PatientHealthDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          create: {
            args: Prisma.PatientHealthDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          createMany: {
            args: Prisma.PatientHealthDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PatientHealthDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          update: {
            args: Prisma.PatientHealthDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          deleteMany: {
            args: Prisma.PatientHealthDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PatientHealthDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PatientHealthDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          aggregate: {
            args: Prisma.PatientHealthDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatientHealthData>
          }
          groupBy: {
            args: Prisma.PatientHealthDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatientHealthDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientHealthDataCountArgs<ExtArgs>,
            result: $Utils.Optional<PatientHealthDataCountAggregateOutputType> | number
          }
        }
      }
      MedicalReport: {
        payload: Prisma.$MedicalReportPayload<ExtArgs>
        fields: Prisma.MedicalReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalReportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalReportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          findFirst: {
            args: Prisma.MedicalReportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalReportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          findMany: {
            args: Prisma.MedicalReportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          create: {
            args: Prisma.MedicalReportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          createMany: {
            args: Prisma.MedicalReportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MedicalReportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          update: {
            args: Prisma.MedicalReportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          deleteMany: {
            args: Prisma.MedicalReportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalReportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MedicalReportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          aggregate: {
            args: Prisma.MedicalReportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedicalReport>
          }
          groupBy: {
            args: Prisma.MedicalReportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MedicalReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalReportCountArgs<ExtArgs>,
            result: $Utils.Optional<MedicalReportCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      DoctorSchedules: {
        payload: Prisma.$DoctorSchedulesPayload<ExtArgs>
        fields: Prisma.DoctorSchedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSchedulesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          findFirst: {
            args: Prisma.DoctorSchedulesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSchedulesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          findMany: {
            args: Prisma.DoctorSchedulesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>[]
          }
          create: {
            args: Prisma.DoctorSchedulesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          createMany: {
            args: Prisma.DoctorSchedulesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DoctorSchedulesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          update: {
            args: Prisma.DoctorSchedulesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSchedulesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSchedulesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DoctorSchedulesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          aggregate: {
            args: Prisma.DoctorSchedulesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoctorSchedules>
          }
          groupBy: {
            args: Prisma.DoctorSchedulesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DoctorSchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSchedulesCountArgs<ExtArgs>,
            result: $Utils.Optional<DoctorSchedulesCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    doctorSpecialties: number
    appointment: number
    doctorSchedules: number
    review: number
    prescription: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | DoctorCountOutputTypeCountDoctorSpecialtiesArgs
    appointment?: boolean | DoctorCountOutputTypeCountAppointmentArgs
    doctorSchedules?: boolean | DoctorCountOutputTypeCountDoctorSchedulesArgs
    review?: boolean | DoctorCountOutputTypeCountReviewArgs
    prescription?: boolean | DoctorCountOutputTypeCountPrescriptionArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialtiesWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSchedulesWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPrescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    medicalReport: number
    appointment: number
    review: number
    prescription: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalReport?: boolean | PatientCountOutputTypeCountMedicalReportArgs
    appointment?: boolean | PatientCountOutputTypeCountAppointmentArgs
    review?: boolean | PatientCountOutputTypeCountReviewArgs
    prescription?: boolean | PatientCountOutputTypeCountPrescriptionArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalReportWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type SpecialtiesCountOutputType
   */

  export type SpecialtiesCountOutputType = {
    doctorSpecialties: number
  }

  export type SpecialtiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | SpecialtiesCountOutputTypeCountDoctorSpecialtiesArgs
  }

  // Custom InputTypes
  /**
   * SpecialtiesCountOutputType without action
   */
  export type SpecialtiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtiesCountOutputType
     */
    select?: SpecialtiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtiesCountOutputType without action
   */
  export type SpecialtiesCountOutputTypeCountDoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialtiesWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    doctorSchedules: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSchedules?: boolean | ScheduleCountOutputTypeCountDoctorSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountDoctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSchedulesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    needPasswordChange: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    needPasswordChange: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    needPasswordChange: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange: boolean
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | User$adminArgs<ExtArgs>
    Doctor?: boolean | User$DoctorArgs<ExtArgs>
    Patient?: boolean | User$PatientArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | User$adminArgs<ExtArgs>
    Doctor?: boolean | User$DoctorArgs<ExtArgs>
    Patient?: boolean | User$PatientArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      Doctor: Prisma.$DoctorPayload<ExtArgs> | null
      Patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      needPasswordChange: boolean
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Doctor<T extends User$DoctorArgs<ExtArgs> = {}>(args?: Subset<T, User$DoctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Patient<T extends User$PatientArgs<ExtArgs> = {}>(args?: Subset<T, User$PatientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly needPasswordChange: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.Doctor
   */
  export type User$DoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.Patient
   */
  export type User$PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePhoto: number
    contactNumber: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    profilePhoto: string | null
    contactNumber: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profilePhoto: string | null
      contactNumber: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly profilePhoto: FieldRef<"Admin", 'String'>
    readonly contactNumber: FieldRef<"Admin", 'String'>
    readonly isDeleted: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    appointmentFee: number | null
    averageRating: number | null
  }

  export type DoctorSumAggregateOutputType = {
    appointmentFee: number | null
    averageRating: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    registrationsNumber: string | null
    experience: string | null
    gender: $Enums.Gender | null
    appointmentFee: number | null
    qualification: string | null
    currentWorkingPlace: string | null
    designation: string | null
    averageRating: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    registrationsNumber: string | null
    experience: string | null
    gender: $Enums.Gender | null
    appointmentFee: number | null
    qualification: string | null
    currentWorkingPlace: string | null
    designation: string | null
    averageRating: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePhoto: number
    contactNumber: number
    address: number
    registrationsNumber: number
    experience: number
    gender: number
    appointmentFee: number
    qualification: number
    currentWorkingPlace: number
    designation: number
    averageRating: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    appointmentFee?: true
    averageRating?: true
  }

  export type DoctorSumAggregateInputType = {
    appointmentFee?: true
    averageRating?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationsNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkingPlace?: true
    designation?: true
    averageRating?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationsNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkingPlace?: true
    designation?: true
    averageRating?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationsNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkingPlace?: true
    designation?: true
    averageRating?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    name: string
    email: string
    profilePhoto: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationsNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkingPlace?: boolean
    designation?: boolean
    averageRating?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorSpecialties?: boolean | Doctor$doctorSpecialtiesArgs<ExtArgs>
    appointment?: boolean | Doctor$appointmentArgs<ExtArgs>
    doctorSchedules?: boolean | Doctor$doctorSchedulesArgs<ExtArgs>
    review?: boolean | Doctor$reviewArgs<ExtArgs>
    prescription?: boolean | Doctor$prescriptionArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationsNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkingPlace?: boolean
    designation?: boolean
    averageRating?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorSpecialties?: boolean | Doctor$doctorSpecialtiesArgs<ExtArgs>
    appointment?: boolean | Doctor$appointmentArgs<ExtArgs>
    doctorSchedules?: boolean | Doctor$doctorSchedulesArgs<ExtArgs>
    review?: boolean | Doctor$reviewArgs<ExtArgs>
    prescription?: boolean | Doctor$prescriptionArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctorSpecialties: Prisma.$DoctorSpecialtiesPayload<ExtArgs>[]
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      doctorSchedules: Prisma.$DoctorSchedulesPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
      prescription: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profilePhoto: string | null
      contactNumber: string
      address: string
      registrationsNumber: string
      experience: string
      gender: $Enums.Gender
      appointmentFee: number
      qualification: string
      currentWorkingPlace: string
      designation: string
      averageRating: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }


  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DoctorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends DoctorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Doctors.
     *     @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends DoctorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctorSpecialties<T extends Doctor$doctorSpecialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorSpecialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    appointment<T extends Doctor$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    doctorSchedules<T extends Doctor$doctorSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends Doctor$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    prescription<T extends Doctor$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$prescriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Doctor model
   */ 
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly profilePhoto: FieldRef<"Doctor", 'String'>
    readonly contactNumber: FieldRef<"Doctor", 'String'>
    readonly address: FieldRef<"Doctor", 'String'>
    readonly registrationsNumber: FieldRef<"Doctor", 'String'>
    readonly experience: FieldRef<"Doctor", 'String'>
    readonly gender: FieldRef<"Doctor", 'Gender'>
    readonly appointmentFee: FieldRef<"Doctor", 'Int'>
    readonly qualification: FieldRef<"Doctor", 'String'>
    readonly currentWorkingPlace: FieldRef<"Doctor", 'String'>
    readonly designation: FieldRef<"Doctor", 'String'>
    readonly averageRating: FieldRef<"Doctor", 'Float'>
    readonly isDeleted: FieldRef<"Doctor", 'Boolean'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
  }

  /**
   * Doctor.doctorSpecialties
   */
  export type Doctor$doctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    where?: DoctorSpecialtiesWhereInput
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    cursor?: DoctorSpecialtiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * Doctor.appointment
   */
  export type Doctor$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor.doctorSchedules
   */
  export type Doctor$doctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    where?: DoctorSchedulesWhereInput
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    cursor?: DoctorSchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * Doctor.review
   */
  export type Doctor$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Doctor.prescription
   */
  export type Doctor$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePhoto: number
    contactNumber: number
    address: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    email: string
    profilePhoto: string | null
    contactNumber: string
    address: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    patientHealthData?: boolean | Patient$patientHealthDataArgs<ExtArgs>
    medicalReport?: boolean | Patient$medicalReportArgs<ExtArgs>
    appointment?: boolean | Patient$appointmentArgs<ExtArgs>
    review?: boolean | Patient$reviewArgs<ExtArgs>
    prescription?: boolean | Patient$prescriptionArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    patientHealthData?: boolean | Patient$patientHealthDataArgs<ExtArgs>
    medicalReport?: boolean | Patient$medicalReportArgs<ExtArgs>
    appointment?: boolean | Patient$appointmentArgs<ExtArgs>
    review?: boolean | Patient$reviewArgs<ExtArgs>
    prescription?: boolean | Patient$prescriptionArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      patientHealthData: Prisma.$PatientHealthDataPayload<ExtArgs> | null
      medicalReport: Prisma.$MedicalReportPayload<ExtArgs>[]
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
      prescription: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profilePhoto: string | null
      contactNumber: string
      address: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }


  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientCreateArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Patients.
     *     @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    patientHealthData<T extends Patient$patientHealthDataArgs<ExtArgs> = {}>(args?: Subset<T, Patient$patientHealthDataArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    medicalReport<T extends Patient$medicalReportArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'findMany'> | Null>;

    appointment<T extends Patient$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends Patient$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Patient$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    prescription<T extends Patient$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prescriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly profilePhoto: FieldRef<"Patient", 'String'>
    readonly contactNumber: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly isDeleted: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }

  /**
   * Patient.patientHealthData
   */
  export type Patient$patientHealthDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    where?: PatientHealthDataWhereInput
  }

  /**
   * Patient.medicalReport
   */
  export type Patient$medicalReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    where?: MedicalReportWhereInput
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    cursor?: MedicalReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * Patient.appointment
   */
  export type Patient$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.review
   */
  export type Patient$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Patient.prescription
   */
  export type Patient$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Specialties
   */

  export type AggregateSpecialties = {
    _count: SpecialtiesCountAggregateOutputType | null
    _min: SpecialtiesMinAggregateOutputType | null
    _max: SpecialtiesMaxAggregateOutputType | null
  }

  export type SpecialtiesMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
  }

  export type SpecialtiesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
  }

  export type SpecialtiesCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    _all: number
  }


  export type SpecialtiesMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
  }

  export type SpecialtiesMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
  }

  export type SpecialtiesCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    _all?: true
  }

  export type SpecialtiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to aggregate.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtiesMaxAggregateInputType
  }

  export type GetSpecialtiesAggregateType<T extends SpecialtiesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialties[P]>
      : GetScalarType<T[P], AggregateSpecialties[P]>
  }




  export type SpecialtiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtiesWhereInput
    orderBy?: SpecialtiesOrderByWithAggregationInput | SpecialtiesOrderByWithAggregationInput[]
    by: SpecialtiesScalarFieldEnum[] | SpecialtiesScalarFieldEnum
    having?: SpecialtiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialtiesCountAggregateInputType | true
    _min?: SpecialtiesMinAggregateInputType
    _max?: SpecialtiesMaxAggregateInputType
  }

  export type SpecialtiesGroupByOutputType = {
    id: string
    title: string
    icon: string
    _count: SpecialtiesCountAggregateOutputType | null
    _min: SpecialtiesMinAggregateOutputType | null
    _max: SpecialtiesMaxAggregateOutputType | null
  }

  type GetSpecialtiesGroupByPayload<T extends SpecialtiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtiesGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtiesGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    doctorSpecialties?: boolean | Specialties$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
  }


  export type SpecialtiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | Specialties$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SpecialtiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialties"
    objects: {
      doctorSpecialties: Prisma.$DoctorSpecialtiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string
    }, ExtArgs["result"]["specialties"]>
    composites: {}
  }


  type SpecialtiesGetPayload<S extends boolean | null | undefined | SpecialtiesDefaultArgs> = $Result.GetResult<Prisma.$SpecialtiesPayload, S>

  type SpecialtiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpecialtiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecialtiesCountAggregateInputType | true
    }

  export interface SpecialtiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialties'], meta: { name: 'Specialties' } }
    /**
     * Find zero or one Specialties that matches the filter.
     * @param {SpecialtiesFindUniqueArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpecialtiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialtiesFindUniqueArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Specialties that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpecialtiesFindUniqueOrThrowArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpecialtiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialtiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindFirstArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpecialtiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialtiesFindFirstArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Specialties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindFirstOrThrowArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpecialtiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialtiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialties.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpecialtiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialtiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Specialties.
     * @param {SpecialtiesCreateArgs} args - Arguments to create a Specialties.
     * @example
     * // Create one Specialties
     * const Specialties = await prisma.specialties.create({
     *   data: {
     *     // ... data to create a Specialties
     *   }
     * })
     * 
    **/
    create<T extends SpecialtiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialtiesCreateArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Specialties.
     *     @param {SpecialtiesCreateManyArgs} args - Arguments to create many Specialties.
     *     @example
     *     // Create many Specialties
     *     const specialties = await prisma.specialties.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpecialtiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialtiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Specialties.
     * @param {SpecialtiesDeleteArgs} args - Arguments to delete one Specialties.
     * @example
     * // Delete one Specialties
     * const Specialties = await prisma.specialties.delete({
     *   where: {
     *     // ... filter to delete one Specialties
     *   }
     * })
     * 
    **/
    delete<T extends SpecialtiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialtiesDeleteArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Specialties.
     * @param {SpecialtiesUpdateArgs} args - Arguments to update one Specialties.
     * @example
     * // Update one Specialties
     * const specialties = await prisma.specialties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpecialtiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialtiesUpdateArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtiesDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpecialtiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialtiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialties = await prisma.specialties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpecialtiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialtiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialties.
     * @param {SpecialtiesUpsertArgs} args - Arguments to update or create a Specialties.
     * @example
     * // Update or create a Specialties
     * const specialties = await prisma.specialties.upsert({
     *   create: {
     *     // ... data to create a Specialties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialties we want to update
     *   }
     * })
    **/
    upsert<T extends SpecialtiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialtiesUpsertArgs<ExtArgs>>
    ): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialties.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtiesCountArgs>(
      args?: Subset<T, SpecialtiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialtiesAggregateArgs>(args: Subset<T, SpecialtiesAggregateArgs>): Prisma.PrismaPromise<GetSpecialtiesAggregateType<T>>

    /**
     * Group by Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesGroupByArgs} args - Group by arguments.
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
      T extends SpecialtiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtiesGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialtiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialties model
   */
  readonly fields: SpecialtiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctorSpecialties<T extends Specialties$doctorSpecialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Specialties$doctorSpecialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Specialties model
   */ 
  interface SpecialtiesFieldRefs {
    readonly id: FieldRef<"Specialties", 'String'>
    readonly title: FieldRef<"Specialties", 'String'>
    readonly icon: FieldRef<"Specialties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Specialties findUnique
   */
  export type SpecialtiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties findUniqueOrThrow
   */
  export type SpecialtiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties findFirst
   */
  export type SpecialtiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties findFirstOrThrow
   */
  export type SpecialtiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties findMany
   */
  export type SpecialtiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties create
   */
  export type SpecialtiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialties.
     */
    data: XOR<SpecialtiesCreateInput, SpecialtiesUncheckedCreateInput>
  }

  /**
   * Specialties createMany
   */
  export type SpecialtiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtiesCreateManyInput | SpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialties update
   */
  export type SpecialtiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialties.
     */
    data: XOR<SpecialtiesUpdateInput, SpecialtiesUncheckedUpdateInput>
    /**
     * Choose, which Specialties to update.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties updateMany
   */
  export type SpecialtiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtiesUpdateManyMutationInput, SpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtiesWhereInput
  }

  /**
   * Specialties upsert
   */
  export type SpecialtiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialties to update in case it exists.
     */
    where: SpecialtiesWhereUniqueInput
    /**
     * In case the Specialties found by the `where` argument doesn't exist, create a new Specialties with this data.
     */
    create: XOR<SpecialtiesCreateInput, SpecialtiesUncheckedCreateInput>
    /**
     * In case the Specialties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtiesUpdateInput, SpecialtiesUncheckedUpdateInput>
  }

  /**
   * Specialties delete
   */
  export type SpecialtiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter which Specialties to delete.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties deleteMany
   */
  export type SpecialtiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtiesWhereInput
  }

  /**
   * Specialties.doctorSpecialties
   */
  export type Specialties$doctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    where?: DoctorSpecialtiesWhereInput
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    cursor?: DoctorSpecialtiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties without action
   */
  export type SpecialtiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpecialties
   */

  export type AggregateDoctorSpecialties = {
    _count: DoctorSpecialtiesCountAggregateOutputType | null
    _min: DoctorSpecialtiesMinAggregateOutputType | null
    _max: DoctorSpecialtiesMaxAggregateOutputType | null
  }

  export type DoctorSpecialtiesMinAggregateOutputType = {
    specialitiesId: string | null
    doctorId: string | null
  }

  export type DoctorSpecialtiesMaxAggregateOutputType = {
    specialitiesId: string | null
    doctorId: string | null
  }

  export type DoctorSpecialtiesCountAggregateOutputType = {
    specialitiesId: number
    doctorId: number
    _all: number
  }


  export type DoctorSpecialtiesMinAggregateInputType = {
    specialitiesId?: true
    doctorId?: true
  }

  export type DoctorSpecialtiesMaxAggregateInputType = {
    specialitiesId?: true
    doctorId?: true
  }

  export type DoctorSpecialtiesCountAggregateInputType = {
    specialitiesId?: true
    doctorId?: true
    _all?: true
  }

  export type DoctorSpecialtiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialties to aggregate.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecialties
    **/
    _count?: true | DoctorSpecialtiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecialtiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecialtiesMaxAggregateInputType
  }

  export type GetDoctorSpecialtiesAggregateType<T extends DoctorSpecialtiesAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialties[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialties[P]>
  }




  export type DoctorSpecialtiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialtiesWhereInput
    orderBy?: DoctorSpecialtiesOrderByWithAggregationInput | DoctorSpecialtiesOrderByWithAggregationInput[]
    by: DoctorSpecialtiesScalarFieldEnum[] | DoctorSpecialtiesScalarFieldEnum
    having?: DoctorSpecialtiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecialtiesCountAggregateInputType | true
    _min?: DoctorSpecialtiesMinAggregateInputType
    _max?: DoctorSpecialtiesMaxAggregateInputType
  }

  export type DoctorSpecialtiesGroupByOutputType = {
    specialitiesId: string
    doctorId: string
    _count: DoctorSpecialtiesCountAggregateOutputType | null
    _min: DoctorSpecialtiesMinAggregateOutputType | null
    _max: DoctorSpecialtiesMaxAggregateOutputType | null
  }

  type GetDoctorSpecialtiesGroupByPayload<T extends DoctorSpecialtiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecialtiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecialtiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecialtiesGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecialtiesGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecialtiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialitiesId?: boolean
    doctorId?: boolean
    specialty?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type DoctorSpecialtiesSelectScalar = {
    specialitiesId?: boolean
    doctorId?: boolean
  }


  export type DoctorSpecialtiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }


  export type $DoctorSpecialtiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpecialties"
    objects: {
      specialty: Prisma.$SpecialtiesPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      specialitiesId: string
      doctorId: string
    }, ExtArgs["result"]["doctorSpecialties"]>
    composites: {}
  }


  type DoctorSpecialtiesGetPayload<S extends boolean | null | undefined | DoctorSpecialtiesDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecialtiesPayload, S>

  type DoctorSpecialtiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoctorSpecialtiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorSpecialtiesCountAggregateInputType | true
    }

  export interface DoctorSpecialtiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialties'], meta: { name: 'DoctorSpecialties' } }
    /**
     * Find zero or one DoctorSpecialties that matches the filter.
     * @param {DoctorSpecialtiesFindUniqueArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorSpecialtiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSpecialtiesFindUniqueArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DoctorSpecialties that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorSpecialtiesFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DoctorSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesFindFirstArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorSpecialtiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSpecialtiesFindFirstArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DoctorSpecialties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DoctorSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findMany()
     * 
     * // Get first 10 DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findMany({ take: 10 })
     * 
     * // Only select the `specialitiesId`
     * const doctorSpecialtiesWithSpecialitiesIdOnly = await prisma.doctorSpecialties.findMany({ select: { specialitiesId: true } })
     * 
    **/
    findMany<T extends DoctorSpecialtiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSpecialtiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DoctorSpecialties.
     * @param {DoctorSpecialtiesCreateArgs} args - Arguments to create a DoctorSpecialties.
     * @example
     * // Create one DoctorSpecialties
     * const DoctorSpecialties = await prisma.doctorSpecialties.create({
     *   data: {
     *     // ... data to create a DoctorSpecialties
     *   }
     * })
     * 
    **/
    create<T extends DoctorSpecialtiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSpecialtiesCreateArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DoctorSpecialties.
     *     @param {DoctorSpecialtiesCreateManyArgs} args - Arguments to create many DoctorSpecialties.
     *     @example
     *     // Create many DoctorSpecialties
     *     const doctorSpecialties = await prisma.doctorSpecialties.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorSpecialtiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSpecialtiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorSpecialties.
     * @param {DoctorSpecialtiesDeleteArgs} args - Arguments to delete one DoctorSpecialties.
     * @example
     * // Delete one DoctorSpecialties
     * const DoctorSpecialties = await prisma.doctorSpecialties.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialties
     *   }
     * })
     * 
    **/
    delete<T extends DoctorSpecialtiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSpecialtiesDeleteArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DoctorSpecialties.
     * @param {DoctorSpecialtiesUpdateArgs} args - Arguments to update one DoctorSpecialties.
     * @example
     * // Update one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorSpecialtiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSpecialtiesUpdateArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DoctorSpecialties.
     * @param {DoctorSpecialtiesDeleteManyArgs} args - Arguments to filter DoctorSpecialties to delete.
     * @example
     * // Delete a few DoctorSpecialties
     * const { count } = await prisma.doctorSpecialties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorSpecialtiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSpecialtiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorSpecialtiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSpecialtiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorSpecialties.
     * @param {DoctorSpecialtiesUpsertArgs} args - Arguments to update or create a DoctorSpecialties.
     * @example
     * // Update or create a DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialties we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorSpecialtiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSpecialtiesUpsertArgs<ExtArgs>>
    ): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesCountArgs} args - Arguments to filter DoctorSpecialties to count.
     * @example
     * // Count the number of DoctorSpecialties
     * const count = await prisma.doctorSpecialties.count({
     *   where: {
     *     // ... the filter for the DoctorSpecialties we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecialtiesCountArgs>(
      args?: Subset<T, DoctorSpecialtiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecialtiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorSpecialtiesAggregateArgs>(args: Subset<T, DoctorSpecialtiesAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecialtiesAggregateType<T>>

    /**
     * Group by DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesGroupByArgs} args - Group by arguments.
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
      T extends DoctorSpecialtiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecialtiesGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecialtiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorSpecialtiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecialtiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpecialties model
   */
  readonly fields: DoctorSpecialtiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpecialties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecialtiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    specialty<T extends SpecialtiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialtiesDefaultArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DoctorSpecialties model
   */ 
  interface DoctorSpecialtiesFieldRefs {
    readonly specialitiesId: FieldRef<"DoctorSpecialties", 'String'>
    readonly doctorId: FieldRef<"DoctorSpecialties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpecialties findUnique
   */
  export type DoctorSpecialtiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties findUniqueOrThrow
   */
  export type DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties findFirst
   */
  export type DoctorSpecialtiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecialties.
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecialties.
     */
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * DoctorSpecialties findFirstOrThrow
   */
  export type DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecialties.
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecialties.
     */
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * DoctorSpecialties findMany
   */
  export type DoctorSpecialtiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecialties.
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * DoctorSpecialties create
   */
  export type DoctorSpecialtiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesCreateInput, DoctorSpecialtiesUncheckedCreateInput>
  }

  /**
   * DoctorSpecialties createMany
   */
  export type DoctorSpecialtiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecialties.
     */
    data: DoctorSpecialtiesCreateManyInput | DoctorSpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialties update
   */
  export type DoctorSpecialtiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesUpdateInput, DoctorSpecialtiesUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpecialties to update.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties updateMany
   */
  export type DoctorSpecialtiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecialties to update
     */
    where?: DoctorSpecialtiesWhereInput
  }

  /**
   * DoctorSpecialties upsert
   */
  export type DoctorSpecialtiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpecialties to update in case it exists.
     */
    where: DoctorSpecialtiesWhereUniqueInput
    /**
     * In case the DoctorSpecialties found by the `where` argument doesn't exist, create a new DoctorSpecialties with this data.
     */
    create: XOR<DoctorSpecialtiesCreateInput, DoctorSpecialtiesUncheckedCreateInput>
    /**
     * In case the DoctorSpecialties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecialtiesUpdateInput, DoctorSpecialtiesUncheckedUpdateInput>
  }

  /**
   * DoctorSpecialties delete
   */
  export type DoctorSpecialtiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpecialties to delete.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties deleteMany
   */
  export type DoctorSpecialtiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialties to delete
     */
    where?: DoctorSpecialtiesWhereInput
  }

  /**
   * DoctorSpecialties without action
   */
  export type DoctorSpecialtiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
  }


  /**
   * Model PatientHealthData
   */

  export type AggregatePatientHealthData = {
    _count: PatientHealthDataCountAggregateOutputType | null
    _min: PatientHealthDataMinAggregateOutputType | null
    _max: PatientHealthDataMaxAggregateOutputType | null
  }

  export type PatientHealthDataMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string | null
    weight: string | null
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientHealthDataMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string | null
    weight: string | null
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientHealthDataCountAggregateOutputType = {
    id: number
    patientId: number
    dateOfBirth: number
    gender: number
    bloodGroup: number
    hasAllergies: number
    hasDiabetes: number
    height: number
    weight: number
    smokingStatus: number
    dietaryPreferences: number
    pregnancyStatus: number
    mentalHealthHistory: number
    immunizationStatus: number
    hasPastSurgeries: number
    recentAnxiety: number
    recentDepression: number
    maritalStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientHealthDataMinAggregateInputType = {
    id?: true
    patientId?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientHealthDataMaxAggregateInputType = {
    id?: true
    patientId?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientHealthDataCountAggregateInputType = {
    id?: true
    patientId?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientHealthDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientHealthData to aggregate.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientHealthData
    **/
    _count?: true | PatientHealthDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientHealthDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientHealthDataMaxAggregateInputType
  }

  export type GetPatientHealthDataAggregateType<T extends PatientHealthDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientHealthData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientHealthData[P]>
      : GetScalarType<T[P], AggregatePatientHealthData[P]>
  }




  export type PatientHealthDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientHealthDataWhereInput
    orderBy?: PatientHealthDataOrderByWithAggregationInput | PatientHealthDataOrderByWithAggregationInput[]
    by: PatientHealthDataScalarFieldEnum[] | PatientHealthDataScalarFieldEnum
    having?: PatientHealthDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientHealthDataCountAggregateInputType | true
    _min?: PatientHealthDataMinAggregateInputType
    _max?: PatientHealthDataMaxAggregateInputType
  }

  export type PatientHealthDataGroupByOutputType = {
    id: string
    patientId: string
    dateOfBirth: Date
    gender: $Enums.Gender
    bloodGroup: $Enums.BloodGroup
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string
    weight: string
    smokingStatus: boolean | null
    dietaryPreferences: string
    pregnancyStatus: boolean | null
    mentalHealthHistory: string
    immunizationStatus: string
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt: Date
    updatedAt: Date
    _count: PatientHealthDataCountAggregateOutputType | null
    _min: PatientHealthDataMinAggregateOutputType | null
    _max: PatientHealthDataMaxAggregateOutputType | null
  }

  type GetPatientHealthDataGroupByPayload<T extends PatientHealthDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientHealthDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientHealthDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientHealthDataGroupByOutputType[P]>
            : GetScalarType<T[P], PatientHealthDataGroupByOutputType[P]>
        }
      >
    >


  export type PatientHealthDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectScalar = {
    id?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type PatientHealthDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }


  export type $PatientHealthDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientHealthData"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      dateOfBirth: Date
      gender: $Enums.Gender
      bloodGroup: $Enums.BloodGroup
      hasAllergies: boolean | null
      hasDiabetes: boolean | null
      height: string
      weight: string
      smokingStatus: boolean | null
      dietaryPreferences: string
      pregnancyStatus: boolean | null
      mentalHealthHistory: string
      immunizationStatus: string
      hasPastSurgeries: boolean | null
      recentAnxiety: boolean | null
      recentDepression: boolean | null
      maritalStatus: $Enums.MaritalStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientHealthData"]>
    composites: {}
  }


  type PatientHealthDataGetPayload<S extends boolean | null | undefined | PatientHealthDataDefaultArgs> = $Result.GetResult<Prisma.$PatientHealthDataPayload, S>

  type PatientHealthDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientHealthDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientHealthDataCountAggregateInputType | true
    }

  export interface PatientHealthDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientHealthData'], meta: { name: 'PatientHealthData' } }
    /**
     * Find zero or one PatientHealthData that matches the filter.
     * @param {PatientHealthDataFindUniqueArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientHealthDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PatientHealthDataFindUniqueArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PatientHealthData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatientHealthDataFindUniqueOrThrowArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PatientHealthData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindFirstArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientHealthDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientHealthDataFindFirstArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PatientHealthData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindFirstOrThrowArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientHealthDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientHealthDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PatientHealthData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findMany()
     * 
     * // Get first 10 PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PatientHealthDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientHealthDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PatientHealthData.
     * @param {PatientHealthDataCreateArgs} args - Arguments to create a PatientHealthData.
     * @example
     * // Create one PatientHealthData
     * const PatientHealthData = await prisma.patientHealthData.create({
     *   data: {
     *     // ... data to create a PatientHealthData
     *   }
     * })
     * 
    **/
    create<T extends PatientHealthDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientHealthDataCreateArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PatientHealthData.
     *     @param {PatientHealthDataCreateManyArgs} args - Arguments to create many PatientHealthData.
     *     @example
     *     // Create many PatientHealthData
     *     const patientHealthData = await prisma.patientHealthData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientHealthDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientHealthDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PatientHealthData.
     * @param {PatientHealthDataDeleteArgs} args - Arguments to delete one PatientHealthData.
     * @example
     * // Delete one PatientHealthData
     * const PatientHealthData = await prisma.patientHealthData.delete({
     *   where: {
     *     // ... filter to delete one PatientHealthData
     *   }
     * })
     * 
    **/
    delete<T extends PatientHealthDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PatientHealthDataDeleteArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PatientHealthData.
     * @param {PatientHealthDataUpdateArgs} args - Arguments to update one PatientHealthData.
     * @example
     * // Update one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientHealthDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientHealthDataUpdateArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PatientHealthData.
     * @param {PatientHealthDataDeleteManyArgs} args - Arguments to filter PatientHealthData to delete.
     * @example
     * // Delete a few PatientHealthData
     * const { count } = await prisma.patientHealthData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientHealthDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientHealthDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientHealthDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PatientHealthDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatientHealthData.
     * @param {PatientHealthDataUpsertArgs} args - Arguments to update or create a PatientHealthData.
     * @example
     * // Update or create a PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.upsert({
     *   create: {
     *     // ... data to create a PatientHealthData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientHealthData we want to update
     *   }
     * })
    **/
    upsert<T extends PatientHealthDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PatientHealthDataUpsertArgs<ExtArgs>>
    ): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataCountArgs} args - Arguments to filter PatientHealthData to count.
     * @example
     * // Count the number of PatientHealthData
     * const count = await prisma.patientHealthData.count({
     *   where: {
     *     // ... the filter for the PatientHealthData we want to count
     *   }
     * })
    **/
    count<T extends PatientHealthDataCountArgs>(
      args?: Subset<T, PatientHealthDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientHealthDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientHealthDataAggregateArgs>(args: Subset<T, PatientHealthDataAggregateArgs>): Prisma.PrismaPromise<GetPatientHealthDataAggregateType<T>>

    /**
     * Group by PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataGroupByArgs} args - Group by arguments.
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
      T extends PatientHealthDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientHealthDataGroupByArgs['orderBy'] }
        : { orderBy?: PatientHealthDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientHealthDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientHealthDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientHealthData model
   */
  readonly fields: PatientHealthDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientHealthData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientHealthDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PatientHealthData model
   */ 
  interface PatientHealthDataFieldRefs {
    readonly id: FieldRef<"PatientHealthData", 'String'>
    readonly patientId: FieldRef<"PatientHealthData", 'String'>
    readonly dateOfBirth: FieldRef<"PatientHealthData", 'DateTime'>
    readonly gender: FieldRef<"PatientHealthData", 'Gender'>
    readonly bloodGroup: FieldRef<"PatientHealthData", 'BloodGroup'>
    readonly hasAllergies: FieldRef<"PatientHealthData", 'Boolean'>
    readonly hasDiabetes: FieldRef<"PatientHealthData", 'Boolean'>
    readonly height: FieldRef<"PatientHealthData", 'String'>
    readonly weight: FieldRef<"PatientHealthData", 'String'>
    readonly smokingStatus: FieldRef<"PatientHealthData", 'Boolean'>
    readonly dietaryPreferences: FieldRef<"PatientHealthData", 'String'>
    readonly pregnancyStatus: FieldRef<"PatientHealthData", 'Boolean'>
    readonly mentalHealthHistory: FieldRef<"PatientHealthData", 'String'>
    readonly immunizationStatus: FieldRef<"PatientHealthData", 'String'>
    readonly hasPastSurgeries: FieldRef<"PatientHealthData", 'Boolean'>
    readonly recentAnxiety: FieldRef<"PatientHealthData", 'Boolean'>
    readonly recentDepression: FieldRef<"PatientHealthData", 'Boolean'>
    readonly maritalStatus: FieldRef<"PatientHealthData", 'MaritalStatus'>
    readonly createdAt: FieldRef<"PatientHealthData", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientHealthData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientHealthData findUnique
   */
  export type PatientHealthDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData findUniqueOrThrow
   */
  export type PatientHealthDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData findFirst
   */
  export type PatientHealthDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientHealthData.
     */
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData findFirstOrThrow
   */
  export type PatientHealthDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientHealthData.
     */
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData findMany
   */
  export type PatientHealthDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData create
   */
  export type PatientHealthDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientHealthData.
     */
    data: XOR<PatientHealthDataCreateInput, PatientHealthDataUncheckedCreateInput>
  }

  /**
   * PatientHealthData createMany
   */
  export type PatientHealthDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientHealthData.
     */
    data: PatientHealthDataCreateManyInput | PatientHealthDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientHealthData update
   */
  export type PatientHealthDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateInput, PatientHealthDataUncheckedUpdateInput>
    /**
     * Choose, which PatientHealthData to update.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData updateMany
   */
  export type PatientHealthDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateManyMutationInput, PatientHealthDataUncheckedUpdateManyInput>
    /**
     * Filter which PatientHealthData to update
     */
    where?: PatientHealthDataWhereInput
  }

  /**
   * PatientHealthData upsert
   */
  export type PatientHealthDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientHealthData to update in case it exists.
     */
    where: PatientHealthDataWhereUniqueInput
    /**
     * In case the PatientHealthData found by the `where` argument doesn't exist, create a new PatientHealthData with this data.
     */
    create: XOR<PatientHealthDataCreateInput, PatientHealthDataUncheckedCreateInput>
    /**
     * In case the PatientHealthData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientHealthDataUpdateInput, PatientHealthDataUncheckedUpdateInput>
  }

  /**
   * PatientHealthData delete
   */
  export type PatientHealthDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter which PatientHealthData to delete.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData deleteMany
   */
  export type PatientHealthDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientHealthData to delete
     */
    where?: PatientHealthDataWhereInput
  }

  /**
   * PatientHealthData without action
   */
  export type PatientHealthDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
  }


  /**
   * Model MedicalReport
   */

  export type AggregateMedicalReport = {
    _count: MedicalReportCountAggregateOutputType | null
    _min: MedicalReportMinAggregateOutputType | null
    _max: MedicalReportMaxAggregateOutputType | null
  }

  export type MedicalReportMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    reportName: string | null
    reportLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalReportMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    reportName: string | null
    reportLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalReportCountAggregateOutputType = {
    id: number
    patientId: number
    reportName: number
    reportLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalReportMinAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalReportMaxAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalReportCountAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalReport to aggregate.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalReports
    **/
    _count?: true | MedicalReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalReportMaxAggregateInputType
  }

  export type GetMedicalReportAggregateType<T extends MedicalReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalReport[P]>
      : GetScalarType<T[P], AggregateMedicalReport[P]>
  }




  export type MedicalReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalReportWhereInput
    orderBy?: MedicalReportOrderByWithAggregationInput | MedicalReportOrderByWithAggregationInput[]
    by: MedicalReportScalarFieldEnum[] | MedicalReportScalarFieldEnum
    having?: MedicalReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalReportCountAggregateInputType | true
    _min?: MedicalReportMinAggregateInputType
    _max?: MedicalReportMaxAggregateInputType
  }

  export type MedicalReportGroupByOutputType = {
    id: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt: Date
    updatedAt: Date
    _count: MedicalReportCountAggregateOutputType | null
    _min: MedicalReportMinAggregateOutputType | null
    _max: MedicalReportMaxAggregateOutputType | null
  }

  type GetMedicalReportGroupByPayload<T extends MedicalReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalReportGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalReportGroupByOutputType[P]>
        }
      >
    >


  export type MedicalReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectScalar = {
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type MedicalReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }


  export type $MedicalReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalReport"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      reportName: string
      reportLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalReport"]>
    composites: {}
  }


  type MedicalReportGetPayload<S extends boolean | null | undefined | MedicalReportDefaultArgs> = $Result.GetResult<Prisma.$MedicalReportPayload, S>

  type MedicalReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicalReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicalReportCountAggregateInputType | true
    }

  export interface MedicalReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalReport'], meta: { name: 'MedicalReport' } }
    /**
     * Find zero or one MedicalReport that matches the filter.
     * @param {MedicalReportFindUniqueArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicalReportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalReportFindUniqueArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MedicalReport that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicalReportFindUniqueOrThrowArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicalReportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalReportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MedicalReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindFirstArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicalReportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalReportFindFirstArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MedicalReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindFirstOrThrowArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicalReportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalReportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MedicalReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalReports
     * const medicalReports = await prisma.medicalReport.findMany()
     * 
     * // Get first 10 MedicalReports
     * const medicalReports = await prisma.medicalReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicalReportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalReportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MedicalReport.
     * @param {MedicalReportCreateArgs} args - Arguments to create a MedicalReport.
     * @example
     * // Create one MedicalReport
     * const MedicalReport = await prisma.medicalReport.create({
     *   data: {
     *     // ... data to create a MedicalReport
     *   }
     * })
     * 
    **/
    create<T extends MedicalReportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalReportCreateArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MedicalReports.
     *     @param {MedicalReportCreateManyArgs} args - Arguments to create many MedicalReports.
     *     @example
     *     // Create many MedicalReports
     *     const medicalReport = await prisma.medicalReport.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicalReportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalReportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalReport.
     * @param {MedicalReportDeleteArgs} args - Arguments to delete one MedicalReport.
     * @example
     * // Delete one MedicalReport
     * const MedicalReport = await prisma.medicalReport.delete({
     *   where: {
     *     // ... filter to delete one MedicalReport
     *   }
     * })
     * 
    **/
    delete<T extends MedicalReportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalReportDeleteArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MedicalReport.
     * @param {MedicalReportUpdateArgs} args - Arguments to update one MedicalReport.
     * @example
     * // Update one MedicalReport
     * const medicalReport = await prisma.medicalReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicalReportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalReportUpdateArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MedicalReports.
     * @param {MedicalReportDeleteManyArgs} args - Arguments to filter MedicalReports to delete.
     * @example
     * // Delete a few MedicalReports
     * const { count } = await prisma.medicalReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicalReportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalReportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalReports
     * const medicalReport = await prisma.medicalReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicalReportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalReportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalReport.
     * @param {MedicalReportUpsertArgs} args - Arguments to update or create a MedicalReport.
     * @example
     * // Update or create a MedicalReport
     * const medicalReport = await prisma.medicalReport.upsert({
     *   create: {
     *     // ... data to create a MedicalReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalReport we want to update
     *   }
     * })
    **/
    upsert<T extends MedicalReportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalReportUpsertArgs<ExtArgs>>
    ): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MedicalReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportCountArgs} args - Arguments to filter MedicalReports to count.
     * @example
     * // Count the number of MedicalReports
     * const count = await prisma.medicalReport.count({
     *   where: {
     *     // ... the filter for the MedicalReports we want to count
     *   }
     * })
    **/
    count<T extends MedicalReportCountArgs>(
      args?: Subset<T, MedicalReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalReportAggregateArgs>(args: Subset<T, MedicalReportAggregateArgs>): Prisma.PrismaPromise<GetMedicalReportAggregateType<T>>

    /**
     * Group by MedicalReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportGroupByArgs} args - Group by arguments.
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
      T extends MedicalReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalReportGroupByArgs['orderBy'] }
        : { orderBy?: MedicalReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalReport model
   */
  readonly fields: MedicalReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MedicalReport model
   */ 
  interface MedicalReportFieldRefs {
    readonly id: FieldRef<"MedicalReport", 'String'>
    readonly patientId: FieldRef<"MedicalReport", 'String'>
    readonly reportName: FieldRef<"MedicalReport", 'String'>
    readonly reportLink: FieldRef<"MedicalReport", 'String'>
    readonly createdAt: FieldRef<"MedicalReport", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalReport findUnique
   */
  export type MedicalReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport findUniqueOrThrow
   */
  export type MedicalReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport findFirst
   */
  export type MedicalReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalReports.
     */
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport findFirstOrThrow
   */
  export type MedicalReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalReports.
     */
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport findMany
   */
  export type MedicalReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReports to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport create
   */
  export type MedicalReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalReport.
     */
    data: XOR<MedicalReportCreateInput, MedicalReportUncheckedCreateInput>
  }

  /**
   * MedicalReport createMany
   */
  export type MedicalReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalReports.
     */
    data: MedicalReportCreateManyInput | MedicalReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalReport update
   */
  export type MedicalReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalReport.
     */
    data: XOR<MedicalReportUpdateInput, MedicalReportUncheckedUpdateInput>
    /**
     * Choose, which MedicalReport to update.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport updateMany
   */
  export type MedicalReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalReports.
     */
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyInput>
    /**
     * Filter which MedicalReports to update
     */
    where?: MedicalReportWhereInput
  }

  /**
   * MedicalReport upsert
   */
  export type MedicalReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalReport to update in case it exists.
     */
    where: MedicalReportWhereUniqueInput
    /**
     * In case the MedicalReport found by the `where` argument doesn't exist, create a new MedicalReport with this data.
     */
    create: XOR<MedicalReportCreateInput, MedicalReportUncheckedCreateInput>
    /**
     * In case the MedicalReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalReportUpdateInput, MedicalReportUncheckedUpdateInput>
  }

  /**
   * MedicalReport delete
   */
  export type MedicalReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter which MedicalReport to delete.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport deleteMany
   */
  export type MedicalReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalReports to delete
     */
    where?: MedicalReportWhereInput
  }

  /**
   * MedicalReport without action
   */
  export type MedicalReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | Schedule$appointmentArgs<ExtArgs>
    doctorSchedules?: boolean | Schedule$doctorSchedulesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Schedule$appointmentArgs<ExtArgs>
    doctorSchedules?: boolean | Schedule$doctorSchedulesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      doctorSchedules: Prisma.$DoctorSchedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }


  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
    **/
    create<T extends ScheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Schedules.
     *     @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends Schedule$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    doctorSchedules<T extends Schedule$doctorSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$doctorSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Schedule model
   */ 
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly startDate: FieldRef<"Schedule", 'DateTime'>
    readonly endDate: FieldRef<"Schedule", 'DateTime'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
  }

  /**
   * Schedule.appointment
   */
  export type Schedule$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Schedule.doctorSchedules
   */
  export type Schedule$doctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    where?: DoctorSchedulesWhereInput
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    cursor?: DoctorSchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSchedules
   */

  export type AggregateDoctorSchedules = {
    _count: DoctorSchedulesCountAggregateOutputType | null
    _min: DoctorSchedulesMinAggregateOutputType | null
    _max: DoctorSchedulesMaxAggregateOutputType | null
  }

  export type DoctorSchedulesMinAggregateOutputType = {
    doctorId: string | null
    scheduleId: string | null
    isBooked: boolean | null
    appointmentId: string | null
  }

  export type DoctorSchedulesMaxAggregateOutputType = {
    doctorId: string | null
    scheduleId: string | null
    isBooked: boolean | null
    appointmentId: string | null
  }

  export type DoctorSchedulesCountAggregateOutputType = {
    doctorId: number
    scheduleId: number
    isBooked: number
    appointmentId: number
    _all: number
  }


  export type DoctorSchedulesMinAggregateInputType = {
    doctorId?: true
    scheduleId?: true
    isBooked?: true
    appointmentId?: true
  }

  export type DoctorSchedulesMaxAggregateInputType = {
    doctorId?: true
    scheduleId?: true
    isBooked?: true
    appointmentId?: true
  }

  export type DoctorSchedulesCountAggregateInputType = {
    doctorId?: true
    scheduleId?: true
    isBooked?: true
    appointmentId?: true
    _all?: true
  }

  export type DoctorSchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedules to aggregate.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSchedules
    **/
    _count?: true | DoctorSchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSchedulesMaxAggregateInputType
  }

  export type GetDoctorSchedulesAggregateType<T extends DoctorSchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSchedules[P]>
      : GetScalarType<T[P], AggregateDoctorSchedules[P]>
  }




  export type DoctorSchedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSchedulesWhereInput
    orderBy?: DoctorSchedulesOrderByWithAggregationInput | DoctorSchedulesOrderByWithAggregationInput[]
    by: DoctorSchedulesScalarFieldEnum[] | DoctorSchedulesScalarFieldEnum
    having?: DoctorSchedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSchedulesCountAggregateInputType | true
    _min?: DoctorSchedulesMinAggregateInputType
    _max?: DoctorSchedulesMaxAggregateInputType
  }

  export type DoctorSchedulesGroupByOutputType = {
    doctorId: string
    scheduleId: string
    isBooked: boolean
    appointmentId: string | null
    _count: DoctorSchedulesCountAggregateOutputType | null
    _min: DoctorSchedulesMinAggregateOutputType | null
    _max: DoctorSchedulesMaxAggregateOutputType | null
  }

  type GetDoctorSchedulesGroupByPayload<T extends DoctorSchedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSchedulesGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSchedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctorId?: boolean
    scheduleId?: boolean
    isBooked?: boolean
    appointmentId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    appoinment?: boolean | DoctorSchedules$appoinmentArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedules"]>

  export type DoctorSchedulesSelectScalar = {
    doctorId?: boolean
    scheduleId?: boolean
    isBooked?: boolean
    appointmentId?: boolean
  }


  export type DoctorSchedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    appoinment?: boolean | DoctorSchedules$appoinmentArgs<ExtArgs>
  }


  export type $DoctorSchedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSchedules"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
      appoinment: Prisma.$AppointmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      doctorId: string
      scheduleId: string
      isBooked: boolean
      appointmentId: string | null
    }, ExtArgs["result"]["doctorSchedules"]>
    composites: {}
  }


  type DoctorSchedulesGetPayload<S extends boolean | null | undefined | DoctorSchedulesDefaultArgs> = $Result.GetResult<Prisma.$DoctorSchedulesPayload, S>

  type DoctorSchedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoctorSchedulesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorSchedulesCountAggregateInputType | true
    }

  export interface DoctorSchedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSchedules'], meta: { name: 'DoctorSchedules' } }
    /**
     * Find zero or one DoctorSchedules that matches the filter.
     * @param {DoctorSchedulesFindUniqueArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorSchedulesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSchedulesFindUniqueArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DoctorSchedules that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorSchedulesFindUniqueOrThrowArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DoctorSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesFindFirstArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorSchedulesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSchedulesFindFirstArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DoctorSchedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesFindFirstOrThrowArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorSchedulesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSchedulesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DoctorSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findMany()
     * 
     * // Get first 10 DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findMany({ take: 10 })
     * 
     * // Only select the `doctorId`
     * const doctorSchedulesWithDoctorIdOnly = await prisma.doctorSchedules.findMany({ select: { doctorId: true } })
     * 
    **/
    findMany<T extends DoctorSchedulesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSchedulesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DoctorSchedules.
     * @param {DoctorSchedulesCreateArgs} args - Arguments to create a DoctorSchedules.
     * @example
     * // Create one DoctorSchedules
     * const DoctorSchedules = await prisma.doctorSchedules.create({
     *   data: {
     *     // ... data to create a DoctorSchedules
     *   }
     * })
     * 
    **/
    create<T extends DoctorSchedulesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSchedulesCreateArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DoctorSchedules.
     *     @param {DoctorSchedulesCreateManyArgs} args - Arguments to create many DoctorSchedules.
     *     @example
     *     // Create many DoctorSchedules
     *     const doctorSchedules = await prisma.doctorSchedules.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorSchedulesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSchedulesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorSchedules.
     * @param {DoctorSchedulesDeleteArgs} args - Arguments to delete one DoctorSchedules.
     * @example
     * // Delete one DoctorSchedules
     * const DoctorSchedules = await prisma.doctorSchedules.delete({
     *   where: {
     *     // ... filter to delete one DoctorSchedules
     *   }
     * })
     * 
    **/
    delete<T extends DoctorSchedulesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSchedulesDeleteArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DoctorSchedules.
     * @param {DoctorSchedulesUpdateArgs} args - Arguments to update one DoctorSchedules.
     * @example
     * // Update one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorSchedulesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSchedulesUpdateArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DoctorSchedules.
     * @param {DoctorSchedulesDeleteManyArgs} args - Arguments to filter DoctorSchedules to delete.
     * @example
     * // Delete a few DoctorSchedules
     * const { count } = await prisma.doctorSchedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorSchedulesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorSchedulesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorSchedulesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSchedulesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorSchedules.
     * @param {DoctorSchedulesUpsertArgs} args - Arguments to update or create a DoctorSchedules.
     * @example
     * // Update or create a DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.upsert({
     *   create: {
     *     // ... data to create a DoctorSchedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSchedules we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorSchedulesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorSchedulesUpsertArgs<ExtArgs>>
    ): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesCountArgs} args - Arguments to filter DoctorSchedules to count.
     * @example
     * // Count the number of DoctorSchedules
     * const count = await prisma.doctorSchedules.count({
     *   where: {
     *     // ... the filter for the DoctorSchedules we want to count
     *   }
     * })
    **/
    count<T extends DoctorSchedulesCountArgs>(
      args?: Subset<T, DoctorSchedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorSchedulesAggregateArgs>(args: Subset<T, DoctorSchedulesAggregateArgs>): Prisma.PrismaPromise<GetDoctorSchedulesAggregateType<T>>

    /**
     * Group by DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesGroupByArgs} args - Group by arguments.
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
      T extends DoctorSchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSchedulesGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSchedulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorSchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSchedules model
   */
  readonly fields: DoctorSchedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSchedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSchedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    appoinment<T extends DoctorSchedules$appoinmentArgs<ExtArgs> = {}>(args?: Subset<T, DoctorSchedules$appoinmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DoctorSchedules model
   */ 
  interface DoctorSchedulesFieldRefs {
    readonly doctorId: FieldRef<"DoctorSchedules", 'String'>
    readonly scheduleId: FieldRef<"DoctorSchedules", 'String'>
    readonly isBooked: FieldRef<"DoctorSchedules", 'Boolean'>
    readonly appointmentId: FieldRef<"DoctorSchedules", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSchedules findUnique
   */
  export type DoctorSchedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules findUniqueOrThrow
   */
  export type DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules findFirst
   */
  export type DoctorSchedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * DoctorSchedules findFirstOrThrow
   */
  export type DoctorSchedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * DoctorSchedules findMany
   */
  export type DoctorSchedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSchedules.
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * DoctorSchedules create
   */
  export type DoctorSchedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSchedules.
     */
    data: XOR<DoctorSchedulesCreateInput, DoctorSchedulesUncheckedCreateInput>
  }

  /**
   * DoctorSchedules createMany
   */
  export type DoctorSchedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSchedules.
     */
    data: DoctorSchedulesCreateManyInput | DoctorSchedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSchedules update
   */
  export type DoctorSchedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSchedules.
     */
    data: XOR<DoctorSchedulesUpdateInput, DoctorSchedulesUncheckedUpdateInput>
    /**
     * Choose, which DoctorSchedules to update.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules updateMany
   */
  export type DoctorSchedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSchedules.
     */
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSchedules to update
     */
    where?: DoctorSchedulesWhereInput
  }

  /**
   * DoctorSchedules upsert
   */
  export type DoctorSchedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSchedules to update in case it exists.
     */
    where: DoctorSchedulesWhereUniqueInput
    /**
     * In case the DoctorSchedules found by the `where` argument doesn't exist, create a new DoctorSchedules with this data.
     */
    create: XOR<DoctorSchedulesCreateInput, DoctorSchedulesUncheckedCreateInput>
    /**
     * In case the DoctorSchedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSchedulesUpdateInput, DoctorSchedulesUncheckedUpdateInput>
  }

  /**
   * DoctorSchedules delete
   */
  export type DoctorSchedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter which DoctorSchedules to delete.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules deleteMany
   */
  export type DoctorSchedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedules to delete
     */
    where?: DoctorSchedulesWhereInput
  }

  /**
   * DoctorSchedules.appoinment
   */
  export type DoctorSchedules$appoinmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * DoctorSchedules without action
   */
  export type DoctorSchedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    scheduleId: string | null
    videoCallingId: string | null
    status: $Enums.AppointmentStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    scheduleId: string | null
    videoCallingId: string | null
    status: $Enums.AppointmentStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    scheduleId: number
    videoCallingId: number
    status: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    scheduleId?: true
    videoCallingId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    scheduleId?: true
    videoCallingId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    scheduleId?: true
    videoCallingId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status: $Enums.AppointmentStatus
    paymentStatus: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    scheduleId?: boolean
    videoCallingId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    doctorSchedules?: boolean | Appointment$doctorSchedulesArgs<ExtArgs>
    payment?: boolean | Appointment$paymentArgs<ExtArgs>
    review?: boolean | Appointment$reviewArgs<ExtArgs>
    prescription?: boolean | Appointment$prescriptionArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    scheduleId?: boolean
    videoCallingId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    doctorSchedules?: boolean | Appointment$doctorSchedulesArgs<ExtArgs>
    payment?: boolean | Appointment$paymentArgs<ExtArgs>
    review?: boolean | Appointment$reviewArgs<ExtArgs>
    prescription?: boolean | Appointment$prescriptionArgs<ExtArgs>
  }


  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
      doctorSchedules: Prisma.$DoctorSchedulesPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
      prescription: Prisma.$PrescriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      scheduleId: string
      videoCallingId: string
      status: $Enums.AppointmentStatus
      paymentStatus: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }


  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
    **/
    create<T extends AppointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Appointments.
     *     @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
    **/
    delete<T extends AppointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
    **/
    upsert<T extends AppointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctorSchedules<T extends Appointment$doctorSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$doctorSchedulesArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    payment<T extends Appointment$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    review<T extends Appointment$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    prescription<T extends Appointment$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$prescriptionArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly scheduleId: FieldRef<"Appointment", 'String'>
    readonly videoCallingId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly paymentStatus: FieldRef<"Appointment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment.doctorSchedules
   */
  export type Appointment$doctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    where?: DoctorSchedulesWhereInput
  }

  /**
   * Appointment.payment
   */
  export type Appointment$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Appointment.review
   */
  export type Appointment$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Appointment.prescription
   */
  export type Appointment$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    appointtmentId: string | null
    amount: number | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    appointtmentId: string | null
    amount: number | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    appointtmentId: number
    amount: number
    transactionId: number
    status: number
    paymentGatewayData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    appointtmentId?: true
    amount?: true
    transactionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    appointtmentId?: true
    amount?: true
    transactionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    appointtmentId?: true
    amount?: true
    transactionId?: true
    status?: true
    paymentGatewayData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    appointtmentId: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentGatewayData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointtmentId?: boolean
    amount?: boolean
    transactionId?: boolean
    status?: boolean
    paymentGatewayData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    appointtmentId?: boolean
    amount?: boolean
    transactionId?: boolean
    status?: boolean
    paymentGatewayData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }


  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointtmentId: string
      amount: number
      transactionId: string
      status: $Enums.PaymentStatus
      paymentGatewayData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }


  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly appointtmentId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentGatewayData: FieldRef<"Payment", 'Json'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    appointmentId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    appointmentId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }


  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      appointmentId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }


  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reviews.
     *     @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly patientId: FieldRef<"Review", 'String'>
    readonly doctorId: FieldRef<"Review", 'String'>
    readonly appointmentId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    instructions: string | null
    followUpDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    instructions: string | null
    followUpDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    appointmentId: number
    instructions: number
    followUpDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    instructions?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    instructions?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    instructions?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    appointmentId: string
    instructions: string
    followUpDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    instructions?: boolean
    followUpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    instructions?: boolean
    followUpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }


  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      appointmentId: string
      instructions: string
      followUpDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }


  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrescriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Prescription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrescriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrescriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
    **/
    create<T extends PrescriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Prescriptions.
     *     @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     *     @example
     *     // Create many Prescriptions
     *     const prescription = await prisma.prescription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrescriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
    **/
    delete<T extends PrescriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrescriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrescriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrescriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
    **/
    upsert<T extends PrescriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>
    ): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Prescription model
   */ 
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly patientId: FieldRef<"Prescription", 'String'>
    readonly doctorId: FieldRef<"Prescription", 'String'>
    readonly appointmentId: FieldRef<"Prescription", 'String'>
    readonly instructions: FieldRef<"Prescription", 'String'>
    readonly followUpDate: FieldRef<"Prescription", 'DateTime'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
    readonly updatedAt: FieldRef<"Prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    needPasswordChange: 'needPasswordChange',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    address: 'address',
    registrationsNumber: 'registrationsNumber',
    experience: 'experience',
    gender: 'gender',
    appointmentFee: 'appointmentFee',
    qualification: 'qualification',
    currentWorkingPlace: 'currentWorkingPlace',
    designation: 'designation',
    averageRating: 'averageRating',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    address: 'address',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SpecialtiesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon'
  };

  export type SpecialtiesScalarFieldEnum = (typeof SpecialtiesScalarFieldEnum)[keyof typeof SpecialtiesScalarFieldEnum]


  export const DoctorSpecialtiesScalarFieldEnum: {
    specialitiesId: 'specialitiesId',
    doctorId: 'doctorId'
  };

  export type DoctorSpecialtiesScalarFieldEnum = (typeof DoctorSpecialtiesScalarFieldEnum)[keyof typeof DoctorSpecialtiesScalarFieldEnum]


  export const PatientHealthDataScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    bloodGroup: 'bloodGroup',
    hasAllergies: 'hasAllergies',
    hasDiabetes: 'hasDiabetes',
    height: 'height',
    weight: 'weight',
    smokingStatus: 'smokingStatus',
    dietaryPreferences: 'dietaryPreferences',
    pregnancyStatus: 'pregnancyStatus',
    mentalHealthHistory: 'mentalHealthHistory',
    immunizationStatus: 'immunizationStatus',
    hasPastSurgeries: 'hasPastSurgeries',
    recentAnxiety: 'recentAnxiety',
    recentDepression: 'recentDepression',
    maritalStatus: 'maritalStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientHealthDataScalarFieldEnum = (typeof PatientHealthDataScalarFieldEnum)[keyof typeof PatientHealthDataScalarFieldEnum]


  export const MedicalReportScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    reportName: 'reportName',
    reportLink: 'reportLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalReportScalarFieldEnum = (typeof MedicalReportScalarFieldEnum)[keyof typeof MedicalReportScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const DoctorSchedulesScalarFieldEnum: {
    doctorId: 'doctorId',
    scheduleId: 'scheduleId',
    isBooked: 'isBooked',
    appointmentId: 'appointmentId'
  };

  export type DoctorSchedulesScalarFieldEnum = (typeof DoctorSchedulesScalarFieldEnum)[keyof typeof DoctorSchedulesScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    scheduleId: 'scheduleId',
    videoCallingId: 'videoCallingId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    appointtmentId: 'appointtmentId',
    amount: 'amount',
    transactionId: 'transactionId',
    status: 'status',
    paymentGatewayData: 'paymentGatewayData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    appointmentId: 'appointmentId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    appointmentId: 'appointmentId',
    instructions: 'instructions',
    followUpDate: 'followUpDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    Doctor?: XOR<DoctorNullableRelationFilter, DoctorWhereInput> | null
    Patient?: XOR<PatientNullableRelationFilter, PatientWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    Doctor?: DoctorOrderByWithRelationInput
    Patient?: PatientOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    Doctor?: XOR<DoctorNullableRelationFilter, DoctorWhereInput> | null
    Patient?: XOR<PatientNullableRelationFilter, PatientWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolWithAggregatesFilter<"User"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    profilePhoto?: StringNullableFilter<"Admin"> | string | null
    contactNumber?: StringFilter<"Admin"> | string
    isDeleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    profilePhoto?: StringNullableFilter<"Admin"> | string | null
    contactNumber?: StringFilter<"Admin"> | string
    isDeleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Admin"> | string
    isDeleted?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    profilePhoto?: StringNullableFilter<"Doctor"> | string | null
    contactNumber?: StringFilter<"Doctor"> | string
    address?: StringFilter<"Doctor"> | string
    registrationsNumber?: StringFilter<"Doctor"> | string
    experience?: StringFilter<"Doctor"> | string
    gender?: EnumGenderFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntFilter<"Doctor"> | number
    qualification?: StringFilter<"Doctor"> | string
    currentWorkingPlace?: StringFilter<"Doctor"> | string
    designation?: StringFilter<"Doctor"> | string
    averageRating?: FloatFilter<"Doctor"> | number
    isDeleted?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
    appointment?: AppointmentListRelationFilter
    doctorSchedules?: DoctorSchedulesListRelationFilter
    review?: ReviewListRelationFilter
    prescription?: PrescriptionListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationsNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    doctorSpecialties?: DoctorSpecialtiesOrderByRelationAggregateInput
    appointment?: AppointmentOrderByRelationAggregateInput
    doctorSchedules?: DoctorSchedulesOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
    prescription?: PrescriptionOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    profilePhoto?: StringNullableFilter<"Doctor"> | string | null
    contactNumber?: StringFilter<"Doctor"> | string
    address?: StringFilter<"Doctor"> | string
    registrationsNumber?: StringFilter<"Doctor"> | string
    experience?: StringFilter<"Doctor"> | string
    gender?: EnumGenderFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntFilter<"Doctor"> | number
    qualification?: StringFilter<"Doctor"> | string
    currentWorkingPlace?: StringFilter<"Doctor"> | string
    designation?: StringFilter<"Doctor"> | string
    averageRating?: FloatFilter<"Doctor"> | number
    isDeleted?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
    appointment?: AppointmentListRelationFilter
    doctorSchedules?: DoctorSchedulesListRelationFilter
    review?: ReviewListRelationFilter
    prescription?: PrescriptionListRelationFilter
  }, "id" | "email">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationsNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Doctor"> | string
    address?: StringWithAggregatesFilter<"Doctor"> | string
    registrationsNumber?: StringWithAggregatesFilter<"Doctor"> | string
    experience?: StringWithAggregatesFilter<"Doctor"> | string
    gender?: EnumGenderWithAggregatesFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntWithAggregatesFilter<"Doctor"> | number
    qualification?: StringWithAggregatesFilter<"Doctor"> | string
    currentWorkingPlace?: StringWithAggregatesFilter<"Doctor"> | string
    designation?: StringWithAggregatesFilter<"Doctor"> | string
    averageRating?: FloatWithAggregatesFilter<"Doctor"> | number
    isDeleted?: BoolWithAggregatesFilter<"Doctor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    profilePhoto?: StringNullableFilter<"Patient"> | string | null
    contactNumber?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    isDeleted?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    patientHealthData?: XOR<PatientHealthDataNullableRelationFilter, PatientHealthDataWhereInput> | null
    medicalReport?: MedicalReportListRelationFilter
    appointment?: AppointmentListRelationFilter
    review?: ReviewListRelationFilter
    prescription?: PrescriptionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    patientHealthData?: PatientHealthDataOrderByWithRelationInput
    medicalReport?: MedicalReportOrderByRelationAggregateInput
    appointment?: AppointmentOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
    prescription?: PrescriptionOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    profilePhoto?: StringNullableFilter<"Patient"> | string | null
    contactNumber?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    isDeleted?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    patientHealthData?: XOR<PatientHealthDataNullableRelationFilter, PatientHealthDataWhereInput> | null
    medicalReport?: MedicalReportListRelationFilter
    appointment?: AppointmentListRelationFilter
    review?: ReviewListRelationFilter
    prescription?: PrescriptionListRelationFilter
  }, "id" | "email">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    isDeleted?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type SpecialtiesWhereInput = {
    AND?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    OR?: SpecialtiesWhereInput[]
    NOT?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    id?: StringFilter<"Specialties"> | string
    title?: StringFilter<"Specialties"> | string
    icon?: StringFilter<"Specialties"> | string
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }

  export type SpecialtiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    doctorSpecialties?: DoctorSpecialtiesOrderByRelationAggregateInput
  }

  export type SpecialtiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    OR?: SpecialtiesWhereInput[]
    NOT?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    title?: StringFilter<"Specialties"> | string
    icon?: StringFilter<"Specialties"> | string
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }, "id">

  export type SpecialtiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    _count?: SpecialtiesCountOrderByAggregateInput
    _max?: SpecialtiesMaxOrderByAggregateInput
    _min?: SpecialtiesMinOrderByAggregateInput
  }

  export type SpecialtiesScalarWhereWithAggregatesInput = {
    AND?: SpecialtiesScalarWhereWithAggregatesInput | SpecialtiesScalarWhereWithAggregatesInput[]
    OR?: SpecialtiesScalarWhereWithAggregatesInput[]
    NOT?: SpecialtiesScalarWhereWithAggregatesInput | SpecialtiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specialties"> | string
    title?: StringWithAggregatesFilter<"Specialties"> | string
    icon?: StringWithAggregatesFilter<"Specialties"> | string
  }

  export type DoctorSpecialtiesWhereInput = {
    AND?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    OR?: DoctorSpecialtiesWhereInput[]
    NOT?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    specialitiesId?: StringFilter<"DoctorSpecialties"> | string
    doctorId?: StringFilter<"DoctorSpecialties"> | string
    specialty?: XOR<SpecialtiesRelationFilter, SpecialtiesWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
  }

  export type DoctorSpecialtiesOrderByWithRelationInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
    specialty?: SpecialtiesOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type DoctorSpecialtiesWhereUniqueInput = Prisma.AtLeast<{
    specialitiesId_doctorId?: DoctorSpecialtiesSpecialitiesIdDoctorIdCompoundUniqueInput
    AND?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    OR?: DoctorSpecialtiesWhereInput[]
    NOT?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    specialitiesId?: StringFilter<"DoctorSpecialties"> | string
    doctorId?: StringFilter<"DoctorSpecialties"> | string
    specialty?: XOR<SpecialtiesRelationFilter, SpecialtiesWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
  }, "specialitiesId_doctorId">

  export type DoctorSpecialtiesOrderByWithAggregationInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
    _count?: DoctorSpecialtiesCountOrderByAggregateInput
    _max?: DoctorSpecialtiesMaxOrderByAggregateInput
    _min?: DoctorSpecialtiesMinOrderByAggregateInput
  }

  export type DoctorSpecialtiesScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecialtiesScalarWhereWithAggregatesInput | DoctorSpecialtiesScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecialtiesScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecialtiesScalarWhereWithAggregatesInput | DoctorSpecialtiesScalarWhereWithAggregatesInput[]
    specialitiesId?: StringWithAggregatesFilter<"DoctorSpecialties"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorSpecialties"> | string
  }

  export type PatientHealthDataWhereInput = {
    AND?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    OR?: PatientHealthDataWhereInput[]
    NOT?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    id?: StringFilter<"PatientHealthData"> | string
    patientId?: StringFilter<"PatientHealthData"> | string
    dateOfBirth?: DateTimeFilter<"PatientHealthData"> | Date | string
    gender?: EnumGenderFilter<"PatientHealthData"> | $Enums.Gender
    bloodGroup?: EnumBloodGroupFilter<"PatientHealthData"> | $Enums.BloodGroup
    hasAllergies?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    hasDiabetes?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    height?: StringFilter<"PatientHealthData"> | string
    weight?: StringFilter<"PatientHealthData"> | string
    smokingStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    dietaryPreferences?: StringFilter<"PatientHealthData"> | string
    pregnancyStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    mentalHealthHistory?: StringFilter<"PatientHealthData"> | string
    immunizationStatus?: StringFilter<"PatientHealthData"> | string
    hasPastSurgeries?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentAnxiety?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentDepression?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    maritalStatus?: EnumMaritalStatusFilter<"PatientHealthData"> | $Enums.MaritalStatus
    createdAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }

  export type PatientHealthDataOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrderInput | SortOrder
    hasDiabetes?: SortOrderInput | SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrderInput | SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrderInput | SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrderInput | SortOrder
    recentAnxiety?: SortOrderInput | SortOrder
    recentDepression?: SortOrderInput | SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type PatientHealthDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId?: string
    AND?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    OR?: PatientHealthDataWhereInput[]
    NOT?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    dateOfBirth?: DateTimeFilter<"PatientHealthData"> | Date | string
    gender?: EnumGenderFilter<"PatientHealthData"> | $Enums.Gender
    bloodGroup?: EnumBloodGroupFilter<"PatientHealthData"> | $Enums.BloodGroup
    hasAllergies?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    hasDiabetes?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    height?: StringFilter<"PatientHealthData"> | string
    weight?: StringFilter<"PatientHealthData"> | string
    smokingStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    dietaryPreferences?: StringFilter<"PatientHealthData"> | string
    pregnancyStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    mentalHealthHistory?: StringFilter<"PatientHealthData"> | string
    immunizationStatus?: StringFilter<"PatientHealthData"> | string
    hasPastSurgeries?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentAnxiety?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentDepression?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    maritalStatus?: EnumMaritalStatusFilter<"PatientHealthData"> | $Enums.MaritalStatus
    createdAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type PatientHealthDataOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrderInput | SortOrder
    hasDiabetes?: SortOrderInput | SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrderInput | SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrderInput | SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrderInput | SortOrder
    recentAnxiety?: SortOrderInput | SortOrder
    recentDepression?: SortOrderInput | SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientHealthDataCountOrderByAggregateInput
    _max?: PatientHealthDataMaxOrderByAggregateInput
    _min?: PatientHealthDataMinOrderByAggregateInput
  }

  export type PatientHealthDataScalarWhereWithAggregatesInput = {
    AND?: PatientHealthDataScalarWhereWithAggregatesInput | PatientHealthDataScalarWhereWithAggregatesInput[]
    OR?: PatientHealthDataScalarWhereWithAggregatesInput[]
    NOT?: PatientHealthDataScalarWhereWithAggregatesInput | PatientHealthDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientHealthData"> | string
    patientId?: StringWithAggregatesFilter<"PatientHealthData"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"PatientHealthData"> | $Enums.Gender
    bloodGroup?: EnumBloodGroupWithAggregatesFilter<"PatientHealthData"> | $Enums.BloodGroup
    hasAllergies?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    hasDiabetes?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    height?: StringWithAggregatesFilter<"PatientHealthData"> | string
    weight?: StringWithAggregatesFilter<"PatientHealthData"> | string
    smokingStatus?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    dietaryPreferences?: StringWithAggregatesFilter<"PatientHealthData"> | string
    pregnancyStatus?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    mentalHealthHistory?: StringWithAggregatesFilter<"PatientHealthData"> | string
    immunizationStatus?: StringWithAggregatesFilter<"PatientHealthData"> | string
    hasPastSurgeries?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    recentAnxiety?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    recentDepression?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"PatientHealthData"> | $Enums.MaritalStatus
    createdAt?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
  }

  export type MedicalReportWhereInput = {
    AND?: MedicalReportWhereInput | MedicalReportWhereInput[]
    OR?: MedicalReportWhereInput[]
    NOT?: MedicalReportWhereInput | MedicalReportWhereInput[]
    id?: StringFilter<"MedicalReport"> | string
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }

  export type MedicalReportOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicalReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalReportWhereInput | MedicalReportWhereInput[]
    OR?: MedicalReportWhereInput[]
    NOT?: MedicalReportWhereInput | MedicalReportWhereInput[]
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }, "id">

  export type MedicalReportOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalReportCountOrderByAggregateInput
    _max?: MedicalReportMaxOrderByAggregateInput
    _min?: MedicalReportMinOrderByAggregateInput
  }

  export type MedicalReportScalarWhereWithAggregatesInput = {
    AND?: MedicalReportScalarWhereWithAggregatesInput | MedicalReportScalarWhereWithAggregatesInput[]
    OR?: MedicalReportScalarWhereWithAggregatesInput[]
    NOT?: MedicalReportScalarWhereWithAggregatesInput | MedicalReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalReport"> | string
    patientId?: StringWithAggregatesFilter<"MedicalReport"> | string
    reportName?: StringWithAggregatesFilter<"MedicalReport"> | string
    reportLink?: StringWithAggregatesFilter<"MedicalReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalReport"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeFilter<"Schedule"> | Date | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
    doctorSchedules?: DoctorSchedulesListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    doctorSchedules?: DoctorSchedulesOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeFilter<"Schedule"> | Date | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
    doctorSchedules?: DoctorSchedulesListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    startDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type DoctorSchedulesWhereInput = {
    AND?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    OR?: DoctorSchedulesWhereInput[]
    NOT?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    doctorId?: StringFilter<"DoctorSchedules"> | string
    scheduleId?: StringFilter<"DoctorSchedules"> | string
    isBooked?: BoolFilter<"DoctorSchedules"> | boolean
    appointmentId?: StringNullableFilter<"DoctorSchedules"> | string | null
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    schedule?: XOR<ScheduleRelationFilter, ScheduleWhereInput>
    appoinment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
  }

  export type DoctorSchedulesOrderByWithRelationInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    doctor?: DoctorOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
    appoinment?: AppointmentOrderByWithRelationInput
  }

  export type DoctorSchedulesWhereUniqueInput = Prisma.AtLeast<{
    appointmentId?: string
    doctorId_scheduleId?: DoctorSchedulesDoctorIdScheduleIdCompoundUniqueInput
    AND?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    OR?: DoctorSchedulesWhereInput[]
    NOT?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    doctorId?: StringFilter<"DoctorSchedules"> | string
    scheduleId?: StringFilter<"DoctorSchedules"> | string
    isBooked?: BoolFilter<"DoctorSchedules"> | boolean
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    schedule?: XOR<ScheduleRelationFilter, ScheduleWhereInput>
    appoinment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
  }, "doctorId_scheduleId" | "appointmentId">

  export type DoctorSchedulesOrderByWithAggregationInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    _count?: DoctorSchedulesCountOrderByAggregateInput
    _max?: DoctorSchedulesMaxOrderByAggregateInput
    _min?: DoctorSchedulesMinOrderByAggregateInput
  }

  export type DoctorSchedulesScalarWhereWithAggregatesInput = {
    AND?: DoctorSchedulesScalarWhereWithAggregatesInput | DoctorSchedulesScalarWhereWithAggregatesInput[]
    OR?: DoctorSchedulesScalarWhereWithAggregatesInput[]
    NOT?: DoctorSchedulesScalarWhereWithAggregatesInput | DoctorSchedulesScalarWhereWithAggregatesInput[]
    doctorId?: StringWithAggregatesFilter<"DoctorSchedules"> | string
    scheduleId?: StringWithAggregatesFilter<"DoctorSchedules"> | string
    isBooked?: BoolWithAggregatesFilter<"DoctorSchedules"> | boolean
    appointmentId?: StringNullableWithAggregatesFilter<"DoctorSchedules"> | string | null
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    scheduleId?: StringFilter<"Appointment"> | string
    videoCallingId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    schedule?: XOR<ScheduleRelationFilter, ScheduleWhereInput>
    doctorSchedules?: XOR<DoctorSchedulesNullableRelationFilter, DoctorSchedulesWhereInput> | null
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
    prescription?: XOR<PrescriptionNullableRelationFilter, PrescriptionWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    scheduleId?: SortOrder
    videoCallingId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
    doctorSchedules?: DoctorSchedulesOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    prescription?: PrescriptionOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scheduleId?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    videoCallingId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    schedule?: XOR<ScheduleRelationFilter, ScheduleWhereInput>
    doctorSchedules?: XOR<DoctorSchedulesNullableRelationFilter, DoctorSchedulesWhereInput> | null
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
    prescription?: XOR<PrescriptionNullableRelationFilter, PrescriptionWhereInput> | null
  }, "id" | "scheduleId">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    scheduleId?: SortOrder
    videoCallingId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    scheduleId?: StringWithAggregatesFilter<"Appointment"> | string
    videoCallingId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Appointment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    appointtmentId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    transactionId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentGatewayData?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    appointtmentId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentGatewayData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointtmentId?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentGatewayData?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
  }, "id" | "appointtmentId" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    appointtmentId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentGatewayData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    appointtmentId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    transactionId?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentGatewayData?: JsonNullableWithAggregatesFilter<"Payment">
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    patientId?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    appointmentId?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    patientId?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
  }, "id" | "appointmentId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    patientId?: StringWithAggregatesFilter<"Review"> | string
    doctorId?: StringWithAggregatesFilter<"Review"> | string
    appointmentId?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    appointmentId?: StringFilter<"Prescription"> | string
    instructions?: StringFilter<"Prescription"> | string
    followUpDate?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    instructions?: StringFilter<"Prescription"> | string
    followUpDate?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    appointment?: XOR<AppointmentRelationFilter, AppointmentWhereInput>
  }, "id" | "appointmentId">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    patientId?: StringWithAggregatesFilter<"Prescription"> | string
    doctorId?: StringWithAggregatesFilter<"Prescription"> | string
    appointmentId?: StringWithAggregatesFilter<"Prescription"> | string
    instructions?: StringWithAggregatesFilter<"Prescription"> | string
    followUpDate?: DateTimeNullableWithAggregatesFilter<"Prescription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    Doctor?: DoctorCreateNestedOneWithoutUserInput
    Patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    Patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    Doctor?: DoctorUpdateOneWithoutUserNestedInput
    Patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    Doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
    review?: ReviewCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
    review?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
    review?: ReviewUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
    review?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
    appointment?: AppointmentCreateNestedManyWithoutPatientInput
    review?: ReviewCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    review?: ReviewUncheckedCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUpdateManyWithoutPatientNestedInput
    review?: ReviewUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtiesCreateInput = {
    id?: string
    title: string
    icon: string
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutSpecialtyInput
  }

  export type SpecialtiesUncheckedCreateInput = {
    id?: string
    title: string
    icon: string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutSpecialtyInput
  }

  export type SpecialtiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutSpecialtyNestedInput
  }

  export type SpecialtiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtyNestedInput
  }

  export type SpecialtiesCreateManyInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesCreateInput = {
    specialty: SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type DoctorSpecialtiesUncheckedCreateInput = {
    specialitiesId: string
    doctorId: string
  }

  export type DoctorSpecialtiesUpdateInput = {
    specialty?: SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type DoctorSpecialtiesUncheckedUpdateInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesCreateManyInput = {
    specialitiesId: string
    doctorId: string
  }

  export type DoctorSpecialtiesUpdateManyMutationInput = {

  }

  export type DoctorSpecialtiesUncheckedUpdateManyInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientHealthDataCreateInput = {
    id?: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences: string
    pregnancyStatus?: boolean | null
    mentalHealthHistory: string
    immunizationStatus: string
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPatientHealthDataInput
  }

  export type PatientHealthDataUncheckedCreateInput = {
    id?: string
    patientId: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences: string
    pregnancyStatus?: boolean | null
    mentalHealthHistory: string
    immunizationStatus: string
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: StringFieldUpdateOperationsInput | string
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: StringFieldUpdateOperationsInput | string
    immunizationStatus?: StringFieldUpdateOperationsInput | string
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPatientHealthDataNestedInput
  }

  export type PatientHealthDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: StringFieldUpdateOperationsInput | string
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: StringFieldUpdateOperationsInput | string
    immunizationStatus?: StringFieldUpdateOperationsInput | string
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataCreateManyInput = {
    id?: string
    patientId: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences: string
    pregnancyStatus?: boolean | null
    mentalHealthHistory: string
    immunizationStatus: string
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: StringFieldUpdateOperationsInput | string
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: StringFieldUpdateOperationsInput | string
    immunizationStatus?: StringFieldUpdateOperationsInput | string
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: StringFieldUpdateOperationsInput | string
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: StringFieldUpdateOperationsInput | string
    immunizationStatus?: StringFieldUpdateOperationsInput | string
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalReportInput
  }

  export type MedicalReportUncheckedCreateInput = {
    id?: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalReportNestedInput
  }

  export type MedicalReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateManyInput = {
    id?: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutScheduleInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedOneWithoutScheduleInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutScheduleNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateOneWithoutScheduleNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSchedulesCreateInput = {
    isBooked?: boolean
    doctor: DoctorCreateNestedOneWithoutDoctorSchedulesInput
    schedule: ScheduleCreateNestedOneWithoutDoctorSchedulesInput
    appoinment?: AppointmentCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateInput = {
    doctorId: string
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesUpdateInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput
    appoinment?: AppointmentUpdateOneWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesCreateManyInput = {
    doctorId: string
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesUpdateManyMutationInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorSchedulesUncheckedUpdateManyInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    transactionId: string
    status?: $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    appointtmentId: string
    amount: number
    transactionId: string
    status?: $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointtmentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    appointtmentId: string
    amount: number
    transactionId: string
    status?: $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointtmentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReviewInput
    doctor: DoctorCreateNestedOneWithoutReviewInput
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReviewNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutReviewNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionInput
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type DoctorNullableRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type PatientNullableRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DoctorSpecialtiesListRelationFilter = {
    every?: DoctorSpecialtiesWhereInput
    some?: DoctorSpecialtiesWhereInput
    none?: DoctorSpecialtiesWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type DoctorSchedulesListRelationFilter = {
    every?: DoctorSchedulesWhereInput
    some?: DoctorSchedulesWhereInput
    none?: DoctorSchedulesWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type DoctorSpecialtiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorSchedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationsNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    appointmentFee?: SortOrder
    averageRating?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationsNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationsNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    appointmentFee?: SortOrder
    averageRating?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PatientHealthDataNullableRelationFilter = {
    is?: PatientHealthDataWhereInput | null
    isNot?: PatientHealthDataWhereInput | null
  }

  export type MedicalReportListRelationFilter = {
    every?: MedicalReportWhereInput
    some?: MedicalReportWhereInput
    none?: MedicalReportWhereInput
  }

  export type MedicalReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesRelationFilter = {
    is?: SpecialtiesWhereInput
    isNot?: SpecialtiesWhereInput
  }

  export type DoctorRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type DoctorSpecialtiesSpecialitiesIdDoctorIdCompoundUniqueInput = {
    specialitiesId: string
    doctorId: string
  }

  export type DoctorSpecialtiesCountOrderByAggregateInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorSpecialtiesMaxOrderByAggregateInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorSpecialtiesMinOrderByAggregateInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PatientHealthDataCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientHealthDataMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientHealthDataMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type MedicalReportCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalReportMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalReportMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentNullableRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type DoctorSchedulesDoctorIdScheduleIdCompoundUniqueInput = {
    doctorId: string
    scheduleId: string
  }

  export type DoctorSchedulesCountOrderByAggregateInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrder
  }

  export type DoctorSchedulesMaxOrderByAggregateInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrder
  }

  export type DoctorSchedulesMinOrderByAggregateInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DoctorSchedulesNullableRelationFilter = {
    is?: DoctorSchedulesWhereInput | null
    isNot?: DoctorSchedulesWhereInput | null
  }

  export type PaymentNullableRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type ReviewNullableRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type PrescriptionNullableRelationFilter = {
    is?: PrescriptionWhereInput | null
    isNot?: PrescriptionWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    scheduleId?: SortOrder
    videoCallingId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    scheduleId?: SortOrder
    videoCallingId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    scheduleId?: SortOrder
    videoCallingId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AppointmentRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    appointtmentId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentGatewayData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointtmentId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    appointtmentId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorSpecialtiesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorSchedulesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput | DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorSchedulesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput | DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDoctorInput | ReviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDoctorInput | ReviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDoctorInput | ReviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput | DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput | DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDoctorInput | ReviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDoctorInput | ReviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDoctorInput | ReviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type PatientHealthDataCreateNestedOneWithoutPatientInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    connect?: PatientHealthDataWhereUniqueInput
  }

  export type MedicalReportCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutPatientInput = {
    create?: XOR<ReviewCreateWithoutPatientInput, ReviewUncheckedCreateWithoutPatientInput> | ReviewCreateWithoutPatientInput[] | ReviewUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPatientInput | ReviewCreateOrConnectWithoutPatientInput[]
    createMany?: ReviewCreateManyPatientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    connect?: PatientHealthDataWhereUniqueInput
  }

  export type MedicalReportUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ReviewCreateWithoutPatientInput, ReviewUncheckedCreateWithoutPatientInput> | ReviewCreateWithoutPatientInput[] | ReviewUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPatientInput | ReviewCreateOrConnectWithoutPatientInput[]
    createMany?: ReviewCreateManyPatientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type PatientHealthDataUpdateOneWithoutPatientNestedInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    upsert?: PatientHealthDataUpsertWithoutPatientInput
    disconnect?: PatientHealthDataWhereInput | boolean
    delete?: PatientHealthDataWhereInput | boolean
    connect?: PatientHealthDataWhereUniqueInput
    update?: XOR<XOR<PatientHealthDataUpdateToOneWithWhereWithoutPatientInput, PatientHealthDataUpdateWithoutPatientInput>, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalReportUpsertWithWhereUniqueWithoutPatientInput | MedicalReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    set?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    disconnect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    delete?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    update?: MedicalReportUpdateWithWhereUniqueWithoutPatientInput | MedicalReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalReportUpdateManyWithWhereWithoutPatientInput | MedicalReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ReviewCreateWithoutPatientInput, ReviewUncheckedCreateWithoutPatientInput> | ReviewCreateWithoutPatientInput[] | ReviewUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPatientInput | ReviewCreateOrConnectWithoutPatientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPatientInput | ReviewUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ReviewCreateManyPatientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPatientInput | ReviewUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPatientInput | ReviewUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    upsert?: PatientHealthDataUpsertWithoutPatientInput
    disconnect?: PatientHealthDataWhereInput | boolean
    delete?: PatientHealthDataWhereInput | boolean
    connect?: PatientHealthDataWhereUniqueInput
    update?: XOR<XOR<PatientHealthDataUpdateToOneWithWhereWithoutPatientInput, PatientHealthDataUpdateWithoutPatientInput>, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalReportUpsertWithWhereUniqueWithoutPatientInput | MedicalReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    set?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    disconnect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    delete?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    update?: MedicalReportUpdateWithWhereUniqueWithoutPatientInput | MedicalReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalReportUpdateManyWithWhereWithoutPatientInput | MedicalReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ReviewCreateWithoutPatientInput, ReviewUncheckedCreateWithoutPatientInput> | ReviewCreateWithoutPatientInput[] | ReviewUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPatientInput | ReviewCreateOrConnectWithoutPatientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPatientInput | ReviewUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ReviewCreateManyPatientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPatientInput | ReviewUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPatientInput | ReviewUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type DoctorSpecialtiesCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput> | DoctorSpecialtiesCreateWithoutSpecialtyInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtyInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSpecialtiesUncheckedCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput> | DoctorSpecialtiesCreateWithoutSpecialtyInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtyInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSpecialtiesUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput> | DoctorSpecialtiesCreateWithoutSpecialtyInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtyInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtyInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtyInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtyInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtyInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtyInput | DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtyInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput> | DoctorSpecialtiesCreateWithoutSpecialtyInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtyInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtyInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtyInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtyInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtyInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtyInput | DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtyInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput = {
    create?: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput
    connect?: SpecialtiesWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutDoctorSpecialtiesInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialtiesInput
    connect?: DoctorWhereUniqueInput
  }

  export type SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput = {
    create?: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput
    upsert?: SpecialtiesUpsertWithoutDoctorSpecialtiesInput
    connect?: SpecialtiesWhereUniqueInput
    update?: XOR<XOR<SpecialtiesUpdateToOneWithWhereWithoutDoctorSpecialtiesInput, SpecialtiesUpdateWithoutDoctorSpecialtiesInput>, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialtiesInput
    upsert?: DoctorUpsertWithoutDoctorSpecialtiesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorSpecialtiesInput, DoctorUpdateWithoutDoctorSpecialtiesInput>, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type PatientCreateNestedOneWithoutPatientHealthDataInput = {
    create?: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientHealthDataInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type PatientUpdateOneRequiredWithoutPatientHealthDataNestedInput = {
    create?: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientHealthDataInput
    upsert?: PatientUpsertWithoutPatientHealthDataInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPatientHealthDataInput, PatientUpdateWithoutPatientHealthDataInput>, PatientUncheckedUpdateWithoutPatientHealthDataInput>
  }

  export type PatientCreateNestedOneWithoutMedicalReportInput = {
    create?: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalReportInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutMedicalReportNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalReportInput
    upsert?: PatientUpsertWithoutMedicalReportInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalReportInput, PatientUpdateWithoutMedicalReportInput>, PatientUncheckedUpdateWithoutMedicalReportInput>
  }

  export type AppointmentCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AppointmentCreateWithoutScheduleInput, AppointmentUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutScheduleInput
    connect?: AppointmentWhereUniqueInput
  }

  export type DoctorSchedulesCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AppointmentCreateWithoutScheduleInput, AppointmentUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutScheduleInput
    connect?: AppointmentWhereUniqueInput
  }

  export type DoctorSchedulesUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type AppointmentUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<AppointmentCreateWithoutScheduleInput, AppointmentUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutScheduleInput
    upsert?: AppointmentUpsertWithoutScheduleInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutScheduleInput, AppointmentUpdateWithoutScheduleInput>, AppointmentUncheckedUpdateWithoutScheduleInput>
  }

  export type DoctorSchedulesUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput | DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<AppointmentCreateWithoutScheduleInput, AppointmentUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutScheduleInput
    upsert?: AppointmentUpsertWithoutScheduleInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutScheduleInput, AppointmentUpdateWithoutScheduleInput>, AppointmentUncheckedUpdateWithoutScheduleInput>
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput | DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutDoctorSchedulesInput = {
    create?: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSchedulesInput
    connect?: DoctorWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutDoctorSchedulesInput = {
    create?: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDoctorSchedulesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutDoctorSchedulesInput = {
    create?: XOR<AppointmentCreateWithoutDoctorSchedulesInput, AppointmentUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorSchedulesInput
    connect?: AppointmentWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSchedulesInput
    upsert?: DoctorUpsertWithoutDoctorSchedulesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorSchedulesInput, DoctorUpdateWithoutDoctorSchedulesInput>, DoctorUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput = {
    create?: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDoctorSchedulesInput
    upsert?: ScheduleUpsertWithoutDoctorSchedulesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutDoctorSchedulesInput, ScheduleUpdateWithoutDoctorSchedulesInput>, ScheduleUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type AppointmentUpdateOneWithoutDoctorSchedulesNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorSchedulesInput, AppointmentUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorSchedulesInput
    upsert?: AppointmentUpsertWithoutDoctorSchedulesInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutDoctorSchedulesInput, AppointmentUpdateWithoutDoctorSchedulesInput>, AppointmentUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type PatientCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PatientCreateWithoutAppointmentInput, PatientUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<DoctorCreateWithoutAppointmentInput, DoctorUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentInput
    connect?: DoctorWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ScheduleCreateWithoutAppointmentInput, ScheduleUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAppointmentInput
    connect?: ScheduleWhereUniqueInput
  }

  export type DoctorSchedulesCreateNestedOneWithoutAppoinmentInput = {
    create?: XOR<DoctorSchedulesCreateWithoutAppoinmentInput, DoctorSchedulesUncheckedCreateWithoutAppoinmentInput>
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutAppoinmentInput
    connect?: DoctorSchedulesWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput
    connect?: PaymentWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    connect?: ReviewWhereUniqueInput
  }

  export type PrescriptionCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput = {
    create?: XOR<DoctorSchedulesCreateWithoutAppoinmentInput, DoctorSchedulesUncheckedCreateWithoutAppoinmentInput>
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutAppoinmentInput
    connect?: DoctorSchedulesWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput
    connect?: PaymentWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    connect?: ReviewWhereUniqueInput
  }

  export type PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type PatientUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentInput, PatientUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentInput
    upsert?: PatientUpsertWithoutAppointmentInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentInput, PatientUpdateWithoutAppointmentInput>, PatientUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentInput, DoctorUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentInput
    upsert?: DoctorUpsertWithoutAppointmentInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentInput, DoctorUpdateWithoutAppointmentInput>, DoctorUncheckedUpdateWithoutAppointmentInput>
  }

  export type ScheduleUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<ScheduleCreateWithoutAppointmentInput, ScheduleUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAppointmentInput
    upsert?: ScheduleUpsertWithoutAppointmentInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutAppointmentInput, ScheduleUpdateWithoutAppointmentInput>, ScheduleUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutAppoinmentInput, DoctorSchedulesUncheckedCreateWithoutAppoinmentInput>
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutAppoinmentInput
    upsert?: DoctorSchedulesUpsertWithoutAppoinmentInput
    disconnect?: DoctorSchedulesWhereInput | boolean
    delete?: DoctorSchedulesWhereInput | boolean
    connect?: DoctorSchedulesWhereUniqueInput
    update?: XOR<XOR<DoctorSchedulesUpdateToOneWithWhereWithoutAppoinmentInput, DoctorSchedulesUpdateWithoutAppoinmentInput>, DoctorSchedulesUncheckedUpdateWithoutAppoinmentInput>
  }

  export type PaymentUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput
    upsert?: PaymentUpsertWithoutAppointmentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutAppointmentInput, PaymentUpdateWithoutAppointmentInput>, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    upsert?: ReviewUpsertWithoutAppointmentInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutAppointmentInput, ReviewUpdateWithoutAppointmentInput>, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type PrescriptionUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    upsert?: PrescriptionUpsertWithoutAppointmentInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutAppointmentInput, PrescriptionUpdateWithoutAppointmentInput>, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutAppoinmentInput, DoctorSchedulesUncheckedCreateWithoutAppoinmentInput>
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutAppoinmentInput
    upsert?: DoctorSchedulesUpsertWithoutAppoinmentInput
    disconnect?: DoctorSchedulesWhereInput | boolean
    delete?: DoctorSchedulesWhereInput | boolean
    connect?: DoctorSchedulesWhereUniqueInput
    update?: XOR<XOR<DoctorSchedulesUpdateToOneWithWhereWithoutAppoinmentInput, DoctorSchedulesUpdateWithoutAppoinmentInput>, DoctorSchedulesUncheckedUpdateWithoutAppoinmentInput>
  }

  export type PaymentUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput
    upsert?: PaymentUpsertWithoutAppointmentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutAppointmentInput, PaymentUpdateWithoutAppointmentInput>, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    upsert?: ReviewUpsertWithoutAppointmentInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutAppointmentInput, ReviewUpdateWithoutAppointmentInput>, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    upsert?: PrescriptionUpsertWithoutAppointmentInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutAppointmentInput, PrescriptionUpdateWithoutAppointmentInput>, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentInput
    upsert?: AppointmentUpsertWithoutPaymentInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPaymentInput, AppointmentUpdateWithoutPaymentInput>, AppointmentUncheckedUpdateWithoutPaymentInput>
  }

  export type PatientCreateNestedOneWithoutReviewInput = {
    create?: XOR<PatientCreateWithoutReviewInput, PatientUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PatientCreateOrConnectWithoutReviewInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutReviewInput = {
    create?: XOR<DoctorCreateWithoutReviewInput, DoctorUncheckedCreateWithoutReviewInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReviewInput
    connect?: DoctorWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutReviewInput = {
    create?: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewInput
    connect?: AppointmentWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<PatientCreateWithoutReviewInput, PatientUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PatientCreateOrConnectWithoutReviewInput
    upsert?: PatientUpsertWithoutReviewInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutReviewInput, PatientUpdateWithoutReviewInput>, PatientUncheckedUpdateWithoutReviewInput>
  }

  export type DoctorUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<DoctorCreateWithoutReviewInput, DoctorUncheckedCreateWithoutReviewInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReviewInput
    upsert?: DoctorUpsertWithoutReviewInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutReviewInput, DoctorUpdateWithoutReviewInput>, DoctorUncheckedUpdateWithoutReviewInput>
  }

  export type AppointmentUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewInput
    upsert?: AppointmentUpsertWithoutReviewInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutReviewInput, AppointmentUpdateWithoutReviewInput>, AppointmentUncheckedUpdateWithoutReviewInput>
  }

  export type PatientCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<PatientCreateWithoutPrescriptionInput, PatientUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionInput, DoctorUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionInput
    connect?: DoctorWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPrescriptionInput
    connect?: AppointmentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutPrescriptionNestedInput = {
    create?: XOR<PatientCreateWithoutPrescriptionInput, PatientUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionInput
    upsert?: PatientUpsertWithoutPrescriptionInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrescriptionInput, PatientUpdateWithoutPrescriptionInput>, PatientUncheckedUpdateWithoutPrescriptionInput>
  }

  export type DoctorUpdateOneRequiredWithoutPrescriptionNestedInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionInput, DoctorUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionInput
    upsert?: DoctorUpsertWithoutPrescriptionInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPrescriptionInput, DoctorUpdateWithoutPrescriptionInput>, DoctorUncheckedUpdateWithoutPrescriptionInput>
  }

  export type AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput = {
    create?: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPrescriptionInput
    upsert?: AppointmentUpsertWithoutPrescriptionInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPrescriptionInput, AppointmentUpdateWithoutPrescriptionInput>, AppointmentUncheckedUpdateWithoutPrescriptionInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
    review?: ReviewCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
    review?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
    appointment?: AppointmentCreateNestedManyWithoutPatientInput
    review?: ReviewCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    review?: ReviewUncheckedCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
    review?: ReviewUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
    review?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUpdateManyWithoutPatientNestedInput
    review?: ReviewUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Doctor?: DoctorCreateNestedOneWithoutUserInput
    Patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    Patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Doctor?: DoctorUpdateOneWithoutUserNestedInput
    Patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    Patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    Patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesCreateWithoutDoctorInput = {
    specialty: SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type DoctorSpecialtiesUncheckedCreateWithoutDoctorInput = {
    specialitiesId: string
  }

  export type DoctorSpecialtiesCreateOrConnectWithoutDoctorInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    create: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesCreateManyDoctorInputEnvelope = {
    data: DoctorSpecialtiesCreateManyDoctorInput | DoctorSpecialtiesCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSchedulesCreateWithoutDoctorInput = {
    isBooked?: boolean
    schedule: ScheduleCreateNestedOneWithoutDoctorSchedulesInput
    appoinment?: AppointmentCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateWithoutDoctorInput = {
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesCreateOrConnectWithoutDoctorInput = {
    where: DoctorSchedulesWhereUniqueInput
    create: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSchedulesCreateManyDoctorInputEnvelope = {
    data: DoctorSchedulesCreateManyDoctorInput | DoctorSchedulesCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutDoctorInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReviewInput
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    appointmentId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput>
  }

  export type ReviewCreateManyDoctorInputEnvelope = {
    data: ReviewCreateManyDoctorInput | ReviewCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    id?: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionInput
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    appointmentId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    Patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    update: XOR<DoctorSpecialtiesUpdateWithoutDoctorInput, DoctorSpecialtiesUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    data: XOR<DoctorSpecialtiesUpdateWithoutDoctorInput, DoctorSpecialtiesUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSpecialtiesScalarWhereInput
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSpecialtiesScalarWhereInput = {
    AND?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
    OR?: DoctorSpecialtiesScalarWhereInput[]
    NOT?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
    specialitiesId?: StringFilter<"DoctorSpecialties"> | string
    doctorId?: StringFilter<"DoctorSpecialties"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    scheduleId?: StringFilter<"Appointment"> | string
    videoCallingId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSchedulesWhereUniqueInput
    update: XOR<DoctorSchedulesUpdateWithoutDoctorInput, DoctorSchedulesUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSchedulesWhereUniqueInput
    data: XOR<DoctorSchedulesUpdateWithoutDoctorInput, DoctorSchedulesUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSchedulesScalarWhereInput
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSchedulesScalarWhereInput = {
    AND?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
    OR?: DoctorSchedulesScalarWhereInput[]
    NOT?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
    doctorId?: StringFilter<"DoctorSchedules"> | string
    scheduleId?: StringFilter<"DoctorSchedules"> | string
    isBooked?: BoolFilter<"DoctorSchedules"> | boolean
    appointmentId?: StringNullableFilter<"DoctorSchedules"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutDoctorInput, ReviewUncheckedUpdateWithoutDoctorInput>
    create: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutDoctorInput, ReviewUncheckedUpdateWithoutDoctorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutDoctorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutDoctorInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    patientId?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    appointmentId?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    appointmentId?: StringFilter<"Prescription"> | string
    instructions?: StringFilter<"Prescription"> | string
    followUpDate?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    Doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    Doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type PatientHealthDataCreateWithoutPatientInput = {
    id?: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences: string
    pregnancyStatus?: boolean | null
    mentalHealthHistory: string
    immunizationStatus: string
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUncheckedCreateWithoutPatientInput = {
    id?: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences: string
    pregnancyStatus?: boolean | null
    mentalHealthHistory: string
    immunizationStatus: string
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataCreateOrConnectWithoutPatientInput = {
    where: PatientHealthDataWhereUniqueInput
    create: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportCreateWithoutPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUncheckedCreateWithoutPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportCreateOrConnectWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    create: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportCreateManyPatientInputEnvelope = {
    data: MedicalReportCreateManyPatientInput | MedicalReportCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutPatientInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutReviewInput
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    appointmentId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPatientInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPatientInput, ReviewUncheckedCreateWithoutPatientInput>
  }

  export type ReviewCreateManyPatientInputEnvelope = {
    data: ReviewCreateManyPatientInput | ReviewCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPatientInput = {
    id?: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPrescriptionInput
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    appointmentId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    Doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    Doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PatientHealthDataUpsertWithoutPatientInput = {
    update: XOR<PatientHealthDataUpdateWithoutPatientInput, PatientHealthDataUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    where?: PatientHealthDataWhereInput
  }

  export type PatientHealthDataUpdateToOneWithWhereWithoutPatientInput = {
    where?: PatientHealthDataWhereInput
    data: XOR<PatientHealthDataUpdateWithoutPatientInput, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type PatientHealthDataUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: StringFieldUpdateOperationsInput | string
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: StringFieldUpdateOperationsInput | string
    immunizationStatus?: StringFieldUpdateOperationsInput | string
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: StringFieldUpdateOperationsInput | string
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: StringFieldUpdateOperationsInput | string
    immunizationStatus?: StringFieldUpdateOperationsInput | string
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    update: XOR<MedicalReportUpdateWithoutPatientInput, MedicalReportUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    data: XOR<MedicalReportUpdateWithoutPatientInput, MedicalReportUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalReportScalarWhereInput
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalReportScalarWhereInput = {
    AND?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
    OR?: MedicalReportScalarWhereInput[]
    NOT?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
    id?: StringFilter<"MedicalReport"> | string
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutPatientInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPatientInput, ReviewUncheckedUpdateWithoutPatientInput>
    create: XOR<ReviewCreateWithoutPatientInput, ReviewUncheckedCreateWithoutPatientInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPatientInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPatientInput, ReviewUncheckedUpdateWithoutPatientInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPatientInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type DoctorSpecialtiesCreateWithoutSpecialtyInput = {
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput = {
    doctorId: string
  }

  export type DoctorSpecialtiesCreateOrConnectWithoutSpecialtyInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    create: XOR<DoctorSpecialtiesCreateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput>
  }

  export type DoctorSpecialtiesCreateManySpecialtyInputEnvelope = {
    data: DoctorSpecialtiesCreateManySpecialtyInput | DoctorSpecialtiesCreateManySpecialtyInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtyInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    update: XOR<DoctorSpecialtiesUpdateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedUpdateWithoutSpecialtyInput>
    create: XOR<DoctorSpecialtiesCreateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtyInput>
  }

  export type DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtyInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    data: XOR<DoctorSpecialtiesUpdateWithoutSpecialtyInput, DoctorSpecialtiesUncheckedUpdateWithoutSpecialtyInput>
  }

  export type DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtyInput = {
    where: DoctorSpecialtiesScalarWhereInput
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtyInput>
  }

  export type SpecialtiesCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput = {
    where: SpecialtiesWhereUniqueInput
    create: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
    review?: ReviewCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
    review?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDoctorSpecialtiesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
  }

  export type SpecialtiesUpsertWithoutDoctorSpecialtiesInput = {
    update: XOR<SpecialtiesUpdateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
    create: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    where?: SpecialtiesWhereInput
  }

  export type SpecialtiesUpdateToOneWithWhereWithoutDoctorSpecialtiesInput = {
    where?: SpecialtiesWhereInput
    data: XOR<SpecialtiesUpdateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type SpecialtiesUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUpsertWithoutDoctorSpecialtiesInput = {
    update: XOR<DoctorUpdateWithoutDoctorSpecialtiesInput, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
    create: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorSpecialtiesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorSpecialtiesInput, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
    review?: ReviewUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
    review?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutPatientHealthDataInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
    appointment?: AppointmentCreateNestedManyWithoutPatientInput
    review?: ReviewCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPatientHealthDataInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    review?: ReviewUncheckedCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPatientHealthDataInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
  }

  export type PatientUpsertWithoutPatientHealthDataInput = {
    update: XOR<PatientUpdateWithoutPatientHealthDataInput, PatientUncheckedUpdateWithoutPatientHealthDataInput>
    create: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPatientHealthDataInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPatientHealthDataInput, PatientUncheckedUpdateWithoutPatientHealthDataInput>
  }

  export type PatientUpdateWithoutPatientHealthDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUpdateManyWithoutPatientNestedInput
    review?: ReviewUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPatientHealthDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutMedicalReportInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    appointment?: AppointmentCreateNestedManyWithoutPatientInput
    review?: ReviewCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalReportInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    review?: ReviewUncheckedCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalReportInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
  }

  export type PatientUpsertWithoutMedicalReportInput = {
    update: XOR<PatientUpdateWithoutMedicalReportInput, PatientUncheckedUpdateWithoutMedicalReportInput>
    create: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalReportInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalReportInput, PatientUncheckedUpdateWithoutMedicalReportInput>
  }

  export type PatientUpdateWithoutMedicalReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    appointment?: AppointmentUpdateManyWithoutPatientNestedInput
    review?: ReviewUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentCreateWithoutScheduleInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutScheduleInput = {
    id?: string
    patientId: string
    doctorId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutScheduleInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutScheduleInput, AppointmentUncheckedCreateWithoutScheduleInput>
  }

  export type DoctorSchedulesCreateWithoutScheduleInput = {
    isBooked?: boolean
    doctor: DoctorCreateNestedOneWithoutDoctorSchedulesInput
    appoinment?: AppointmentCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateWithoutScheduleInput = {
    doctorId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesCreateOrConnectWithoutScheduleInput = {
    where: DoctorSchedulesWhereUniqueInput
    create: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput>
  }

  export type DoctorSchedulesCreateManyScheduleInputEnvelope = {
    data: DoctorSchedulesCreateManyScheduleInput | DoctorSchedulesCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithoutScheduleInput = {
    update: XOR<AppointmentUpdateWithoutScheduleInput, AppointmentUncheckedUpdateWithoutScheduleInput>
    create: XOR<AppointmentCreateWithoutScheduleInput, AppointmentUncheckedCreateWithoutScheduleInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutScheduleInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutScheduleInput, AppointmentUncheckedUpdateWithoutScheduleInput>
  }

  export type AppointmentUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput = {
    where: DoctorSchedulesWhereUniqueInput
    update: XOR<DoctorSchedulesUpdateWithoutScheduleInput, DoctorSchedulesUncheckedUpdateWithoutScheduleInput>
    create: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput>
  }

  export type DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput = {
    where: DoctorSchedulesWhereUniqueInput
    data: XOR<DoctorSchedulesUpdateWithoutScheduleInput, DoctorSchedulesUncheckedUpdateWithoutScheduleInput>
  }

  export type DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput = {
    where: DoctorSchedulesScalarWhereInput
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyWithoutScheduleInput>
  }

  export type DoctorCreateWithoutDoctorSchedulesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorInput
    review?: ReviewCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorSchedulesInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    review?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDoctorSchedulesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
  }

  export type ScheduleCreateWithoutDoctorSchedulesInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutDoctorSchedulesInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutDoctorSchedulesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
  }

  export type AppointmentCreateWithoutDoctorSchedulesInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorSchedulesInput = {
    id?: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorSchedulesInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorSchedulesInput, AppointmentUncheckedCreateWithoutDoctorSchedulesInput>
  }

  export type DoctorUpsertWithoutDoctorSchedulesInput = {
    update: XOR<DoctorUpdateWithoutDoctorSchedulesInput, DoctorUncheckedUpdateWithoutDoctorSchedulesInput>
    create: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorSchedulesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorSchedulesInput, DoctorUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type DoctorUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorNestedInput
    review?: ReviewUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    review?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type ScheduleUpsertWithoutDoctorSchedulesInput = {
    update: XOR<ScheduleUpdateWithoutDoctorSchedulesInput, ScheduleUncheckedUpdateWithoutDoctorSchedulesInput>
    create: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutDoctorSchedulesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutDoctorSchedulesInput, ScheduleUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type ScheduleUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateOneWithoutScheduleNestedInput
  }

  export type AppointmentUpsertWithoutDoctorSchedulesInput = {
    update: XOR<AppointmentUpdateWithoutDoctorSchedulesInput, AppointmentUncheckedUpdateWithoutDoctorSchedulesInput>
    create: XOR<AppointmentCreateWithoutDoctorSchedulesInput, AppointmentUncheckedCreateWithoutDoctorSchedulesInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutDoctorSchedulesInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutDoctorSchedulesInput, AppointmentUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type AppointmentUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type PatientCreateWithoutAppointmentInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
    review?: ReviewCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
    review?: ReviewUncheckedCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentInput, PatientUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorCreateWithoutAppointmentInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
    review?: ReviewCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
    review?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentInput, DoctorUncheckedCreateWithoutAppointmentInput>
  }

  export type ScheduleCreateWithoutAppointmentInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutAppointmentInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutAppointmentInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutAppointmentInput, ScheduleUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorSchedulesCreateWithoutAppoinmentInput = {
    isBooked?: boolean
    doctor: DoctorCreateNestedOneWithoutDoctorSchedulesInput
    schedule: ScheduleCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateWithoutAppoinmentInput = {
    doctorId: string
    scheduleId: string
    isBooked?: boolean
  }

  export type DoctorSchedulesCreateOrConnectWithoutAppoinmentInput = {
    where: DoctorSchedulesWhereUniqueInput
    create: XOR<DoctorSchedulesCreateWithoutAppoinmentInput, DoctorSchedulesUncheckedCreateWithoutAppoinmentInput>
  }

  export type PaymentCreateWithoutAppointmentInput = {
    id?: string
    amount: number
    transactionId: string
    status?: $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    amount: number
    transactionId: string
    status?: $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type ReviewCreateWithoutAppointmentInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReviewInput
    doctor: DoctorCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    doctorId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAppointmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
  }

  export type PrescriptionCreateWithoutAppointmentInput = {
    id?: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    doctorId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutAppointmentInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
  }

  export type PatientUpsertWithoutAppointmentInput = {
    update: XOR<PatientUpdateWithoutAppointmentInput, PatientUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PatientCreateWithoutAppointmentInput, PatientUncheckedCreateWithoutAppointmentInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentInput, PatientUncheckedUpdateWithoutAppointmentInput>
  }

  export type PatientUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
    review?: ReviewUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutAppointmentInput = {
    update: XOR<DoctorUpdateWithoutAppointmentInput, DoctorUncheckedUpdateWithoutAppointmentInput>
    create: XOR<DoctorCreateWithoutAppointmentInput, DoctorUncheckedCreateWithoutAppointmentInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentInput, DoctorUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
    review?: ReviewUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
    review?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type ScheduleUpsertWithoutAppointmentInput = {
    update: XOR<ScheduleUpdateWithoutAppointmentInput, ScheduleUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ScheduleCreateWithoutAppointmentInput, ScheduleUncheckedCreateWithoutAppointmentInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutAppointmentInput, ScheduleUncheckedUpdateWithoutAppointmentInput>
  }

  export type ScheduleUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type DoctorSchedulesUpsertWithoutAppoinmentInput = {
    update: XOR<DoctorSchedulesUpdateWithoutAppoinmentInput, DoctorSchedulesUncheckedUpdateWithoutAppoinmentInput>
    create: XOR<DoctorSchedulesCreateWithoutAppoinmentInput, DoctorSchedulesUncheckedCreateWithoutAppoinmentInput>
    where?: DoctorSchedulesWhereInput
  }

  export type DoctorSchedulesUpdateToOneWithWhereWithoutAppoinmentInput = {
    where?: DoctorSchedulesWhereInput
    data: XOR<DoctorSchedulesUpdateWithoutAppoinmentInput, DoctorSchedulesUncheckedUpdateWithoutAppoinmentInput>
  }

  export type DoctorSchedulesUpdateWithoutAppoinmentInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateWithoutAppoinmentInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentUpsertWithoutAppointmentInput = {
    update: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type PaymentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentGatewayData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithoutAppointmentInput = {
    update: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReviewNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpsertWithoutAppointmentInput = {
    update: XOR<PrescriptionUpdateWithoutAppointmentInput, PrescriptionUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutAppointmentInput, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type PrescriptionUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutPaymentInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPaymentInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
  }

  export type AppointmentUpsertWithoutPaymentInput = {
    update: XOR<AppointmentUpdateWithoutPaymentInput, AppointmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPaymentInput, AppointmentUncheckedUpdateWithoutPaymentInput>
  }

  export type AppointmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type PatientCreateWithoutReviewInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
    appointment?: AppointmentCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutReviewInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutReviewInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutReviewInput, PatientUncheckedCreateWithoutReviewInput>
  }

  export type DoctorCreateWithoutReviewInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutReviewInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutReviewInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutReviewInput, DoctorUncheckedCreateWithoutReviewInput>
  }

  export type AppointmentCreateWithoutReviewInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutReviewInput = {
    id?: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutReviewInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
  }

  export type PatientUpsertWithoutReviewInput = {
    update: XOR<PatientUpdateWithoutReviewInput, PatientUncheckedUpdateWithoutReviewInput>
    create: XOR<PatientCreateWithoutReviewInput, PatientUncheckedCreateWithoutReviewInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutReviewInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutReviewInput, PatientUncheckedUpdateWithoutReviewInput>
  }

  export type PatientUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutReviewInput = {
    update: XOR<DoctorUpdateWithoutReviewInput, DoctorUncheckedUpdateWithoutReviewInput>
    create: XOR<DoctorCreateWithoutReviewInput, DoctorUncheckedCreateWithoutReviewInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutReviewInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutReviewInput, DoctorUncheckedUpdateWithoutReviewInput>
  }

  export type DoctorUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
    prescription?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AppointmentUpsertWithoutReviewInput = {
    update: XOR<AppointmentUpdateWithoutReviewInput, AppointmentUncheckedUpdateWithoutReviewInput>
    create: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutReviewInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutReviewInput, AppointmentUncheckedUpdateWithoutReviewInput>
  }

  export type AppointmentUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type PatientCreateWithoutPrescriptionInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
    appointment?: AppointmentCreateNestedManyWithoutPatientInput
    review?: ReviewCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    review?: ReviewUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPrescriptionInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrescriptionInput, PatientUncheckedCreateWithoutPrescriptionInput>
  }

  export type DoctorCreateWithoutPrescriptionInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
    review?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address: string
    registrationsNumber: string
    experience: string
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
    review?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutPrescriptionInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPrescriptionInput, DoctorUncheckedCreateWithoutPrescriptionInput>
  }

  export type AppointmentCreateWithoutPrescriptionInput = {
    id?: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentInput
    schedule: ScheduleCreateNestedOneWithoutAppointmentInput
    doctorSchedules?: DoctorSchedulesCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    patientId: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedOneWithoutAppoinmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPrescriptionInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
  }

  export type PatientUpsertWithoutPrescriptionInput = {
    update: XOR<PatientUpdateWithoutPrescriptionInput, PatientUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PatientCreateWithoutPrescriptionInput, PatientUncheckedCreateWithoutPrescriptionInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrescriptionInput, PatientUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PatientUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUpdateManyWithoutPatientNestedInput
    review?: ReviewUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    review?: ReviewUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutPrescriptionInput = {
    update: XOR<DoctorUpdateWithoutPrescriptionInput, DoctorUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<DoctorCreateWithoutPrescriptionInput, DoctorUncheckedCreateWithoutPrescriptionInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPrescriptionInput, DoctorUncheckedUpdateWithoutPrescriptionInput>
  }

  export type DoctorUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
    review?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registrationsNumber?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
    review?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AppointmentUpsertWithoutPrescriptionInput = {
    update: XOR<AppointmentUpdateWithoutPrescriptionInput, AppointmentUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPrescriptionInput, AppointmentUncheckedUpdateWithoutPrescriptionInput>
  }

  export type AppointmentUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type DoctorSpecialtiesCreateManyDoctorInput = {
    specialitiesId: string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    patientId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorSchedulesCreateManyDoctorInput = {
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type ReviewCreateManyDoctorInput = {
    id?: string
    patientId: string
    appointmentId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: string
    patientId: string
    appointmentId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorSpecialtiesUpdateWithoutDoctorInput = {
    specialty?: SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type DoctorSpecialtiesUncheckedUpdateWithoutDoctorInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSchedulesUpdateWithoutDoctorInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    schedule?: ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput
    appoinment?: AppointmentUpdateOneWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateWithoutDoctorInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutDoctorInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReviewNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateManyPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    doctorId: string
    scheduleId: string
    videoCallingId: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyPatientInput = {
    id?: string
    doctorId: string
    appointmentId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: string
    doctorId: string
    appointmentId: string
    instructions: string
    followUpDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAppointmentNestedInput
    doctorSchedules?: DoctorSchedulesUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateOneWithoutAppoinmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    videoCallingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutReviewNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecialtiesCreateManySpecialtyInput = {
    doctorId: string
  }

  export type DoctorSpecialtiesUpdateWithoutSpecialtyInput = {
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type DoctorSpecialtiesUncheckedUpdateWithoutSpecialtyInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtyInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSchedulesCreateManyScheduleInput = {
    doctorId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesUpdateWithoutScheduleInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput
    appoinment?: AppointmentUpdateOneWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateWithoutScheduleInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutScheduleInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
     */
    export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientCountOutputTypeDefaultArgs instead
     */
    export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialtiesCountOutputTypeDefaultArgs instead
     */
    export type SpecialtiesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleCountOutputTypeDefaultArgs instead
     */
    export type ScheduleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorDefaultArgs instead
     */
    export type DoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialtiesDefaultArgs instead
     */
    export type SpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialtiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorSpecialtiesDefaultArgs instead
     */
    export type DoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorSpecialtiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientHealthDataDefaultArgs instead
     */
    export type PatientHealthDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientHealthDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalReportDefaultArgs instead
     */
    export type MedicalReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleDefaultArgs instead
     */
    export type ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorSchedulesDefaultArgs instead
     */
    export type DoctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorSchedulesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentDefaultArgs instead
     */
    export type AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrescriptionDefaultArgs instead
     */
    export type PrescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrescriptionDefaultArgs<ExtArgs>

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