"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("@prisma/client");
const globalConstant_1 = require("../src/app/constants/globalConstant");
const seedSuperAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExist = yield globalConstant_1.prisma.user.findFirst({
            where: {
                role: client_1.UserRole.SUPER_ADMIN,
            },
        });
        if (isExist) {
            console.log("Super Admin is already exists");
            return;
        }
        const hashPassword = yield bcrypt_1.default.hash("12345", 12);
        const result = yield globalConstant_1.prisma.user.create({
            data: {
                email: "superadmin@gmail.com",
                role: client_1.UserRole.SUPER_ADMIN,
                password: hashPassword,
                admin: {
                    create: {
                        name: "Super Admin",
                        contactNumber: "01234567890",
                    },
                },
            },
        });
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield globalConstant_1.prisma.$disconnect();
    }
});
seedSuperAdmin();
