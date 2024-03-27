/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GiftController } from './src/GiftController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CategoryController } from './src/CategoryController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './src/AuthController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Prisma.Without_Prisma.GiftCreateInput.Prisma.GiftUncheckedCreateInput_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.GiftUncheckedCreateInput": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"category":{"dataType":"string","required":true},"user":{"dataType":"string","required":true},"id":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.Without_Prisma.GiftUncheckedCreateInput.Prisma.GiftCreateInput_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.GiftCreateInput": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"category":{"dataType":"string","required":true},"user":{"dataType":"string","required":true},"id":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.XOR_Prisma.GiftCreateInput.Prisma.GiftUncheckedCreateInput_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"intersection","subSchemas":[{"ref":"Prisma.Without_Prisma.GiftCreateInput.Prisma.GiftUncheckedCreateInput_"},{"ref":"Prisma.GiftUncheckedCreateInput"}]},{"dataType":"intersection","subSchemas":[{"ref":"Prisma.Without_Prisma.GiftUncheckedCreateInput.Prisma.GiftCreateInput_"},{"ref":"Prisma.GiftCreateInput"}]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.Without_Prisma.CategoryCreateInput.Prisma.CategoryUncheckedCreateInput_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.CategoryUncheckedCreateInput": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"user":{"dataType":"string","required":true},"id":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.Without_Prisma.CategoryUncheckedCreateInput.Prisma.CategoryCreateInput_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.CategoryCreateInput": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"user":{"dataType":"string","required":true},"id":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.XOR_Prisma.CategoryCreateInput.Prisma.CategoryUncheckedCreateInput_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"intersection","subSchemas":[{"ref":"Prisma.Without_Prisma.CategoryCreateInput.Prisma.CategoryUncheckedCreateInput_"},{"ref":"Prisma.CategoryUncheckedCreateInput"}]},{"dataType":"intersection","subSchemas":[{"ref":"Prisma.Without_Prisma.CategoryUncheckedCreateInput.Prisma.CategoryCreateInput_"},{"ref":"Prisma.CategoryCreateInput"}]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras"});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.post('/gift/create',
            ...(fetchMiddlewares<RequestHandler>(GiftController)),
            ...(fetchMiddlewares<RequestHandler>(GiftController.prototype.createGift)),

            function GiftController_createGift(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"ref":"Prisma.XOR_Prisma.GiftCreateInput.Prisma.GiftUncheckedCreateInput_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new GiftController();

              templateService.apiHandler({
                methodName: 'createGift',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/gift/edit/:giftId',
            ...(fetchMiddlewares<RequestHandler>(GiftController)),
            ...(fetchMiddlewares<RequestHandler>(GiftController.prototype.editGift)),

            function GiftController_editGift(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    giftId: {"in":"path","name":"giftId","required":true,"dataType":"string"},
                    body: {"in":"body","name":"body","required":true,"ref":"Prisma.XOR_Prisma.GiftCreateInput.Prisma.GiftUncheckedCreateInput_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new GiftController();

              templateService.apiHandler({
                methodName: 'editGift',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/gift/delete/:giftId',
            ...(fetchMiddlewares<RequestHandler>(GiftController)),
            ...(fetchMiddlewares<RequestHandler>(GiftController.prototype.deleteGift)),

            function GiftController_deleteGift(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    giftId: {"in":"path","name":"giftId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new GiftController();

              templateService.apiHandler({
                methodName: 'deleteGift',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/category/create',
            ...(fetchMiddlewares<RequestHandler>(CategoryController)),
            ...(fetchMiddlewares<RequestHandler>(CategoryController.prototype.createCategory)),

            function CategoryController_createCategory(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"ref":"Prisma.XOR_Prisma.CategoryCreateInput.Prisma.CategoryUncheckedCreateInput_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CategoryController();

              templateService.apiHandler({
                methodName: 'createCategory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/category/edit/:userId',
            ...(fetchMiddlewares<RequestHandler>(CategoryController)),
            ...(fetchMiddlewares<RequestHandler>(CategoryController.prototype.editGift)),

            function CategoryController_editGift(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    userId: {"in":"path","name":"userId","required":true,"dataType":"string"},
                    body: {"in":"body","name":"body","required":true,"ref":"Prisma.XOR_Prisma.CategoryCreateInput.Prisma.CategoryUncheckedCreateInput_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CategoryController();

              templateService.apiHandler({
                methodName: 'editGift',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/category/delete/:categoryId',
            ...(fetchMiddlewares<RequestHandler>(CategoryController)),
            ...(fetchMiddlewares<RequestHandler>(CategoryController.prototype.deleteCategory)),

            function CategoryController_deleteCategory(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    categoryId: {"in":"path","name":"categoryId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CategoryController();

              templateService.apiHandler({
                methodName: 'deleteCategory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/auth/login',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.loginUser)),

            function AuthController_loginUser(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"password":{"dataType":"string","required":true},"email":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthController();

              templateService.apiHandler({
                methodName: 'loginUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/auth/register',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.registerUser)),

            function AuthController_registerUser(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"dataType":"any"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthController();

              templateService.apiHandler({
                methodName: 'registerUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
