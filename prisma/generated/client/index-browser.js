
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  needPasswordChange: 'needPasswordChange',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  profilePhoto: 'profilePhoto',
  contactNumber: 'contactNumber',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DoctorScalarFieldEnum = {
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

exports.Prisma.PatientScalarFieldEnum = {
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

exports.Prisma.SpecialtiesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  icon: 'icon'
};

exports.Prisma.DoctorSpecialtiesScalarFieldEnum = {
  specialitiesId: 'specialitiesId',
  doctorId: 'doctorId'
};

exports.Prisma.PatientHealthDataScalarFieldEnum = {
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

exports.Prisma.MedicalReportScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  reportName: 'reportName',
  reportLink: 'reportLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DoctorSchedulesScalarFieldEnum = {
  doctorId: 'doctorId',
  scheduleId: 'scheduleId',
  isBooked: 'isBooked',
  appointmentId: 'appointmentId'
};

exports.Prisma.AppointmentScalarFieldEnum = {
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

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  appointtmentId: 'appointtmentId',
  amount: 'amount',
  transactionId: 'transactionId',
  status: 'status',
  paymentGatewayData: 'paymentGatewayData',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  doctorId: 'doctorId',
  appointmentId: 'appointmentId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PrescriptionScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  doctorId: 'doctorId',
  appointmentId: 'appointmentId',
  instructions: 'instructions',
  followUpDate: 'followUpDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.BloodGroup = exports.$Enums.BloodGroup = {
  A_POSITIVE: 'A_POSITIVE',
  B_POSITIVE: 'B_POSITIVE',
  O_POSITIVE: 'O_POSITIVE',
  AB_POSITIVE: 'AB_POSITIVE',
  A_NEGATIVE: 'A_NEGATIVE',
  B_NEGATIVE: 'B_NEGATIVE',
  O_NEGATIVE: 'O_NEGATIVE',
  AB_NEGATIVE: 'AB_NEGATIVE'
};

exports.MaritalStatus = exports.$Enums.MaritalStatus = {
  MARRIED: 'MARRIED',
  UNMARRIED: 'UNMARRIED'
};

exports.AppointmentStatus = exports.$Enums.AppointmentStatus = {
  SCHEDULED: 'SCHEDULED',
  INPROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PAID: 'PAID',
  UNPAID: 'UNPAID'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
